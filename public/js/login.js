/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      // Frontend and backend are running ont the same origin, so the url is relative starting from /api/
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
      withCredentials: true,
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      // After 1.5 seconds, the user will be redirected to the home page. 1500 milliseconds is 1.5 seconds.
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    if ((res.data.status = "success")) location.reload(true);
  } catch (err) {
    showAlert("error", "Error logging out! Try again.");
  }
};
