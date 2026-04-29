import React, { Component } from 'react';
import styles from './CardList.module.css';

interface Pokemon {
  name: string;
  url: string;
}

interface CardListState {
  pokemons: Pokemon[];
  loading: boolean;
  hasMore: boolean;
  offset: number;
  error: string | null;
}

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const ITEMS_PER_PAGE = 200;

class CardList extends Component<Record<string, never>, CardListState> {
  private observer: IntersectionObserver | null = null;
  private loaderRef: React.RefObject<HTMLDivElement>;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      pokemons: [],
      loading: false,
      hasMore: true,
      offset: 0,
      error: null,
    };
    this.loaderRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this.fetchPokemons();
    this.setupIntersectionObserver();
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupIntersectionObserver = () => {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (!this.state.hasMore) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (
          entry?.isIntersecting &&
          !this.state.loading &&
          this.state.hasMore
        ) {
          this.fetchPokemons();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (this.loaderRef.current) {
      this.observer.observe(this.loaderRef.current);
    }
  };

  fetchPokemons = async () => {
    const { offset, hasMore, loading } = this.state;

    if (!hasMore || loading) return;

    this.setState({ loading: true, error: null });
    await this.sleep(1000);

    try {
      const response = await fetch(
        `${API_BASE_URL}?offset=${offset}&limit=${ITEMS_PER_PAGE}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      this.setState(
        (prevState) => ({
          pokemons: [...prevState.pokemons, ...data.results],
          loading: false,
          offset: prevState.offset + ITEMS_PER_PAGE,
          hasMore: !!data.next,
        }),
        () => {
          this.setupIntersectionObserver(); // После обновления состояния пересоздаем observer
        }
      );
    } catch (error) {
      this.setState({
        loading: false,
        error: error instanceof Error ? error.message : 'Error load',
      });
    }
  };

  sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  render() {
    const { pokemons, loading, hasMore, error } = this.state;

    if (error) {
      return (
        <div>
          <p>Ошибка: {error}</p>
          <button onClick={this.fetchPokemons}>Повторить</button>
        </div>
      );
    }

    return (
      <div>
        <h1 className={styles.h1}>Pokémon Collection</h1>
        <ul className={styles.card_list}>
          {pokemons.map((pokemon) => {
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

        <div ref={this.loaderRef} className={styles.loader__wrapper}>
          <div className={styles.loader__content}>
            {loading && <div>Loading {ITEMS_PER_PAGE} Pokémon...</div>}
            {!hasMore && pokemons.length > 0 && (
              <div>All {pokemons.length} Pokémons loaded</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CardList;
