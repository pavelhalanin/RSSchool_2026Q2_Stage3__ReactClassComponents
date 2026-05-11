import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import FETCH_MOCK from '../../../test-utils/mock/FETCH_MOCK.mock';
import LOCAL_STORAGE_MOCK from '../../../test-utils/mock/LOCAL_STORAGE_MOCK.mock';
import DEFAULT_STATE_MOCK from '../../../test-utils/mock/DEFAULT_STATE_MOCK.mock';
import CardList from '../../../components/CardList/CardList';

describe('Main fetchPokemons', () => {
  let wrapper;
  let mockUpdateState_cardList;
  let mockUpdateState_search;
  let mockUpdateState_searchPrev;
  let mockUpdateState_errorBoundary;
  let mockUpdateState_card;
  let consoleLogSpy;

  beforeEach(() => {
    mockUpdateState_cardList = vi.fn();
    mockUpdateState_search = vi.fn();
    mockUpdateState_searchPrev = vi.fn();
    mockUpdateState_errorBoundary = vi.fn();
    mockUpdateState_card = vi.fn();

    wrapper = new CardList({
      state: DEFAULT_STATE_MOCK,
      updateState_cardList: mockUpdateState_cardList,
      updateState_search: mockUpdateState_search,
      updateState_searchPrev: mockUpdateState_searchPrev,
      updateState_errorBoundary: mockUpdateState_errorBoundary,
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
      updateState_errorBoundary: mockUpdateState_errorBoundary,
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
      updateState_errorBoundary: mockUpdateState_errorBoundary,
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
      updateState_errorBoundary: mockUpdateState_errorBoundary,
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

  it('CardList fetchPokemons catch', async () => {
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
      updateState_errorBoundary: mockUpdateState_errorBoundary,
      updateState_card: mockUpdateState_card,
    });

    FETCH_MOCK.mockRejectedValue(new Error('Network failure'));

    await wrapper.fetchPokemons();

    expect(mockUpdateState_errorBoundary).toHaveBeenCalledWith(
      'Error: Network failure'
    );
  });
});
