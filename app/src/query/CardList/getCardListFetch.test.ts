import { describe, it, expect, vi, beforeEach } from 'vitest';
import getCardListFetch from './getCardListFetch';
import getCardListGraphql from './getCardListGraphql';
import type IPadinationCardList from './IPaginationCardList';
import FETCH_MOCK from '../../test-utils/mock/FETCH_MOCK.mock';

vi.mock('./getCardListGraphql', () => ({
  default: vi.fn(),
}));

describe('getCardListFetch', () => {
  const mockGraphqlQuery = 'mock paginated graphql query';
  const mockPaginationData: IPadinationCardList = {
    data: {
      pokemon: [
        {
          id: 1,
          name: 'Bulbasaur',
          image_src: '',
          height: 7,
          weight: 69,
          pokemontypes: [],
        },
      ],
      pokemon_aggregate: { aggregate: { count: 100 } },
    },
  } as IPadinationCardList;

  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(getCardListGraphql).mockReturnValue(mockGraphqlQuery);
    FETCH_MOCK.mockReset();
  });

  const defaultParams = {
    limit: 10,
    page: '2',
    search: 'pika',
  };

  it('calls getCardListGraphql with correct limit, offset, and search', async () => {
    FETCH_MOCK.mockResolvedValue({
      status: 200,
      json: async () => mockPaginationData,
      text: async () => '',
    } as Response);

    await getCardListFetch(defaultParams);

    expect(getCardListGraphql).toHaveBeenCalledWith({
      limit: 10,
      offset: 10,
      search: 'pika',
    });
  });

  it('returns pagination data on successful fetch', async () => {
    FETCH_MOCK.mockResolvedValue({
      status: 200,
      json: async () => mockPaginationData,
      text: async () => '',
    } as Response);

    const result = await getCardListFetch(defaultParams);
    expect(result).toEqual(mockPaginationData);
  });

  it('uses page=1 when page parameter is invalid (negative, zero, or non-numeric)', async () => {
    const testCases = [
      { page: '0', expectedOffset: 0 },
      { page: '-5', expectedOffset: 0 },
      { page: 'abc', expectedOffset: 0 },
      { page: '', expectedOffset: 0 },
      { page: undefined, expectedOffset: 0 },
    ];

    for (const { page, expectedOffset } of testCases) {
      FETCH_MOCK.mockResolvedValue({
        status: 200,
        json: async () => mockPaginationData,
        text: async () => '',
      } as Response);

      await getCardListFetch({ limit: 10, page, search: 'test' });
      expect(getCardListGraphql).toHaveBeenCalledWith({
        limit: 10,
        offset: expectedOffset,
        search: 'test',
      });
      vi.mocked(getCardListGraphql).mockClear();
      FETCH_MOCK.mockClear();
    }
  });

  it('trims the search string', async () => {
    FETCH_MOCK.mockResolvedValue({
      status: 200,
      json: async () => mockPaginationData,
      text: async () => '',
    } as Response);

    await getCardListFetch({ limit: 5, page: '1', search: '  charizard  ' });
    expect(getCardListGraphql).toHaveBeenCalledWith({
      limit: 5,
      offset: 0,
      search: 'charizard',
    });
  });

  it('throws error when HTTP status is not 200', async () => {
    FETCH_MOCK.mockResolvedValue({
      status: 500,
      text: async () => 'Internal Server Error',
      json: async () => ({}),
    } as Response);

    await expect(getCardListFetch(defaultParams)).rejects.toThrow(
      'HTTP 500\nInternal Server Error'
    );
  });

  it('throws error when fetch rejects (network error)', async () => {
    FETCH_MOCK.mockRejectedValue(new Error('Network failure'));

    await expect(getCardListFetch(defaultParams)).rejects.toThrow(
      'Network failure'
    );
  });

  it('uses correct URL and request init', async () => {
    let capturedUrl: string | undefined;
    let capturedInit: RequestInit | undefined;

    FETCH_MOCK.mockImplementation(async (url: string, init: RequestInit) => {
      capturedUrl = url;
      capturedInit = init;
      return {
        status: 200,
        json: async () => mockPaginationData,
        text: async () => '',
      } as Response;
    });

    await getCardListFetch(defaultParams);

    expect(capturedUrl).toBe('https://graphql.pokeapi.co/v1beta2');
    expect(capturedInit?.method).toBe('POST');
    expect(capturedInit?.headers).toEqual({
      'Content-Type': 'application/json',
    });
    expect(JSON.parse(capturedInit?.body as string)).toEqual({
      query: mockGraphqlQuery,
    });
  });
});
