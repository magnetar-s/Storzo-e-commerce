import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/userSlice";

// register user
export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
  } catch (error) {
    console.log(error);
  }
};

// user/admin login
export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

// user/admin logout
export const asynclogoutuser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    console.log("user logged out!");
  } catch (error) {
    console.log(error);
  }
};

// currentuser
export const asynccurrentuser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("user logged out!");
  } catch (error) {
    console.log(error);
  }
};