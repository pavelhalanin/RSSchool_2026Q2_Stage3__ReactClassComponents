import type GlobalState from '../Main/GlobalState';

export interface ICardProps {
  pokemonId: number;
  isDialogOpen: boolean;
  updateState_card_isDialogOpen: (
    flag: Partial<GlobalState['card']['dialogIsOpen']>
  ) => void;
}
