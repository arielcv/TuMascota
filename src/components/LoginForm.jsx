import React from 'react';
import Joi from 'joi-browser'
import {Redirect} from "react-router-dom";
import Form from "./form";
import auth from "../services/auth";
import '../index.css'

class loginForm extends Form {

    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .min(5)
            .required()
            .label("Password")
    };
    doSubmit = async () => {
        try {
            const {data} = this.state;
            await auth.login(data.username, data.password);
            const {state} = this.props.location;
            window.location = state ? state.from.pathname : "/"
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({errors})
            }
        }

    };


    render() {

        if (auth.getCurrentUser()) return <Redirect to="/"/>;

        return (
            <div className='loginStyle'>
                <h1 className='loginHeader'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username', "text","Type your username or phone")}
                    {this.renderInput('password', 'Password', "password", "Type your password")}
                    {this.renderButton("Login")}
                </form>
                <div className="alert alert-primary loginToRegister" role="alert">If you're not registred <a href='/registration'>click here</a> </div>
            </div>
        )
    }
}


export default loginForm;
