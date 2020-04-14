export const SIGNIN_ACTION = "SIGNIN_ACTION";

import axios from "axios";
export const signIn =( username,password) => async dispatch => {
  console.log('=====Actions');

  try {
    const response = await axios.post("localhost:4000/api/v1/auth/signin", {
      username,
      password
    });
    console.log(response);
    // dispatch(signinSuccess(response.data.message));
  } catch (error) {
    const errorMessage = error.response.data.error;
    // dispatch(forgotPasswordError(errorMessage));
  }
};

export function signinSuccess(data) {
  return {
    type: SIGNIN_ACTION,
    payload: data
  };
}