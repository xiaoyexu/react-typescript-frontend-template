export type ThemeMode = 'classic-enterprise' | 'dark-enterprise';
const THEME_STORAGE_KEY = 'theme-mode';
const DEFAULT_THEME: ThemeMode = 'classic-enterprise';

export const getStoredTheme = (): ThemeMode => {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'classic-enterprise' || storedTheme === 'dark-enterprise') {
    return storedTheme;
  }
  return DEFAULT_THEME;
};

export const applyTheme = (theme: ThemeMode) => {
  document.body.setAttribute('data-theme', theme);
};

export const setStoredTheme = (theme: ThemeMode) => {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
};




