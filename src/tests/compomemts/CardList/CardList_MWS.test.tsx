import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { server } from '../../../test-utils/mws/node.mock';
import { render } from '@testing-library/react';
import CardList from '../../../components/CardList/CardList';
import DEFAULT_STATE from '../../../test-utils/mock/DEFAULT_STATE_MOCK.mock';
import CARD_LIST_PROPS_MOCK from '../../../test-utils/mock/CARD_LIST_PROPS_MOCK.mock';

describe('MSW Configuration Tests', () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'warn' });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('CardList fetchPokemons HTTP 200', async () => {
    render(<CardList {...CARD_LIST_PROPS_MOCK} state={DEFAULT_STATE} />);
    const response = await fetch('https://graphql.pokeapi.co/v1beta2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: ``,
      }),
    });

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({
      data: {
        pokemon: [
          {
            id: 0,
            name: 'pikachu',
            height: 0,
            weight: 0,
            pokemontypes: [{ slot: 1, type: { name: 'electric' } }],
          },
        ],
      },
    });
  });
});
