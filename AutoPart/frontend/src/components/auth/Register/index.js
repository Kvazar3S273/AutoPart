import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import authService from '../../../services/auth.service';
import TextBoxField from '../../common/TextBoxField';
import ReactDOM from 'react-dom';

export class RegisterPage extends Component {

    state = {
        email: '',
        phone: '',
        firstName: '',
        secondName: '',
        password: '',
        confirmPassword: '',
        errormessages: {
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
         var err = error.response.data.errors;
         var takeerr = Object.keys(err).map((key) => err[key]);
         const listErrors=takeerr.map((item) => <li key={item}>{item}</li>);
         this.setState({errormessages: listErrors});
         console.log(this.state.errormessages);
        }
    }

    render() {
        //console.log("state", this.state);
        const { email, phone, firstName, secondName, password, confirmPassword, errormessages, num} = this.state;
        return (
            <div className="row">
                <div className="offset-md-3 col-md-6">
                <h1 className="text-center">Реєстрація</h1>
                <form className="row g-3 was-validated" onSubmit={this.onSubmitFormHandler}>
                    <TextBoxField 
                        field="email"
                        label="Електронна пошта"
                        num="0"
                        value={email}
                        onChangeHandler={this.onChangeHandler}/>
                        <span className="text-danger">{errormessages[num]}</span>
                    
                    <TextBoxField 
                        field="phone"
                        label="Телефон"
                        num="1"

                        value={phone}
                        onChangeHandler={this.onChangeHandler}/>
                        <span className="text-danger">{errormessages[num]}</span>

                    <TextBoxField 
                        field="secondName"
                        label="Прізвище"
                        num="2"

                        value={secondName}
                        onChangeHandler={this.onChangeHandler}/>
                        <span className="text-danger">{errormessages[num]}</span>

                    <TextBoxField 
                        field="firstName"
                        label="Ім'я"
                        num="3"

                        value={firstName}
                        onChangeHandler={this.onChangeHandler}/>
                        <span className="text-danger">{errormessages[num]}</span>

                    <TextBoxField 
                        field="password"
                        type="password"
                        label="Пароль"
                        num="4"

                        value={password}
                        onChangeHandler={this.onChangeHandler}/>
                        <span className="text-danger">{errormessages[num]}</span>

                    <TextBoxField 
                        field="confirmPassword"
                        type="password"
                        label="Підтвердження пароля"
                        num="5"

                        value={confirmPassword}
                        onChangeHandler={this.onChangeHandler}/>
                        <span className="text-danger">{errormessages[num]}</span>

                    
                    <button type="submit" className="btn btn-primary mt-4">Реєстрація</button>
                </form>
                </div>

            </div>
        )
    }
}

export default withRouter(RegisterPage)
