import { Component } from 'react';
import styles from './Search.module.css';
import type GlobalState from '../Main/GlobalState';

interface SearchProps {
  state: GlobalState;
  fetchPokemons: () => void;
  updateState_errorBoundary: (exception: Error) => void;
  updateState_cardList: (CardList: Partial<GlobalState['cardList']>) => void;
  updateState_search: (search: Partial<GlobalState['search']>) => void;
}

class Search extends Component<SearchProps, GlobalState> {
  render() {
    return (
      <div className={styles.search__wrapper}>
        <input
          type="search"
          value={this.props.state.search}
          onChange={(e) => {
            this.props.updateState_search(e.target.value);
          }}
        />
        <button
          className="btn btn-success"
          onClick={() => this.props.fetchPokemons()}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
