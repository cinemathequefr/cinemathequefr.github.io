// From "Svelte/Sapper in Action", p. 122

import { writable } from "svelte/store";

function persist(key, value) {
  if (process.browser) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

export function writableSession(key, initialValue) {
  if (process.browser) {
    const sessionValue = JSON.parse(sessionStorage.getItem(key));
    if (!sessionValue) persist(key, initialValue);
    const store = writable(sessionValue || initialValue);
    store.subscribe((value) => persist(key, value));
    return store;
  }
}
