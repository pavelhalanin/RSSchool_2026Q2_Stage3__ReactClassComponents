import { Component } from 'react';
import styles from './CardList.module.css';
import type GlobalState from '../Main/GlobalState';
import Search from '../Search/Search';
import Card from '../Card/Card';
import ErrorButton from '../ErrorButton/ErrorButton';

interface CardListProps {
  state: GlobalState;
  updateState_cardList: (CardList: Partial<GlobalState['cardList']>) => void;
  updateState_search: (search: Partial<GlobalState['search']>) => void;
  updateState_card: (card: Partial<GlobalState['card']>) => void;
  updateState_searchPrev: (search: Partial<GlobalState['searchPrev']>) => void;
  updateState_card_isDialogOpen: (
    flag: Partial<GlobalState['card']['dialogIsOpen']>
  ) => void;
}

class CardList extends Component<CardListProps, GlobalState> {
  constructor(props: CardListProps) {
    super(props);
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  componentWillUnmount() {}

  generateFetchError() {
    this.props.updateState_cardList({
      pokemons: [],
      isFetchNow: false,
      errorFetch: 'Custom test error HTTP 400-500',
    });
  }

  fetchPokemons = async () => {
    const SEARCH = this.props.state.search.trim();
    localStorage.setItem('search', SEARCH);

    if (
      SEARCH === this.props.state.searchPrev &&
      this.props.state.cardList.errorFetch === null &&
      SEARCH !== null
    ) {
      console.log(
        [
          `No load Pokemon card list because:`,
          `- SEARCH "${SEARCH}" === searchPrev "${this.props.state.searchPrev}"`,
          `- and errorFetch === null`,
          `- and SEARCH !== null`,
        ].join('\n')
      );
      return;
    }

    this.props.updateState_cardList({
      pokemons: [],
      isFetchNow: true,
      errorFetch: null,
    });

    const GRAPHQL = `
        query MyQuery {
          pokemon(where: {name: {_like: "%${SEARCH}%"}}) {
            # base_experience
            height
            id
            # is_default
            name
            # pokemon_species_id
            weight
            # pokemonabilities {
            #   ability {
            #     abilitynames(where: {language: {id: {_eq: 9}}}) {
            #       id
            #       name
            #     }
            #   }
            # }
            pokemontypes {
              slot
              type {
                name
              }
            }
          }
        }
      `;

    const URL_ = `https://graphql.pokeapi.co/v1beta2`;
    const RESPONSE = await fetch(URL_, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GRAPHQL,
      }),
    });

    const HTTP_STATUS = RESPONSE.status;

    if (HTTP_STATUS >= 400 && HTTP_STATUS <= 599) {
      const TEXT = await RESPONSE.text();
      const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;

      this.props.updateState_cardList({
        pokemons: [],
        isFetchNow: false,
        errorFetch: MESSAGE,
      });

      return;
    }

    if (HTTP_STATUS !== 200) {
      const TEXT = await RESPONSE.text();
      const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;

      this.props.updateState_cardList({
        pokemons: [],
        isFetchNow: false,
        errorFetch: MESSAGE,
      });

      return;
    }

    const DATA = await RESPONSE.json();

    const POKEMONS: GlobalState['cardList']['pokemons'] = (
      DATA.data.pokemon || []
    )
      .filter(Boolean)
      .map((e: GlobalState['cardList']['pokemons'][number]) => {
        return {
          ...e,
          image_src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`,
        };
      });

    this.props.updateState_cardList({
      pokemons: POKEMONS,
      isFetchNow: false,
      errorFetch: null,
    });
    this.props.updateState_search(SEARCH);
    this.props.updateState_searchPrev(SEARCH);
  };

  render() {
    const { pokemons, isFetchNow, errorFetch } = this.props.state.cardList;

    if (isFetchNow) {
      return <div className={styles.spinner__wrapper}>Pokémon Collection</div>;
    }

    return (
      <>
        <Card
          pokemonId={this.props.state.card.pokemonId}
          isDialogOpen={this.props.state.card.dialogIsOpen}
          updateState_card_isDialogOpen={
            this.props.updateState_card_isDialogOpen
          }
        />
        <div className="container">
          <section className="section">
            <Search
              state={this.props.state}
              fetchPokemons={this.fetchPokemons}
              updateState_cardList={this.props.updateState_cardList}
              updateState_search={this.props.updateState_search}
            />
            <div className={styles.error_buttons__wrapper}>
              <ErrorButton />
              <button
                className="btn btn-danger"
                onClick={() => this.generateFetchError()}
              >
                Generate fetch error
              </button>
            </div>
          </section>
        </div>
        <div className="container">
          <section className="section">
            <h1 className={styles.h1}>Pokémon Collection</h1>
            {errorFetch ? (
              <div className="alert alert-danger">
                <div>{errorFetch}</div>
                <button
                  className="btn btn-success"
                  onClick={() => this.fetchPokemons()}
                >
                  Repeat load fetch
                </button>
              </div>
            ) : (
              <>
                {pokemons.length != 0 ? (
                  ''
                ) : (
                  <div className="container">
                    <div className="alert alert-danger">
                      No Pokémon found by search. Please enter a different
                      search term and click the search button.
                    </div>
                  </div>
                )}

                <ul className={styles.card_list}>
                  {pokemons?.map((pokemon) => {
                    return (
                      <li key={pokemon.id} className="pokemon-card">
                        <button
                          onClick={() => {
                            this.props.updateState_card({
                              dialogIsOpen: true,
                              pokemonId: pokemon.id,
                              isFetchNow: false,
                              pokemon: null,
                            });
                          }}
                        >
                          <div className={styles.card_list__image_block}>
                            <img
                              src={pokemon.image_src}
                              alt={pokemon.name}
                              onError={(e) => {
                                (e.target as HTMLImageElement).title =
                                  `Не удалось загрузить фото\n${pokemon.image_src}`;
                              }}
                            />
                          </div>
                          <h2 className={styles.card_list__pokemon_id}>
                            #{pokemon.id}
                          </h2>
                          <h3>{pokemon.name}</h3>
                          <div>
                            {pokemon.weight} x {pokemon.height}
                          </div>
                          <ul className={styles.pokemon__types}>
                            {pokemon.pokemontypes.map((e) => {
                              return <li key={e.type.name}>{e.type.name}</li>;
                            })}
                          </ul>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </section>
        </div>
      </>
    );
  }
}

export default CardList;
