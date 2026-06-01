import { type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { ICsvCardListSlice, ICsvCardListState } from './types';
import type { ICardListItemPokemon } from '../../../query/cardList/IPaginationCardList';
import { downloadFile_byText } from '../../../utils/downloadFile_byText/downloadFile_byText';

const defaultCsvCardList: ICsvCardListState = {
  csvCardListState: {
    items: [],
  },
};

export const createCsvCardListSlice: StateCreator<
  ICsvCardListSlice,
  [],
  [['zustand/devtools', never]],
  ICsvCardListSlice
> = devtools(
  (set, get) => ({
    ...defaultCsvCardList,
    csvCardListActions: {
      addItem: (item: ICardListItemPokemon) => {
        set(
          (state) => {
            return {
              ...state,
              csvCardListState: {
                items: [
                  ...state.csvCardListState.items.filter(
                    (e) => e.id !== item.id
                  ),
                  item,
                ],
              },
            };
          },
          false,
          'createCsvCardList/removeItem'
        );
      },
      removeItem: (item: ICardListItemPokemon) => {
        set(
          (state) => {
            return {
              ...state,
              csvCardListState: {
                items: state.csvCardListState.items.filter(
                  (e) => e.id !== item.id
                ),
              },
            };
          },
          false,
          'createCsvCardList/removeItem'
        );
      },
      unselectAll: () => {
        set(
          (state) => {
            return {
              ...state,
              csvCardListState: {
                items: [],
              },
            };
          },
          false,
          'createCsvCardList/unselectAll'
        );
      },
      downloadCsvItems() {
        const CSV_ROWS_ARRAY: Array<string> = [];
        const SEPARATOR = '\t';
        CSV_ROWS_ARRAY.push(
          ['#', 'id', 'name', 'weight', 'height', 'types'].join(SEPARATOR)
        );

        const STATE = get();
        const SELECTED_CARDS = STATE.csvCardListState.items;

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
  { name: 'createCsvCardListStore' }
);
