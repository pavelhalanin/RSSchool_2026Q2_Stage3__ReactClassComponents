import { Component } from 'react';
import styles from './CardList.module.css';
import type GlobalState from '../Main/GlobalState';
import Search from '../Search/Search';
import sleep from '../../utils/sleep';

interface CardListProps {
  state: GlobalState;
  updateState_errorBoundary: (exception: Error) => void;
  updateState_cardList: (CardList: Partial<GlobalState['cardList']>) => void;
  updateState_search: (search: Partial<GlobalState['search']>) => void;
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

      await sleep(1000);

      const URL_ = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20000`;
      const RESPONSE = await fetch(URL_);

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

      const POKEMONS = (DATA.results || []).filter(Boolean);

      const SEARCH = this.props.state.search.trim();
      localStorage.setItem('search', SEARCH);

      this.props.updateState_cardList({
        pokemons: POKEMONS.filter(
          (e: Partial<GlobalState['cardList']['pokemons'][number]>) => {
            return `${e.name}`
              .toLowerCase()
              .includes(`${SEARCH}`.toLowerCase());
          }
        ),
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
                      const PARTS = `${pokemon.url}`.split('/');
                      const POKEMON_ID = PARTS[PARTS.length - 2];

                      const IMAGE_SRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${POKEMON_ID}.png`;

                      return (
                        <li key={POKEMON_ID} className="pokemon-card">
                          <button
                            onClick={() =>
                              alert(`Nothing. Open modal by id ${POKEMON_ID}`)
                            }
                          >
                            <div className={styles.card_list__image_block}>
                              <img
                                src={IMAGE_SRC}
                                alt={pokemon.name}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).title =
                                    `Не удалось загрузить фото\n${IMAGE_SRC}`;
                                }}
                              />
                            </div>
                            <h2 className={styles.card_list__pokemon_id}>
                              #{POKEMON_ID}
                            </h2>
                            <h3>{pokemon.name}</h3>
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
