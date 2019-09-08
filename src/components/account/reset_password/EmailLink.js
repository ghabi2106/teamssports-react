import React from "react";
import Swal from 'sweetalert2'
import UserService from "../../../services/user.service";
import ValidationMessage from "../../../common/FormValidator";
import ErrorMessage from "../../../common/ErrorMessage";
import { Link } from 'react-router-dom';


class EmailLink extends React.Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = { email: "", submitted: false, error: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true, error: false });
    const { email } = this.state;
    if (email) {
      this.userService
        .ResetPassword({ email: email })
        .then(response => {
          if (response.data.success == true) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: response.data.message,
            })
          }
        })
        .catch(error => {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
          this.setState({ error: true });
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
    const { email, submitted, error } = this.state;
    return (
      <div
        className=" container-fluid  "
      // id="login-page"
      // style={{ all: "initial", scroll: "no-scroll" }}
      >
        <div className="w-100">
          <img
            id="hiddenImg111"
            className=" w-100 position-relative"
            src="img/bg.svg"
            alt="bg"
            style={{
              marginTop: "-8%",
              zIndex: "1",
              position: "relative"
            }}
          />
          {/* ------------------------------container----------------------------------------------------- */}
          <div className="row   w-100 " style={{ position: "absolute", top: "3%", zIndex: "2" }}>
            <div className="col-12 d-flex justify-content-end   ">
              <p className="Dont-have-an-account-yet m-2">
                Don't have an account yet?
                </p>
              <a className="Rectangle-540" to="/register" onClick={this.registerUrl} style={{ cursor: "pointer" }} > Sign up </a>
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
                    Réinitialiser le mot de passe
                    </h1>
                  <p className="Enter-your-details-below-to-access-your-account text-center " style={{ marginTop: '2%', marginBottom: '5%' }}>
                    Vous devez recevoir un lien sur votre email pour réinitiliser votre mot de passe.
                    </p>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group " style={{ marginBottom: '0%' }}>
                      <label className="Email-address d-flex justify-content-start  " style={{ paddingLeft: '25%' }}>
                        Email address
                        </label>
                      <div className="d-flex justify-content-center">
                        <input className="Rectangle-528 w-50" type="text" name="email" value={email} onChange={this.handleChange} />
                      </div>
                      <ValidationMessage submitted={submitted} value={email} message="Email is required" />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="Rectangle-log " style={{ height: "45px", width: "50%", marginTop: '2%' }} >
                        Envoyer
                        </button>
                    </div>
                    <div id="errormsg">
                      <ErrorMessage error={error} message="invalid email" />
                    </div>
                    <div className="d-flex   justify-content-start  " style={{ margin: '0% 0%' }}>
                      <i className="fas fa-arrow-left" style={{ color: '#848484', margin: '3% 27%' }}>
                        <a className="Back-to-register" to="/login" onClick={this.loginUrl} style={{ color: '#848484', margin: '3% 27%' }}>Back Login</a>
                      </i>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------container-end------------------------------------------------------------ */}
      </div>
    );
  }
}

export default EmailLink;
