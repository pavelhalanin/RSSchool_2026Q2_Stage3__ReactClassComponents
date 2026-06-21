import type { JSX } from 'react';
import { useParams } from 'react-router-dom';
import FetchSpinner from '../../FetchSpinner/FetchSpinner';
import AlertDanger from '../../AlertDanger/AlertDanger';
import { useQuery } from '@tanstack/react-query';
import CardListPagination from '../CardListPagination/CardListPagination';
import { usePokemonNavigation } from '../../../hook/usePokemonNavigation/usePokemonNavigation';
import CardListItem from './CardListItem/CardListItem';
import styles from './CardListItems.module.css';
import { useSubmitedSearchValue } from '../../../store/slices/useSearch/hook';
import getCardListFetch from '../../../query/cardList/getCardListFetch';

export default function CardListItems(): JSX.Element {
  const { page } = useParams();
  const submitedSearchValue = useSubmitedSearchValue();
  const { pokemonNavigation } = usePokemonNavigation();
  const LIMIT = 8;

  const { data, error, isError, isFetching, refetch } = useQuery({
    queryKey: ['cards', page, submitedSearchValue],
    queryFn: () =>
      getCardListFetch({
        limit: LIMIT,
        page: page,
        search: submitedSearchValue,
      }),
    staleTime: Number(import.meta.env.VITE_CARD_LIST_STALE_TIME) || 10000,
    gcTime: Number(import.meta.env.VITE_CARD_LIST_GC_TIME) || 20000,
    retry: false,
  });

  if (Number(page) <= 0) {
    pokemonNavigation({ page: 1 });
    return <></>;
  }

  if (isFetching) {
    return <FetchSpinner>Loading Card List</FetchSpinner>;
  }

  if (isError) {
    return (
      <AlertDanger>
        <p>{`${error}`}</p>
        <button className="btn btn-success" onClick={() => refetch()}>
          Repeat load fetch
        </button>
      </AlertDanger>
    );
  }

  if (!data) {
    return <></>;
  }

  const CARD_LIST = data.data.pokemon;
  const COUNT_ITEMS = data.data.pokemon_aggregate.aggregate.count;

  if (CARD_LIST.length == 0 && page !== '1') {
    pokemonNavigation({ page: 1 });
    return <></>;
  }

  if (CARD_LIST.length == 0) {
    return <AlertDanger>No Pokemons found</AlertDanger>;
  }

  return (
    <>
      <CardListPagination counttItems={COUNT_ITEMS} limit={LIMIT} />
      <ul className={styles.items}>
        {CARD_LIST.map((e) => {
          return <CardListItem key={`${e.id}`} item={e} />;
        })}
      </ul>
    </>
  );
}
