import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CardCries from './CardCries';
import type { IPokemon } from '../../../../store/slices/useCard/types';

describe('CardCries', () => {
  it('returns empty fragment when data is null', () => {
    const { container } = render(
      <CardCries data={null as unknown as IPokemon} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders audio elements with correct src values from pokemoncries', () => {
    const data = {
      pokemoncries: [
        {
          cries: {
            latest: 'https://example.com/latest1.mp3',
            legacy: 'https://example.com/legacy1.mp3',
          },
        },
        {
          cries: {
            latest: 'https://example.com/latest2.mp3',
            legacy: 'https://example.com/legacy2.mp3',
          },
        },
      ],
    } as IPokemon;

    const { container } = render(<CardCries data={data} />);
    const audioElements = container.querySelectorAll('audio');

    expect(audioElements).toHaveLength(4);
    expect(audioElements[0].getAttribute('src')).toBe(
      'https://example.com/latest1.mp3'
    );
    expect(audioElements[1].getAttribute('src')).toBe(
      'https://example.com/legacy1.mp3'
    );
    expect(audioElements[2].getAttribute('src')).toBe(
      'https://example.com/latest2.mp3'
    );
    expect(audioElements[3].getAttribute('src')).toBe(
      'https://example.com/legacy2.mp3'
    );
  });
});
