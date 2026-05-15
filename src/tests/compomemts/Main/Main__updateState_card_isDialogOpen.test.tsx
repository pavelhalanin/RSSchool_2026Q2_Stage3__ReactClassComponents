import { describe, it, expect, vi } from 'vitest';
import Main from '../../../components/Main/Main';

describe('Main updateState_card_isDialogOpen', () => {
  it('Main updateState_card_isDialogOpen', () => {
    const WRAPPER = new Main({});
    const mockSetState = vi.fn();
    WRAPPER.setState = mockSetState as typeof WRAPPER.setState;

    WRAPPER.updateState_card_isDialogOpen(true);

    expect(mockSetState).toHaveBeenCalledTimes(1);

    type SetStateCallback = (prevState: { dialogIsOpen?: boolean }) => void;
    const setStateCallback = mockSetState.mock.calls[0][0] as SetStateCallback;
    const NEW_STATE = setStateCallback({});
    expect(NEW_STATE).toEqual({ card: { dialogIsOpen: true } });
  });
});
