import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import Search from '../../../components/Search/Search';
import '@testing-library/jest-dom/vitest';

describe('Search Component Tests', () => {
  const DEFAULT_STATE = {
    errorBoundary: null,
    search: '',
    searchPrev: null,
    cardList: {
      pokemons: [],
      isFetchNow: false,
      errorFetch: null,
    },
    card: {
      dialogIsOpen: false,
      pokemonId: 0,
      isFetchNow: false,
      pokemon: null,
    },
  };

  const localStorageMock = (() => {
    const STORE: Record<string, string> = {};
    return {
      getItem: vi.fn((key: string) => STORE[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        STORE[key] = value;
      }),
    };
  })();

  afterEach(() => {
    cleanup(); // Очищает DOM
    vi.clearAllMocks(); // Очищает моки
  });

  it('Search Component Tests. Rendering Tests. Renders search input', () => {
    const mock_fetchPokemons = vi.fn();
    const mock_updateState_cardList = vi.fn();
    const mock_updateState_errorBoundary = vi.fn();
    const mock_updateState_search = vi.fn();

    render(
      <Search
        state={DEFAULT_STATE}
        fetchPokemons={mock_fetchPokemons}
        updateState_cardList={mock_updateState_cardList}
        updateState_errorBoundary={mock_updateState_errorBoundary}
        updateState_search={mock_updateState_search}
      />
    );

    const INPUT = screen.getByRole('searchbox'); // Поиск <input type="search">
    expect(INPUT).toBeInTheDocument(); // Существует элемент?

    fireEvent.change(INPUT, { target: { value: 'pikachu' } }); // Симуляция ввода текста

    expect(mock_updateState_search).toHaveBeenCalledTimes(1); // Функция вызвана один раз?
    expect(mock_updateState_search).toHaveBeenCalledWith('pikachu'); // Проверка, что при вызове передали 'pikachu'
  });

  it('Search Component Tests. Rendering Tests. Renders search button', () => {
    const mock_fetchPokemons = vi.fn();
    const mock_updateState_cardList = vi.fn();
    const mock_updateState_errorBoundary = vi.fn();
    const mock_updateState_search = vi.fn();

    render(
      <Search
        state={DEFAULT_STATE}
        fetchPokemons={mock_fetchPokemons}
        updateState_cardList={mock_updateState_cardList}
        updateState_errorBoundary={mock_updateState_errorBoundary}
        updateState_search={mock_updateState_search}
      />
    );

    const BUTTON = screen.getByText('Search'); // Находим кнопку с текстом Search
    expect(BUTTON).toBeInTheDocument(); // Существует элемент?
    fireEvent.click(BUTTON); // Симуляция клика пользователя

    expect(mock_fetchPokemons).toHaveBeenCalledTimes(1); // Функция вызвана один раз?
  });

  it('Search Component Tests. Rendering Tests. Shows empty input when no saved term exists', () => {
    localStorageMock.getItem.mockReturnValueOnce(null);

    const mock_fetchPokemons = vi.fn();
    const mock_updateState_cardList = vi.fn();
    const mock_updateState_errorBoundary = vi.fn();
    const mock_updateState_search = vi.fn();

    render(
      <Search
        state={DEFAULT_STATE}
        fetchPokemons={mock_fetchPokemons}
        updateState_cardList={mock_updateState_cardList}
        updateState_errorBoundary={mock_updateState_errorBoundary}
        updateState_search={mock_updateState_search}
      />
    );

    const INPUT = screen.getByRole('searchbox') as HTMLInputElement;
    expect(INPUT.value).toBe('');
  });
});
