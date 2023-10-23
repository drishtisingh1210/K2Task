import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "../components/axios-config";

//!-------------------------------------
// !Login Action this goes to user Reducer in Reducer Folder
//!--------------------------------------

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `http://localhost:3001/api/user/login`,
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

//!-----------------------------------------------------
//!Register
//!------------------------------------------------------

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    // const config = {
    //   headers: { "Content-Type": "application/json" },
    //   withCredentials: true,
    //   withCredentials: true,
    // };

    const { data } = await axios.post(
      `http://localhost:3001/api/user/create`,
      userData
    );
    console.log("Signup successful:", data.user);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Load User

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const response = await axios.get(`http://localhost:3001/api/user/info`);

    if (response.status === 200) {
      // console.log(response);
      dispatch({ type: LOAD_USER_SUCCESS, payload: response.data });
    } else {
      throw new Error("Failed to load user");
    }
  } catch (error) {
    console.log(error);

    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`http://localhost:3001/api/user/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
