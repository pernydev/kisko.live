import { writable } from "svelte/store";

export const searchopen = writable(false);
export const query = writable("");