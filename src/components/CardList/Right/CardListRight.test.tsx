import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardListRight } from './CardListRight';

vi.mock('../../../utils/sleep', () => ({
  default: vi.fn(() => Promise.resolve()),
}));

vi.mock('../../../utils/PokemonHelper', () => ({
  default: {
    getMainImage_byPokemonId: vi.fn((id) => `https://example.com/${id}.png`),
  },
}));

describe('CardListRight', () => {
  const mockSetParams = vi.fn();

  beforeEach(() => {
    mockSetParams.mockClear();
  });

  it('displays loading state during fetch', () => {
    const { container } = render(
      <CardListRight page="1" details="25" setParams={mockSetParams} />
    );

    const loadingDiv = container.querySelector('.spinner__wrapper');
    expect(loadingDiv).toBeDefined();
  });

  it('closes panel when clicking Close button', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CardListRight page="1" details="25" setParams={mockSetParams} />
    );

    const closeButton = container.querySelector('.btn-danger');
    await user.click(closeButton!);

    expect(mockSetParams).toHaveBeenCalledWith('1', '');
  });

  it('shows error when generating test error', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CardListRight page="1" details="25" setParams={mockSetParams} />
    );

    const buttons = container.querySelectorAll('.btn-danger');
    const errorButton = buttons[1];
    await user.click(errorButton);

    const errorDiv = container.querySelector('.alert-danger');
    expect(errorDiv).toBeDefined();
    expect(errorDiv?.textContent).toContain('Custom test error HTTP 400-500');
  });

  it('reloads after error when clicking Reload button', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CardListRight page="1" details="25" setParams={mockSetParams} />
    );

    const buttons = container.querySelectorAll('.btn-danger');
    const errorButton = buttons[1];
    await user.click(errorButton);

    const reloadButton = container.querySelector('.alert-danger button');
    await user.click(reloadButton!);

    const loadingDiv = container.querySelector('.spinner__wrapper');
    expect(loadingDiv).toBeDefined();
  });

  it('renders nothing when details is null', () => {
    const { container } = render(
      <CardListRight page="1" details={null} setParams={mockSetParams} />
    );

    const loadingDiv = container.querySelector('.spinner__wrapper');
    const errorDiv = container.querySelector('.alert-danger');
    const contentDiv = container.querySelector('div > h2');

    expect(loadingDiv).toBeNull();
    expect(errorDiv).toBeNull();
    expect(contentDiv).toBeNull();
  });
});
