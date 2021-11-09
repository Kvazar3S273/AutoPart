//import authService from "../services/register.service";
import { LOGIN_AUTH, REGISTER_AUTH, REGISTER_BEGIN, REGISTER_FAIL } from "../constants/actionTypes";
//import { push } from "connected-react-router";
import jwt from "jsonwebtoken";
import register_service from "../services/register.service";
import authTokenRequest from "../services/authRequest"
//import { useHistory } from "react-router-dom";

export const RegisterUser = (model) => async (dispatch) => {
    //const history = useHistory();

    try {
        
        dispatch({ type: REGISTER_BEGIN });
        const result = await register_service.register(model);
        var jwt_token = result.data.token;
        var verified = jwt.decode(jwt_token);
        localStorage.setItem('Current user', jwt_token);
        authTokenRequest(jwt_token);
        setTimeout(() => {
            dispatch({ type: REGISTER_AUTH, payload: verified });
        }, 2000);

        return Promise.resolve(result);
    }
    catch (err) {
        const errorsdata = err.response;
        dispatch({ type: REGISTER_FAIL, payload: errorsdata.data })
        return Promise.reject(errorsdata.data);
    }
}

export const isRole = (user, role) => {
    if(Array.isArray(user.roles)) {
        for(let i =0; i < user.roles.length; i++)
        {
            if(user.roles[i]==role)
                return true;
        }
        return false;
    }
    else {
        return user.roles==role;
    }
  }