import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CsvPanel from './CsvPanel';
import * as csvHook from '../../store/slices/useCsvCardList/hook';
import type { ICardListItemPokemon } from '../../query/cardList/IPaginationCardList';
import type { ICsvCardListActions } from '../../store/slices/useCsvCardList/types';

vi.mock('../../store/slices/useCsvCardList/hook', () => ({
  useCsvCardListItems: vi.fn(),
  useCsvCardListActions: vi.fn(),
}));

vi.mock('../ContainerSection/ContainerSection', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container-section">{children}</div>
  ),
}));

vi.mock('../../../utils/downloadFile_byText/downloadFile_byText', () => ({
  downloadFile_byText: vi.fn(),
}));

describe('CsvPanel', () => {
  const mockActions: ICsvCardListActions = {
    addItem: vi.fn(),
    removeItem: vi.fn(),
    unselectAll: vi.fn(),
    downloadCsvItems: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(csvHook.useCsvCardListActions).mockReturnValue(mockActions);
  });

  it('should render panel with selected count and buttons when csvItems has items', () => {
    const mockItems: ICardListItemPokemon[] = [
      { id: 1 } as ICardListItemPokemon,
      { id: 2 } as ICardListItemPokemon,
    ];
    vi.mocked(csvHook.useCsvCardListItems).mockReturnValue(mockItems);

    render(<CsvPanel />);

    expect(screen.getByText('Selected 2')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Unselect all' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Download CSV' })).toBeTruthy();
  });

  it('should render nothing when csvItems is empty', () => {
    vi.mocked(csvHook.useCsvCardListItems).mockReturnValue([]);

    const { container } = render(<CsvPanel />);

    expect(container.innerHTML).toBe('');
    expect(screen.queryByText('Selected')).toBeNull();
  });
});
