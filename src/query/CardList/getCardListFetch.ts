import getCardListGraphql from './getCardListGraphql';
import { IPadinationCardList } from './IPaginationCardList';

interface IParamsGetCardListFetch {
  limit: number;
  page?: string;
  search: string;
}

export default async function getCardListFetch(
  params: IParamsGetCardListFetch
): Promise<IPadinationCardList> {
  const CURRENT_PAGE = Number(params.page) > 0 ? Number(params.page) : 1;
  const SEARCH = `${params.search}`.trim();
  const OFFSET = params.limit * (CURRENT_PAGE - 1);

  const GRAPHQL = getCardListGraphql({
    limit: params.limit,
    offset: OFFSET,
    search: SEARCH,
  });

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

  const DATA: IPadinationCardList = await RESPONSE.json();
  return DATA;
}
