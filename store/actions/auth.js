import {AsyncStorage} from 'react-native';

// export const SIGNUP ='SIGNUP';
// export const LOGIN = 'LOGIN';

// import * as Token from '../../utils/generateAndVerifyToken';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT ='LOGOUT';

export const authenticate = (userId, token, expiryDate) => {
  return { type: AUTHENTICATE, userId: userId, token: token, expiryDate: expiryDate };
};


export const signup =(email, password)=>{
    
    return async dispatch =>{
       const response = await fetch('https://hazajob.herokuapp.com/api/v1/users/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email:email,
                password:password,
                confirmPassword:password
            
            })
        });
    
        if(!response.ok){
            const errorResData = await response.json();
            // console.log(errorResData);
            const errorId = errorResData.status;
            let message= 'something went wrong';
            if(errorId==='fail'){
                message=errorResData.message;
            }
            throw new Error (message);
        }
    
        const resData = await response.json();
    
        console.log(resData.data.user);
    
        dispatch(authenticate( resData.data.newUser._id,resData.token,resData.auth.willExpireOn));
    
    };
    
    };
    export const login =(email, password)=>{
        
    return async dispatch =>{
       const response = await fetch('https://hazajob.herokuapp.com/api/v1/users/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email:email,
                password:password
            
            })
        });
    
        if(!response.ok){
            const errorResData = await response.json();
            // console.log(errorResData);
            const errorId = errorResData.status;
            let message= 'something went wrong';
            if(errorId==='fail'){
                message=errorResData.message;
            }
            throw new Error (message);
        }
    
        const resData = await response.json();
    
        // console.log(resData);
    
        dispatch(authenticate( resData.data.user._id,resData.auth.token, resData.auth.willExpireOn));
      
        saveDataToStorage(resData.auth.token, resData.data.user._id, resData.auth.willExpireOn);

        console.log(parseInt(new Date()));
    console.log(new Date());
    };
    
    };


    export const logout = () =>{
        AsyncStorage.removeItem('userData');
        return {type:LOGOUT};


    };

    const saveDataToStorage = (token, userId,expiryDate)=>{

        AsyncStorage.setItem('userData',JSON.stringify({
            token: token,
            userId:userId,
            expiryDate:expiryDate
        }));
    };

