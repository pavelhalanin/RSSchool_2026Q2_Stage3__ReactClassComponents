import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  const mockKey = 'test-key';
  const mockValue = { name: 'John', age: 30 };
  const mockSerialized = JSON.stringify(mockValue);

  let mockLocalStorage: Record<string, string>;

  beforeEach(() => {
    mockLocalStorage = {};

    const mockStorage = {
      getItem: vi.fn((key: string) => mockLocalStorage[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        mockLocalStorage[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete mockLocalStorage[key];
      }),
      clear: vi.fn(() => {
        mockLocalStorage = {};
      }),
      length: 0,
      key: vi.fn(),
    };

    vi.stubGlobal('window', { localStorage: mockStorage });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('should store value in localStorage (serializing to JSON)', () => {
    const { setItem } = useLocalStorage(mockKey);
    setItem(mockValue);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      mockKey,
      mockSerialized
    );
    expect(mockLocalStorage[mockKey]).toBe(mockSerialized);
  });

  it('should retrieve value from localStorage and parse JSON', () => {
    mockLocalStorage[mockKey] = mockSerialized;

    const { getItem } = useLocalStorage(mockKey);
    const result = getItem();

    expect(window.localStorage.getItem).toHaveBeenCalledWith(mockKey);
    expect(result).toEqual(mockValue);
  });

  it('should return undefined if key is missing in localStorage', () => {
    const { getItem } = useLocalStorage(mockKey);
    const result = getItem();

    expect(result).toBeUndefined();
    expect(window.localStorage.getItem).toHaveBeenCalledWith(mockKey);
  });

  it('should remove value from localStorage by key', () => {
    mockLocalStorage[mockKey] = mockSerialized;

    const { removeItem } = useLocalStorage(mockKey);
    removeItem();

    expect(window.localStorage.removeItem).toHaveBeenCalledWith(mockKey);
    expect(mockLocalStorage[mockKey]).toBeUndefined();
  });

  it('should handle error on setItem (e.g., quota exceeded)', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    window.localStorage.setItem = vi.fn(() => {
      throw new Error('Quota exceeded');
    });

    const { setItem } = useLocalStorage(mockKey);
    setItem(mockValue);

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });

  it('should handle error on getItem (e.g., invalid JSON)', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    mockLocalStorage[mockKey] = '{invalid json}';

    const { getItem } = useLocalStorage(mockKey);
    const result = getItem();

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });

  it('should handle error on removeItem', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    window.localStorage.removeItem = vi.fn(() => {
      throw new Error('Remove failed');
    });

    const { removeItem } = useLocalStorage(mockKey);
    removeItem();

    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });
});
