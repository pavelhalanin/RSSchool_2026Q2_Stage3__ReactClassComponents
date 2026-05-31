import { type JSX } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styles from './CardList.module.css';
import { usePokemonNavigation } from '../../hook/usePokemonNavigation/usePokemonNavigation';
import CsvPanel from '../CsvPanel/CsvPanel';
import ContainerSection from '../ContainerSection/ContainerSection';
import CardListItems from './CardListItems/CardListItems';
import Search from './Search/Search';

export default function CardList(): JSX.Element {
  const { pokemonNavigation } = usePokemonNavigation();
  const { page, details } = useParams();

  const isPositiveNumber = (str: undefined | string) => {
    return `${str}`.match(/\d+(?:\.\d+)?/g);
  };

  if (!isPositiveNumber(page)) {
    pokemonNavigation({ page: 1 });
    return <></>;
  }

  if (details == '') {
    pokemonNavigation({ page });
    return <></>;
  }

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
            className={`${styles.card_list__right_block} ${details !== null && details !== undefined ? styles['card_list__right_block--open'] : ''}`}
          >
            <Outlet />
          </div>
        </div>
      </ContainerSection>
      <CsvPanel />
    </>
  );
}
