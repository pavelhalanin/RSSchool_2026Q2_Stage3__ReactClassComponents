import { type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { ICardState, ICardSlice, IPokemon } from './types';
import sleep from '../../../utils/sleep';

const initialState: ICardState = {
  cardState: {
    isFetch: false,
    errorFetch: null,
    item: null,
  },
};

export const createCardSlice: StateCreator<
  ICardSlice,
  [],
  [['zustand/devtools', never]],
  ICardSlice
> = devtools(
  (set) => ({
    ...initialState,
    cardActions: {
      closeCard: () => {
        set(
          (state) => ({
            ...state,
            ...initialState,
          }),
          false,
          'card/closeCard'
        );
      },
      generateFetchError() {
        set(
          (state) => ({
            ...state,
            cardState: {
              item: null,
              isFetch: false,
              errorFetch: 'Custom test error HTTP 400-500',
            },
          }),
          false,
          'card/generateFetchError'
        );
      },
      async loadCard_byDetails(details) {
        if (!details) return;

        set(
          (state) => ({
            ...state,
            cardState: {
              item: null,
              isFetch: true,
              errorFetch: null,
            },
          }),
          false,
          'card/loadCard/start'
        );

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
            set(
              (state) => ({
                ...state,
                cardState: {
                  item: null,
                  isFetch: false,
                  errorFetch: MESSAGE,
                },
              }),
              false,
              'card/loadCard/http_error'
            );

            return;
          }

          const DATA = await RESPONSE.json();
          const POKEMON: IPokemon = DATA.data.pokemon[0];

          set(
            (state) => ({
              ...state,
              cardState: {
                item: POKEMON,
                isFetch: false,
                errorFetch: null,
              },
            }),
            false,
            'card/loadCard/success'
          );
        } catch (exception) {
          set(
            (state) => ({
              ...state,
              cardState: {
                item: null,
                isFetch: false,
                errorFetch: String(exception),
              },
            }),
            false,
            'card/loadCard/error'
          );
        }
      },
    },
  }),
  { name: 'CardStore' }
);
