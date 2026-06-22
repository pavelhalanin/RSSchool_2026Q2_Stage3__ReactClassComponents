export default interface IPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  pokemontypes: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
  pokemonsprites: Array<{
    sprites: {
      other: {
        home: {
          front_shiny: string | null;
          front_female: string | null;
          front_default: string | null;
          front_shiny_female: string | null;
        };
        showdown: {
          back_shiny: string | null;
          back_female: string | null;
          front_shiny: string | null;
          back_default: string | null;
          front_female: string | null;
          front_default: string | null;
          back_shiny_female: string | null;
          front_shiny_female: string | null;
        };
        dream_world: {
          front_female: string | null;
          front_default: string | null;
        };
        'official-artwork': {
          front_shiny: string | null;
          front_default: string | null;
        };
      };
      versions: {
        'generation-i': {
          yellow: {
            back_default: string | null;
            back_gray: string | null;
            back_transparent: string | null;
            front_default: string | null;
            front_gray: string | null;
            front_transparent: string | null;
          };
          'red-blue': {
            back_default: string | null;
            back_gray: string | null;
            back_transparent: string | null;
            front_default: string | null;
            front_gray: string | null;
            front_transparent: string | null;
          };
        };
        'generation-ii': {
          gold: {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
            front_transparent: string | null;
          };
          silver: {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
            front_transparent: string | null;
          };
          crystal: {
            back_default: string | null;
            back_shiny: string | null;
            back_shiny_transparent: string | null;
            back_transparent: string | null;
            front_default: string | null;
            front_shiny: string | null;
            front_shiny_transparent: string | null;
            front_transparent: string | null;
          };
        };
        'generation-iii': {
          emerald: {
            front_default: string | null;
            front_shiny: string | null;
          };
          'ruby-sapphire': {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
          };
          'firered-leafgreen': {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
          };
        };
        'generation-iv': {
          'diamond-pearl': {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
          };
          platinum: {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
          };
          'heartgold-soulsilver': {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
          };
        };
        'generation-v': {
          'black-white': {
            back_default: string | null;
            back_shiny: string | null;
            front_default: string | null;
            front_shiny: string | null;
            animated: {
              back_default: string | null;
              back_shiny: string | null;
              front_default: string | null;
              front_shiny: string | null;
            };
          };
        };
        'generation-vi': {
          'x-y': {
            front_default: string | null;
            front_shiny: string | null;
          };
          'omegaruby-alphasapphire': {
            front_default: string | null;
            front_shiny: string | null;
          };
        };
        'generation-vii': {
          icons: {
            front_default: string | null;
          };
          'ultra-sun-ultra-moon': {
            front_default: string | null;
            front_shiny: string | null;
          };
        };
        'generation-viii': {
          icons: {
            front_default: string | null;
          };
          'brilliant-diamond-shining-pearl': {
            front_default: string | null;
          };
        };
        'generation-ix': {
          'scarlet-violet': {
            front_default: string | null;
          };
        };
      };
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  }>;
  pokemoncries: Array<{
    cries: {
      latest: string | null;
      legacy: string | null;
    };
  }>;
}
