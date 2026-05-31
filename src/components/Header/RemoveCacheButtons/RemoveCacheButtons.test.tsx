import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RemoveCacheButtons from './RemoveCacheButtons';
import { useRemoveQueryCache } from '../../../hook/useRemoveQueryCache/useRemoveQueryCache';
import { useParams } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
}));

vi.mock('../../../hook/useRemoveQueryCache/useRemoveQueryCache', () => ({
  useRemoveQueryCache: vi.fn(),
}));

describe('RemoveCacheButtons - isOpen state', () => {
  const mockRemoveFunctions = {
    removeAllQueryCache: vi.fn(),
    removeAllQueryCardCache: vi.fn(),
    removeQueryCardCacheForDetails: vi.fn(),
    removeAllQueryCardsCache: vi.fn(),
    removeAllQueryCardsCacheForPage: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useParams).mockReturnValue({ page: '1', details: 'detail-123' });
    vi.mocked(useRemoveQueryCache).mockReturnValue(mockRemoveFunctions);
  });

  afterEach(() => {
    cleanup();
  });

  it('menu is initially closed (has close class)', () => {
    render(<RemoveCacheButtons />);
    const list = screen.getAllByRole('list')[0];
    expect(list.className.includes('close')).toBe(true);
  });

  it('clicking Cache button opens the menu (removes close class)', async () => {
    const user = userEvent.setup();
    render(<RemoveCacheButtons />);
    const cacheButton = screen.getAllByRole('button', { name: /cache/i })[0];
    const list = screen.getAllByRole('list')[0];

    await user.click(cacheButton);
    expect(list.className.includes('close')).toBe(false);
  });

  it('second click on Cache button closes the menu (adds close class)', async () => {
    const user = userEvent.setup();
    render(<RemoveCacheButtons />);
    const cacheButton = screen.getAllByRole('button', { name: /cache/i })[0];
    const list = screen.getAllByRole('list')[0];

    await user.click(cacheButton);
    expect(list.className.includes('close')).toBe(false);

    await user.click(cacheButton);
    expect(list.className.includes('close')).toBe(true);
  });
});
