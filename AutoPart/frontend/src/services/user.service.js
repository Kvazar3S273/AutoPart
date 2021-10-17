import http from '../http_common';

class UserService {
    getdata(data) {
        return http.get("api/user", data);        
    }  
}

export default new UserService();