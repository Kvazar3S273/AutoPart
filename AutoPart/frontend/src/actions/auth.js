import authService from "../services/auth.service";
import { REGISTER, REGISTER_START, REGISTER_FAILED } from "../constants/actionTypes";
import { push } from "connected-react-router";
import jwt from "jsonwebtoken";
//import { useHistory } from "react-router-dom";

export const RegisterUser = (model) => async (dispatch) => {
    //const history = useHistory();

    try {
        const result = await authService.register(model);
        //console.log("register reuslt", result);
        var jwt_token = result.data.token;
        var verifiedData = jwt.decode(jwt_token);
        dispatch({type: REGISTER, payload: verifiedData});
        localStorage.setItem('Current user',jwt_token);
        authTokenRequest(jwt_token);
        dispatch({type:REGISTER_START})
        setTimeout(() => {
          dispatch(push("/"))
        }, 2000);
        //return Promise.resolve(result);
        
    }
    catch(err) {
        console.log("register error", );
        //setErrors({"Email": "not is valid"} );
        //return Promise.reject();
    }
}