const setStorageItem = (key: string, value: string) => {
  window.sessionStorage.setItem(key, value);
};

const getStorageItem = (key: string): string | null => {
  return window.sessionStorage.getItem(key);
};

const clearStorageItem = (key: string) => {
  window.sessionStorage.removeItem(key);
};

export { setStorageItem, getStorageItem, clearStorageItem };
