import { useEffect, useRef, useState, useCallback, type JSX } from 'react';
import styles from './Card.module.css';
import sleep from '../../utils/sleep';
import type { ICardProps } from './ICardProps';
import type { IPokemon } from './IPokemon';

export function Card(props: ICardProps): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const [errorFetch, setErrorFetch] = useState<string | null>(null);

  const fetchPokemons = useCallback(async () => {
    setPokemon(null);
    setIsFetch(true);
    setErrorFetch(null);

    await sleep(300);

    const GRAPHQL = `
        query MyQuery {
          pokemon(where: {id: {_eq: ${props.pokemonId}}}) {
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
        setErrorFetch(MESSAGE);
        setPokemon(null);
      } else if (HTTP_STATUS !== 200) {
        const TEXT = await RESPONSE.text();
        const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;
        setErrorFetch(MESSAGE);
        setPokemon(null);
      } else {
        const DATA = await RESPONSE.json();
        const POKEMON: IPokemon = DATA.data.pokemon[0];
        setPokemon(POKEMON);
        setErrorFetch(null);
      }
    } catch (err) {
      setErrorFetch(err instanceof Error ? err.message : 'Unknown error');
      setPokemon(null);
    } finally {
      setIsFetch(false);
    }
  }, [props.pokemonId]);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (props.isDialogOpen) {
      if (!dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    } else {
      if (dialogRef.current.open) {
        dialogRef.current.close();
      }
    }
  }, [props.isDialogOpen]);

  useEffect(() => {
    if (!props.isDialogOpen) return;
    (async function () {
      await fetchPokemons();
    })();
  }, [props.pokemonId, props.isDialogOpen, fetchPokemons]);

  return (
    <dialog ref={dialogRef} className={styles.modal__wrapper}>
      <header>
        <h2>Pokémon #{props.pokemonId}</h2>
        <button
          className="btn btn-danger"
          onClick={() => props.updateState_card_isDialogOpen(false)}
        >
          x
        </button>
      </header>
      {errorFetch ? (
        <div>
          <div className="alert alert-danger">{errorFetch}</div>
        </div>
      ) : isFetch ? (
        <div>
          <div className="alert alert-info">Load Pokemon Data</div>
        </div>
      ) : !pokemon ? (
        ''
      ) : (
        <div>
          <div className={styles.card__name}>{pokemon.name}</div>
          <ul className={styles.card__audio}>
            {pokemon.pokemoncries?.map((e) => {
              return [e.cries.latest, e.cries.legacy]
                .filter((e) => e)
                .map((audio) => {
                  return (
                    <li key={audio}>
                      <audio controls src={audio || undefined}></audio>
                    </li>
                  );
                });
            })}
          </ul>
          <ul className={styles.card__galery}>
            {pokemon.pokemonsprites.map((e) => {
              const ARR = [
                e.sprites.other.home.front_default,
                e.sprites.other.home.front_female,
                e.sprites.other.home.front_shiny,
                e.sprites.other.home.front_shiny_female,
                e.sprites.other.showdown.back_default,
                e.sprites.other.showdown.back_female,
                e.sprites.other.showdown.back_shiny,
                e.sprites.other.showdown.back_shiny_female,
                e.sprites.other.showdown.front_default,
                e.sprites.other.showdown.front_female,
                e.sprites.other.showdown.front_shiny,
                e.sprites.other.showdown.front_shiny_female,
                e.sprites.other.dream_world.front_female,
                e.sprites.other.dream_world.front_default,
                e.sprites.other['official-artwork'].front_shiny,
                e.sprites.other['official-artwork'].front_default,
                e.sprites.versions['generation-i'].yellow.back_default,
                e.sprites.versions['generation-i'].yellow.back_gray,
                e.sprites.versions['generation-i'].yellow.back_transparent,
                e.sprites.versions['generation-i'].yellow.front_default,
                e.sprites.versions['generation-i'].yellow.front_gray,
                e.sprites.versions['generation-i'].yellow.front_transparent,
                e.sprites.versions['generation-i']['red-blue'].back_default,
                e.sprites.versions['generation-i']['red-blue'].back_gray,
                e.sprites.versions['generation-i']['red-blue'].back_transparent,
                e.sprites.versions['generation-i']['red-blue'].front_default,
                e.sprites.versions['generation-i']['red-blue'].front_gray,
                e.sprites.versions['generation-i']['red-blue']
                  .front_transparent,
                e.sprites.versions['generation-ii'].gold.back_default,
                e.sprites.versions['generation-ii'].gold.back_shiny,
                e.sprites.versions['generation-ii'].gold.front_default,
                e.sprites.versions['generation-ii'].gold.front_shiny,
                e.sprites.versions['generation-ii'].gold.front_transparent,
                e.sprites.versions['generation-ii'].silver.back_default,
                e.sprites.versions['generation-ii'].silver.back_shiny,
                e.sprites.versions['generation-ii'].silver.front_default,
                e.sprites.versions['generation-ii'].silver.front_shiny,
                e.sprites.versions['generation-ii'].silver.front_transparent,
                e.sprites.versions['generation-ii'].crystal.back_default,
                e.sprites.versions['generation-ii'].crystal.back_shiny,
                e.sprites.versions['generation-ii'].crystal
                  .back_shiny_transparent,
                e.sprites.versions['generation-ii'].crystal.back_transparent,
                e.sprites.versions['generation-ii'].crystal.front_default,
                e.sprites.versions['generation-ii'].crystal.front_shiny,
                e.sprites.versions['generation-ii'].crystal
                  .front_shiny_transparent,
                e.sprites.versions['generation-ii'].crystal.front_transparent,
                e.sprites.versions['generation-iii'].emerald.front_default,
                e.sprites.versions['generation-iii'].emerald.front_shiny,
                e.sprites.versions['generation-iii']['ruby-sapphire']
                  .back_default,
                e.sprites.versions['generation-iii']['ruby-sapphire']
                  .back_shiny,
                e.sprites.versions['generation-iii']['ruby-sapphire']
                  .front_default,
                e.sprites.versions['generation-iii']['ruby-sapphire']
                  .front_shiny,
                e.sprites.versions['generation-iii']['firered-leafgreen']
                  .back_default,
                e.sprites.versions['generation-iii']['firered-leafgreen']
                  .back_shiny,
                e.sprites.versions['generation-iii']['firered-leafgreen']
                  .front_default,
                e.sprites.versions['generation-iii']['firered-leafgreen']
                  .front_shiny,
                e.sprites.versions['generation-iv']['diamond-pearl']
                  .back_default,
                e.sprites.versions['generation-iv']['diamond-pearl'].back_shiny,
                e.sprites.versions['generation-iv']['diamond-pearl']
                  .front_default,
                e.sprites.versions['generation-iv']['diamond-pearl']
                  .front_shiny,
                e.sprites.versions['generation-iv'].platinum.back_default,
                e.sprites.versions['generation-iv'].platinum.back_shiny,
                e.sprites.versions['generation-iv'].platinum.front_default,
                e.sprites.versions['generation-iv'].platinum.front_shiny,
                e.sprites.versions['generation-iv']['heartgold-soulsilver']
                  .back_default,
                e.sprites.versions['generation-iv']['heartgold-soulsilver']
                  .back_shiny,
                e.sprites.versions['generation-iv']['heartgold-soulsilver']
                  .front_default,
                e.sprites.versions['generation-iv']['heartgold-soulsilver']
                  .front_shiny,
                e.sprites.versions['generation-v']['black-white'].back_default,
                e.sprites.versions['generation-v']['black-white'].back_shiny,
                e.sprites.versions['generation-v']['black-white'].front_default,
                e.sprites.versions['generation-v']['black-white'].front_shiny,
                e.sprites.versions['generation-v']['black-white'].animated
                  .back_default,
                e.sprites.versions['generation-v']['black-white'].animated
                  .back_shiny,
                e.sprites.versions['generation-v']['black-white'].animated
                  .front_default,
                e.sprites.versions['generation-v']['black-white'].animated
                  .front_shiny,
                e.sprites.versions['generation-vi']['x-y'].front_default,
                e.sprites.versions['generation-vi']['x-y'].front_shiny,
                e.sprites.versions['generation-vi']['omegaruby-alphasapphire']
                  .front_default,
                e.sprites.versions['generation-vi']['omegaruby-alphasapphire']
                  .front_shiny,
                e.sprites.versions['generation-vii'].icons.front_default,
                e.sprites.versions['generation-vii']['ultra-sun-ultra-moon']
                  .front_default,
                e.sprites.versions['generation-vii']['ultra-sun-ultra-moon']
                  .front_shiny,
                e.sprites.versions['generation-viii'].icons.front_default,
                e.sprites.versions['generation-viii'][
                  'brilliant-diamond-shining-pearl'
                ].front_default,
                e.sprites.versions['generation-ix']['scarlet-violet']
                  .front_default,
                e.sprites.back_default,
                e.sprites.back_female,
                e.sprites.back_shiny,
                e.sprites.back_shiny_female,
                e.sprites.front_default,
                e.sprites.front_female,
                e.sprites.front_shiny,
                e.sprites.front_shiny_female,
              ].filter((e) => e);
              return ARR.map((image) => {
                return (
                  <li key={image}>
                    <img
                      src={image || undefined}
                      style={{ maxHeight: '64px', maxWidth: '64px' }}
                    />
                  </li>
                );
              });
            })}
          </ul>
        </div>
      )}
      <footer style={{ textAlign: 'right' }}>
        <button
          className="btn btn-secondary"
          onClick={() => props.updateState_card_isDialogOpen(false)}
        >
          Close
        </button>
      </footer>
    </dialog>
  );
}

export default Card;
