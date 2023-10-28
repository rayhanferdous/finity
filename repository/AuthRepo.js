import Cookies from "universal-cookie";
import { useCookies } from "react-cookie";

export const AuthRepo = {
  login: (userName, password) => {
    const response = fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName, //"kminchelle",
        password: password, //0lelplR
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          const cookies = new Cookies(null, { path: "/" });
          cookies.set("token", result.token);
          window.location.href = "/dashboard";
          return result;
        },
        (error) => {
          console.log(error);
          return error;
        }
      );
  },
  logout: async () => {},
};
