import React from "react";
import Swal from 'sweetalert2'
import UserService from "../../../services/user.service";
import AdministrationUserService from "../../../services/administrationUser.service";
import ValidationMessage from "../../../common/FormValidator";
import { passwordTest, getParams } from '../../../models/Formatter';
import ErrorMessage from "../../../common/ErrorMessage";
import { Link } from 'react-router-dom';


class ConfirmEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { success: false, message: "" };
        this.userService = new AdministrationUserService();
    }
    componentDidMount(){
        this.handleSubmit();
    }

    handleSubmit = () => {
        var path = window.location;
        var params = getParams(path);
        var token = params.token;
        if (token != null) {
            this.userService
                .ConfirmEmail({ token })
                .then(response => {
                    console.log(response.data)
                    if(response.data)
                        this.setState({ success: response.data, message: "Email Confirmed" });
                    else
                        this.setState({ success: response.data, message: "Email Alredy Confirmed" });
                })
                .catch(error => {
                    this.setState({ success: false, message: "Error" });
                });
        }
    };

    registerUrl = () => {
        window.location = `/register`;
    }

    loginUrl = () => {
        window.location = `/login`;
    }

    render() {
        const { success, message } = this.state;
        return (
            <div className=" container-fluid">
                <div className="w-100">
                    <img id="hiddenImg111" className=" w-100 position-relative" src="img/bg.svg"
                        alt="bg" style={{ marginTop: "-8%", zIndex: "1", position: "relative" }} />
                    <div className="row   w-100 " style={{ position: "absolute", top: "3%", zIndex: "2" }}>
                        <div className="col-12 d-flex justify-content-end   ">
                            <p className="Dont-have-an-account-yet m-2">
                                Don't have an account yet?
                            </p>
                            <a className="Rectangle-540" to="/register" onClick={this.registerUrl} style={{ cursor: "pointer" }}> Sign up </a>
                        </div>
                        <div className=" col-12 d-flex flex-column       ">
                            <div className="row  ">
                                <div className="col-md-6">
                                    <div
                                        className=" d-flex justify-content-center"
                                        style={{ height: '110px' }}
                                    >
                                        <img className=" logo    " src="img/logo.svg" alt="logo" />
                                    </div>
                                    <h1 className="Welcome-back d-flex justify-content-center ">
                                        Confirmation Email
                                    </h1>
                                    <p className={`Enter-your-details-below-to-access-your-account text-center  ${
                                        success ? "text-succes" : "text-danger"
                                        }`} style={{ marginTop: '2%', marginBottom: '5%' }}>
                                        {message}
                                    </p>
                                    <div className="d-flex   justify-content-start  " style={{ margin: '0% 0%' }}>
                                        <i className="fas fa-arrow-left" style={{ color: '#848484', margin: '3% 27%' }}>
                                            <a className="Back-to-register" to="/login" onClick={this.loginUrl} style={{ color: '#848484', margin: '3% 27%' }}>Back Login</a>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConfirmEmail;
