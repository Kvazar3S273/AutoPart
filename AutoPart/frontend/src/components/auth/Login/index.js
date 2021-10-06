import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../common/MyTextInput';

const LoginPage = () => {
    return (
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 className="text-center">Вхід на сайт</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email("Не коректно вказана пошта")
                            .required("Вкажіть пошту"),
                        password: Yup.string()
                        .required("Введіть пароль")
                        .min(5, "Пароль занадто короткий, потрібно не менше 5 символів")
                        .matches(/[a-zA-Z]/, "Пароль повинен містити хоча б одну латинську літеру")
                    })}
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
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage
