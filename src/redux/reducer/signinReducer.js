const signInReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNIN_ACTION":
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
export default signInReducer;
