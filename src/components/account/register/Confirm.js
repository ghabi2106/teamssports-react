import React, { Component } from "react";
import UserService from "../../../services/user.service";
import Swal from "sweetalert2";
import SelectSearch from "react-select-search";
import { Link } from 'react-router-dom';
import ValidationMessage from "../../../common/FormValidator";
import { isEmptyOrSpaces } from '../../../models/Formatter';
export class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.userService = new UserService();
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({ data: nextProps.values });
  };

  finish = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { values } = this.props;
    const data = this.state.data;
    if (!isEmptyOrSpaces(values.agencyName)) {
      this.userService
        .register(data)
        .then(response => {
          if (response.data.success == true) {
            this.props.nextStep();
          }else{
            Swal.fire({ type: "error", title: "Oops...", text: response.data.message });
          }
        })
        .catch(error => {
          Swal.fire({ type: "error", title: "Oops...", text: "Something went wrong!" });
        });
    }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  loginUrl = () => {
    window.location = `/login`;
  }

  render() {
    const { values, handleChange, handleChangeSelect } = this.props;
    const { submitted } = this.state;
    return (
      <div className="containerfluid  ">
        <div className="w-100">
          <img id="hiddenImg111" className=" w-100 position-relative"
            src="img/bg.svg" alt="bg"
            style={{ marginTop: "-8%", zIndex: "1", position: "relative" }} />
        </div>
        {/* ----------container-start--------------- */}
        <div
          className="row w-100" style={{ position: "absolute", top: "3%", zIndex: "2" }} >
          <div className="col-12 d-flex justify-content-end   ">
            <p className="Dont-have-an-account-yet m-2">
              Don't have an account yet?
            </p>
            <a className="Rectangle-540  " to="/login" onClick={this.loginUrl}
              style={{ cursor: "pointer" }}> Login
            </a>
          </div>
          <div className=" col-12 d-flex flex-column">
            <div className="row  ">
              <div className="col-md-6 ">
                <div className=" d-flex justify-content-center ">
                  <img
                    className="logo"
                    src="img/logo.svg"
                    alt="logo" />
                </div>
                <p className="Register text-center "> Register </p>
                <p className="Enter-your-details-below-to-create-your-account  text-center">
                  Enter your details below to create your account
                </p>
                <form>
                  <div
                    className="d-flex flex-column justify-content-center"
                    style={{ margin: "0% 27%" }} >
                    <label className="User-Name ">
                      Agency Name
                    </label>
                    <input
                      className="Rectangle-524"
                      type="text"
                      onChange={handleChange("agencyName")}
                      defaultValue={values.agencyName}
                    />
                    <ValidationMessage submitted={submitted} value={values.agencyName}
                      message="Agency Name is required" />
                  </div>
                  <div
                    className="d-flex flex-column  justify-content-center  "
                    style={{ margin: "0% 27%" }}
                  >
                    <label className="User-Name">
                      Country
                    </label>

                    <div id="divSelectSearch">
                      <SelectSearch
                        id="SelectSearch"
                        height={45}
                        value={values.countryId}
                        name="id"
                        placeholder="Country"
                        onChange={handleChangeSelect}
                        options={values.country}
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-center"
                    style={{ margin: "0% 0%" }} >
                    <button className="Rectangle-525" onClick={this.finish}> Finish </button>
                  </div>
                  <div className="d-flex   justify-content-start  " style={{ margin: '0% 0%' }}>
                    <i class="fas fa-arrow-left" style={{ color: '#848484', margin: '3% 27%' }}>
                      <a className="Back-to-register" to="/login" onClick={this.loginUrl} style={{ color: '#848484', margin: '3% 27%' }}>Back</a>
                    </i>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------container-end--------------------------------------------- */}
      </div>


    );
  }
}

export default Confirm;
