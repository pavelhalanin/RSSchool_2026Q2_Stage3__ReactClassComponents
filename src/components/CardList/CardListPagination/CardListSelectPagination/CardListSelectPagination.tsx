import styles from './CardListSelectPagination.module.css';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';
import type { JSX } from 'react';
import { useParams } from 'react-router-dom';

interface IPropsCardListSelectPagination {
  lastPage: number;
  currentPage: number;
}

export default function CardListSelectPagination(
  props: IPropsCardListSelectPagination
): JSX.Element {
  const { details } = useParams();
  const { pokemonNavigation } = usePokemonNavigation();

  const CURRENT_PAGE = props.currentPage;
  const LAST_PAGE = props.lastPage;

  const PAGES = Array.from({ length: LAST_PAGE }).map((_, i) => i + 1);

  const ID_SELECT = 'CARD_LIST_SELECT_PAGINATION';

  return (
    <div className={styles.select_block}>
      <label htmlFor={ID_SELECT}>Page</label>
      <select
        id={ID_SELECT}
        className={styles.select}
        onChange={(event) =>
          pokemonNavigation({ page: event.target.value, details })
        }
      >
        <option value="1">-</option>
        {PAGES.map((PAGE_I) => {
          const IS_ACTIVE = CURRENT_PAGE == PAGE_I;
          return (
            <option key={PAGE_I} value={PAGE_I} selected={IS_ACTIVE}>
              {PAGE_I}
            </option>
          );
        })}
      </select>
    </div>
  );
}
