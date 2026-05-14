import { describe, it, expect, vi, beforeEach } from 'vitest';
import FETCH_MOCK from '../../../test-utils/mock/FETCH_MOCK.mock';
import Card from '../../../components/Card/Card';
import DEFAULT_STATE_MOCK from '../../../test-utils/mock/DEFAULT_STATE_MOCK.mock';

describe('Card fetchPokemons', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = new Card({
      state: DEFAULT_STATE_MOCK,
      updateState_card: vi.fn(),
      updateState_cardList: vi.fn(),
    });

    FETCH_MOCK.mockClear();
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
                },
              ],
            },
          }),
        text: () => Promise.resolve(''),
      });
    });

    await wrapper.fetchPokemons();

    expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
    expect(FETCH_MOCK).toHaveBeenCalledWith(
      'https://graphql.pokeapi.co/v1beta2',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
    );
  });

  it('Card fetchPokemons not 400-599 and not 200', async () => {
    FETCH_MOCK.mockImplementationOnce(() => {
      return Promise.resolve({
        status: 300,
        ok: false,
        text: () => Promise.resolve('err'),
      });
    });

    await wrapper.fetchPokemons();
    expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
  });

  it('Card fetchPokemons HTTP 400-599', async () => {
    FETCH_MOCK.mockImplementationOnce(() => {
      return Promise.resolve({
        status: 500,
        ok: false,
        text: () => Promise.resolve('Internal Server Error'),
      });
    });

    await wrapper.fetchPokemons();
    expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
  });
});
