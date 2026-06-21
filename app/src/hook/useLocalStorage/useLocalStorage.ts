import { storageGetItem, storageRemoveItem, storageSetItem } from './Storage';

export const useLocalStorage = () => {
  const setItem = (key: string, value: string): void => {
    storageSetItem(key, value);
  };

  const getItem = (key: string): string | null => {
    return storageGetItem(key);
  };

  const removeItem = (key: string): void => {
    return storageRemoveItem(key);
  };

  return { setItem, getItem, removeItem };
};
