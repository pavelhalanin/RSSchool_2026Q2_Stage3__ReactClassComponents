import { Component } from 'react';
import CardList from '../CardList/CardList';
import type GlobalState from './GlobalState';

class Main extends Component<Record<string, never>, GlobalState> {
  constructor(props: Record<string, never>) {
    super(props);

    const SEARCH = localStorage.getItem('search') || '';
    localStorage.setItem('search', SEARCH);

    this.state = {
      search: SEARCH,
      searchPrev: null,
      cardList: {
        pokemons: [],
        isFetchNow: false,
        errorFetch: null,
      },
      card: {
        dialogIsOpen: false,
        pokemonId: 0,
        isFetchNow: false,
        pokemon: null,
      },
    };
  }

  updateState_cardList = (newCardList: Partial<GlobalState['cardList']>) => {
    this.setState((prevState) => ({
      cardList: {
        ...prevState.cardList,
        ...newCardList,
      },
    }));
  };

  updateState_search = (search: Partial<GlobalState['search']>) => {
    this.setState(() => ({
      search,
    }));
  };

  updateState_searchPrev = (searchPrev: Partial<GlobalState['searchPrev']>) => {
    this.setState(() => ({
      searchPrev,
    }));
  };

  updateState_card_dialogIsOpen = (
    dialogIsOpen: Partial<GlobalState['card']['dialogIsOpen']>,
    pokemonId: Partial<GlobalState['card']['pokemonId']>
  ) => {
    this.setState((prev) => ({
      card: {
        ...prev.card,
        dialogIsOpen,
        pokemonId,
      },
    }));
  };

  updateState_card_pokemon = (pokemon: GlobalState['card']['pokemon']) => {
    this.setState((prev) => ({
      card: {
        ...prev.card,
        pokemon: pokemon,
      },
    }));
  };

  updateState_card = (card: Partial<GlobalState['card']>) => {
    this.setState((prev) => ({
      card: {
        ...prev.card,
        ...card,
      },
    }));
  };

  render() {
    return (
      <CardList
        state={this.state}
        updateState_cardList={this.updateState_cardList}
        updateState_search={this.updateState_search}
        updateState_card={this.updateState_card}
        updateState_searchPrev={this.updateState_searchPrev}
      />
    );
  }
}

export default Main;
