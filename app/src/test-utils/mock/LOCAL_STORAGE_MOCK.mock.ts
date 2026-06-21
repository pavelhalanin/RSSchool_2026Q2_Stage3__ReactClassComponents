import { vi } from 'vitest';

const LOCAL_STORAGE_MOCK = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  key: vi.fn(),
  length: 0,
};

vi.stubGlobal('localStorage', LOCAL_STORAGE_MOCK);

export default LOCAL_STORAGE_MOCK;
