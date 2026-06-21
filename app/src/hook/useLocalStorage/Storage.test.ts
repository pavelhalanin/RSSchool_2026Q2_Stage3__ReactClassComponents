import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { storageGetItem, storageSetItem, storageRemoveItem } from './Storage';

describe('storage helpers', () => {
  const testKey = 'test-key';
  const testValue = 'some value';

  beforeEach(() => {
    const mockLocalStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      length: 0,
      key: vi.fn(),
    };
    vi.stubGlobal('localStorage', mockLocalStorage);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  describe('storageGetItem', () => {
    it('should call localStorage.getItem with the given key and return its result', () => {
      const mockGetItem = vi.mocked(window.localStorage.getItem);
      mockGetItem.mockReturnValue(testValue);

      const result = storageGetItem(testKey);

      expect(mockGetItem).toHaveBeenCalledTimes(1);
      expect(mockGetItem).toHaveBeenCalledWith(testKey);
      expect(result).toBe(testValue);
    });

    it('should return null when localStorage.getItem returns null', () => {
      const mockGetItem = vi.mocked(window.localStorage.getItem);
      mockGetItem.mockReturnValue(null);

      const result = storageGetItem(testKey);

      expect(result).toBeNull();
    });
  });

  describe('storageSetItem', () => {
    it('should call localStorage.setItem with the given key and value', () => {
      const mockSetItem = vi.mocked(window.localStorage.setItem);
      storageSetItem(testKey, testValue);

      expect(mockSetItem).toHaveBeenCalledTimes(1);
      expect(mockSetItem).toHaveBeenCalledWith(testKey, testValue);
    });

    it('should propagate any error thrown by localStorage.setItem', () => {
      const error = new Error('Quota exceeded');
      const mockSetItem = vi.mocked(window.localStorage.setItem);
      mockSetItem.mockImplementation(() => {
        throw error;
      });

      expect(() => storageSetItem(testKey, testValue)).toThrow(error);
    });
  });

  describe('storageRemoveItem', () => {
    it('should call localStorage.removeItem with the given key', () => {
      const mockRemoveItem = vi.mocked(window.localStorage.removeItem);
      storageRemoveItem(testKey);

      expect(mockRemoveItem).toHaveBeenCalledTimes(1);
      expect(mockRemoveItem).toHaveBeenCalledWith(testKey);
    });

    it('should propagate any error thrown by localStorage.removeItem', () => {
      const error = new Error('Remove failed');
      const mockRemoveItem = vi.mocked(window.localStorage.removeItem);
      mockRemoveItem.mockImplementation(() => {
        throw error;
      });

      expect(() => storageRemoveItem(testKey)).toThrow(error);
    });
  });
});
