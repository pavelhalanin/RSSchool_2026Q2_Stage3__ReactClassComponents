import { describe, it, expect, beforeEach } from 'vitest';
import { useCardListStore } from './../useCardListStore';
import FETCH_MOCK from './../../../../test-utils/mock/FETCH_MOCK.mock';

describe('useCardListStore', () => {
  beforeEach(() => {
    useCardListStore.setState({
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
      actions: useCardListStore.getState().actions,
    });
    FETCH_MOCK.mockClear();
  });

  it('initial state', () => {
    const state = useCardListStore.getState();
    expect(state.isFetch).toBe(false);
    expect(state.errorFetch).toBe(null);
    expect(state.search).toBe('');
    expect(state.items).toEqual([]);
  });

  it('setSearch', () => {
    const { actions } = useCardListStore.getState();
    actions.setSearch('pikachu');
    expect(useCardListStore.getState().search).toBe('pikachu');
  });

  it('setPage', () => {
    const { actions } = useCardListStore.getState();
    actions.setPage('3');
    expect(useCardListStore.getState().page).toBe('3');
    expect(useCardListStore.getState().pagination.CURRENT_PAGE).toBe(3);
  });

  it('generateFetchError', () => {
    const { actions } = useCardListStore.getState();
    actions.generateFetchError();
    const state = useCardListStore.getState();
    expect(state.errorFetch).toBe('Custom test error HTTP 400-500');
    expect(state.items).toEqual([]);
    expect(state.isFetch).toBe(false);
  });

  it('addOrRemoveCsvItem', () => {
    const { actions } = useCardListStore.getState();
    useCardListStore.setState({
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
    });
    actions.addOrRemoveCsvItem(true, 1);
    expect(useCardListStore.getState().csvItems).toHaveLength(1);
    actions.addOrRemoveCsvItem(false, 1);
    expect(useCardListStore.getState().csvItems).toHaveLength(0);
  });

  it('unselectAllCsvItems', () => {
    const { actions } = useCardListStore.getState();
    useCardListStore.setState({
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
    });
    actions.unselectAllCsvItems();
    expect(useCardListStore.getState().csvItems).toEqual([]);
  });
});
