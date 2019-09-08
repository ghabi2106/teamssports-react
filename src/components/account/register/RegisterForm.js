import React, { Component } from 'react'
import UserDetailsForm from './UserDetailsForm'
import UserPersonelForm from './UserPersonelForm'
import Confirm from './Confirm'
import Success from './Success'
import UserService from "../../../services/user.service"
import { selectListFormatter } from '../../../models/Formatter'

export class RegisterForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: '',
    userName: '',
    email: '',
    password: '',
    agencyName: '',
    countryId: 1,
    countryName: '',
    country: [],

  }


  userService = new UserService();
  componentDidMount = () => {
    //const {country} =this.state.country;
    this.userService
      .getCountry()
      //this.setState({country:response.data})
      .then((response) => { if (response.status === 200) { this.setState({ country: selectListFormatter(response.data, "name", "id") }) } })
      .catch(error => { this.setState({ country: { id: 1, name: "TUNISIE" } }) })
  }
  //proceed to next step
  nextStep = () => { const { step } = this.state; this.setState({ step: step + 1 }); }
  //proceed to previousStep step
  prevStep = () => { const { step } = this.state; this.setState({ step: step - 1 }); }

  //Handle change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }
  //handleChangeSelect
  handleChangeSelect = (value) => {
    let { countryId } = this.state;
    countryId = value.value;
    //countryName = value.name;
    this.setState({ countryId: Number(countryId) });
    //this.setState({ countryName: countryName });
  }
  render() {
    // console.log(this.componentDidMount())
    const { step } = this.state;
    const { userName, email, password, agencyName, country, countryId, countryName,
      firstName, lastName } = this.state;
    const values = {
      userName, email, password, agencyName, country, countryId,
      countryName, firstName, lastName
    };
    switch (step) {
      case 1:
        return (
          <UserDetailsForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )

      case 2:
        return (
          <UserPersonelForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
        )
      case 3:
        return (
          <Confirm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleChangeSelect={this.handleChangeSelect} values={values} />
        )
      case 4:
        return (
          <Success />
        )
      default:
    }

  }
}

export default RegisterForm
