import { useEffect, type JSX } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import CardListSearch from './CardListSearch/CardListSearch';
import CardListPokemons from './Left/PokemonCards/CardListPokemons';
import styles from './CardList.module.css';
import { usePokemonNavigation } from '../../hook/usePokemonNavigation/usePokemonNavigation';
import CsvPanel from '../CsvPanel/CsvPanel';
import ContainerSection from '../ContainerSection/ContainerSection';
import { useCardListActions } from '../../store/slices/useCardListState/hook';

export default function CardList(): JSX.Element {
  const { pokemonNavigation } = usePokemonNavigation();
  const { page, details } = useParams();
  const { fetchPokemons, setPage } = useCardListActions();

  const isPositiveNumber = (str: undefined | string) => {
    return `${str}`.match(/\d+(?:\.\d+)?/g);
  };

  useEffect(() => {
    setPage(page);
    fetchPokemons();
  }, [page, fetchPokemons, setPage]);

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
      <CardListSearch />
      <ContainerSection>
        <div className={styles.card_list__blocks}>
          <div className={styles.card_list__left_block}>
            <h1 className="h1">Pokémon Collection</h1>
            <CardListPokemons />
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
