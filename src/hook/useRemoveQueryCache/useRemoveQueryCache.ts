import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useRemoveQueryCache = () => {
  const { page, details } = useParams();
  const queryClient = useQueryClient();

  const removeAllQueryCache = () => {
    queryClient.removeQueries({ queryKey: [] });
  };

  const removeAllQueryCardCache = () => {
    queryClient.removeQueries({ queryKey: ['card'] });
  };

  const removeQueryCardCacheForDetails = () => {
    queryClient.removeQueries({ queryKey: ['card', details] });
  };

  const removeAllQueryCardsCache = () => {
    queryClient.removeQueries({ queryKey: ['cards'] });
  };

  const removeAllQueryCardsCacheForPage = () => {
    queryClient.removeQueries({ queryKey: ['cards', page] });
  };

  return {
    removeAllQueryCache,
    removeAllQueryCardCache,
    removeQueryCardCacheForDetails,
    removeAllQueryCardsCache,
    removeAllQueryCardsCacheForPage,
  };
};
