import { useParams } from 'react-router-dom';
import styles from './../../CardList.module.css';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';
import { useCardListPagination } from '../../../../store/slices/useCardListState/hook';

export default function CardListPagination() {
  const { pokemonNavigation } = usePokemonNavigation();
  const pagination = useCardListPagination();
  const { page } = useParams();

  return (
    <ul className={styles.pagination}>
      {Array.from({ length: pagination.LAST_PAGE }).map((_, index) => {
        const ELEMENT_PAGE = index + 1;
        const IS_ACTIVE = ELEMENT_PAGE === Number(page);
        return (
          <li key={ELEMENT_PAGE}>
            <button
              onClick={() => {
                pokemonNavigation({ page: `${ELEMENT_PAGE}` });
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
