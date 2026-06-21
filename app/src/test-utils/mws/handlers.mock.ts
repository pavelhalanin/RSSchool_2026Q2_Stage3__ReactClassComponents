import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('https://graphql.pokeapi.co/v1beta2', () => {
    return HttpResponse.json({
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
  }),
];
