import styles from './../../CardList.module.css';
import type { ICardListPagination } from './ICardListPagination';

export default function CardListPagination(props: ICardListPagination) {
  return (
    <ul className={styles.pagination}>
      {Array.from({ length: props.pagination.pagination.LAST_PAGE }).map(
        (_, index) => {
          const ELEMENT_PAGE = index + 1;
          const IS_ACTIVE = ELEMENT_PAGE === Number(props.page);
          return (
            <li key={ELEMENT_PAGE}>
              <button
                onClick={() => {
                  props.setParams(`${ELEMENT_PAGE}`, '');
                }}
                className={IS_ACTIVE ? styles.pagination__active : ''}
              >
                {ELEMENT_PAGE}
              </button>
            </li>
          );
        }
      )}
    </ul>
  );
}
