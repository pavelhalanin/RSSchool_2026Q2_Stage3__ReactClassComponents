import type { JSX } from 'react';
import CardListInit from '../CardListInit';
import Search from '../../Search/Search';
import ErrorButton from '../../ErrorButton/ErrorButton';
import styles from '../CardList.module.css';
import type { ICardListSearch } from './ICardListSearch';

export default function CardListSearch(props: ICardListSearch): JSX.Element {
  const generateFetchError = () => {
    props.setPagination({
      pagination: CardListInit.getInitPagination(),
      items: [],
      isFetch: false,
      fetchError: 'Custom test error HTTP 400-500',
    });
  };

  return (
    <div className="container">
      <section className="section">
        <Search
          search={props.search}
          fetchPokemons={props.fetchPokemons}
          updateState_search={props.setSearch}
          setParams={props.setParams}
        />
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
