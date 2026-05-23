import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import Search from './Search';
import '@testing-library/jest-dom/vitest';

describe('Search Component Tests', () => {
  const localStorageMock = (() => {
    const STORE: Record<string, string> = {};
    return {
      getItem: vi.fn((key: string) => STORE[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        STORE[key] = value;
      }),
    };
  })();

  const mock_fetchPokemons = vi.fn();
  const mock_updateState_search = vi.fn();
  const setParams = vi.fn();

  afterEach(() => {
    cleanup(); // Очищает DOM
    vi.clearAllMocks(); // Очищает моки
  });

  it('Search Component Tests. Rendering Tests. Renders search input', () => {
    render(
      <Search
        search=""
        fetchPokemons={mock_fetchPokemons}
        updateState_search={mock_updateState_search}
        setParams={setParams}
      />
    );

    const INPUT = screen.getByRole('searchbox'); // Поиск <input type="search">
    expect(INPUT).toBeInTheDocument(); // Существует элемент?

    fireEvent.change(INPUT, { target: { value: 'pikachu' } }); // Симуляция ввода текста

    expect(mock_updateState_search).toHaveBeenCalledTimes(1); // Функция вызвана один раз?
    expect(mock_updateState_search).toHaveBeenCalledWith('pikachu'); // Проверка, что при вызове передали 'pikachu'
  });

  it('Search Component Tests. Rendering Tests. Renders search button', () => {
    render(
      <Search
        search=""
        fetchPokemons={mock_fetchPokemons}
        updateState_search={mock_updateState_search}
        setParams={setParams}
      />
    );

    const BUTTON = screen.getByText('Search'); // Находим кнопку с текстом Search
    expect(BUTTON).toBeInTheDocument(); // Существует элемент?
    fireEvent.click(BUTTON); // Симуляция клика пользователя

    expect(mock_fetchPokemons).toHaveBeenCalledTimes(1); // Функция вызвана один раз?
  });

  it('Search Component Tests. Rendering Tests. Shows empty input when no saved term exists', () => {
    localStorageMock.getItem.mockReturnValueOnce(null);

    render(
      <Search
        search=""
        fetchPokemons={mock_fetchPokemons}
        updateState_search={mock_updateState_search}
        setParams={setParams}
      />
    );

    const INPUT = screen.getByRole('searchbox') as HTMLInputElement;
    expect(INPUT.value).toBe('');
  });
});
