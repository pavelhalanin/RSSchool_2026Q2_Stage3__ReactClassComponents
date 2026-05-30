import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import getCardFetch from '../../../query/card/getCardFetch';
import FetchSpinner from '../../FetchSpinner/FetchSpinner';
import AlertDanger from '../../AlertDanger/AlertDanger';
import CardMainData from './CardMainData/CardMainData';
import styles from './../../CardList/CardList.module.css';
import CardCries from './CardCries/CardCries';
import CardSprites from './CardSprites/CardSprites';

export default function CardContent() {
  const queryClient = useQueryClient();

  const { details } = useParams();

  const { data, error, isError, isFetching, refetch } = useQuery({
    queryKey: ['card', details],
    queryFn: () => getCardFetch(details),
    staleTime: Number(import.meta.env.VITE_STALE_TIME) || 10000,
    gcTime: Number(import.meta.env.VITE_GC_TIME) || 20000,
    retry: false,
  });

  function clearCacheAndReload() {
    queryClient.removeQueries({ queryKey: ['card', `${details}`] });
    refetch();
  }

  if (isFetching) {
    return <FetchSpinner>Loading Card</FetchSpinner>;
  }

  if (isError) {
    return (
      <AlertDanger>
        <p>{`${error}`}</p>
        <button className="btn btn-success" onClick={() => refetch()}>
          Refetch
        </button>
      </AlertDanger>
    );
  }

  return (
    <div>
      <div className={styles.card_list__right_block_buttons}>
        <button
          className="btn btn-success"
          onClick={clearCacheAndReload}
          title={`Clear cache for card #${details} and refetch card #${details}`}
        >
          Reload
        </button>
        <button
          className="btn btn-success"
          onClick={() => queryClient.removeQueries({ queryKey: ['card'] })}
        >
          Clear all cards cache
        </button>
      </div>
      <CardMainData data={data} />
      <CardCries data={data} />
      <CardSprites data={data} />
    </div>
  );
}
