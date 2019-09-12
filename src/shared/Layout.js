import React from "react";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Footer from "./Footer";
import UserService from "../services/user.service";

export default class Layout extends React.Component {
  render() {
    // if (UserService.isAuthentificated()) {
    return (
      <React.Fragment> 
        <Header />
        <Menu />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
    // } else {
    //   return (
    //     <div></div>
    //   );
    // }
  }
}
