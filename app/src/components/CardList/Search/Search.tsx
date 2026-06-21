import type { JSX } from 'react';
import styles from './Search.module.css';
import { usePokemonNavigation } from '../../../hook/usePokemonNavigation/usePokemonNavigation';
import {
  useSearchActions,
  useSearchPrevValue,
  useSearchValue,
} from '../../../store/slices/useSearch/hook';

export default function Search(): JSX.Element {
  const { pokemonNavigation } = usePokemonNavigation();
  const search = useSearchValue();
  const prevSearch = useSearchPrevValue();

  const { setSearch, setSubmitedSearch } = useSearchActions();

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
          setSubmitedSearch(search);
        }}
        disabled={search === prevSearch}
      >
        Search
      </button>
    </div>
  );
}
