import {GET_USERS} from "../constants/actionTypes";
import getuser from '../services/user.service';

export const GetUser = () => async(dispatch) => {

    try {
        const result = await getuser.getdata(); 
        console.log("Отиманий user:", result.data);        
        dispatch({type: GET_USERS, data: result.data});    
    }
    catch(error) {
        console.log("Неможливо отримати користувачів",error);
    }
}