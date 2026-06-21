import type { ICardListItemPokemon } from '../../../../../query/cardList/IPaginationCardList';
import {
  useCsvCardListActions,
  useCsvCardListItems,
} from '../../../../../store/slices/useCsvCardList/hook';
import styles from './CardListItemCsvCheckbox.module.css';

interface IPropsCardListItemCsvCheckbox {
  item: ICardListItemPokemon;
}

export default function CardListItemCsvCheckbox(
  props: IPropsCardListItemCsvCheckbox
) {
  const item = props.item;
  const csvItems = useCsvCardListItems();
  const { addItem, removeItem } = useCsvCardListActions();
  const CHECKED = csvItems.filter((e) => e.id == item.id).length > 0;

  return (
    <input
      className={styles.input}
      type="checkbox"
      onChange={() => (CHECKED ? removeItem(item) : addItem(item))}
      checked={CHECKED}
    />
  );
}
