import React, {Component} from 'react';
import AvatarComponent from "./avatarComponent";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-brand">
                        <h1 className="icon_mall">tuMascota</h1>
                    </div>
                    <AvatarComponent
                        avatar_path="http://placekitten.com/300/300"
                        username="Eduardo Garcia"
                        /*isLogged*/
                    />
                </div>
            </nav>
        );
    }
}

export default NavBar;
