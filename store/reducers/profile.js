

import {USERPROFILE,LOGOUT} from '../../store/actions/profile';

const initialState = {
    myProfile: null,
    
};




export default (state = initialState, action) => {
    switch (action.type) {
      case USERPROFILE:
        return {
            myProfile: action.myProfile
        };
        case LOGOUT:
            return initialState;
      
      default:
        return state;
    }
  };