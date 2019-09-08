import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ValidationMessage from "../../../common/FormValidator";
import { isEmptyOrSpaces, emailValidation } from '../../../models/Formatter';

export class UserDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }
  continue = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { values } = this.props;
    if (!isEmptyOrSpaces(values.firstName) && !isEmptyOrSpaces(values.lastName)
      && !isEmptyOrSpaces(values.userName) && emailValidation(values.email)) {
      this.props.nextStep();
    }
  }
  loginUrl = () => {
    window.location = `/login`;
  }
  render() {
    const { values, handleChange } = this.props;
    const { submitted } = this.state;
    return (
      <div className="containerfluid  ">
        <div className="w-100">
          <img id="hiddenImg111" className=" w-100 position-relative" src="img/bg.svg" alt="bg"
            style={{ marginTop: "-8%", zIndex: "1", position: "relative", }} />
        </div>

        {/* ----------container-start--------------- */}
        <div
          className="row w-100 "
          style={{ position: "absolute", top: "3%", zIndex: "2" }}
        >
          <div className="col-12 d-flex justify-content-end   ">
            <p className="Dont-have-an-account-yet m-2"> Don't have an account yet? </p>
            <a className="Rectangle-540" to="/login" onClick={this.loginUrl} style={{ cursor: "pointer" }}> Login  </a>
          </div>
          <div className=" col-12 d-flex flex-column       ">
            <div className="row  ">
              <div className="col-md-6 ">
                <div className=" d-flex justify-content-center " > <img className=" logo    " src='img/logo.svg' alt="logo" /> </div>
                <p className="Register text-center "> Register </p>
                <p className="Enter-your-details-below-to-create-your-account  text-center"> Enter your details below to create your account </p>
                <div className=" d-lg-flex flex-row justify-content-center  " style={{ margin: '4% 27% 0%', width: '46%' }}>
                  <div className="d-flex flex-column  w-100  " >
                    <label className='First-Name'>First Name </label>
                    <input className='Rectangle-523' placeholder="First Name" type="text" 
                      defaultValue={values.firstName} onChange={handleChange("firstName")} />
                    <ValidationMessage submitted={submitted} value={values.firstName}
                      message="First Name is required" />
                  </div>
                  <div className="d-flex flex-column w-100 " >
                    <label className='First-Name'>Last Name </label>
                    <input className='Rectangle-523' placeholder="Last Name" type="text" 
                      defaultValue={values.lastName} onChange={handleChange("lastName")} />
                    <ValidationMessage submitted={submitted} value={values.lastName}
                      message="Last Name is required" />
                  </div>
                </div>
                <div className="d-flex flex-column  justify-content-center  " style={{ margin: '0% 27%' }}>
                  <label className='User-Name ' floatingLabelFixed="UserName" >User Name</label>
                  <input className='Rectangle-524' type="text" onChange={handleChange("userName")} 
                    defaultValue={values.userName} />
                  <ValidationMessage submitted={submitted} value={values.userName}
                    message="Username is required" />
                </div>
                <div className="d-flex flex-column  justify-content-center  " style={{ margin: '0% 27%' }}>
                  <label className='User-Name ' htmlFor="">Adress Email</label>
                  <input className='Rectangle-524' type="email" onChange={handleChange("email")} 
                    defaultValue={values.email} />
                  <ValidationMessage submitted={submitted} type="email" value={values.email}
                    message="Email is required" />
                </div>
                <div className="d-flex   justify-content-center  " style={{ margin: '0% 0%' }}>
                  <button className='Rectangle-525' primary={true} onClick={this.continue} >Next</button>
                </div>
                <div className="d-flex   justify-content-start  " style={{ margin: '0% 0%' }}>
                  <i className="fas fa-arrow-left" style={{ color: '#848484', margin: '3% 27%' }}>
                    <a className="Back-to-register" to="/login" style={{ color: '#848484', margin: '3% 27%' }} onClick={this.loginUrl}>Back</a>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------container-end--------------------------------------------- */}

      </div>






    )
  }
}


export default UserDetailsForm
          //  <AppBar title="Enter User Details"/>
          //   <TextField hintText="Enter UserName" floatingLabelFixed="UserName" onChange={handleChange("userName")} defaultValue={values.username} />
          //   <TextField hintText="Enter Email" floatingLabelFixed="Email" onChange={handleChange("email")} defaultValue={values.email} />
          //   <TextField hintText="Enter Password" onChange={handleChange("password")} defaultValue={values.password} />
          //   <br/>
          //   <RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue} />
