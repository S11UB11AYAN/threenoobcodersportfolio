import React from "react";
import "./About.css";
import US from "../../assets/groupPic.jpg";
import { FiAward } from "react-icons/fi";
import { LuUsers2 } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";

const About = () => {
  return (
    <section id="about">
      <h5>Meet The Team</h5>
      <h2>About Us</h2>
      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-image">
            <img src={US} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <LuUsers2 className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <CgWebsite className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Our dedicated team of developers is passionate about creating
            innovative solutions. &nbsp;
            <div className="hover-container">
              <span className="hover-text">Shubhayan Bagchi</span>
              <div className="popup">
                "Shubhayan specializes in frontend development, crafting
                intuitive and dynamic user interfaces using React and other
                modern frameworks."
              </div>
            </div>
            ,&nbsp;
            <div className="hover-container">
              <span className="hover-text">Sarnick Chakraborty</span>
              <div className="popup">
                "Sarnick is our backend expert, skilled in creating robust
                server-side applications and managing databases using Django and
                SQL."
              </div>
            </div>
            , and &nbsp;
            <div className="hover-container">
              <span className="hover-text">Subhakash Paul</span>
              <div className="popup">
                "Subhakash excels in design, bringing creativity and a keen eye
                for aesthetics to our projects. He focuses on creating visually
                appealing and user-friendly designs."
              </div>
            </div>
            &nbsp;bring a diverse set of skills and experie- nces to the table,
            ensuring that each project is handled with expertise and care.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
