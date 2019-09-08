import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { passwordValidation } from '../../../models/Formatter';
import ValidationMessage from "../../../common/FormValidator";



export class UserPersonelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  continue = e => {
    this.setState({ submitted: true });
    const { values } = this.props;
    if (passwordValidation(values.password)) {
      e.preventDefault();
      this.props.nextStep();
    }
  }

  back = e => { e.preventDefault(); this.props.prevStep(); }

  render() {
    const { values, handleChange, handleChangeSelect } = this.props;
    const { submitted } = this.state;
    return (
      <div>
        <div className="containerfluid  ">
          <div className="w-100">
            <img id="hiddenImg111" className=" w-100 position-relative" src="img/bg.svg" alt="bg"
              style={{ marginTop: "-8%", zIndex: "1", position: "relative", }} />
          </div>
          {/* ----------container-start--------------- */}
          <div className="row w-100 " style={{ position: "absolute", top: "3%", zIndex: "2" }} >
            <div className="col-12 d-flex justify-content-end   ">
              <p className="Dont-have-an-account-yet m-2"> Don't have an account yet? </p>
              <Link className="Rectangle-540  " to="/login"
                style={{ cursor: "pointer", padding: '0%,0%' }} > Login
              </Link>
            </div>
            <div className=" col-12 d-flex flex-column       ">
              <div className="row  ">
                <div className="col-md-6 ">
                  <div className=" d-flex justify-content-center " >
                    <img className="logo" src='img/logo.svg' alt="logo" />
                  </div>
                  <p className="Register text-center "> Register </p>
                  <p className="Enter-your-details-below-to-create-your-account  text-center">
                    Enter your details below to create your account
                  </p>
                  <div className="d-flex flex-column  justify-content-center  " style={{ margin: '0% 27%' }}>
                    <label className='User-Name ' htmlFor="">Password</label>
                    <input className='Rectangle-524' type="password" onChange={handleChange("password")}
                      defaultValue={values.password} />
                    <ValidationMessage submitted={submitted} value={values.password}
                      type="password" message="Password is required" />
                  </div>
                  <div className="d-flex   justify-content-center  " style={{ margin: '0% 0%' }}>
                    <button className='Rectangle-525' onClick={this.continue} >Next</button>
                  </div>
                  <div className="d-flex   justify-content-start  " style={{ margin: '0% 0%' }}>
                    <i class="fas fa-arrow-left" style={{ color: '#848484', margin: '3% 27%' }}>
                      <Link className="Back-to-register" to="/login"
                        style={{ color: '#848484', margin: '3% 27%' }}>Back
                      </Link>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------container-end--------------------------------------------- */}

        </div>
      </div>

    )
  }
}


export default UserPersonelForm
