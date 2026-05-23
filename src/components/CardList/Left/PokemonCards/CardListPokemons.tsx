import type { JSX } from 'react';
import styles from '../../CardList.module.css';
import CardListPagination from './../Pagination/CardListPagination';
import { useCardListState } from '../../../../store/useCardListState/useCardListState';
import { useSearchParams } from 'react-router-dom';
import { getPokemonSrcImage_byId } from '../../../../utils/getPokemonSrcImage_byId';

export interface IPropsCardListPokemons {
  page: string;
  setParams: (page: null | string, details: string) => void;
}

export default function CardListPokemons(
  props: IPropsCardListPokemons
): JSX.Element {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const { errorFetch, fetchPokemons, isFetch, items, prevSearch } =
    useCardListState();

  if (errorFetch) {
    return (
      <div className="alert alert-danger">
        <div>{errorFetch}</div>
        <button className="btn btn-success" onClick={() => fetchPokemons()}>
          Repeat load fetch
        </button>
      </div>
    );
  }

  if (isFetch) {
    return (
      <>
        <h1 className="h1">Pokémon Collection</h1>
        <div className={styles.spinner__wrapper}>Pokémon Collection</div>
      </>
    );
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
                  props.setParams(page, `${POKEMON_ID}`);
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
      <CardListPagination setParams={props.setParams} />
    </>
  );
}
