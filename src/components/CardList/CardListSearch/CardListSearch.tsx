import type { JSX } from 'react';
import Search from './Search/Search';
import ErrorButton from '../../ErrorButton/ErrorButton';
import styles from '../CardList.module.css';
import ContainerSection from '../../ContainerSection/ContainerSection';
import { useCardListActions } from '../../../store/slices/useCardListState/hook';

export default function CardListSearch(): JSX.Element {
  const { generateFetchError } = useCardListActions();

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
