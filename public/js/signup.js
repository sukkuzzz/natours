/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

export const signup = async (name, email, password, passwordConfirm) => {
  console.log("I was here in the signup.js page ");
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });
    console.log(res);
    if (res.data.status === "success") {
      showAlert("success", "Signed up successfully!");
      // After 1.5 seconds, the user will be redirected to the home page. 1500 milliseconds is 1.5 seconds.
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
