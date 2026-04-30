import { Component } from 'react';
import styles from './Search.module.css';
import type GlobalState from '../Main/GlobalState';
import sleep from '../../utils/sleep';

interface SearchProps {
  state: GlobalState;
  updateState_errorBoundary: (exception: Error) => void;
  updateState_cardList: (CardList: Partial<GlobalState['cardList']>) => void;
  updateState_search: (search: Partial<GlobalState['search']>) => void;
}

class Search extends Component<SearchProps, GlobalState> {
  async onSearchClick() {
    try {
      this.props.updateState_cardList({
        pokemons: [],
        isFetchNow: true,
        errorFetch: null,
      });

      await sleep(1000);

      const URL_ = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20000`;
      const RESPONSE = await fetch(URL_);

      const HTTP_STATUS = RESPONSE.status;

      if (HTTP_STATUS >= 400 && HTTP_STATUS <= 599) {
        const TEXT = await RESPONSE.text();
        throw new Error(`HTTP ${HTTP_STATUS}\n${TEXT}`);
      }

      if (HTTP_STATUS !== 200) {
        const TEXT = await RESPONSE.text();
        throw new Error(`HTTP ${HTTP_STATUS}\n${TEXT}`);
      }

      const DATA = await RESPONSE.json();

      const POKEMONS = (DATA.results || []).filter(Boolean);

      const SEARCH = this.props.state.search;

      this.props.updateState_cardList({
        pokemons: POKEMONS.filter(
          (e: Partial<GlobalState['cardList']['pokemons'][number]>) => {
            return `${e.name}`
              .toLowerCase()
              .includes(`${SEARCH}`.toLowerCase());
          }
        ),
        isFetchNow: false,
        errorFetch: null,
      });
    } catch (exception) {
      if (exception instanceof Error) {
        this.props.updateState_errorBoundary(exception);
      } else {
        this.props.updateState_errorBoundary(new Error(String(exception)));
      }
    }
  }

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
          onClick={() => this.onSearchClick()}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
