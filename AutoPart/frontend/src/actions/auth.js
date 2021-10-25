import authService from "../services/register.service";
import { REGISTER_AUTH, REGISTER_BEGIN, REGISTER_FAIL } from "../constants/actionTypes";
import { push } from "connected-react-router";
import jwt from "jsonwebtoken";
import register_service from "../services/register.service";
import authTokenRequest from "../services/authRequest"
//import { useHistory } from "react-router-dom";

export const RegisterUser = (model) => async (dispatch) => {
    //const history = useHistory();

    try {
        // const result = await authService.register(model);
        // console.log("register result", result);
        // var jwt_token = result.data.token;
        // console.log("Result data token:",result.data.token);
        // var verifiedData = jwt.decode(jwt_token);
        // dispatch({type: REGISTER, payload: verifiedData});
        // localStorage.setItem('Current user',jwt_token);
        // authTokenRequest(jwt_token);
        // dispatch({type:REGISTER_START})
        // setTimeout(() => { dispatch(push("/")) }, 2000);
        //return Promise.resolve(result);


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
        //console.log("register error", err.responce.data);
        //setErrors({"Email": "not is valid"} );
        //return Promise.reject();

        const errorsdata = error.response;
        // console.log("Problem register",error.response.data.errors);
        dispatch({ type: REGISTER_FAIL, payload: errorsdata.data })
        return Promise.reject(errorsdata.data);
    }
}