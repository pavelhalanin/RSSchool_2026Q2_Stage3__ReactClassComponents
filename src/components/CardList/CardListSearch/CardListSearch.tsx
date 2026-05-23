import type { JSX } from 'react';
import Search from './Search/Search';
import ErrorButton from '../../ErrorButton/ErrorButton';
import styles from '../CardList.module.css';
import { useCardListState } from '../../../store/useCardListState/useCardListState';

export interface IPropsCardListSearch {
  page: string;
  setParams: (page: string, details: string) => void;
}

export default function CardListSearch(
  props: IPropsCardListSearch
): JSX.Element {
  const { generateFetchError } = useCardListState();

  return (
    <div className="container">
      <section className="section">
        <Search setParams={props.setParams} />
        <div className={styles.error_buttons__wrapper}>
          <ErrorButton />
          <button
            className="btn btn-danger"
            onClick={() => generateFetchError()}
          >
            Generate fetch error
          </button>
        </div>
      </section>
    </div>
  );
}
