import type IPokemon from './IPokemon';
import getCardGraphql from './getCardGraphql';

export default async function getCardFetch(
  details: string | undefined
): Promise<IPokemon> {
  const GRAPHQL = getCardGraphql(details);

  const URL_ = `https://graphql.pokeapi.co/v1beta2`;

  const REQUEST_INIT: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: GRAPHQL,
    }),
  };

  const RESPONSE = await fetch(URL_, REQUEST_INIT);
  const HTTP_STATUS = RESPONSE.status;
  if (HTTP_STATUS !== 200) {
    const TEXT = await RESPONSE.text();
    const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;
    throw new Error(`${MESSAGE}`);
  }

  const DATA = await RESPONSE.json();
  const POKEMON: IPokemon = DATA.data.pokemon[0];
  return POKEMON;
}
