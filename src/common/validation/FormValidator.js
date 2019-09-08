import React from 'react';
import { passwordTest, passwordValidation, emailValidation } from '../../models/Formatter';

class ValidationMessage extends React.Component {
    constructor(props) {
        super(props);
        this.isValid = this.isValid.bind(this);
    }

    isValid = () => {
        return this.props.value;
    }

    noPassword = () => {
        if (!this.props.type) {
            return false;
        } else {
            return true;
        }
    }

    isPassword = () => {
        if (this.props.type === "password") {
            return passwordValidation(this.props.value);
        } else if (this.props.type === "confirmPassword") {
            return passwordTest(this.props.value, this.props.value1);
        }
    }

    isEmail = () => {
        if (this.props.type === "email") {
            return emailValidation(this.props.value);
        }
    }

    render() {
        var className = this.noPassword() ?
            (this.props.type === "password" ?
                (!this.isPassword() && this.props.submitted ? 'has-error' : 'd-none') :
                (!this.isEmail() && this.props.submitted ? 'has-error' : 'd-none')
            ) :
            (!this.isValid() && this.props.submitted ? 'has-error' : 'd-none');
        return (<span className={className}>{this.props.message}</span>)
    }

}

export default ValidationMessage;
