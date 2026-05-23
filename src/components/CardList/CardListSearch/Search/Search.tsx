import type { JSX } from 'react';
import type { ISearchProps } from './ISearchProps';
import styles from './Search.module.css';
import { useCardListState } from '../../../../store/useCardListState/useCardListState';

export default function Search(props: ISearchProps): JSX.Element {
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
          props.setParams('1', '');
          fetchPokemons();
        }}
        disabled={!errorFetch && search === prevSearch}
      >
        Search
      </button>
    </div>
  );
}
