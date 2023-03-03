import { load } from "../storage/index.mjs";

export const isLoggedIn = () => Boolean(load("token"));

export const profile = () => load("profile");
