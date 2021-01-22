// import { writableSession } from "./store-util";
// export const selected = writableSession("selected", 0);

import { writable } from "svelte/store";
export let selected;
if (typeof window !== "undefined") {
  selected = writable(sessionStorage.getItem("selected") || 0);
} else {
  selected = writable(null);
}
