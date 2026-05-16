import type { ISearchProps } from './ISearchProps';
import styles from './Search.module.css';

export default function Search(props: ISearchProps) {
  return (
    <div className={styles.search__wrapper}>
      <input
        type="search"
        value={props.search}
        onChange={(e) => {
          props.updateState_search(e.target.value);
        }}
      />
      <button className="btn btn-success" onClick={() => props.fetchPokemons()}>
        Search
      </button>
    </div>
  );
}
