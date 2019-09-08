import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  registerUrl = () => {
      window.location = `/register`;
  }

  loginUrl = () => {
      window.location = `/login`;
  }

  render() {

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
              <a className="Rectangle-540" to="/register" onClick={this.registerUrl}
                style={{ cursor: "pointer" }} > Sign up </a>
            </div>
            <div className=" col-12 d-flex flex-column       ">
              <div className="row  ">
                <div className="col-md-6">
                  <div className=" d-flex justify-content-center"
                    style={{ height: '110px' }} >
                    <img className="logo" src="img/logo.svg" alt="logo" />
                  </div>
                  <h1 className="Welcome-back d-flex justify-content-center ">
                    Merci pour votre enregistrement
                  </h1>
                  <p className="Enter-your-details-below-to-access-your-account text-center "
                    style={{ marginTop: '2%', marginBottom: '5%' }}>
                    Vous devez recevoir un lien sur votre email pour confirmer votre email.
                  </p>
                  <div className="col-12 d-flex justify-content-center   ">
                    <p className="Dont-have-an-account-yet m-2">
                      Go back to login:
                    </p>
                    <a className="Rectangle-540" to="/login" onClick={this.loginUrl}
                      style={{ cursor: "pointer" }} > Log in </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------container-end------------------------------------------------------------ */}
      </div>
    )
  }
}

export default Success
