import { LOGIN } from "../constants/actionTypes";
import { REGISTER } from "../constants/actionTypes";
import { LOGOUT } from "../constants/actionTypes";

const initialState = {
    isAuth: false,
    username: "",
    role:""
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER: 
        case LOGIN: {
            return {
                isAuth: true,
                username: payload
            };
        }
        case LOGOUT: {
            return {
                isAuth: false,
                username: "",
                role:""
            }
        }
    }

    return state;
}

export default authReducer;