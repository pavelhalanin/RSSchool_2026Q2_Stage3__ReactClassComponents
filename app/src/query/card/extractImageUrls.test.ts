import { describe, it, expect } from 'vitest';
import extractImageUrls from './extractImageUrls';

describe('extractImageUrls', () => {
  it('returns empty array for null', () => {
    expect(extractImageUrls(null)).toEqual([]);
  });

  it('returns empty array for undefined', () => {
    expect(extractImageUrls(undefined)).toEqual([]);
  });

  it('returns empty array for number', () => {
    expect(extractImageUrls(42)).toEqual([]);
  });

  it('returns empty array for boolean', () => {
    expect(extractImageUrls(true)).toEqual([]);
  });

  it('does not extract non-image URLs', () => {
    const input = 'https://example.com/file.pdf';
    expect(extractImageUrls(input)).toEqual([]);
  });

  it('extracts image URLs from nested objects', () => {
    const input = {
      a: 'https://example.com/1.png',
      b: {
        c: 'https://example.com/2.gif',
        d: {
          e: 'https://example.com/3.svg',
        },
      },
    };
    expect(extractImageUrls(input)).toEqual([
      'https://example.com/1.png',
      'https://example.com/2.gif',
      'https://example.com/3.svg',
    ]);
  });

  it('ignores non-string values while traversing', () => {
    const input = {
      a: 'https://example.com/1.png',
      b: 123,
      c: null,
      d: ['https://example.com/2.gif', true, undefined],
      e: { f: false },
    };
    expect(extractImageUrls(input)).toEqual([
      'https://example.com/1.png',
      'https://example.com/2.gif',
    ]);
  });
});
