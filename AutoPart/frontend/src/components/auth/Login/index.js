import React from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../common/MyTextInput';
import validationFields from './validation';
import { useDispatch } from 'react-redux';

const LoginPage = () => {

    const initState = {
        email: '',
        password: ''
    }
    const dispatch = useDispatch();
    const loginComplete = async (e) => {
        e.preventDefault();
        await dispatch({type: "LOGINED_EVENT"});
    }
    return (
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 className="text-center">Вхід на сайт</h1>
                <Formik
                    initialValues={initState}
                    validationSchema = {validationFields()}
                    onSubmit={(values) => {
                        console.log("values submit", values)
                    }}>
                    <Form>
                        <MyTextInput
                            label="Пошта"
                            name="email"
                            type="text"
                        />
                        <MyTextInput
                            label="Пароль"
                            name="password"
                            type="password"
                        />
                        <input type="submit" className="btn btn-success btn-lg" value="Вхід"></input>
                        <input type="button" className="btn btn-danger btn-lg" 
                            onClick={loginComplete} value="Зайшов"></input>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage
