import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | undefined;

function createTheme() {
  let currentTheme: Theme;

  if (browser) {
    currentTheme = (localStorage.getItem('theme-preference') || 'light') as Theme;
  }

  const { subscribe, set } = writable<Theme>(currentTheme);

  return {
    subscribe,
    set: (value: Theme) => {
      if (browser) {
        localStorage.setItem('theme-preference', value || 'light');
        document.firstElementChild?.setAttribute('data-theme', value || 'light');
      }
      set(value);
    }
  };
}

export const theme = createTheme();