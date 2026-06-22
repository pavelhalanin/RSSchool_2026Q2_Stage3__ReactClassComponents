'use client';

import styles from './CardListLeftRightPagination.module.css';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';
import type { JSX } from 'react';
import { useParams } from 'next/navigation';
import CardListLeftButton from './CardListLeftButton/CardListLeftButton';
import CardListRightButton from './CardListRightButton/CardListRightButton';

interface IPropsCardListLeftRightPagination {
  lastPage: number;
  currentPage: number;
}

export default function CardListLeftRightPagination(
  props: IPropsCardListLeftRightPagination
): JSX.Element {
  const { details } = useParams();
  const { pokemonNavigation } = usePokemonNavigation();

  const CURRENT_PAGE = props.currentPage;
  const PREV_PAGE = CURRENT_PAGE - 1;
  const NEXT_PAGE = CURRENT_PAGE + 1;
  const LAST_PAGE = props.lastPage;

  return (
    <ul className={styles.pages}>
      <li>
        <CardListLeftButton prevPage={PREV_PAGE} />
      </li>
      <li>
        <button
          onClick={() =>
            pokemonNavigation({ page: CURRENT_PAGE, details: `${details}` })
          }
        >
          {CURRENT_PAGE}
        </button>
      </li>
      <li>
        <CardListRightButton lastPage={LAST_PAGE} nextPage={NEXT_PAGE} />
      </li>
    </ul>
  );
}
