import { readable } from "svelte/store";
import { writable } from "svelte/store";

export const synthURL = "http://localhost:3000/api/synths";

export const loginURL = "http://localhost:3000/api/users/login";

export const signupURL = "http://localhost:3000/api/users/signup";

export const amountOfItems = writable(0);

export const cartItems = writable([]);

export const user = writable(null);
