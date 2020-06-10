const AUTH_TOKEN = "AUTH_TOKEN";

export class AuthService {
  static getToken() {
    return localStorage.getItem(AUTH_TOKEN);
  }

  static setToken(token) {
    return localStorage.setItem(AUTH_TOKEN, token);
  }

  static deleteToken() {
    return localStorage.removeItem(AUTH_TOKEN);
  }

  static checkUserAuth() {
    return this.$store.dispatch("checkUserAuth");
  }
}
