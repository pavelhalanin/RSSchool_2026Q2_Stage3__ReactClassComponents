import { useEffect, type JSX } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardListSearch from './CardListSearch/CardListSearch';
import CardListPokemons from './Left/PokemonCards/CardListPokemons';
import styles from './CardList.module.css';
import { CardListRight } from './Right/CardListRight';
import { useCardListState } from '../../store/useCardListState/useCardListState';

export default function CardList(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const details = searchParams.get('details');
  const { fetchPokemons, setPage } = useCardListState();

  const setParams = (page: null | string, details: string | null) => {
    setSearchParams({
      page: page ? page : '',
      ...(details && { details }),
    });
  };

  const isPositiveNumber = (str: number | string) => {
    return `${str}`.match(/\d+(?:\.\d+)?/g);
  };

  useEffect(() => {
    setPage(page);
    fetchPokemons();
  }, [page, fetchPokemons, setPage]);

  if (!isPositiveNumber(page)) {
    setParams('1', null);
    return <></>;
  }

  if (details == '') {
    setParams(page, null);
    return <></>;
  }

  return (
    <>
      <CardListSearch page={page} setParams={setParams} />
      <div className="container">
        <section className="section">
          <div className={styles.card_list__blocks}>
            <div className={styles.card_list__left_block}>
              <h1 className="h1">Pokémon Collection</h1>
              <CardListPokemons page={page} setParams={setParams} />
            </div>
            <div
              className={`${styles.card_list__right_block} ${details !== null ? styles['card_list__right_block--open'] : ''}`}
            >
              <CardListRight setParams={setParams} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
