import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaDribbble } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <SlSocialLinkedin />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <FiGithub />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <FaDribbble />
      </a>
    </div>
  );
};
export default HeaderSocials;
