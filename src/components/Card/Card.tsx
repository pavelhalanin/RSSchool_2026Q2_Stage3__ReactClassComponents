import React, { Component } from 'react';
import type GlobalState from '../Main/GlobalState';
import styles from './Card.module.css';

interface CardProps {
  state: GlobalState;
  updateState_errorBoundary: (exception: Error) => void;
  updateState_card_dialogIsOpen: (
    dialogIsOpen: Partial<GlobalState['card']['dialogIsOpen']>,
    pokemonId: Partial<GlobalState['card']['pokemonId']>
  ) => void;
}

class Card extends Component<CardProps, GlobalState> {
  private dialogRef = React.createRef<HTMLDialogElement>();
  componentDidUpdate(prevProps: CardProps) {
    if (
      this.props.state.card.dialogIsOpen &&
      !prevProps.state.card.dialogIsOpen
    ) {
      this.dialogRef.current?.showModal();
    } else if (
      !this.props.state.card.dialogIsOpen &&
      prevProps.state.card.dialogIsOpen
    ) {
      this.dialogRef.current?.close();
    }
  }

  render() {
    return (
      <dialog ref={this.dialogRef} className={styles.modal__wrapper}>
        <header>
          <h2>Pokémon #{this.props.state.card.pokemonId}</h2>
          <button
            className="btn btn-danger"
            onClick={() => this.props.updateState_card_dialogIsOpen(false, 0)}
          >
            x
          </button>
        </header>
        <div></div>
      </dialog>
    );
  }
}

export default Card;
