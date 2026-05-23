import { create } from 'zustand';
import type {
  ICardListPokemonWithPadination,
  ICardListState,
} from './ICardListState';

export const useCardListState = create<ICardListState>((set, get) => ({
  isFetch: false,
  errorFetch: null,
  search: '',
  prevSearch: null,
  page: '1',
  prevPage: '1',
  pagination: {
    CURRENT_PAGE: 1,
    LAST_PAGE: 1,
    LIMITL_ITEMS: 8,
    SKIP_ITEMS: 0,
    TOTAL_ITEMS: 0,
  },
  items: [],
  setSearch(newSearch) {
    console.log(
      new Date().toJSON().slice(0, 19),
      `useCardListState setSearch(${newSearch})`
    );

    set((state) => ({
      ...state,
      search: newSearch,
    }));
  },
  async fetchPokemons() {
    console.log(
      new Date().toJSON().slice(0, 19),
      `useCardListState fetchPokemons()`
    );
    const STATE = get();

    const IS_NOT_ERROR_FETCH = !STATE.errorFetch;
    const IS_EQUALS_SEARCH = STATE.search === STATE.prevSearch;
    const IS_EQUALS_PAGE = STATE.page === STATE.prevPage;
    if (IS_NOT_ERROR_FETCH && IS_EQUALS_SEARCH && IS_EQUALS_PAGE) {
      console.log(
        new Date().toJSON().slice(0, 19),
        `useCardListState fetchPokemons() ignore`,
        `page = ${STATE.page} === prevPage = ${STATE.prevPage}`
      );
      return;
    }

    try {
      const SEARCH = STATE.search.trim();
      const OFFSET = STATE.pagination.LIMITL_ITEMS * (Number(STATE.page) - 1);

      const GRAPHQL = `
        query MyQuery {
          pokemon(limit: ${STATE.pagination.LIMITL_ITEMS}, offset: ${OFFSET}, where: {name: {_like: "%${SEARCH}%"}}) {
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

      if (HTTP_STATUS !== 200) {
        const TEXT = await RESPONSE.text();
        const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;

        set((state) => ({
          ...state,
          items: [],
          errorFetch: MESSAGE,
        }));

        return;
      }

      const DATA: ICardListPokemonWithPadination = await RESPONSE.json();
      console.log(new Date().toJSON().slice(0, 19), DATA);
      const TOTAL_ITEMS = DATA.data.pokemon_aggregate.aggregate.count;

      set((state) => ({
        ...state,
        prevPage: STATE.page,
        items: DATA.data.pokemon,
        search: SEARCH,
        prevSearch: SEARCH,
        errorFetch: null,
        isFetch: false,
        pagination: {
          ...state.pagination,
          CURRENT_PAGE: Number(STATE.page),
          TOTAL_ITEMS: TOTAL_ITEMS,
          SKIP_ITEMS: OFFSET,
          LAST_PAGE: Math.ceil(TOTAL_ITEMS / state.pagination.LIMITL_ITEMS),
        },
      }));
    } catch (exception) {
      set((state) => ({
        ...state,
        errorFetch: `${exception}`,
      }));
    } finally {
      set((state) => ({
        ...state,
        isFetch: false,
      }));
    }
  },
  generateFetchError() {
    set((state) => ({
      ...state,
      items: [],
      isFetch: false,
      errorFetch: 'Custom test error HTTP 400-500',
    }));
  },
  setPage(newPage) {
    console.log(
      new Date().toJSON().slice(0, 19),
      `useCardListState setPage(${newPage})`
    );

    const PAGE: string = Number(newPage) > 0 ? `${newPage}` : '1';

    set((state) => ({
      ...state,
      page: PAGE,
      pagination: {
        ...state.pagination,
        CURRENT_PAGE: +PAGE,
      },
    }));
  },
}));
