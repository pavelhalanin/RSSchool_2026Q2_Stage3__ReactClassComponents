import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePokemonNavigation } from './usePokemonNavigation';
import { useNavigate } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

describe('usePokemonNavigation', () => {
  it('navigates to /pokemon when no params provided', () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => usePokemonNavigation());
    result.current.pokemonNavigation({});

    expect(mockNavigate).toHaveBeenCalledWith('/pokemon/1');
  });

  it('navigates to /pokemon/2 when page is 2', () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => usePokemonNavigation());
    result.current.pokemonNavigation({ page: '2' });

    expect(mockNavigate).toHaveBeenCalledWith('/pokemon/2');
  });

  it('navigates to /pokemon/1/3 when page is 1 and details 3', () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => usePokemonNavigation());
    result.current.pokemonNavigation({ page: '1', details: '3' });

    expect(mockNavigate).toHaveBeenCalledWith('/pokemon/1/3');
  });

  it('uses page "1" when page is <= 0', () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => usePokemonNavigation());
    result.current.pokemonNavigation({ page: '0', details: '4' });

    expect(mockNavigate).toHaveBeenCalledWith('/pokemon/1/4');
  });

  it('navigates only with page when details missing', () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => usePokemonNavigation());
    result.current.pokemonNavigation({ page: '3' });

    expect(mockNavigate).toHaveBeenCalledWith('/pokemon/3');
  });
});
