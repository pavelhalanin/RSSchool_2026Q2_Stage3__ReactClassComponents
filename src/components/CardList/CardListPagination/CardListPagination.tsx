'use client';

import { useParams } from 'next/navigation';
import CardListLeftRightPagination from './CardListLeftRightPagination/CardListLeftRightPagination';
import CardListSelectPagination from './CardListSelectPagination/CardListSelectPagination';
import type { JSX } from 'react';
import styles from './CardListPagination.module.css';

interface IPropsCardListPagination {
  limit: number;
  counttItems: number;
}

export default function CardListPagination(
  props: IPropsCardListPagination
): JSX.Element {
  const { page } = useParams();

  const CURRENT_PAGE = Number(page);
  const COUNT_ITEMS = props.counttItems;
  const LIMIT = props.limit;
  const LAST_PAGE = Math.ceil(COUNT_ITEMS / LIMIT);

  return (
    <div className={styles.wrapper}>
      <div></div>
      <CardListLeftRightPagination
        lastPage={LAST_PAGE}
        currentPage={CURRENT_PAGE}
      />
      <CardListSelectPagination
        lastPage={LAST_PAGE}
        currentPage={CURRENT_PAGE}
      />
    </div>
  );
}
