import { create } from 'zustand';
import type { ICardState, ICardStore, IPokemon } from './types';
import sleep from '../../utils/sleep';

const defaultCard: ICardState = {
  isFetch: false,
  errorFetch: null,
  item: null,
};

export const useCardStore = create<ICardStore>((set) => ({
  ...defaultCard,
  actions: {
    closeCard() {
      set(() => ({
        item: null,
        isFetch: false,
        errorFetch: null,
      }));
    },
    generateFetchError() {
      set(() => ({
        item: null,
        isFetch: false,
        errorFetch: 'Custom test error HTTP 400-500',
      }));
    },
    async loadCard_byDetails(details) {
      if (!details) {
        return;
      }

      set(() => ({
        item: null,
        isFetch: true,
        errorFetch: null,
      }));

      await sleep(500);

      const GRAPHQL = `
        query MyQuery {
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

      const URL_ = `https://graphql.pokeapi.co/v1beta2`;

      try {
        const RESPONSE = await fetch(URL_, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: GRAPHQL,
          }),
        });

        const HTTP_STATUS = RESPONSE.status;

        if (HTTP_STATUS !== 200) {
          const TEXT = await RESPONSE.text();
          const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;

          set(() => ({
            item: null,
            isFetch: false,
            errorFetch: MESSAGE,
          }));
        }

        const DATA = await RESPONSE.json();
        const POKEMON: IPokemon = DATA.data.pokemon[0];
        set(() => ({
          item: POKEMON,
          isFetch: false,
          errorFetch: null,
        }));
      } catch (exception) {
        set(() => ({
          item: null,
          isFetch: false,
          errorFetch: `${exception}`,
        }));
      } finally {
        set((state) => ({
          ...state,
          isFetch: false,
        }));
      }
    },
  },
}));
