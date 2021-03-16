import { AUTHENTICATE ,LOGOUT} from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
  expiryDate:null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
        expiryDate:action.expiryDate
      };
      case LOGOUT:
          return initialState;
    
    default:
      return state;
  }
};
