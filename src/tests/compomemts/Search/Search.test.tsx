import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import Search from '../../../components/Search/Search';
import '@testing-library/jest-dom/vitest';

describe('Search', () => {
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

  afterEach(() => {
    cleanup(); // Очищает DOM
    vi.clearAllMocks(); // Очищает моки
  });

  it('Main.updateState_search and render Search input', () => {
    const handle_fetchPokemons = vi.fn();
    const handle_updateState_cardList = vi.fn();
    const handle_updateState_errorBoundary = vi.fn();
    const handle_updateState_search = vi.fn();

    render(
      <Search
        state={DEFAULT_STATE}
        fetchPokemons={handle_fetchPokemons}
        updateState_cardList={handle_updateState_cardList}
        updateState_errorBoundary={handle_updateState_errorBoundary}
        updateState_search={handle_updateState_search}
      />
    );

    const INPUT = screen.getByRole('searchbox'); // Поиск <input type="search">
    expect(INPUT).toBeInTheDocument(); // Существует элемент?

    fireEvent.change(INPUT, { target: { value: 'pikachu' } }); // Симуляция ввода текста

    expect(handle_updateState_search).toHaveBeenCalledTimes(1); // Функция вызвана один раз?
    expect(handle_updateState_search).toHaveBeenCalledWith('pikachu'); // Проверка, что при вызове передали 'pikachu'
  });

  it('CardList.fetchPokemons and render Search button', () => {
    const handle_fetchPokemons = vi.fn();
    const handle_updateState_cardList = vi.fn();
    const handle_updateState_errorBoundary = vi.fn();
    const handle_updateState_search = vi.fn();

    render(
      <Search
        state={DEFAULT_STATE}
        fetchPokemons={handle_fetchPokemons}
        updateState_cardList={handle_updateState_cardList}
        updateState_errorBoundary={handle_updateState_errorBoundary}
        updateState_search={handle_updateState_search}
      />
    );

    const BUTTON = screen.getByText('Search'); // Находим кнопку с текстом Search
    expect(BUTTON).toBeInTheDocument(); // Существует элемент?
    fireEvent.click(BUTTON); // Симуляция клика пользователя

    expect(handle_fetchPokemons).toHaveBeenCalledTimes(1); // Функция вызвана один раз?
  });
});
