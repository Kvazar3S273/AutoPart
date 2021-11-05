import http from '../http_common';

class UserService {
    getdata() {
        return http.get("api/user");        
    }  
}

export default new UserService();