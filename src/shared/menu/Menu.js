import React from "react";
import content from "./menu-content";
import ItemMenu from "./ItemMenu";
const Menu = props => {
  return (
      <div className="">
        <ul className="">
          {content.map((item, index) => {
            return <ItemMenu key={index} menuItem={item} />;
          })}
        </ul>
      </div>
  );
};
export default Menu;
