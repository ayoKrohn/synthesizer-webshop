import { readable } from "svelte/store";
import { writable } from "svelte/store";

export const synthURL = readable("http://localhost:3000/api/synths");

export const usersURL = writable("http://localhost:3000/api/synths");
