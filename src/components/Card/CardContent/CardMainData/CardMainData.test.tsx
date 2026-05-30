import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import CardMainData from './CardMainData';
import type { IPokemon } from '../../../../store/slices/useCard/types';
import { getPokemonSrcImage_byId } from '../../../../utils/getPokemonSrcImage_byId';

vi.mock('../../../../utils/getPokemonSrcImage_byId', () => ({
  getPokemonSrcImage_byId: vi.fn(),
}));

vi.mock('./CardMainData.module.css', () => ({
  default: {
    image: 'mocked-image-class',
    weight_height_block: 'mocked-wh-class',
  },
}));

describe('CardMainData', () => {
  it('returns empty fragment when data is null', () => {
    const { container } = render(
      <CardMainData data={null as unknown as IPokemon} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders pokemon id and name in h2', () => {
    const mockData = {
      id: 25,
      name: 'Pikachu',
      weight: 60,
      height: 4,
    } as IPokemon;
    render(<CardMainData data={mockData} />);
    const h2 = document.querySelector('h2');
    expect(h2?.textContent).toBe('#25 Pikachu');
  });

  it('renders image with correct src and alt attribute', () => {
    const mockData = {
      id: 1,
      name: 'Bulbasaur',
      weight: 69,
      height: 7,
    } as IPokemon;
    vi.mocked(getPokemonSrcImage_byId).mockReturnValue(
      'https://example.com/1.png'
    );
    const { container } = render(<CardMainData data={mockData} />);
    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toBe('https://example.com/1.png');
  });

  it('displays weight and height in the format "weight x height"', () => {
    const mockData = {
      id: 5,
      name: 'Charmeleon',
      weight: 190,
      height: 11,
    } as IPokemon;
    const { container } = render(<CardMainData data={mockData} />);
    const div = container.querySelector('.mocked-wh-class');
    expect(div?.textContent).toBe('190 x 11');
  });
});
