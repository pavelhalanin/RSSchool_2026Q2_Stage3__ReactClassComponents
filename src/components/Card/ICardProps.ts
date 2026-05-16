export interface ICardProps {
  pokemonId: number;
  isDialogOpen: boolean;
  updateState_card_isDialogOpen: (flag: boolean) => void;
}
