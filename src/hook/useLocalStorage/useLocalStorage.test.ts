import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useLocalStorage } from './useLocalStorage';
import * as Storage from './Storage';

vi.mock('./Storage', () => ({
  storageGetItem: vi.fn(),
  storageSetItem: vi.fn(),
  storageRemoveItem: vi.fn(),
}));

describe('useLocalStorage', () => {
  const testKey = 'test-key';
  const testValue = 'some value';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('setItem', () => {
    it('should call storageSetItem with the given key and value', () => {
      const mockStorageSetItem = vi.mocked(Storage.storageSetItem);
      const { setItem } = useLocalStorage();

      setItem(testKey, testValue);

      expect(mockStorageSetItem).toHaveBeenCalledTimes(1);
      expect(mockStorageSetItem).toHaveBeenCalledWith(testKey, testValue);
    });
  });

  describe('getItem', () => {
    it('should call storageGetItem with the given key and return its result', () => {
      const mockStorageGetItem = vi.mocked(Storage.storageGetItem);
      mockStorageGetItem.mockReturnValue(testValue);
      const { getItem } = useLocalStorage();

      const result = getItem(testKey);

      expect(mockStorageGetItem).toHaveBeenCalledTimes(1);
      expect(mockStorageGetItem).toHaveBeenCalledWith(testKey);
      expect(result).toBe(testValue);
    });

    it('should return null when storageGetItem returns null', () => {
      const mockStorageGetItem = vi.mocked(Storage.storageGetItem);
      mockStorageGetItem.mockReturnValue(null);
      const { getItem } = useLocalStorage();

      const result = getItem(testKey);

      expect(result).toBeNull();
    });
  });

  describe('removeItem', () => {
    it('should call storageRemoveItem with the given key', () => {
      const mockStorageRemoveItem = vi.mocked(Storage.storageRemoveItem);
      const { removeItem } = useLocalStorage();

      removeItem(testKey);

      expect(mockStorageRemoveItem).toHaveBeenCalledTimes(1);
      expect(mockStorageRemoveItem).toHaveBeenCalledWith(testKey);
    });
  });
});
