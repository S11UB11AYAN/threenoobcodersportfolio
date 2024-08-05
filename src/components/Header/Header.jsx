import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/groupPic.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello We Are</h5>
        <h1>Three Noob Coders</h1>
        <h5 className="text-light">FullStack Developers</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
