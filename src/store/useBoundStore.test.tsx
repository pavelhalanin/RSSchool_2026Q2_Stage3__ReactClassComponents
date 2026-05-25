import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useBoundStore } from './useBoundStore';

vi.mock('../utils/downloadFile_byText/downloadFile_byText', () => ({
  downloadFile_byText: vi.fn(),
}));
vi.mock('../utils/sleep', () => ({
  default: vi.fn().mockResolvedValue(undefined),
}));

const defaultCardListState = {
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
};

const defaultCardState = {
  isFetch: false,
  errorFetch: null,
  item: null,
};

beforeEach(() => {
  useBoundStore.setState({
    cardListState: { ...defaultCardListState },
    cardState: { ...defaultCardState },
  });
  vi.clearAllMocks();
});

describe('useBoundStore', () => {
  describe('CardList slice', () => {
    it('has initial state', () => {
      const state = useBoundStore.getState();
      expect(state.cardListState).toEqual(defaultCardListState);
    });

    it('setSearch updates search', () => {
      const { cardListActions } = useBoundStore.getState();
      cardListActions.setSearch('pikachu');
      expect(useBoundStore.getState().cardListState.search).toBe('pikachu');
    });

    it('setPage updates page and CURRENT_PAGE', () => {
      const { cardListActions } = useBoundStore.getState();
      cardListActions.setPage('2');
      const { page, pagination } = useBoundStore.getState().cardListState;
      expect(page).toBe('2');
      expect(pagination.CURRENT_PAGE).toBe(2);
    });

    it('setPage does not allow setting page less than 1', () => {
      const { cardListActions } = useBoundStore.getState();
      cardListActions.setPage('0');
      expect(useBoundStore.getState().cardListState.page).toBe('1');
    });

    it('generateFetchError sets custom error', () => {
      const { cardListActions } = useBoundStore.getState();
      cardListActions.generateFetchError();
      const state = useBoundStore.getState().cardListState;
      expect(state.errorFetch).toBe('Custom test error HTTP 400-500');
      expect(state.items).toEqual([]);
    });
  });
});
