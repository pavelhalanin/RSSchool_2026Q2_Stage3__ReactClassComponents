import { describe, it, expect } from 'vitest';
import getCardListGraphql from './getCardListGraphql';

describe('getCardListGraphql', () => {
  it('should correctly interpolate limit, offset, and search into the query', () => {
    const params = {
      limit: 10,
      offset: 20,
      search: 'pikachu',
    };
    const result = getCardListGraphql(params);

    expect(result).toContain('limit: 10');
    expect(result).toContain('offset: 20');
    expect(result).toContain('name: {_like: "%pikachu%"}');
  });

  it('should handle empty search string', () => {
    const params = {
      limit: 5,
      offset: 0,
      search: '',
    };
    const result = getCardListGraphql(params);

    expect(result).toContain('limit: 5');
    expect(result).toContain('offset: 0');
    expect(result).toContain('name: {_like: "%%"}');
  });

  it('should insert special characters in search as-is (no escaping)', () => {
    const params = {
      limit: 1,
      offset: 0,
      search: 'test%_',
    };
    const result = getCardListGraphql(params);

    expect(result).toContain('name: {_like: "%test%_%"}');
  });

  it('should return a string containing both pokemon and pokemon_aggregate queries', () => {
    const params = {
      limit: 10,
      offset: 10,
      search: 'char',
    };
    const result = getCardListGraphql(params);

    expect(result).toContain('query CardListQuery {');
    expect(result).toContain(
      'pokemon(limit: 10, offset: 10, where: {name: {_like: "%char%"}})'
    );
    expect(result).toContain(
      'pokemon_aggregate(where: {name: {_like: "%char%"}})'
    );
  });
});
