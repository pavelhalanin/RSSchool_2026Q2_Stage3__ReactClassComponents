import type { JSX } from 'react';
import styles from './Search.module.css';
import { useCardListState } from '../../../../store/slices/useCardListState/useCardListState';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';

export default function Search(): JSX.Element {
  const { pokemonNavigation } = usePokemonNavigation();
  const { search, prevSearch, errorFetch, setSearch, fetchPokemons } =
    useCardListState();

  return (
    <div className={styles.search__wrapper}>
      <input
        type="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="btn btn-success"
        onClick={() => {
          pokemonNavigation({ page: 1 });
          fetchPokemons();
        }}
        disabled={!errorFetch && search === prevSearch}
      >
        Search
      </button>
    </div>
  );
}
