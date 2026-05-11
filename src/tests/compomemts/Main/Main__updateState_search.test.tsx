import { describe, it, expect, vi } from 'vitest';
import Main from '../../../components/Main/Main';

describe('Main updateState_search', () => {
  it('Main updateState_search', () => {
    const WRAPPER = new Main({});
    const mockSetState = vi.fn();
    WRAPPER.setState = mockSetState as typeof WRAPPER.setState;

    WRAPPER.updateState_search('pikachu');

    expect(mockSetState).toHaveBeenCalledTimes(1);

    type SetStateCallback = (prevState: { search?: string }) => void;
    const setStateCallback = mockSetState.mock.calls[0][0] as SetStateCallback;
    const NEW_STATE = setStateCallback({});
    expect(NEW_STATE).toEqual({ search: 'pikachu' });
  });
});
