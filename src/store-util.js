// From "Svelte/Sapper in Action", p. 122
import { writable } from "svelte/store";

function persist(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function writableSession(key, initialValue) {
  let store;
  if (typeof window !== "undefined") {
    const sessionValue = JSON.parse(sessionStorage.getItem(key));
    if (!sessionValue) persist(key, initialValue);
    store = writable(sessionValue || initialValue);

    console.log(store);

    store.subscribe((value) => persist(key, value));
    return store;
  } else {
    store = writable(null);
  }
}
