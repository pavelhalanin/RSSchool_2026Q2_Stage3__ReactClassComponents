import { describe, it, expect } from 'vitest';
import sleep from '../../utils/sleep';

describe('sleep utility', () => {
  it('should delay execution for specified time', async () => {
    const start = Date.now();
    await sleep(100);
    const end = Date.now();
    const duration = end - start;

    expect(duration).toBeGreaterThan(50);
    expect(duration).toBeLessThan(150);
  });

  it('should resolve after 0ms', async () => {
    const start = Date.now();
    await sleep(0);
    const end = Date.now();
    const duration = end - start;

    expect(duration).toBeLessThan(50);
  });

  it('should return a Promise', () => {
    const result = sleep(100);
    expect(result).toBeInstanceOf(Promise);
  });

  it('should work with different timeout values', async () => {
    const delays = [50, 100, 200];

    for (const delay of delays) {
      const start = Date.now();
      await sleep(delay);
      const duration = Date.now() - start;
      expect(duration).toBeGreaterThan(delay - 10);
    }
  });
});
