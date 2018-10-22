import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const url = "/auth";
const token = "token";

httpService.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await httpService.post(url, { email, password });
  localStorage.setItem(token, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(token, jwt);
}

export function logout() {
  localStorage.removeItem(token);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(token);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(token);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
