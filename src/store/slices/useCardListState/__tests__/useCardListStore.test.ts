import { describe, it, expect, beforeEach } from 'vitest';
import { useCardListStore } from './../useCardListStore';
import FETCH_MOCK from './../../../../test-utils/mock/FETCH_MOCK.mock';

describe('useCardListStore', () => {
  beforeEach(() => {
    useCardListStore.setState({
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
      cardListActions: useCardListStore.getState().cardListActions,
    });
    FETCH_MOCK.mockClear();
  });

  it('initial state', () => {
    const state = useCardListStore.getState();
    expect(state.cardListState.isFetch).toBe(false);
    expect(state.cardListState.errorFetch).toBe(null);
    expect(state.cardListState.search).toBe('');
    expect(state.cardListState.items).toEqual([]);
  });

  it('setSearch', () => {
    const { cardListActions } = useCardListStore.getState();
    cardListActions.setSearch('pikachu');
    expect(useCardListStore.getState().cardListState.search).toBe('pikachu');
  });

  it('setPage', () => {
    const { cardListActions } = useCardListStore.getState();
    cardListActions.setPage('3');
    const state = useCardListStore.getState();
    expect(state.cardListState.page).toBe('3');
    expect(state.cardListState.pagination.CURRENT_PAGE).toBe(3);
  });

  it('generateFetchError', () => {
    const { cardListActions } = useCardListStore.getState();
    cardListActions.generateFetchError();
    const state = useCardListStore.getState();
    expect(state.cardListState.errorFetch).toBe(
      'Custom test error HTTP 400-500'
    );
    expect(state.cardListState.items).toEqual([]);
    expect(state.cardListState.isFetch).toBe(false);
  });

  it('addOrRemoveCsvItem', () => {
    const { cardListActions } = useCardListStore.getState();
    useCardListStore.setState({
      cardListState: {
        ...useCardListStore.getState().cardListState,
        items: [
          {
            id: 1,
            name: 'bulbasaur',
            weight: 69,
            height: 7,
            image_src: '',
            pokemontypes: [],
          },
        ],
      },
    });
    cardListActions.addOrRemoveCsvItem(true, 1);
    expect(useCardListStore.getState().cardListState.csvItems).toHaveLength(1);
    cardListActions.addOrRemoveCsvItem(false, 1);
    expect(useCardListStore.getState().cardListState.csvItems).toHaveLength(0);
  });

  it('unselectAllCsvItems', () => {
    const { cardListActions } = useCardListStore.getState();
    useCardListStore.setState({
      cardListState: {
        ...useCardListStore.getState().cardListState,
        csvItems: [
          {
            id: 1,
            name: 'test',
            weight: 1,
            height: 1,
            image_src: '',
            pokemontypes: [],
          },
        ],
      },
    });
    cardListActions.unselectAllCsvItems();
    expect(useCardListStore.getState().cardListState.csvItems).toEqual([]);
  });
});
