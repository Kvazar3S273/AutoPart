import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import authService from '../../../services/auth.service';
import TextBoxField from '../../common/TextBoxField';


export class RegisterPage extends Component {

    state = {
        email: '',
        phone: '',
        firstName: '',
        secondName: '',
        password: '',
        confirmPassword: '',
        err: '',
        errormessages: {
            email: ''
        }
    }

    onChangeHandler = (e) => {
        //console.log("onChange name", e.target.name);
        //console.log("onChange value", e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitFormHandler = async (e) => {
        e.preventDefault();
        console.log("Посилаємо на сервер", this.state);
     
        try{
            const result = await authService.register(this.state);
            console.log("Server is good ", result);
            this.props.history.push("/");
        }
        catch(error) {
            console.log("Server is bad ", error.response.data.errors);
            this.setState({err:error.response.data.errors});
            
        }
    }

    render() {
        //console.log("state", this.state);
        const { email, phone, firstName, secondName, password, confirmPassword, err} = this.state;
        return (
            <div className="row">
                <div className="offset-md-3 col-md-6">
                <h1 className="text-center">Реєстрація</h1>
                <form className="row g-3 was-validated" onSubmit={this.onSubmitFormHandler}>
                    <TextBoxField 
                        field="email"
                        label="Електронна пошта"
                        value={email}
                        onChangeHandler={this.onChangeHandler}
                        err={this.err}/>

                    <TextBoxField 
                        field="phone"
                        label="Телефон"
                        value={phone}
                        onChangeHandler={this.onChangeHandler}
                        err="жопа"/>

                    <TextBoxField 
                        field="secondName"
                        label="Прізвище"
                        value={secondName}
                        onChangeHandler={this.onChangeHandler}
                        err="жопа"/>

                    <TextBoxField 
                        field="firstName"
                        label="Ім'я"
                        value={firstName}
                        onChangeHandler={this.onChangeHandler}
                        err="жопа"/>


                    <TextBoxField 
                        field="password"
                        type="password"
                        label="Пароль"
                        value={password}
                        onChangeHandler={this.onChangeHandler}
                        err="жопа"/>

                    <TextBoxField 
                        field="confirmPassword"
                        type="password"
                        label="Підтвердження пароля"
                        value={confirmPassword}
                        onChangeHandler={this.onChangeHandler}
                        err="жопа"/>

                    
                    <button type="submit" className="btn btn-primary mt-4">Реєстрація</button>
                </form>
                </div>

            </div>
        )
    }
}

export default withRouter(RegisterPage)
