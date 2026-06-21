import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import CardCrieAudio from './CardCrieAudio';

vi.mock('./CardCrieAudio.module.css', () => ({
  default: { audio: 'mocked-audio-class' },
}));

describe('CardCrieAudio', () => {
  it('renders empty fragment when src is null', () => {
    const { container } = render(<CardCrieAudio src={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders empty fragment when src is empty string', () => {
    const { container } = render(<CardCrieAudio src="" />);
    expect(container.firstChild).toBeNull();
  });

  it('renders <audio> with correct attributes when src is provided', () => {
    const testSrc = 'https://example.com/audio.mp3';
    const { container } = render(<CardCrieAudio src={testSrc} />);

    const audio = container.querySelector('audio');

    expect(audio).not.toBeNull();
    expect(audio?.getAttribute('controls')).toBe('');
    expect(audio?.getAttribute('src')).toBe(testSrc);
    expect(audio?.className).toBe('mocked-audio-class');
  });
});
