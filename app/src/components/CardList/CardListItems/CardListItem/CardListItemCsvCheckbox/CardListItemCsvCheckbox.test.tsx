import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardListItemCsvCheckbox from './CardListItemCsvCheckbox';
import {
  useCsvCardListItems,
  useCsvCardListActions,
} from '../../../../../store/slices/useCsvCardList/hook';
import type { ICardListItemPokemon } from '../../../../../query/cardList/IPaginationCardList';

vi.mock('../../../../../store/slices/useCsvCardList/hook', () => ({
  useCsvCardListItems: vi.fn(),
  useCsvCardListActions: vi.fn(),
}));

describe('CardListItemCsvCheckbox', () => {
  const mockItem: ICardListItemPokemon = {
    id: 1,
    name: 'Bulbasaur',
    weight: 69,
    height: 7,
    image_src: '',
    pokemontypes: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders checkbox with checked=true when item is in csvItems', () => {
    vi.mocked(useCsvCardListItems).mockReturnValue([
      mockItem,
      { ...mockItem, id: 2 },
    ]);
    vi.mocked(useCsvCardListActions).mockReturnValue({
      addItem: vi.fn(),
      removeItem: vi.fn(),
      downloadCsvItems: vi.fn(),
      unselectAll: vi.fn(),
    });

    render(<CardListItemCsvCheckbox item={mockItem} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('renders checkbox with checked=false when item is not in csvItems', () => {
    vi.mocked(useCsvCardListItems).mockReturnValue([
      { ...mockItem, id: 2 },
      { ...mockItem, id: 3 },
    ]);
    vi.mocked(useCsvCardListActions).mockReturnValue({
      addItem: vi.fn(),
      removeItem: vi.fn(),
      downloadCsvItems: vi.fn(),
      unselectAll: vi.fn(),
    });

    render(<CardListItemCsvCheckbox item={mockItem} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('calls addItem when checkbox is unchecked and becomes checked', async () => {
    const addItemMock = vi.fn();
    const removeItemMock = vi.fn();

    vi.mocked(useCsvCardListItems).mockReturnValue([]);
    vi.mocked(useCsvCardListActions).mockReturnValue({
      addItem: addItemMock,
      removeItem: removeItemMock,
      downloadCsvItems: vi.fn(),
      unselectAll: vi.fn(),
    });

    render(<CardListItemCsvCheckbox item={mockItem} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    await userEvent.click(checkbox);
    expect(addItemMock).toHaveBeenCalledTimes(1);
    expect(addItemMock).toHaveBeenCalledWith(mockItem);
    expect(removeItemMock).not.toHaveBeenCalled();
  });

  it('calls removeItem when checkbox is checked and becomes unchecked', async () => {
    const addItemMock = vi.fn();
    const removeItemMock = vi.fn();

    vi.mocked(useCsvCardListItems).mockReturnValue([mockItem]);
    vi.mocked(useCsvCardListActions).mockReturnValue({
      addItem: addItemMock,
      removeItem: removeItemMock,
      downloadCsvItems: vi.fn(),
      unselectAll: vi.fn(),
    });

    render(<CardListItemCsvCheckbox item={mockItem} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);

    await userEvent.click(checkbox);
    expect(removeItemMock).toHaveBeenCalledTimes(1);
    expect(removeItemMock).toHaveBeenCalledWith(mockItem);
    expect(addItemMock).not.toHaveBeenCalled();
  });
});
