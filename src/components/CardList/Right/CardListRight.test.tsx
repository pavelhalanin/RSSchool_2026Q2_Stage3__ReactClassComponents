import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { CardListRight } from './CardListRight';
import FETCH_MOCK from '../../../test-utils/mock/FETCH_MOCK.mock';

interface IFetchResponse {
  status: number;
  ok: boolean;
  json: () => Promise<unknown>;
  text: () => Promise<string>;
}

vi.mock('../../../utils/sleep', () => ({
  default: () => Promise.resolve(),
}));

vi.mock('../../../utils/PokemonHelper', () => ({
  default: {
    getMainImage_byPokemonId: (id: number) => `https://example.com/${id}.png`,
  },
}));

describe('CardListRight', () => {
  const mockSetParams = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    FETCH_MOCK.mockReset();
  });

  it('renders pokemon content after successful fetch', async () => {
    FETCH_MOCK.mockImplementation((): Promise<IFetchResponse> => {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: () =>
          Promise.resolve({
            data: {
              pokemon: [
                {
                  id: 25,
                  name: 'pikachu',
                  weight: 60,
                  height: 4,
                  pokemontypes: [],
                  pokemonsprites: [],
                  pokemoncries: [],
                },
              ],
            },
          }),
        text: () => Promise.resolve(''),
      });
    });

    const { container } = render(
      <CardListRight page="1" details="25" setParams={mockSetParams} />
    );

    await waitFor(() => {
      expect(container.textContent).toContain('#25');
    });

    expect(container.textContent).toContain('60 x 4');

    const image = container.querySelector('img');

    expect(image?.getAttribute('src')).toBe('https://example.com/25.png');
  });

  it('handles fetch status between 400 and 599', async () => {
    FETCH_MOCK.mockImplementation((): Promise<IFetchResponse> => {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({}),
        text: () => Promise.resolve('Server error'),
      });
    });

    const { container } = render(
      <CardListRight page="1" details="25" setParams={mockSetParams} />
    );

    await waitFor(() => {
      expect(container.textContent).toContain('HTTP 500\nServer error');
    });
  });

  it('handles non 200 status outside 400-599 range', async () => {
    FETCH_MOCK.mockImplementation((): Promise<IFetchResponse> => {
      return Promise.resolve({
        status: 300,
        ok: false,
        json: () => Promise.resolve({}),
        text: () => Promise.resolve('Redirect'),
      });
    });

    const { container } = render(
      <CardListRight page="1" details="25" setParams={mockSetParams} />
    );

    await waitFor(() => {
      expect(container.textContent).toContain('HTTP 300\nRedirect');
    });
  });

  it('handles fetch rejection with Error instance', async () => {
    FETCH_MOCK.mockRejectedValue(new Error('Network failed'));

    const { container } = render(
      <CardListRight page="1" details="25" setParams={mockSetParams} />
    );

    await waitFor(() => {
      expect(container.textContent).toContain('Network failed');
    });
  });

  it('handles fetch rejection with unknown error', async () => {
    FETCH_MOCK.mockRejectedValue('Unknown');

    const { container } = render(
      <CardListRight page="1" details="25" setParams={mockSetParams} />
    );

    await waitFor(() => {
      expect(container.textContent).toContain('Unknown error');
    });
  });

  it('reloads content after reload button click', async () => {
    FETCH_MOCK.mockImplementationOnce((): Promise<IFetchResponse> => {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({}),
        text: () => Promise.resolve('Server error'),
      });
    }).mockImplementationOnce((): Promise<IFetchResponse> => {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: () =>
          Promise.resolve({
            data: {
              pokemon: [
                {
                  id: 1,
                  name: 'bulbasaur',
                  weight: 69,
                  height: 7,
                  pokemontypes: [],
                  pokemonsprites: [],
                  pokemoncries: [],
                },
              ],
            },
          }),
        text: () => Promise.resolve(''),
      });
    });

    const { container } = render(
      <CardListRight page="1" details="1" setParams={mockSetParams} />
    );

    await waitFor(() => {
      expect(container.textContent).toContain('HTTP 500\nServer error');
    });

    const reloadButton = container.querySelector('.alert-danger button');

    fireEvent.click(reloadButton!);

    await waitFor(() => {
      expect(container.textContent).toContain('#1');
    });
  });

  it('does not load card when details is empty string', () => {
    render(<CardListRight page="1" details="" setParams={mockSetParams} />);

    expect(FETCH_MOCK).not.toHaveBeenCalled();
  });
});
