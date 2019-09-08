import React from "react";
import UserService from "../../../services/user.service";
import ValidationMessage from "../../../common/validation/FormValidator";
import ErrorMessage from "../../../common/validation/ErrorMessage";



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.userService = new UserService();
    this.state = { username: "", password: "", submitted: false, error: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  fetchPermissions = username => {
    this.administrationUserService
      .GetByUserNamePermissions(username)
      .then(response => {
        var prermissions = response.data;
        this.administrationUserService.createPermissionsSession(prermissions);
        this.setState({ permissions: prermissions });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true, error: false });
    const { username, password } = this.state;
    if (username && password) {
      this.userService
        .login({ email: username, password: password })
        .then(response => {
          var user = {
            userFullName: response.data.userFullName,
            token: response.data.tokenLogin,
            userType: response.data.type
          };
          this.userService.createUserSession(user);

          window.location = `/tickets`;

        })
        .catch(error => {
          this.setState({ error: true });
        });
      if (this.state.error === false) this.fetchPermissions(username);
    }
  };

  registerUrl = () => {
    window.location = `/register`;
  }

  resetPasswordUrl = () => {
    window.location = `/reset_password_link`;
  }

  render() {
    const { username, password, submitted, error } = this.state;
    if (UserService.isAuthentificated()) {
      return <h2>YOU ALREADY LOGGED IN !</h2>;
    } else {
      return (
        <div
          className=""
        >
          <div className="">
            <img
              className=""
              src="img/bg.svg"
              alt="bg"
              style={{
                marginTop: "-8%",
                zIndex: "1",
                position: "relative"
              }}
            />

            {/* ------------------------------container----------------------------------------------------- */}
            <div
              className="row w-100 "
              style={{ position: "absolute", top: "3%", zIndex: "2" }}
            >
              <div className="col-12 d-flex justify-content-end   ">
                <p className="Dont-have-an-account-yet m-2">
                  Don't have an account yet?
                </p>
                <a className="Rectangle-540" style={{ cursor: "pointer" }} onClick={this.registerUrl}> Sign up </a>
              </div>
              <div className=" col-12 d-flex flex-column       ">
                <div className="row  ">
                  <div className="col-md-6">
                    <div
                      className=" d-flex justify-content-center"
                      style={{ height: '110px' }}
                    >
                      <img className="logo" src="img/logo.svg" alt="logo" />
                    </div>
                    <h1 className="Welcome-back d-flex justify-content-center ">
                      Welcome back
                    </h1>
                    <p className="Enter-your-details-below-to-access-your-account text-center " style={{ marginTop: '2%', marginBottom: '5%' }}>
                      Enter your details below to access your account.
                    </p>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group " style={{ marginBottom: '0%' }}>
                        <label className="Email-address d-flex justify-content-start  " style={{ paddingLeft: '25%' }}>
                          User Name
                        </label>
                        <div className="d-flex justify-content-center">
                          <input className="Rectangle-528 w-50" type="text" name="username" value={username} onChange={this.handleChange} />
                        </div>
                        <ValidationMessage submitted={submitted} value={username} message="Email is required" />
                      </div>
                      <div className="form-group " style={{ marginBottom: '0%' }}>
                        <label className="d-flex justify-content-start " style={{ paddingLeft: '25%' }} >
                          Password
                        </label>
                        <div className="d-flex justify-content-center">
                          <input className="Rectangle-527 w-50" type="password" name="password" value={password} onChange={this.handleChange} />
                        </div>
                        <ValidationMessage submitted={submitted} value={password} message="Password is required" />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button className="Rectangle-log " style={{ height: "45px", width: "50%", marginTop: '2%' }} >
                          Log in
                        </button>
                      </div>
                      <div className="d-flex   justify-content-start  " style={{ margin: '0% 0%' }}>
                        <a className="Back-to-register" to="/reset_password_link" onClick={this.resetPasswordUrl} style={{ color: '#848484', margin: '3% 27%' }}>Forget Password</a>
                      </div>
                      <div id="errormsg">
                        <ErrorMessage error={error} message="invalid username or password" />
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
}

export default Login;
