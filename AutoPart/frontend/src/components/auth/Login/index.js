import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../common/MyTextInput';

const LoginPage = () => {
    return (
        <div className="row">
        <div className="offset-md-3 col-md-6">
        <h1 className="text-center">Вхід на сайт</h1>
            <Formik
                initialValues={{
                    email: '',
                }}
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
                    <input type="submit" className="btn btn-sucsess" value="Вхід"></input>
                </Form>
            </Formik>
        </div>
        </div>
    )
}

export default LoginPage
