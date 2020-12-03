import React from 'react';
import Form from "./form";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import auth from "../services/auth";

class RegisterForm extends Form{
    state = {
        data: {
            firstName:"",
            lastName:"",
            username: "",
            phone:"",
            email:"",
            password: "",
            passwordConfirmation: "",
        },
        errors: {}
    };

    schema = {
        firstName: Joi.string()
            .required()
            .label("First Name"),
        lastName: Joi.string()
            .required()
            .label("Last Name"),
        username: Joi.string()
            .required()
            .label("Username"),
        phone: Joi.string()
            .required()
            .min(15)
            .max(15)
            .label("Phone"),
        email: Joi.string()
            .email()
            .required()
            .label("Email"),
        password: Joi.string()
            .min(5)
            .required()
            .label("Password"),
        passwordConfirmation: Joi.string()
            .min(5)
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try{
            const response = await userService.register(this.state.data);
            auth.loginWithJWT(response.headers['x-auth-token']);
            window.location = "/"
        }
        catch(ex){
            if(ex.response && ex.response.status ===400){
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({errors})
            }
        }
    };

    render() {
        return (
            <div className="loginStyle">
                <h1>Register</h1>
                <form className="row justify-content-md-center" onSubmit={this.handleSubmit}>
                    {this.renderInput("firstName",'First Name','text',"Type your First Name","col-6")}
                    {this.renderInput("lastName",'Last Name','text',"Type your Last Name","col-6")}
                    {this.renderInput("username",'Username','text','Type your username',"col-6")}
                    {this.renderInput("phone",'Phone','text','Type your phone',"col-6")}
                    {this.renderInput("password",'Password','password','Type your password')}
                    {this.renderInput("passwordConfirmation",'Confirm your password','password','Type your password')}
                    {this.renderInput("email",'Email','email','Type your email')}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
