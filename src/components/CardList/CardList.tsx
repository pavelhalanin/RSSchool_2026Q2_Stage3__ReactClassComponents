import { useCallback, useEffect, useRef, useState, type JSX } from 'react';
import styles from './CardList.module.css';
import Search from '../Search/Search';
import Card from '../Card/Card';
import ErrorButton from '../ErrorButton/ErrorButton';
import { useSearchParams } from 'react-router-dom';
import type {
  ICardListPokemonWithPadination,
  IPaginationData,
} from './ICardListPokemonPagination';

export default function CardList(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const LIMIT = 8;
  const [pagination, setPagination] = useState<IPaginationData>({
    pagination: {
      TOTOL_ITEMS: 0,
      LIMITL_ITEMS: LIMIT,
      CURRENT_PAGE: Number(page),
      SKIP_ITEMS: 0,
      LAST_PAGE: 0,
    },
    items: [],
    isFetch: false,
    fetchError: null,
  });

  const [search, setSearch] = useState<string>(
    localStorage.getItem('search') || ''
  );
  const [searchPrev, setSearchPrev] = useState<string | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogPokemonId, setDialogPokemonId] = useState<number>(0);

  const searchRef = useRef(search);
  const searchPrevRef = useRef(searchPrev);
  // const errorFetchRef = useRef(pagination.fetchError);

  const getInitPagination = () => {
    const INIT_PAGINATION: IPaginationData['pagination'] = {
      TOTOL_ITEMS: 0,
      LIMITL_ITEMS: LIMIT,
      CURRENT_PAGE: 1,
      SKIP_ITEMS: 0,
      LAST_PAGE: 0,
    };
    return INIT_PAGINATION;
  };

  const setParams = (page: string, details: string) => {
    setSearchParams({
      page,
      ...(details && { details }),
    });
  };

  useEffect(() => {
    searchRef.current = search;
    searchPrevRef.current = searchPrev;
  });

  const fetchPokemons = useCallback(async () => {
    try {
      const INIT_PAGINATION = getInitPagination();

      const SEARCH = searchRef.current.trim();
      localStorage.setItem('search', SEARCH);

      /*
    if (
      SEARCH === searchPrevRef.current &&
      errorFetchRef.current === null &&
      searchPrevRef.current !== null &&
      pagination.pagination.CURRENT_PAGE !== Number(page)
    ) {
      console.log(
        [
          `No load Pokemon card list because:`,
          `- SEARCH "${SEARCH}" === searchPrev "${searchPrevRef.current}"`,
          `- and errorFetch === null`,
          `- and searchPrev !== null`,
        ].join('\n')
      );
      return;
    }
    */

      if (SEARCH !== searchPrevRef.current) {
        const OFFSET: number = LIMIT * (Number(page) - 1);
        if (OFFSET !== 0) {
          // setParams('1', '');
          return;
        }
      }

      setPagination(() => {
        return {
          pagination: INIT_PAGINATION,
          items: [],
          isFetch: true,
          fetchError: null,
        };
      });

      const OFFSET: number = LIMIT * (Number(page) - 1);
      console.log({
        page,
        LIMIT,
        OFFSET,
      });

      const GRAPHQL = `
      query MyQuery {
        pokemon(limit: ${LIMIT}, offset: ${OFFSET}, where: {name: {_like: "%${SEARCH}%"}}) {
          height
          id
          name
          weight
          pokemontypes {
            slot
            type {
              name
            }
          }
        }
        pokemon_aggregate(where: {name: {_like: "%${SEARCH}%"}}) {
          aggregate {
            count
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

        setPagination(() => {
          return {
            pagination: INIT_PAGINATION,
            items: [],
            isFetch: false,
            fetchError: MESSAGE,
          };
        });
        return;
      }

      if (HTTP_STATUS !== 200) {
        const TEXT = await RESPONSE.text();
        const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;

        setPagination(() => {
          return {
            pagination: INIT_PAGINATION,
            items: [],
            isFetch: false,
            fetchError: MESSAGE,
          };
        });
        return;
      }

      const DATA: ICardListPokemonWithPadination = await RESPONSE.json();

      const POKEMONS = (DATA.data.pokemon || []).filter(Boolean).map((e) => {
        return {
          ...e,
          image_src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`,
        };
      });

      const TOTAL_ITEMS = DATA.data.pokemon_aggregate.aggregate.count;
      setPagination(() => {
        return {
          pagination: {
            TOTOL_ITEMS: TOTAL_ITEMS,
            LIMITL_ITEMS: LIMIT,
            CURRENT_PAGE: Number(page),
            SKIP_ITEMS: LIMIT * Number(page),
            LAST_PAGE: Math.ceil(TOTAL_ITEMS / LIMIT),
          },
          items: POKEMONS,
          isFetch: false,
          fetchError: null,
        };
      });
      setSearch(SEARCH);
      setSearchPrev(SEARCH);
    } catch (exception) {
      console.log('ex');
      console.log(exception);
      if (
        exception instanceof TypeError &&
        exception.message === 'Failed to fetch'
      ) {
        console.log('ex2');
        console.log(exception);
        setPagination(() => {
          return {
            pagination: getInitPagination(),
            items: [],
            isFetch: false,
            fetchError: `${String(exception)}`,
          };
        });
      }
    }
  }, [page]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  const generateFetchError = () => {
    setPagination({
      pagination: getInitPagination(),
      items: [],
      isFetch: false,
      fetchError: 'Custom test error HTTP 400-500',
    });
  };

  if (pagination.isFetch) {
    return <div className={styles.spinner__wrapper}>Pokémon Collection</div>;
  }

  return (
    <>
      <Card
        pokemonId={dialogPokemonId}
        isDialogOpen={isDialogOpen}
        updateState_card_isDialogOpen={setIsDialogOpen}
      />
      <div className="container">
        <section className="section">
          <Search
            search={search}
            fetchPokemons={fetchPokemons}
            updateState_search={setSearch}
            setParams={setParams}
          />
          <div className={styles.error_buttons__wrapper}>
            <ErrorButton />
            <button
              className="btn btn-danger"
              onClick={() => generateFetchError()}
            >
              Generate fetch error
            </button>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="section">
          <h1 className="h1">Pokémon Collection</h1>
          {pagination.fetchError ? (
            <div className="alert alert-danger">
              <div>{pagination.fetchError}</div>
              <button
                className="btn btn-success"
                onClick={() => fetchPokemons()}
              >
                Repeat load fetch
              </button>
            </div>
          ) : (
            <>
              {pagination.items.length != 0 ? (
                ''
              ) : (
                <div className="container">
                  <div className="alert alert-danger">
                    No Pokémon found by search ({searchPrev}). Please enter a
                    different search term and click the search button.
                  </div>
                </div>
              )}

              <ul className={styles.card_list}>
                {pagination.items.map((pokemon) => {
                  const POKEMON_ID: number = Number(pokemon.id);
                  return (
                    <li key={POKEMON_ID} className="pokemon-card">
                      <button
                        onClick={() => {
                          setIsDialogOpen(true);
                          setDialogPokemonId(POKEMON_ID);
                          setParams(page, `${POKEMON_ID}`);
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
          <ul className={styles.pagination}>
            {Array.from({ length: pagination.pagination.LAST_PAGE }).map(
              (_, index) => {
                const ELEMENT_PAGE = index + 1;
                const IS_ACTIVE = ELEMENT_PAGE === Number(page);
                return (
                  <li key={ELEMENT_PAGE}>
                    <button
                      onClick={() => {
                        setParams(`${ELEMENT_PAGE}`, '');
                      }}
                      className={IS_ACTIVE ? styles.pagination__active : ''}
                    >
                      {ELEMENT_PAGE}
                    </button>
                  </li>
                );
              }
            )}
          </ul>
        </section>
      </div>
    </>
  );
}
