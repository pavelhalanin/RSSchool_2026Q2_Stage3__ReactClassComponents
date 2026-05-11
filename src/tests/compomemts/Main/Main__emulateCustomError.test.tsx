import { describe, it, expect, vi } from 'vitest';
import Main from '../../../components/Main/Main';

describe('Main emulateCustomError', () => {
  it('Main emulateCustomError', () => {
    const WRAPPER = new Main({});

    const mockUpdateState_errorBoundary = vi.fn();
    WRAPPER.updateState_errorBoundary = mockUpdateState_errorBoundary;

    WRAPPER.emulateCustomError();

    expect(mockUpdateState_errorBoundary).toHaveBeenCalledTimes(1);
    expect(mockUpdateState_errorBoundary).toHaveBeenCalledWith(
      'Error: Custom Error Boundary generated for Fallback UI'
    );
  });
});
