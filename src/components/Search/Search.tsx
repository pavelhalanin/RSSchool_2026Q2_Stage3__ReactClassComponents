import styles from './Search.module.css';
import type GlobalState from '../Main/GlobalState';

interface SearchProps {
  search: string;
  fetchPokemons: () => void;
  updateState_search: (search: Partial<GlobalState['search']>) => void;
}

export default function Search(props: SearchProps) {
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
