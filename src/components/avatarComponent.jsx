import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class AvatarComp extends Component {

    handleClick = () => {
        console.log("Ver opciones de usuario");
    }
    handleLogin = () => {
        console.log("Log In");
    }
    handleRegister = () => {
        console.log("Register");
    }

    render() {
        if(this.props.isLogged)
            return(
                <div className="avatar_comp">
                    <p className="info_user">{this.props.username}</p>
                    <img
                        className="img_user"
                        src={this.props.avatar_path}
                        onClick={this.handleClick}
                        style={{cursor: 'pointer'}}
                    />
                </div>
            );
        else return (
            <div className="avatar_comp">
                <Link to={"/login"}>
                    <button type="button" onClick={this.handleLogin} className="btn btn-primary btn-sm btn_log">Log In
                    </button>
                </Link>
                <Link to={"/registration"}>
                    <button type="button" onClick={this.handleRegister}
                            className="btn btn-primary btn-sm btn_reg">Register
                    </button>
                </Link>
            </div>
        );
    }
}
export default AvatarComp;
