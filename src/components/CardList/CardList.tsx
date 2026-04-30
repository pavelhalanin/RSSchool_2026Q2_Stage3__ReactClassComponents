import { Component } from 'react';
import styles from './CardList.module.css';
import type GlobalState from '../Main/GlobalState';

interface CardListProps {
  state_cardList: Partial<GlobalState['cardList']>;
  updateState_errorBoundary: (exception: Error) => void;
  updateState_cardList: (CardList: Partial<GlobalState['cardList']>) => void;
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

      await this.sleep(1000);

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

      this.props.updateState_cardList({
        pokemons: DATA.results,
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

  sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
      const { pokemons, isFetchNow, errorFetch } = this.props.state_cardList;

      if (isFetchNow) {
        return <div className={styles.spiner__wrapper}>Pokémon Collection</div>;
      }

      if (errorFetch) {
        return (
          <div className={styles.error_block}>
            <div className="alert alert-danger">
              <div>{errorFetch}</div>
              <button className="btn btn-success" onClick={this.fetchPokemons}>
                Repeat load fetch
              </button>
            </div>
          </div>
        );
      }

      return (
        <div>
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
          <h1 className={styles.h1}>Pokémon Collection</h1>
          <ul className={styles.card_list}>
            {pokemons?.map((pokemon) => {
              const PARTS = `${pokemon.url}`.split('/');
              const POKEMON_ID = PARTS[PARTS.length - 2];

              const IMAGE_SRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${POKEMON_ID}.png`;

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
        </div>
      );
    } catch (exception) {
      console.log(exception);
    }
  }
}

export default CardList;
