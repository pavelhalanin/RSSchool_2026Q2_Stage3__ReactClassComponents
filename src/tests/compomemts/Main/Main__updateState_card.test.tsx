import { describe, it, expect, vi } from 'vitest';
import Main from '../../../components/Main/Main';

describe('Main updateState_card', () => {
  it('Main updateState_card', () => {
    const WRAPPER = new Main({});
    const mockSetState = vi.fn();
    WRAPPER.setState = mockSetState as typeof WRAPPER.setState;

    WRAPPER.updateState_card({
      dialogIsOpen: true,
      isFetchNow: true,
      pokemon: {
        id: 0,
        name: '',
        weight: 0,
        height: 0,
        pokemoncries: [],
        pokemonsprites: [],
        pokemontypes: [],
      },
      pokemonId: 0,
    });

    expect(mockSetState).toHaveBeenCalledTimes(1);
  });
});
