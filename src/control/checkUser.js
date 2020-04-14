
import LoginScreen from '../screens/user/signinScreen';
const checkUser = (email,password) => {
    
    if (LoginScreen.validateInput()) {
        if (email == "0783404528" && password == "123") {

            return (
                alert("succefully")
            );
        }
        return (
            alert("user not Available please register")
        );

    }
}
export default checkUser;