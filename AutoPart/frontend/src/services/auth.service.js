import http from "../http_common";

class AuthService {

    register(data) {
        return http.post("api/account/register", data);
    }

    login(data){
        return http
            .post("api/account/login", data);
    }
}

export default new AuthService();