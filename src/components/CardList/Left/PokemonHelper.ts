export default class PokemonHelper {
  static getMainImage_byPokemonId(pokemonId: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  }
}
