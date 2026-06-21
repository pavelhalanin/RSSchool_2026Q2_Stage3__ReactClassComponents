import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardListPagination from './CardListPagination';

vi.mock('./CardListPagination.module.css', () => ({
  default: { wrapper: 'mock-wrapper' },
}));

vi.mock('./CardListLeftRightPagination/CardListLeftRightPagination', () => ({
  default: vi.fn(() => <div data-testid="left-right-pagination" />),
}));

vi.mock('./CardListSelectPagination/CardListSelectPagination', () => ({
  default: vi.fn(() => <div data-testid="select-pagination" />),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

import { useParams } from 'react-router-dom';

describe('CardListPagination', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useParams as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      page: '3',
    });
  });

  const renderComponent = (counttItems: number, limit: number) => {
    return render(
      <CardListPagination counttItems={counttItems} limit={limit} />
    );
  };

  it('renders both pagination components', () => {
    renderComponent(100, 10);
    expect(screen.getByTestId('left-right-pagination')).toBeDefined();
    expect(screen.getByTestId('select-pagination')).toBeDefined();
  });
});
