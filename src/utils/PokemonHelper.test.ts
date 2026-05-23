import { describe, it, expect } from 'vitest';
import PokemonHelper from './PokemonHelper';

describe('PokemonHelper', () => {
  it('should generate correct artwork URL for any Pokémon ID', () => {
    const testCases = [
      { id: 1, expected: '/1.png' },
      { id: 25, expected: '/25.png' },
      { id: 151, expected: '/151.png' },
      { id: 1000, expected: '/1000.png' },
    ];

    testCases.forEach(({ id, expected }) => {
      const result = PokemonHelper.getMainImage_byPokemonId(id);
      expect(result).toContain(expected);
      expect(result).toMatch(
        /^https:\/\/raw\.githubusercontent\.com\/PokeAPI\/sprites\/master\/sprites\/pokemon\/other\/official-artwork\/\d+\.png$/
      );
    });
  });
});
