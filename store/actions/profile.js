// import {AsyncStorage} from 'react-native';

export const USERPROFILE = 'USERPROFILE';
export const LOGOUT = 'LOGOUT';
import { useSelector, useDispatch } from 'react-redux';

export const userProfile = (profile) =>{

    return {type:USERPROFILE, myProfile:profile};
};

export const getUserProfile =(userToken)=>{

    // const userToken = useSelector(state=> state.auth.token);
   

    return async dispatch =>{

        const response = await fetch('https://hazajob.herokuapp.com/api/v1/users/user-data',
        {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'x_auth_token':userToken
            }
        });

        // if(!response.ok){
        //     const errorResData = await response.json();
        //     // console.log(errorResData);
        //     const errorId = errorResData.status;
        //     let message= 'something went wrong';
        //     if(errorId==='fail'){
        //         message=errorResData.message;
        //     }
        //     throw new Error (message);
        // };

        const resData = await response.json();
                // console.log(response);

        console.log(resData);


        dispatch(userProfile(resData));

    
    };

};
