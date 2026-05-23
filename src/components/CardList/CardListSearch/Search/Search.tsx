import type { JSX } from 'react';
import styles from './Search.module.css';
import { useCardListState } from '../../../../store/useCardListState/useCardListState';

export interface IPropsSearch {
  setParams: (page: string, details: string) => void;
}

export default function Search(props: IPropsSearch): JSX.Element {
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
