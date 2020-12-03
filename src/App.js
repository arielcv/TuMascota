import React, {Component} from 'react';
import Carousel from "./components/common/carousel";
import {Redirect, Route, Switch} from "react-router-dom"
import auth from "./services/auth";
import { ToastContainer } from 'react-toastify'
import RegisterForm from "./components/RegisterForm";
import loginForm from "./components/LoginForm";
import notFound from "./components/not_found";
import HomeShop from "./components/homeShop";

import './App.css';
import NavBar from "./components/navBar";

class App extends Component{

    state = {

    };

    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({user})
    }

    render() {
        return (
            <div>
                <ToastContainer/>
                <NavBar/>
                <main>
                    <Switch>
                        <Route path = "/carousel" render = {(props) => <Carousel
                            autoPlay
                            interval = {3000}
                            height = {200}
                            width = {200}
                            imgsPerSlide = {3}
                            infinite
                        />} />
                        <Route path = "/home" render = {(props) => <HomeShop
                            shops = {12}
                            rowSize = {3}
                        />} />
                        <Route path = "/login" component = {loginForm}/>
                        <Route path = "/registration" component = {RegisterForm} />
                        <Route path = "/notFound" component = {notFound}/>
                        <Redirect from="/" exact to="/login"/>
                        <Redirect to="/notFound" />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
