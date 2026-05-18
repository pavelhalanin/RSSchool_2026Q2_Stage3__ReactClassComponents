import { useEffect, useState } from 'react';
import type { IPokemon } from './IPokemon';
import styles from '../CardList.module.css';
import sleep from '../../../utils/sleep';
import PokemonHelper from '../../../utils/PokemonHelper';

interface ICardListRight {
  page: string;
  details: string | null;
  setParams: (page: string, details: string) => void;
}

interface ICardData {
  item: null | IPokemon;
  isFetch: boolean;
  fetchError: null | string;
}

export function CardListRight(props: ICardListRight) {
  const [cardData, setCardData] = useState<ICardData>({
    item: null,
    isFetch: false,
    fetchError: null,
  });

  const closeRight = () => {
    setCardData({
      item: null,
      isFetch: false,
      fetchError: null,
    });
    props.setParams(props.page, '');
  };

  const generateFetchError = () => {
    setCardData({
      item: null,
      isFetch: false,
      fetchError: 'Custom test error HTTP 400-500',
    });
  };

  async function loadCard() {
    setCardData({
      item: null,
      isFetch: true,
      fetchError: null,
    });

    await sleep(500);

    const GRAPHQL = `
      query MyQuery {
        pokemon(where: {id: {_eq: ${props.details}}}) {
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

      if (HTTP_STATUS >= 400 && HTTP_STATUS <= 599) {
        const TEXT = await RESPONSE.text();
        const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;

        setCardData({
          item: null,
          isFetch: false,
          fetchError: MESSAGE,
        });
      } else if (HTTP_STATUS !== 200) {
        const TEXT = await RESPONSE.text();
        const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;
        setCardData({
          item: null,
          isFetch: false,
          fetchError: MESSAGE,
        });
      } else {
        const DATA = await RESPONSE.json();
        const POKEMON: IPokemon = DATA.data.pokemon[0];
        setCardData({
          item: POKEMON,
          isFetch: false,
          fetchError: null,
        });
      }
    } catch (err) {
      setCardData({
        item: null,
        isFetch: false,
        fetchError: err instanceof Error ? err.message : 'Unknown error',
      });
    }
  }

  useEffect(() => {
    if (props.details === null || props.details == '') {
      return;
    }
    (async function () {
      loadCard();
    })();
  }, [props.details]);

  return (
    <>
      <div className={styles.card_list__right_block_buttons}>
        <button className="btn btn-danger" onClick={() => closeRight()}>
          Close
        </button>
        <button className="btn btn-danger" onClick={() => generateFetchError()}>
          Generate error
        </button>
      </div>
      <CardListRightContent cardData={cardData} loadCard={loadCard} />
    </>
  );
}

interface ICardListRightContent {
  cardData: ICardData;
  loadCard: () => void;
}

function CardListRightContent(props: ICardListRightContent) {
  if (props.cardData.fetchError) {
    return (
      <div className="alert alert-danger">
        {props.cardData.fetchError}
        <button onClick={() => props.loadCard()}>Reload</button>
      </div>
    );
  }

  if (props.cardData.isFetch) {
    return <div className={styles.spinner__wrapper}>Loading</div>;
  }

  if (props.cardData.item === null) {
    return <></>;
  }

  const POKEMON = props.cardData.item;
  const POKEMON_ID = POKEMON.id;
  const POKEMON_IMAGE = PokemonHelper.getMainImage_byPokemonId(POKEMON_ID);
  const POLEMON_W = POKEMON.weight;
  const POKEMON_H = POKEMON.height;

  return (
    <div>
      <h2>#{POKEMON_ID}</h2>
      <div>
        <img
          className={styles.card_list__right_block_image}
          src={POKEMON_IMAGE}
          alt=""
        />
      </div>
      <div>
        {POLEMON_W} x {POKEMON_H}
      </div>
    </div>
  );
}
