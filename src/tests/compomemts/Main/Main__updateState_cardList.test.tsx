import { describe, it, expect, vi } from 'vitest';
import Main from '../../../components/Main/Main';

describe('Main updateState_cardList', () => {
  it('Main updateState_cardList', () => {
    const WRAPPER = new Main({});
    const mockSetState = vi.fn();
    WRAPPER.setState = mockSetState as typeof WRAPPER.setState;

    WRAPPER.updateState_cardList({
      errorFetch: null,
      isFetchNow: false,
      pokemons: [],
    });

    expect(mockSetState).toHaveBeenCalledTimes(1);
  });
});
