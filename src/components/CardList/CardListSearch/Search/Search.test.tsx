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

  const setParams = vi.fn();

  afterEach(() => {
    cleanup(); // Очищает DOM
    vi.clearAllMocks(); // Очищает моки
  });

  it('Search Component Tests. Rendering Tests. Renders search input', () => {
    render(<Search setParams={setParams} />);

    const INPUT = screen.getByRole('searchbox'); // Поиск <input type="search">
    expect(INPUT).toBeInTheDocument(); // Существует элемент?
  });

  it('Search Component Tests. Rendering Tests. Renders search button', () => {
    render(<Search setParams={setParams} />);

    const BUTTON = screen.getByText('Search'); // Находим кнопку с текстом Search
    expect(BUTTON).toBeInTheDocument(); // Существует элемент?
    fireEvent.click(BUTTON); // Симуляция клика пользователя
  });

  it('Search Component Tests. Rendering Tests. Shows empty input when no saved term exists', () => {
    localStorageMock.getItem.mockReturnValueOnce(null);

    render(<Search setParams={setParams} />);

    const INPUT = screen.getByRole('searchbox') as HTMLInputElement;
    expect(INPUT.value).toBe('');
  });
});
