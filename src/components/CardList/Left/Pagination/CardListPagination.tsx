import { useSearchParams } from 'react-router-dom';
import { useCardListState } from '../../../../store/useCardListState/useCardListState';
import styles from './../../CardList.module.css';
import type { ICardListPagination } from './ICardListPagination';

export default function CardListPagination(props: ICardListPagination) {
  const { pagination } = useCardListState();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  return (
    <ul className={styles.pagination}>
      {Array.from({ length: pagination.LAST_PAGE }).map((_, index) => {
        const ELEMENT_PAGE = index + 1;
        const IS_ACTIVE = ELEMENT_PAGE === Number(page);
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
      })}
    </ul>
  );
}
