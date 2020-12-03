import React, {Component} from 'react';
import "../../index.css"

class Input extends Component {

    render() {
        const {name, labelText, error, size, ...rest} = this.props;
        const className = "form-label-group " + size;
        console.log(labelText);
        return (
            <div className={className}>
                <input
                    {...rest}
                    name={name}
                    className="form-control"
                    id={name}
                    aria-describedby="emailHelp"
                    required=""
                    autoFocus=""
                />
                <label htmlFor={name} >{labelText}</label>
                <div>
                    {error && <div className="alert alert-danger alert-message">{error}</div>}
                </div>
            </div>
        );
    }
}

export default Input;
