import type { JSX } from 'react';
import styles from '../../CardList.module.css';
import CardListPagination from './../Pagination/CardListPagination';
import { useCardListState } from '../../../../store/useCardListState/useCardListState';
import { useParams } from 'react-router-dom';
import { getPokemonSrcImage_byId } from '../../../../utils/getPokemonSrcImage_byId';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';

export default function CardListPokemons(): JSX.Element {
  const { pokemonNavigation } = usePokemonNavigation();
  const { page } = useParams();
  const { errorFetch, fetchPokemons, isFetch, items, prevSearch } =
    useCardListState();

  if (errorFetch) {
    return (
      <div className="alert alert-danger">
        <p>{errorFetch}</p>
        <button className="btn btn-success" onClick={() => fetchPokemons()}>
          Repeat load fetch
        </button>
      </div>
    );
  }

  if (isFetch) {
    return <div className={styles.spinner__wrapper}>Pokémon Collection</div>;
  }

  if (items.length === 0) {
    return (
      <div className="alert alert-danger">
        No Pokémon found by search ({prevSearch}) on page {page}. Please enter a
        different search term and click the search button.
      </div>
    );
  }

  return (
    <>
      <ul className={styles.card_list}>
        {items.map((pokemon) => {
          const POKEMON_ID: number = Number(pokemon.id);
          const POKEMON_IMAGE: string = getPokemonSrcImage_byId(POKEMON_ID);
          return (
            <li key={POKEMON_ID} className="pokemon-card">
              <button
                onClick={() => {
                  pokemonNavigation({ page, details: `${POKEMON_ID}` });
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
      <CardListPagination />
    </>
  );
}
