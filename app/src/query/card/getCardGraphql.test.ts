import { describe, it, expect } from 'vitest';
import getCardGraphql from './getCardGraphql';

describe('getCardGraphql', () => {
  it('injects the details parameter into the where clause', () => {
    const details = '42';
    const result = getCardGraphql(details);
    expect(result).toContain(`{id: {_eq: ${details}}}`);
  });
});
