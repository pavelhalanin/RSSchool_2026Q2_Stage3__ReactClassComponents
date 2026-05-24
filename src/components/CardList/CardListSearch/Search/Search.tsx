import type { JSX } from 'react';
import styles from './Search.module.css';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';
import {
  useCardListActions,
  useCardListErrorFetch,
  useCardListPrevSearch,
  useCardListSearch,
} from '../../../../store/slices/useCardListState/hook';

export default function Search(): JSX.Element {
  const { pokemonNavigation } = usePokemonNavigation();
  const search = useCardListSearch();
  const prevSearch = useCardListPrevSearch();
  const errorFetch = useCardListErrorFetch();
  const { setSearch, fetchPokemons } = useCardListActions();

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
