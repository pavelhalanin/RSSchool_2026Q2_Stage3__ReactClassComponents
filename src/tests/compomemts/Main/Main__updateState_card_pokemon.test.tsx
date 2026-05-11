import { describe, it, expect, vi } from 'vitest';
import Main from '../../../components/Main/Main';

describe('Main updateState_card_pokemon', () => {
  it('Main updateState_card_pokemon', () => {
    const WRAPPER = new Main({});
    const mockSetState = vi.fn();
    WRAPPER.setState = mockSetState as typeof WRAPPER.setState;

    WRAPPER.updateState_card_pokemon({
      id: 0,
      name: '',
      weight: 0,
      height: 0,
      pokemoncries: [],
      pokemonsprites: [],
      pokemontypes: [],
    });

    expect(mockSetState).toHaveBeenCalledTimes(1);
  });
});
