import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { MockInstance } from 'vitest';
import FETCH_MOCK from '../../../test-utils/mock/FETCH_MOCK.mock';
import LOCAL_STORAGE_MOCK from '../../../test-utils/mock/LOCAL_STORAGE_MOCK.mock';
import DEFAULT_STATE_MOCK from '../../../test-utils/mock/DEFAULT_STATE_MOCK.mock';
import CardList from '../../../components/CardList/CardList';
import type GlobalState from '../../../components/Main/GlobalState';

describe('Main fetchPokemons', () => {
  let wrapper: CardList;
  let mockUpdateState_cardList: (
    CardList: Partial<GlobalState['cardList']>
  ) => void;
  let mockUpdateState_search: (search: Partial<GlobalState['search']>) => void;
  let mockUpdateState_searchPrev: (
    search: Partial<GlobalState['searchPrev']>
  ) => void;
  let mockUpdateState_card: (card: Partial<GlobalState['card']>) => void;
  let consoleLogSpy: MockInstance;

  beforeEach(() => {
    mockUpdateState_cardList = vi.fn();
    mockUpdateState_search = vi.fn();
    mockUpdateState_searchPrev = vi.fn();
    mockUpdateState_card = vi.fn();

    wrapper = new CardList({
      state: DEFAULT_STATE_MOCK,
      updateState_cardList: mockUpdateState_cardList,
      updateState_search: mockUpdateState_search,
      updateState_searchPrev: mockUpdateState_searchPrev,
      updateState_card: mockUpdateState_card,
    });

    FETCH_MOCK.mockClear();
    LOCAL_STORAGE_MOCK.setItem.mockClear();
    LOCAL_STORAGE_MOCK.getItem.mockClear();
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('CardList fetchPokemons save search to localStorage', async () => {
    const stateWithSearch = {
      ...DEFAULT_STATE_MOCK,
      search: 'pikachu',
    };

    wrapper = new CardList({
      state: stateWithSearch,
      updateState_cardList: mockUpdateState_cardList,
      updateState_search: mockUpdateState_search,
      updateState_searchPrev: mockUpdateState_searchPrev,
      updateState_card: mockUpdateState_card,
    });

    FETCH_MOCK.mockResolvedValue({
      status: 200,
      json: async () => ({
        data: {
          pokemon: [{ id: 25, name: 'pikachu' }],
        },
      }),
    });

    await wrapper.fetchPokemons();

    expect(LOCAL_STORAGE_MOCK.setItem).toHaveBeenCalledWith(
      'search',
      'pikachu'
    );
  });

  it('CardList fetchPokemons HTTP 400-599', async () => {
    const stateWithSearch = {
      ...DEFAULT_STATE_MOCK,
      search: 'pikachu',
      cardList: {
        ...DEFAULT_STATE_MOCK.cardList,
        errorFetch: null,
      },
    };

    wrapper = new CardList({
      state: stateWithSearch,
      updateState_cardList: mockUpdateState_cardList,
      updateState_search: mockUpdateState_search,
      updateState_searchPrev: mockUpdateState_searchPrev,
      updateState_card: mockUpdateState_card,
    });

    FETCH_MOCK.mockResolvedValue({
      status: 500,
      ok: false,
      text: async () => 'Internal Server Error',
    });

    await wrapper.fetchPokemons();

    expect(mockUpdateState_cardList).toHaveBeenCalledWith({
      pokemons: [],
      isFetchNow: false,
      errorFetch: 'HTTP 500\nInternal Server Error',
    });
  });

  it('CardList fetchPokemons HTTP not 400-599 AND not 200', async () => {
    const stateWithSearch = {
      ...DEFAULT_STATE_MOCK,
      search: 'pikachu',
      cardList: {
        ...DEFAULT_STATE_MOCK.cardList,
        errorFetch: null,
      },
    };

    wrapper = new CardList({
      state: stateWithSearch,
      updateState_cardList: mockUpdateState_cardList,
      updateState_search: mockUpdateState_search,
      updateState_searchPrev: mockUpdateState_searchPrev,
      updateState_card: mockUpdateState_card,
    });

    FETCH_MOCK.mockResolvedValue({
      status: 300,
      ok: false,
      text: async () => 'err',
    });

    await wrapper.fetchPokemons();

    expect(mockUpdateState_cardList).toHaveBeenCalledWith({
      pokemons: [],
      isFetchNow: false,
      errorFetch: 'HTTP 300\nerr',
    });
  });
});
