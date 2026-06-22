import { ReactNode, type JSX } from 'react';
import { useParams } from 'next/navigation';
import styles from './CardList.module.css';
import CsvPanel from '../CsvPanel/CsvPanel';
import ContainerSection from '../ContainerSection/ContainerSection';
import CardListItems from './CardListItems/CardListItems';
import Search from './Search/Search';

interface IPropsCardList {
  children: ReactNode;
}

export default function CardList(props: IPropsCardList): JSX.Element {
  const { details } = useParams();

  return (
    <>
      <ContainerSection>
        <Search />
      </ContainerSection>
      <ContainerSection>
        <div className={styles.card_list__blocks}>
          <div className={styles.card_list__left_block}>
            <h1 className="h1">Pokémon Collection</h1>
            <CardListItems />
          </div>
          <div
            className={`${styles.card_list__right_block} ${details !== null && details !== undefined && details !== 'undefined' ? styles['card_list__right_block--open'] : ''}`}
          >
            {props.children}
          </div>
        </div>
      </ContainerSection>
      <CsvPanel />
    </>
  );
}
