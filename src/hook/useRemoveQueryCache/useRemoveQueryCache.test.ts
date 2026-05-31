import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useRemoveQueryCache } from './useRemoveQueryCache';
import { useParams } from 'react-router-dom';
import { useQueryClient, QueryClient } from '@tanstack/react-query';

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
}));

vi.mock('@tanstack/react-query', () => ({
  useQueryClient: vi.fn(),
}));

describe('useRemoveQueryCache', () => {
  const mockRemoveQueries = vi.fn();
  const mockQueryClient = {
    removeQueries: mockRemoveQueries,
  } as unknown as QueryClient;

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useQueryClient).mockReturnValue(mockQueryClient);
    vi.mocked(useParams).mockReturnValue({ page: '1', details: 'detail-123' });
  });

  it('should return all cache removal functions', () => {
    const { result } = renderHook(() => useRemoveQueryCache());

    expect(result.current).toHaveProperty('removeAllQueryCache');
    expect(result.current).toHaveProperty('removeAllQueryCardCache');
    expect(result.current).toHaveProperty('removeQueryCardCacheForDetails');
    expect(result.current).toHaveProperty('removeAllQueryCardsCache');
    expect(result.current).toHaveProperty('removeAllQueryCardsCacheForPage');
    expect(typeof result.current.removeAllQueryCache).toBe('function');
    expect(typeof result.current.removeAllQueryCardCache).toBe('function');
    expect(typeof result.current.removeQueryCardCacheForDetails).toBe(
      'function'
    );
    expect(typeof result.current.removeAllQueryCardsCache).toBe('function');
    expect(typeof result.current.removeAllQueryCardsCacheForPage).toBe(
      'function'
    );
  });

  it('removeAllQueryCache', () => {
    const { result } = renderHook(() => useRemoveQueryCache());
    result.current.removeAllQueryCache();
    expect(mockRemoveQueries).toHaveBeenCalledTimes(1);
    expect(mockRemoveQueries).toHaveBeenCalledWith({ queryKey: [] });
  });

  it('removeAllQueryCardCache', () => {
    const { result } = renderHook(() => useRemoveQueryCache());
    result.current.removeAllQueryCardCache();
    expect(mockRemoveQueries).toHaveBeenCalledTimes(1);
    expect(mockRemoveQueries).toHaveBeenCalledWith({ queryKey: ['card'] });
  });

  it('removeQueryCardCacheForDetails', () => {
    const details = '1';
    vi.mocked(useParams).mockReturnValue({ page: '1', details });
    const { result } = renderHook(() => useRemoveQueryCache());
    result.current.removeQueryCardCacheForDetails();
    expect(mockRemoveQueries).toHaveBeenCalledTimes(1);
    expect(mockRemoveQueries).toHaveBeenCalledWith({
      queryKey: ['card', details],
    });
  });

  it('removeAllQueryCardsCache', () => {
    const { result } = renderHook(() => useRemoveQueryCache());
    result.current.removeAllQueryCardsCache();
    expect(mockRemoveQueries).toHaveBeenCalledTimes(1);
    expect(mockRemoveQueries).toHaveBeenCalledWith({ queryKey: ['cards'] });
  });

  it('removeAllQueryCardsCacheForaPage', () => {
    const page = '2';
    vi.mocked(useParams).mockReturnValue({ page, details: 'abc' });
    const { result } = renderHook(() => useRemoveQueryCache());
    result.current.removeAllQueryCardsCacheForPage();
    expect(mockRemoveQueries).toHaveBeenCalledTimes(1);
    expect(mockRemoveQueries).toHaveBeenCalledWith({
      queryKey: ['cards', page],
    });
  });
});
