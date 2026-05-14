import { describe, it, expect, vi } from 'vitest';
import Main from '../../../components/Main/Main';

describe('Main updateState_card_dialogIsOpen', () => {
  it('Main updateState_card_dialogIsOpen', () => {
    const WRAPPER = new Main({});
    const mockSetState = vi.fn();
    WRAPPER.setState = mockSetState as typeof WRAPPER.setState;

    const dialogIsOpen = true;
    const pokemonId = 25;

    WRAPPER.updateState_card_dialogIsOpen(dialogIsOpen, pokemonId);

    expect(mockSetState).toHaveBeenCalledTimes(1);

    type SetStateCallback = (prevState: {
      card?: { dialogIsOpen?: boolean; pokemonId?: number };
    }) => void;
    const setStateCallback = mockSetState.mock.calls[0][0] as SetStateCallback;

    const prevState = {
      card: {
        dialogIsOpen: false,
        pokemonId: undefined,
      },
    };

    const NEW_STATE = setStateCallback(prevState);

    expect(NEW_STATE).toEqual({
      card: {
        ...prevState.card,
        dialogIsOpen: true,
        pokemonId: 25,
      },
    });
  });
});
