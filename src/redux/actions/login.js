import { LOGIN, LOGOUT } from "../types/login";

// each action for change value
export const login = (data) => ({ type: LOGIN, payload: data });
export const logout = (data) => ({ type: LOGOUT, payload: data });
