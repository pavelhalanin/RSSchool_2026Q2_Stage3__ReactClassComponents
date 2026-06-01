export function storageGetItem(key: string): string | null {
  return window.localStorage.getItem(key);
}

export function storageSetItem(key: string, value: string): void {
  return window.localStorage.setItem(key, value);
}

export function storageRemoveItem(key: string): void {
  return window.localStorage.removeItem(key);
}
