import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import FETCH_MOCK from '../../../test-utils/mock/FETCH_MOCK.mock';
import Card from '../../../components/Card/Card';

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (
    this: HTMLDialogElement
  ) {
    this.open = true;
  });

  HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
    this.open = false;
  });
});

describe('Card fetchPokemons', () => {
  beforeEach(() => {
    FETCH_MOCK.mockClear();
    vi.clearAllMocks();
  });

  it('Card fetchPokemons HTTP 200', async () => {
    FETCH_MOCK.mockImplementationOnce(() => {
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
                  height: 4,
                  weight: 60,
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

    render(
      <Card
        pokemonId={25}
        isDialogOpen={true}
        updateState_card_isDialogOpen={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
      expect(FETCH_MOCK).toHaveBeenCalledWith(
        'https://graphql.pokeapi.co/v1beta2',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
      );
    });
  });

  it('Card fetchPokemons not 400-599 and not 200', async () => {
    FETCH_MOCK.mockImplementationOnce(() => {
      return Promise.resolve({
        status: 300,
        ok: false,
        text: () => Promise.resolve('err'),
      });
    });

    render(
      <Card
        pokemonId={25}
        isDialogOpen={true}
        updateState_card_isDialogOpen={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
    });
  });

  it('Card fetchPokemons HTTP 400-599', async () => {
    FETCH_MOCK.mockImplementationOnce(() => {
      return Promise.resolve({
        status: 500,
        ok: false,
        text: () => Promise.resolve('Internal Server Error'),
      });
    });

    render(
      <Card
        pokemonId={25}
        isDialogOpen={true}
        updateState_card_isDialogOpen={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
    });
  });
});
