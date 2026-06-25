interface IParamsGetCardListGraphql {
  limit: number;
  offset: number;
  search: string;
}

export default function getCardListGraphql(
  params: IParamsGetCardListGraphql
): string {
  return `
        query CardListQuery {
            pokemon(limit: ${params.limit}, offset: ${params.offset}, where: {name: {_like: "%${params.search}%"}}) {
                height
                id
                name
                weight
                pokemontypes {
                slot
                    type {
                        name
                    }
                }
            }
            pokemon_aggregate(where: {name: {_like: "%${params.search}%"}}) {
                aggregate {
                    count
                }
            }
        }
    `;
}
