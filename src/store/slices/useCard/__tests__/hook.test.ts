import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  useCardIsFetch,
  useCardErrorFetch,
  useCardAll,
  useCardItem,
  useCardActions,
} from '../hook';
import { useCardStore } from '../useCardStore';
import type { ICardState } from '../types';

const defaultState: ICardState = {
  cardState: {
    isFetch: false,
    errorFetch: null,
    item: null,
  },
};

describe('Custom hooks for Card store', () => {
  beforeEach(() => {
    useCardStore.setState((state) => ({
      ...state,
      cardState: {
        ...defaultState.cardState,
      },
    }));
  });

  describe('useCardIsFetch', () => {
    it('should return isFetch from store', () => {
      const { result } = renderHook(() => useCardIsFetch());
      expect(result.current).toBe(false);

      act(() => {
        useCardStore.setState((state) => ({
          ...state,
          cardState: {
            ...state.cardState,
            isFetch: true,
          },
        }));
      });
      expect(result.current).toBe(true);
    });
  });

  describe('useCardErrorFetch', () => {
    it('should return errorFetch from store', () => {
      const { result } = renderHook(() => useCardErrorFetch());
      expect(result.current).toBeNull();

      const errorMsg = 'Card fetch failed';
      act(() => {
        useCardStore.setState((state) => ({
          ...state,
          cardState: {
            ...state.cardState,
            errorFetch: errorMsg,
          },
        }));
      });
      expect(result.current).toBe(errorMsg);
    });
  });

  describe('useCardAll', () => {
    it('should memoize result with shallow equality (prevent unnecessary re-renders)', () => {
      let renderCount = 0;
      const { result } = renderHook(() => {
        renderCount++;
        return useCardAll();
      });

      expect(renderCount).toBe(1);
      expect(result.current).toEqual({
        isFetch: false,
        errorFetch: null,
        item: null,
      });

      act(() => {
        useCardStore.setState((state) => ({
          ...state,
          cardState: {
            ...state.cardState,
            isFetch: true,
          },
        }));
      });
      expect(renderCount).toBe(2);
      expect(result.current.isFetch).toBe(true);

      act(() => {
        useCardStore.setState((state) => ({
          ...state,
          cardState: {
            ...state.cardState,
            isFetch: true,
          },
        }));
      });
      expect(renderCount).toBe(2);
    });
  });

  describe('useCardItem', () => {
    it('should return item from store', () => {
      const { result } = renderHook(() => useCardItem());
      expect(result.current).toBeNull();
    });
  });

  describe('useCardActions', () => {
    it('should return actions from store', () => {
      const { result } = renderHook(() => useCardActions());
      expect(result.current).toHaveProperty('closeCard');
      expect(result.current).toHaveProperty('generateFetchError');
      expect(result.current).toHaveProperty('loadCard_byDetails');
      expect(typeof result.current.closeCard).toBe('function');
      expect(typeof result.current.generateFetchError).toBe('function');
      expect(typeof result.current.loadCard_byDetails).toBe('function');
    });

    it('should call loadCard_byDetails without throwing', () => {
      const { result } = renderHook(() => useCardActions());
      expect(() => {
        act(() => {
          result.current.loadCard_byDetails('pikachu');
        });
      }).not.toThrow();
    });
  });
});
