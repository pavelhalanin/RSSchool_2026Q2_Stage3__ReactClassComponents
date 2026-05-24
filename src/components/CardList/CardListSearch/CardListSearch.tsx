import type { JSX } from 'react';
import Search from './Search/Search';
import ErrorButton from '../../ErrorButton/ErrorButton';
import styles from '../CardList.module.css';
import { useCardListState } from '../../../store/slices/useCardListState/useCardListState';
import ContainerSection from '../../ContainerSection/ContainerSection';

export default function CardListSearch(): JSX.Element {
  const { generateFetchError } = useCardListState();

  return (
    <ContainerSection>
      <Search />
      <div className={styles.error_buttons__wrapper}>
        <ErrorButton />
        <button className="btn btn-danger" onClick={() => generateFetchError()}>
          Generate fetch error
        </button>
      </div>
    </ContainerSection>
  );
}
