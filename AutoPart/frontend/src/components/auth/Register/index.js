import React, { useRef, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../common/MyTextInput';
import MyPhotoInput from '../../common/MyPhotoInput';
import { useDispatch } from 'react-redux';
import validationFields from './validation';
import { ERRORS } from '../../../constants/actionTypes';
import { useSelector } from 'react-redux';
import { RegisterUser } from '../../../actions/auth';
import Spinner from '../../common/loader';
import { push } from 'connected-react-router';
import { useHistory } from 'react-router';
//import EclipseWidget from '../../common/eclipse';

const RegisterPage = () => {

    const initState = {
        email: '',
        phone: '',
        firstName: '',
        secondName: '',
        photo: null,
        password: '',
        confirmpassword: ''
    }
    const dispatch = useDispatch();
    const history=useHistory();
    const refFormik = useRef();
    const titleRef = useRef();
    const { load } = useSelector(state => state.auth);
    //const [invalid, setInvalid] = useState([]);
    const onSubmitHandler = async (values) => {
        try {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => formData.append(key, value));
            dispatch(RegisterUser(formData))
                .then(result => {
                    dispatch(push('/'));
                })
                .catch(ex => {
                    let answer_errors = {
                        email: ''
                    };
                    Object
                    .entries(ex.errors)
                    .forEach(([key, values]) => {
                        let str = '';
                        values.forEach(text => { 
                            str += text + " "; 
                        });
                        //refFormik.current.setFieldError(key, str);
                        answer_errors.email=str;
                        dispatch({type: ERRORS, payloads: answer_errors.email});
                    })
                })
                    //setInvalid(ex.errors.invalid);
                    // answer_errors.email = str;
                    // dispatch({ type: ERRORS, payloads: answer_errors.email });
                    titleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        catch (problem) {
        var res = problem.response.data.errors;
        console.log("Server is bad register from", res);
    }
}

const { errorvalid } = useSelector(res => res.valid);

useEffect(() => {
    refFormik.current.setErrors({
        "email": errorvalid
    })
}, [errorvalid]);

return (
    <div className="row">
        <div className="offset-md-3 col-md-6">
            <h1 ref={titleRef} className="text-center">Реєстрація</h1>
            {/* {invalid && invalid.length>0 &&
                    <div className="alert alert-danger">
                        <ul>
                        {
                            invalid.map((text, index) => {
                                return (
                                    <li key={index}>{text}</li>

                                );
                            })
                        }
                        </ul>
                    </div>

                } */}
            {load && <Spinner />}
            <Formik
                innerRef={refFormik}
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
                    {/* {!!errorvalid && <span className="text-danger">{errorvalid}</span>} */}

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

                    <MyPhotoInput
                        refFormik={refFormik}
                        field="photo"
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
        {/* {load && <Spinner />} */}
    </div>
)
}

export default RegisterPage;
