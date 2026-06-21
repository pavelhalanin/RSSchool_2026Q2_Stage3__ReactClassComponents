export default function getCardGraphql(details: string | undefined): string {
  return `
        query CardQuery {
            pokemon(where: {id: {_eq: ${details}}}) {
                base_experience
                height
                id
                is_default
                name
                pokemon_species_id
                weight
                pokemonabilities {
                    ability {
                        abilitynames(where: {language: {id: {_eq: 9}}}) {
                            id
                            name
                        }
                    }
                }
                pokemontypes {
                    slot
                    type {
                        name
                    }
                }
                pokemonsprites {
                    sprites
                }
                pokemoncries {
                    cries
                }
            }
        }
    `;
}
