import { Component } from 'react';
import CardList from '../CardList/CardList';
import type GlobalState from './GlobalState';
import styles from './Main.module.css';

class Main extends Component<Record<string, never>, GlobalState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      errorBoundary: null,
      cardList: {
        pokemons: [],
        isFetchNow: false,
        errorFetch: null,
      },
    };
  }

  updateState_errorBoundary = (exception: Error) => {
    console.log(exception);

    this.setState(() => ({
      errorBoundary: `${exception}`,
    }));
  };

  updateState_cardList = (newCardList: Partial<GlobalState['cardList']>) => {
    this.setState((prevState) => ({
      cardList: {
        ...prevState.cardList,
        ...newCardList,
      },
    }));
  };

  emulateCustomError() {
    try {
      throw new Error('Custom Error Boundary generated for Fallback UI');
    } catch (exception) {
      if (exception instanceof Error) {
        this.updateState_errorBoundary(exception);
      } else {
        this.updateState_errorBoundary(new Error(String(exception)));
      }
    }
  }

  render() {
    if (this.state.errorBoundary) {
      return (
        <div className={styles.falbackUI__wrapper}>
          <div className="alert alert-danger">
            <h2>Fallback UI</h2>
            {this.state.errorBoundary}
          </div>
        </div>
      );
    }

    return (
      <>
        <CardList
          state_cardList={this.state.cardList}
          updateState_errorBoundary={this.updateState_errorBoundary}
          updateState_cardList={this.updateState_cardList}
        />
      </>
    );
  }
}

export default Main;
