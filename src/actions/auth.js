import axios from '../utils/axiosInstance';
import axiossex from 'axios';
import { showAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CLEAR_PROFILE
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { registrationReward } from '../utils/contract-functions';

//load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
    await dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

//register user
export const registerUser = (userData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify(userData);
  try {
    const res = await axios.post('/api/users', body, config);
    await dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    await registrationReward(userData.wallet);
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(showAlert(error.msg, 'danger')));
    }

    dispatch({ type: REGISTER_FAILURE });
  }
};

//login user
export const loginUser = (name, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ username: name, password });
  try {
    const res = await axios.post('/api/auth', body, config);
    await dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(showAlert(error.msg, 'danger')));
    }

    dispatch({ type: LOGIN_FAILURE });
  }
};

//logout user
export const logoutUser = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
