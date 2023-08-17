import { useState } from "react";
import List from "./List";
import Dmenu from "./Dmenu";

const RS = () => {
  const [Menu, setMenu] = useState(false);

  function toggleMenu() {
    if (Menu) {
      return (
        <div className="toggled">
          <div className="faded"></div>
          <div className="menuSide">
            <div className="closeButton">
              <button className="close" onClick={() => setMenu(!Menu)} />
            </div>
            <List />
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>
        </div>
      );
    } else return;
  }

  return (
    <>
      <div className="Desk">
        <Dmenu />
        <div className="toRight">
          <button className="loginD">Login</button>
          <button className="registerD">Register</button>
        </div>
      </div>
      <div className="Mob">
        <button className="menu" onClick={() => setMenu(!Menu)}></button>
        {toggleMenu()}
      </div>
    </>
  );
};

export default RS;
