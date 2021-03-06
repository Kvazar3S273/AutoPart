import React from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../common/MyTextInput';
import validationFields from './validation';
import { LOGIN_AUTH } from '../../../constants/actionTypes';
import { useDispatch } from 'react-redux';
import registerService from '../../../services/register.service';
import { useHistory } from 'react-router';
import jwt from "jsonwebtoken";
import authTokenRequest from '../../../services/authRequest';
import { isRole } from '../../../actions/auth';
import { push } from 'connected-react-router';

const LoginPage = () => {

    const initState = {
        email: '',
        password: ''
    }
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmitHandler = async (values) => {
        try {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => formData.append(key, value));
            const result = await registerService.login(formData);
            console.log("Sended data: ", values);
            console.log("Result data:", result.data.token);
            var jwt_token = result.data.token;
            var verifiedData = jwt.decode(jwt_token);
            console.log("Verified:",verifiedData);
            console.log("Verified.roles:", verifiedData.roles);
            dispatch({ type: LOGIN_AUTH, payload: verifiedData });
            localStorage.setItem('Current user', jwt_token);         
            authTokenRequest(jwt_token);
            if (isRole(verifiedData, 'admin')) {
                dispatch(push("/admin"));
                return;
            } 
            history.push("/");
        }
        catch (errors) {
            var res = errors.response.data.errors;                   
            console.log("Errors:",res);

        }

    }

    return (
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 className="text-center">Вхід на сайт</h1>
                <Formik
                    initialValues={initState}
                    validationSchema = {validationFields()}
                    onSubmit={onSubmitHandler}>
                    <Form>
                        <MyTextInput
                            label="Пошта"
                            id="email"
                            name="email"
                            type="text"
                        />
                        <MyTextInput
                            label="Пароль"
                            id="password"
                            name="password"
                            type="password"
                        />
                        <input type="submit" className="btn btn-success btn-lg" value="Вхід"></input>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage
