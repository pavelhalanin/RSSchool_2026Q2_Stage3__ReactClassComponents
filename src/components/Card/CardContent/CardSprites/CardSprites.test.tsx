import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import CardSprites from './CardSprites';
import type { IPokemon } from '../../../../store/slices/useCard/types';
import extractImageUrls from '../../../../query/card/extractImageUrls';

vi.mock('../../../../query/card/extractImageUrls', () => ({
  default: vi.fn(),
}));

vi.mock('./CardSprites.module.css', () => ({
  default: { images: 'mocked-images-class' },
}));

describe('CardSprites', () => {
  beforeEach(() => {
    vi.mocked(extractImageUrls).mockReturnValue([]);
  });

  it('returns empty fragment when data is null', () => {
    const { container } = render(
      <CardSprites data={null as unknown as IPokemon} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('calls extractImageUrls with data prop', () => {
    const mockData = {} as IPokemon;
    render(<CardSprites data={mockData} />);
    expect(extractImageUrls).toHaveBeenCalledWith(mockData);
  });

  it('renders no images when extractImageUrls returns empty array', () => {
    const { container } = render(<CardSprites data={{} as IPokemon} />);
    const list = container.querySelector('ul');
    expect(list).not.toBeNull();
    expect(list?.children).toHaveLength(0);
  });

  it('renders image elements for each URL returned', () => {
    const urls = ['https://example.com/1.png', 'https://example.com/2.svg'];
    vi.mocked(extractImageUrls).mockReturnValue(urls);
    const { container } = render(<CardSprites data={{} as IPokemon} />);
    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(2);
    expect(images[0].getAttribute('src')).toBe(urls[0]);
    expect(images[1].getAttribute('src')).toBe(urls[1]);
  });

  it('renders li elements for each URL', () => {
    const urls = ['https://example.com/a.png', 'https://example.com/b.png'];
    vi.mocked(extractImageUrls).mockReturnValue(urls);
    const { container } = render(<CardSprites data={{} as IPokemon} />);
    const lis = container.querySelectorAll('li');
    expect(lis).toHaveLength(2);
  });

  it('applies styles.images class to ul element', () => {
    const { container } = render(<CardSprites data={{} as IPokemon} />);
    const ul = container.querySelector('ul');
    expect(ul?.className).toBe('mocked-images-class');
  });
});
