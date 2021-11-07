import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { UpdateDataUser } from '../../../actions/updateuser';
import { Formik, Form } from 'formik';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import validateEdit from '../../userlist/Edit/validation_edit';
import TextInput from '../../common/MyTextInput';
import { ERRORS } from "../../../constants/actionTypes";
import PhotoInputUpdate from "../../common/MyPhotoInput";


const EditUser = ({ match }) => {
    const userId = match.params.id;
    const { list } = useSelector(res => res.user);
    console.log("Id current user:", match.params.id);

    const currentuser = list.find(user => user.id == userId);

    const dispatch = useDispatch();
    const refFormik = useRef();

    const initState = {
        email: currentuser.email,
        name: currentuser.name,
        photo: currentuser.photo
    }

    if (currentuser) {
        console.log("Current user", currentuser);
    }

    const onSubmitHandler = async (value) => {

        try {
            const formData = new FormData();
            Object.entries(value).forEach(([key, value]) => formData.append(key, value));
            dispatch(UpdateDataUser(userId, formData))
                .then(res => {
                    dispatch(push("/user"));
                })
                .catch(ex => {
                    let answer_errors = {
                        email: '',
                    };
                    Object.entries(ex.errors).forEach(([key, values]) => {
                        let str = '';
                        values.forEach(text => {
                            str += text + " ";
                        });
                        answer_errors.email = str;
                        dispatch({ type: ERRORS, payloads: answer_errors.email });
                    })

                })


        }
        catch (err) {

            var res = err.response.data.errors;
            console.log("Another errors in update :", res);

        }

    }

    const { errorvalid } = useSelector(res => res.valid);

    useEffect(() => {
        refFormik.current.setErrors({
            "email": errorvalid
        })
    }, [errorvalid]);

    return (
        <>

            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1 className="text-center text-primary">Редагування</h1>
                    <Formik
                        innerRef={refFormik}
                        initialValues={initState}
                        validationSchema={validateEdit()}
                        onSubmit={onSubmitHandler}
                    >
                        <Form >

                            <TextInput
                                label="Email"
                                name="email"
                                id="email"
                                type="text"
                            />

                            <TextInput
                                label="Name"
                                name="name"
                                id="name"
                                type="text"
                            />

                            <PhotoInputUpdate
                                refFormik={refFormik}
                                field="photo"
                                curphoto={currentuser.photo}
                            />
                            <button type="submit" className="btn btn-primary">Обновити дані</button>
                        </Form>
                    </Formik>
                </div>


            </div>

        </>)



}
export default EditUser;