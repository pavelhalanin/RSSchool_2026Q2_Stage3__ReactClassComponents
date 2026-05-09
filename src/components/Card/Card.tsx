import React, { Component } from 'react';
import type GlobalState from '../Main/GlobalState';
import styles from './Card.module.css';
import sleep from '../../utils/sleep';

interface CardProps {
  state: GlobalState;
  updateState_errorBoundary: (exception: string) => void;
  updateState_card: (card: Partial<GlobalState['card']>) => void;
  updateState_cardList: (CardList: Partial<GlobalState['cardList']>) => void;
}

class Card extends Component<CardProps, GlobalState> {
  private dialogRef = React.createRef<HTMLDialogElement>();
  componentDidUpdate(prevProps: CardProps) {
    const IS_OPEN_MODAL =
      this.props.state.card.dialogIsOpen && !prevProps.state.card.dialogIsOpen;

    if (IS_OPEN_MODAL) {
      this.dialogRef.current?.showModal();
      this.fetchPokemons();
      return;
    }

    const IS_CLOSE_MODAL =
      !this.props.state.card.dialogIsOpen && prevProps.state.card.dialogIsOpen;

    if (IS_CLOSE_MODAL) {
      this.dialogRef.current?.close();
      return;
    }
  }

  fetchPokemons = async () => {
    try {
      this.props.updateState_card({
        isFetchNow: true,
        pokemon: null,
      });

      await sleep(300);

      const GRAPHQL = `
          query MyQuery {
            pokemon(where: {name: {}, id: {_eq: ${this.props.state.card.pokemonId}}}) {
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

        this.props.updateState_cardList({
          pokemons: [],
          isFetchNow: false,
          errorFetch: MESSAGE,
        });

        return;
      }

      if (HTTP_STATUS !== 200) {
        const TEXT = await RESPONSE.text();
        const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;

        this.props.updateState_cardList({
          pokemons: [],
          isFetchNow: false,
          errorFetch: MESSAGE,
        });

        return;
      }

      const DATA = await RESPONSE.json();

      const POKEMON: GlobalState['card']['pokemon'] = DATA.data.pokemon[0];

      this.props.updateState_card({
        isFetchNow: false,
        pokemon: POKEMON,
      });
    } catch (exception) {
      this.props.updateState_errorBoundary(String(exception));
    }
  };

  render() {
    const POKEMON = this.props.state.card.pokemon;
    return (
      <dialog ref={this.dialogRef} className={styles.modal__wrapper}>
        <header>
          <h2>Pokémon #{this.props.state.card.pokemonId}</h2>
          <button
            className="btn btn-danger"
            onClick={() =>
              this.props.updateState_card({
                dialogIsOpen: false,
                pokemonId: 0,
                isFetchNow: false,
                pokemon: null,
              })
            }
          >
            x
          </button>
        </header>
        {this.props.state.card.isFetchNow ? (
          <div>
            <div className="alert alert-info">Load Pokemon Data</div>
          </div>
        ) : !POKEMON ? (
          ''
        ) : (
          <div>
            <div className={styles.card__name}>{POKEMON.name}</div>
            <ul className={styles.card__audio}>
              {POKEMON.pokemoncries?.map((e) => {
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
              {POKEMON.pokemonsprites.map((e) => {
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
                  e.sprites.versions['generation-i']['red-blue']
                    .back_transparent,
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
                  e.sprites.versions['generation-iv']['diamond-pearl']
                    .back_shiny,
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
                  e.sprites.versions['generation-v']['black-white']
                    .back_default,
                  e.sprites.versions['generation-v']['black-white'].back_shiny,
                  e.sprites.versions['generation-v']['black-white']
                    .front_default,
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
            onClick={() =>
              this.props.updateState_card({
                dialogIsOpen: false,
                pokemonId: 0,
                isFetchNow: false,
                pokemon: null,
              })
            }
          >
            Close
          </button>
        </footer>
      </dialog>
    );
  }
}

export default Card;
