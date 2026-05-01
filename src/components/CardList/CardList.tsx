import { Component } from 'react';
import styles from './CardList.module.css';
import type GlobalState from '../Main/GlobalState';
import Search from '../Search/Search';
import Card from '../Card/Card';

interface CardListProps {
  state: GlobalState;
  updateState_errorBoundary: (exception: Error) => void;
  updateState_cardList: (CardList: Partial<GlobalState['cardList']>) => void;
  updateState_search: (search: Partial<GlobalState['search']>) => void;
  updateState_card_dialogIsOpen: (
    dialogIsOpen: Partial<GlobalState['card']['dialogIsOpen']>,
    pokemonId: Partial<GlobalState['card']['pokemonId']>
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
    try {
      this.props.updateState_cardList({
        pokemons: [],
        isFetchNow: true,
        errorFetch: null,
      });

      const SEARCH = this.props.state.search.trim();
      localStorage.setItem('search', SEARCH);

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
        throw new Error(`HTTP ${HTTP_STATUS}\n${TEXT}`);
      }

      if (HTTP_STATUS !== 200) {
        const TEXT = await RESPONSE.text();
        throw new Error(`HTTP ${HTTP_STATUS}\n${TEXT}`);
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
    } catch (exception) {
      if (exception instanceof Error) {
        this.props.updateState_errorBoundary(exception);
      } else {
        this.props.updateState_errorBoundary(new Error(String(exception)));
      }
    }
  };

  emulateCustomError() {
    try {
      throw new Error('Custom Error Boundary generated for Fallback UI');
    } catch (exception) {
      if (exception instanceof Error) {
        this.props.updateState_errorBoundary(exception);
      } else {
        this.props.updateState_errorBoundary(new Error(String(exception)));
      }
    }
  }

  render() {
    try {
      const { pokemons, isFetchNow, errorFetch } = this.props.state.cardList;

      if (isFetchNow) {
        return (
          <div className={styles.spinner__wrapper}>Pokémon Collection</div>
        );
      }

      return (
        <>
          <Card
            state={this.props.state}
            updateState_errorBoundary={this.props.updateState_errorBoundary}
            updateState_card_dialogIsOpen={
              this.props.updateState_card_dialogIsOpen
            }
          />
          <div className="container">
            <section className="section">
              <Search
                state={this.props.state}
                fetchPokemons={this.fetchPokemons}
                updateState_errorBoundary={this.props.updateState_errorBoundary}
                updateState_cardList={this.props.updateState_cardList}
                updateState_search={this.props.updateState_search}
              />
              <div className={styles.error_buttons__wrapper}>
                <button
                  className="btn btn-danger"
                  onClick={() => this.emulateCustomError()}
                >
                  Generate error boundary
                </button>
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
                            onClick={() =>
                              this.props.updateState_card_dialogIsOpen(
                                true,
                                pokemon.id
                              )
                            }
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
    } catch (exception) {
      console.log(exception);
    }
  }
}

export default CardList;
