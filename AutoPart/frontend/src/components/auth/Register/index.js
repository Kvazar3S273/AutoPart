import React from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from "react-router-dom";
import authService from '../../../services/auth.service';
import MyTextInput from '../../common/MyTextInput';
import validationFields from './validation';
import { useDispatch } from 'react-redux';
import { REGISTER } from '../../../constants/actionTypes';

const RegisterPage = () => {

    const initState = {
        email: '',
        phone: '',
        firstName: '',
        secondName: '',
        password: '',
        confirmpassword: ''
    }


    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmitHandler = async (values) => {
        try {
            const result = await authService.register(values);
            console.log("Server is good ", result);
            dispatch({ type: REGISTER, payload: values.email });
            history.push("/");
        }
        catch (error) {
            console.log("Server is bad ", error.response);
        }
    }
    // let answer_errors = {
    //     email: '',
    //     phone: '',
    //     password: '',
    //     confirmpassword: '',
    //     firstName: '',
    //     secondName: ''
    // };

    // var res = error.response.data.errors;

    // if (res.Email) {
    //     let str = "";
    //     res.Email.forEach(element => {
    //         str += element + " ";
    //         console.log(element);
    //     });
    //     answer_errors.email = str;
    // }

    // if (res.Phone) {
    //     let str = "";
    //     res.Phone.forEach(element => {
    //         str += element + " ";
    //         console.log(element);
    //     });
    //     answer_errors.phone = str;
    // }

    // if (res.FirstName) {
    //     let str = "";
    //     res.FirstName.forEach(element => {
    //         str += element + " ";
    //         console.log(element);
    //     });
    //     answer_errors.firstName = str;
    // }

    // if (res.SecondName) {
    //     let str = "";
    //     res.SecondName.forEach(element => {
    //         str += element + " ";
    //         console.log(element);
    //     });
    //     answer_errors.secondName = str;
    // }

    // if (res.Password) {
    //     let str = "";
    //     res.Password.forEach(element => {
    //         str += element + " ";
    //         console.log(element);
    //     });
    //     answer_errors.password = str;
    // }

    // if (res.ConfirmPassword) {
    //     let str = "";
    //     res.ConfirmPassword.forEach(element => {
    //         str += element + " ";
    //         console.log(element);
    //     });
    //     answer_errors.confirmpassword = str;
    // }

    // this.setState({ errormessage: answer_errors });
    // console.log(this.state.errormessage.confirmpassword);

    return (
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 className="text-center">Реєстрація</h1>
                <Formik
                    initialValues={initState}
                    validationSchema={validationFields()}
                    onSubmit={onSubmitHandler}>
                    <Form>
                        <MyTextInput
                            label="Електронна пошта"
                            name="email"
                            id="email"
                            type="email"
                        />

                        <MyTextInput
                            label="Телефон"
                            name="phone"
                            id="phone"
                            type="text"
                        />

                        <MyTextInput
                            label="Прізвище"
                            name="secondName"
                            id="secondName"
                            type="text"
                        />

                        <MyTextInput
                            label="Ім'я"
                            name="firstName"
                            id="firstName"
                            type="text"
                        />

                        <MyTextInput
                            label="Пароль"
                            name="password"
                            type="password"
                            id="password"
                        />

                        <MyTextInput
                            label="Підтвердження пароля"
                            name="confirmpassword"
                            type="password"
                            id="confirmpassword"
                        />

                        <button type="submit" className="btn btn-primary mt-4">Реєстрація</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default RegisterPage
