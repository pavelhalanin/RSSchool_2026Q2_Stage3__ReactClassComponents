import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardListPagination from './CardListPagination';

describe('CardListPagination', () => {
  it('renders buttons based on LAST_PAGE', () => {
    const props = {
      page: '1',
      pagination: {
        pagination: {
          TOTOL_ITEMS: 24,
          LIMITL_ITEMS: 8,
          CURRENT_PAGE: 1,
          SKIP_ITEMS: 0,
          LAST_PAGE: 3,
        },
        items: [],
        isFetch: false,
        fetchError: null,
      },
      setParams: vi.fn(),
    };

    render(<CardListPagination {...props} />);

    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
  });
});
