import React from "react";
import { NavLink } from "react-router-dom";

class ItemMenu extends React.Component {
  subMenu() {
    return (
      <ul className="k-menu__subnav">
        {this.props.menuItem.content.map((item, index) => {
          return (
            <li key={index} className="k-menu__item " aria-haspopup="true">
              <NavLink to={item.to} className="k-menu__link ">
                <i className={item.icon}>
                  <span />
                </i>
                <span className="k-menu__link-text">{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    if (this.props.menuItem.content) {
      return (
        <li className="">
          <NavLink to={this.props.menuItem.to} className="">
            <i className={` ${this.props.menuItem.icon}`} />
            <span className="">{this.props.menuItem.label}</span>
            <i className="" />
          </NavLink>
          <div className="">
            <span className="" />
            {this.subMenu()}
          </div>
        </li>
      );
    } else {
      return (
        <li className="">
          <NavLink to={this.props.menuItem.to} className="">
            <i className={` ${this.props.menuItem.icon}`} />
            <span className="">{this.props.menuItem.label}</span>
          </NavLink>
        </li>
      );
    }
  }
}
export default ItemMenu;
