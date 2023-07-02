import * as types from './actionTypes';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

const forgotPasswordStart = (email) => ({
  type: types.FORGOT_PASSWORD_START,
  payload: email,
});

const forgotPasswordSuccess = () => ({
  type: types.FORGOT_PASSWORD_SUCCESS,
});

const forgotPasswordFail = (error) => ({
  type: types.FORGOT_PASSWORD_FAIL,
  payload: error,
});

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
        toast.success('Registration successful');
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
        toast.error('Registration failed');
      });
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
        toast.success('Login successful!');
      })
      .catch((error) => {
        dispatch(loginFail(error.message));
        toast.error('Login failed. Please check your email and password and try again.');
      });
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then(() => {
        dispatch(logoutSuccess());
        toast.success('Logged out successfully.');
      })
      .catch((error) => {
        dispatch(logoutFail(error.message));
        toast.error('Failed to log out');
      });
  };
};

export const forgotPasswordInitiate = (email) => {
  return function (dispatch) {
    dispatch(forgotPasswordStart(email));
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch(forgotPasswordSuccess());
        toast.success('Password reset email sent successfully');
      })
      .catch((error) => {
        dispatch(forgotPasswordFail(error.message));
        toast.error('Failed to send password reset email');
      });
  };
};
