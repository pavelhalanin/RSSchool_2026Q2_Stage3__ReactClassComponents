import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CardList from './CardList';
import FETCH_MOCK from '../../test-utils/mock/FETCH_MOCK.mock';

vi.mock('../../utils/sleep', () => {
  return {
    default: () => Promise.resolve(),
  };
});

describe('CardList', () => {
  beforeEach(() => {
    FETCH_MOCK.mockReset();
    localStorage.clear();
  });

  it('handles http error response', async () => {
    FETCH_MOCK.mockImplementation(() => {
      return Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({}),
        text: () => Promise.resolve('Server error'),
      });
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/?page=1']}>
        <Routes>
          <Route path="/" element={<CardList />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(container.textContent).toContain('HTTP 500\nServer error');
    });
  });
});
