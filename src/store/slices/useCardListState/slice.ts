import { type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {
  ICardListPokemonWithPadination,
  ICardListState,
  ICardListSlice,
} from './types';
import { downloadFile_byText } from '../../../utils/downloadFile_byText/downloadFile_byText';

const defaultCardList: ICardListState = {
  cardListState: {
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
    csvItems: [],
  },
};

export const createCardListSlice: StateCreator<
  ICardListSlice,
  [],
  [['zustand/devtools', never]],
  ICardListSlice
> = devtools(
  (set, get) => ({
    ...defaultCardList,
    cardListActions: {
      setSearch(newSearch) {
        console.log(
          new Date().toJSON().slice(0, 19),
          `useCardListState setSearch(${newSearch})`
        );
        set(
          (state) => ({
            ...state,
            cardListState: {
              ...state.cardListState,
              search: newSearch,
            },
          }),
          false,
          'cardList/setSearch'
        );
      },
      async fetchPokemons() {
        console.log(
          new Date().toJSON().slice(0, 19),
          `useCardListState fetchPokemons()`
        );
        const STATE = get();

        const IS_NOT_ERROR_FETCH = !STATE.cardListState.errorFetch;
        const IS_EQUALS_SEARCH =
          STATE.cardListState.search === STATE.cardListState.prevSearch;
        const IS_EQUALS_PAGE =
          STATE.cardListState.page === STATE.cardListState.prevPage;
        if (IS_NOT_ERROR_FETCH && IS_EQUALS_SEARCH && IS_EQUALS_PAGE) {
          console.log(
            new Date().toJSON().slice(0, 19),
            `useCardListState fetchPokemons() ignore`,
            `page = ${STATE.cardListState.page} === prevPage = ${STATE.cardListState.prevPage}`
          );
          return;
        }

        try {
          set(
            (state) => ({
              ...state,
              cardListState: {
                ...state.cardListState,
                isFetch: true,
              },
            }),
            false,
            'cardList/fetchPokemons/start'
          );

          const SEARCH = STATE.cardListState.search.trim();
          const OFFSET =
            STATE.cardListState.pagination.LIMITL_ITEMS *
            (Number(STATE.cardListState.page) - 1);

          const GRAPHQL = `
              query MyQuery {
                pokemon(limit: ${STATE.cardListState.pagination.LIMITL_ITEMS}, offset: ${OFFSET}, where: {name: {_like: "%${SEARCH}%"}}) {
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

            set(
              (state) => ({
                ...state,
                cardListState: {
                  ...state.cardListState,
                  items: [],
                  errorFetch: MESSAGE,
                },
              }),
              false,
              'cardList/fetchPokemons/error'
            );
            return;
          }

          const DATA: ICardListPokemonWithPadination = await RESPONSE.json();
          console.log(new Date().toJSON().slice(0, 19), DATA);
          const TOTAL_ITEMS = DATA.data.pokemon_aggregate.aggregate.count;

          set(
            (state) => ({
              ...state,
              cardListState: {
                ...state.cardListState,
                prevPage: STATE.cardListState.page,
                items: DATA.data.pokemon,
                search: SEARCH,
                prevSearch: SEARCH,
                errorFetch: null,
                isFetch: false,
                pagination: {
                  ...state.cardListState.pagination,
                  CURRENT_PAGE: Number(STATE.cardListState.page),
                  TOTAL_ITEMS: TOTAL_ITEMS,
                  SKIP_ITEMS: OFFSET,
                  LAST_PAGE: Math.ceil(
                    TOTAL_ITEMS / state.cardListState.pagination.LIMITL_ITEMS
                  ),
                },
              },
            }),
            false,
            'cardList/fetchPokemons/success'
          );
        } catch (exception) {
          set(
            (state) => ({
              ...state,
              cardListState: {
                ...state.cardListState,
                errorFetch: `${exception}`,
              },
            }),
            false,
            'cardList/fetchPokemons/catch'
          );
        } finally {
          set(
            (state) => ({
              ...state,
              cardListState: {
                ...state.cardListState,
                isFetch: false,
              },
            }),
            false,
            'cardList/fetchPokemons/finally'
          );
        }
      },
      generateFetchError() {
        set(
          (state) => ({
            ...state,
            cardListState: {
              ...state.cardListState,
              items: [],
              isFetch: false,
              errorFetch: 'Custom test error HTTP 400-500',
            },
          }),
          false,
          'cardList/generateFetchError'
        );
      },
      setPage(newPage) {
        console.log(
          new Date().toJSON().slice(0, 19),
          `useCardListState setPage(${newPage})`
        );

        const PAGE: string = Number(newPage) > 0 ? `${newPage}` : '1';

        set(
          (state) => ({
            ...state,
            cardListState: {
              ...state.cardListState,
              page: PAGE,
              pagination: {
                ...state.cardListState.pagination,
                CURRENT_PAGE: +PAGE,
              },
            },
          }),
          false,
          'cardList/setPage'
        );
      },
      addOrRemoveCsvItem(isChecked, pokemonId) {
        if (!isChecked) {
          set(
            (state) => ({
              ...state,
              cardListState: {
                ...state.cardListState,
                csvItems: state.cardListState.csvItems.filter(
                  (e) => e.id !== pokemonId
                ),
              },
            }),
            false,
            'cardList/addOrRemoveCsvItem/remove'
          );
          return;
        }

        set(
          (state) => ({
            ...state,
            cardListState: {
              ...state.cardListState,
              csvItems: [
                ...state.cardListState.csvItems,
                ...state.cardListState.items.filter((e) => e.id === pokemonId),
              ],
            },
          }),
          false,
          'cardList/addOrRemoveCsvItem/add'
        );
      },
      unselectAllCsvItems() {
        set(
          (state) => ({
            ...state,
            cardListState: {
              ...state.cardListState,
              csvItems: [],
            },
          }),
          false,
          'cardList/unselectAllCsvItems'
        );
      },
      downloadCsvItems() {
        const CSV_ROWS_ARRAY: Array<string> = [];
        const SEPARATOR = '\t';
        CSV_ROWS_ARRAY.push(
          ['#', 'id', 'name', 'weight', 'height', 'types'].join(SEPARATOR)
        );

        const STATE = get();
        const SELECTED_CARDS = STATE.cardListState.csvItems;

        for (let i = 0; i < SELECTED_CARDS.length; i++) {
          const POKEMON = SELECTED_CARDS[i];
          CSV_ROWS_ARRAY.push(
            [
              `${i + 1}`,
              `${POKEMON.id}`,
              `${POKEMON.name}`,
              `${POKEMON.weight}`,
              `${POKEMON.height}`,
              `${POKEMON.pokemontypes.map((e) => e.type.name).join(' ')}`,
            ].join(SEPARATOR)
          );
        }

        const CSV = CSV_ROWS_ARRAY.join('\n');

        const DATE_PREFIX: string = new Date()
          .toJSON()
          .slice(0, 19)
          .replaceAll(':', '-')
          .replace('T', '_');
        const COUNT_CARDS = SELECTED_CARDS.length;
        const FILENAME: string = `[${DATE_PREFIX}]__${COUNT_CARDS}_pokemon.csv`;
        downloadFile_byText(FILENAME, CSV);
      },
    },
  }),
  { name: 'CardListStore' }
);
