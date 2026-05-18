import type { JSX } from 'react';
import styles from '../../CardList.module.css';
import CardListPagination from './../Pagination/CardListPagination';
import type { ICardListPokemons } from './ICardListPokemons';
import PokemonHelper from '../../../../utils/PokemonHelper';

export default function CardListPokemons(
  props: ICardListPokemons
): JSX.Element {
  if (props.pagination.fetchError) {
    return (
      <>
        <h1 className="h1">Pokémon Collection</h1>
        <div className="alert alert-danger">
          <div>{props.pagination.fetchError}</div>
          <button
            className="btn btn-success"
            onClick={() => props.fetchPokemons()}
          >
            Repeat load fetch
          </button>
        </div>
      </>
    );
  }

  if (props.pagination.isFetch) {
    return (
      <>
        <h1 className="h1">Pokémon Collection</h1>
        <div className={styles.spinner__wrapper}>Pokémon Collection</div>
      </>
    );
  }

  if (props.pagination.items.length === 0) {
    return (
      <>
        <h1 className="h1">Pokémon Collection</h1>
        <div className="alert alert-danger">
          No Pokémon found by search ({props.searchPrev}) on page {props.page}.
          Please enter a different search term and click the search button.
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="h1">Pokémon Collection</h1>
      <ul className={styles.card_list}>
        {props.pagination.items.map((pokemon) => {
          const POKEMON_ID: number = Number(pokemon.id);
          const POKEMON_IMAGE: string =
            PokemonHelper.getMainImage_byPokemonId(POKEMON_ID);
          return (
            <li key={POKEMON_ID} className="pokemon-card">
              <button
                onClick={() => {
                  props.setParams(props.page, `${POKEMON_ID}`);
                }}
              >
                <div className={styles.card_list__image_block}>
                  <img
                    src={POKEMON_IMAGE}
                    alt={pokemon.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).title =
                        `Не удалось загрузить фото\n${POKEMON_IMAGE}`;
                    }}
                  />
                </div>
                <h2 className={styles.card_list__pokemon_id}>#{pokemon.id}</h2>
                <h3>{pokemon.name}</h3>
                <div>
                  {pokemon.weight} x {pokemon.height}
                </div>
                <ul className={styles.pokemon__types}>
                  {pokemon.pokemontypes.map((e) => {
                    return <li key={e.type.name}>{e.type.name}</li>;
                  })}
                </ul>
              </button>
            </li>
          );
        })}
      </ul>
      <CardListPagination
        page={props.page}
        pagination={props.pagination}
        setParams={props.setParams}
      />
    </>
  );
}
