import { describe, it, expect, vi, beforeEach } from 'vitest';
import getCardFetch from './getCardFetch';
import getCardGraphql from './getCardGraphql';
import type IPokemon from './IPokemon';
import FETCH_MOCK from './../../test-utils/mock/FETCH_MOCK.mock';

vi.mock('./getCardGraphql', () => ({
  default: vi.fn(),
}));

describe('getCardFetch', () => {
  const mockGraphqlQuery = 'mock graphql query';
  const mockPokemonData: IPokemon = {
    id: 1,
    name: 'Bulbasaur',
    height: 7,
    weight: 69,
  } as IPokemon;

  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(getCardGraphql).mockReturnValue(mockGraphqlQuery);
    FETCH_MOCK.mockReset();
  });

  it('calls getCardGraphql with details', async () => {
    const details = '25';
    FETCH_MOCK.mockResolvedValue({
      status: 200,
      json: async () => ({ data: { pokemon: [mockPokemonData] } }),
      text: async () => '',
    } as Response);

    await getCardFetch(details);
    expect(getCardGraphql).toHaveBeenCalledWith(details);
  });

  it('returns pokemon data on successful fetch', async () => {
    const details = '1';
    FETCH_MOCK.mockResolvedValue({
      status: 200,
      json: async () => ({ data: { pokemon: [mockPokemonData] } }),
      text: async () => '',
    } as Response);

    const result = await getCardFetch(details);
    expect(result).toEqual(mockPokemonData);
  });

  it('throws error when HTTP status is not 200', async () => {
    const details = '2';
    FETCH_MOCK.mockResolvedValue({
      status: 404,
      text: async () => 'Not Found',
      json: async () => ({}),
    } as Response);

    await expect(getCardFetch(details)).rejects.toThrow('HTTP 404\nNot Found');
  });

  it('throws error when fetch rejects (network error)', async () => {
    const details = '3';
    FETCH_MOCK.mockRejectedValue(new Error('Network failure'));

    await expect(getCardFetch(details)).rejects.toThrow('Network failure');
  });

  it('handles undefined details', async () => {
    FETCH_MOCK.mockResolvedValue({
      status: 200,
      json: async () => ({ data: { pokemon: [mockPokemonData] } }),
      text: async () => '',
    } as Response);

    await getCardFetch(undefined);
    expect(getCardGraphql).toHaveBeenCalledWith(undefined);
  });

  it('uses correct URL and request init', async () => {
    const details = '4';
    let capturedUrl: string | undefined;
    let capturedInit: RequestInit | undefined;

    FETCH_MOCK.mockImplementation(async (url: string, init: RequestInit) => {
      capturedUrl = url;
      capturedInit = init;
      return {
        status: 200,
        json: async () => ({ data: { pokemon: [mockPokemonData] } }),
        text: async () => '',
      } as Response;
    });

    await getCardFetch(details);

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
