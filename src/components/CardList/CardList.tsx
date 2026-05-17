import { useCallback, useEffect, useRef, useState, type JSX } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ICardListPokemonWithPadination } from './ICardListPokemonPagination';
import CardListSearch from './CardListSearch';
import CardListPokemons from './CardListPokemons';
import CardListInit from './CardListInit';
import type { IPaginationData } from './IPaginationData';
import styles from './CardList.module.css';
import { CardListRight } from './CardListRight/CardListRight';

export default function CardList(): JSX.Element {
  const LIMIT = CardListInit.getLimit();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const details = searchParams.get('details');

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

  const searchRef = useRef(search);
  const searchPrevRef = useRef(searchPrev);
  // const errorFetchRef = useRef(pagination.fetchError);

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

  const isPositiveNumber = (str: number | string) => {
    return `${str}`.match(/\d+(?:\.\d+)?/g);
  };

  const getPage = () => {
    const PAGE = Number(page) || 1;
    if (PAGE < 1) {
      return 1;
    }
    return PAGE;
  };

  const getOffet = () => {
    const PAGE = getPage();
    const OFFSET = CardListInit.getLimit() * (PAGE - 1);
    return OFFSET;
  };

  const fetchPokemons = useCallback(async () => {
    try {
      const INIT_PAGINATION = CardListInit.getInitPagination();

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
        const OFFSET: number = getOffet();
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

      const OFFSET: number = getOffet();

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
          items: DATA.data.pokemon,
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
            pagination: CardListInit.getInitPagination(),
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

  if (!isPositiveNumber(page)) {
    setParams('1', '');
    return <></>;
  }

  return (
    <>
      <CardListSearch
        fetchPokemons={fetchPokemons}
        page={page}
        pagination={pagination}
        search={search}
        searchPrev={searchPrev}
        setPagination={setPagination}
        setParams={setParams}
        setSearch={setSearch}
      />
      <div className="container">
        <section className="section">
          <div className={styles.card_list__blocks}>
            <div className={styles.card_list__left_block}>
              <CardListPokemons
                fetchPokemons={fetchPokemons}
                page={page}
                pagination={pagination}
                searchPrev={searchPrev}
                setParams={setParams}
              />
            </div>
            <div
              className={`${styles.card_list__right_block} ${details !== null ? styles['card_list__right_block--open'] : ''}`}
            >
              <CardListRight
                page={page}
                details={details}
                setParams={setParams}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
