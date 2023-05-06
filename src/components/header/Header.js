import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  // const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;


  return (
    <Headroom>
  <meta name="description" content="Aman Dwivedi Portfolio Website"></meta>
    <meta name="keywords" content="Shubham Kariya,Shubh Kariya, Shubham-Kariya, Shubh-Kariya, Shubham-Developer,Shubh-Developer,shubh_kariya, shubham_kariya, portfolio, website, web developer, open source enthusiast"></meta>
    <meta name="author" content="Shubham Kariya"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:url" content="https://shubhamkariya.netlify.app/"></meta>
    <meta property="og:title" content="Shubham Kariya Portfolio"></meta>
    <meta property="og:image" content="https://shubhamkariya.netlify.app/"></meta>
    <meta property="og:description" content="Shubham Kariya Portfolio Website"></meta>
    <meta property="og:site_name" content="Shubham Kariya Portfolio"></meta>
    <meta property="og:locale" content="en_US"></meta>
    <meta property="og:image:width" content="1200"></meta>
    <meta property="og:image:height" content="630"></meta>
    <meta name="twitter:card" content="Shubham Kariyai Portfolio"></meta>
    <meta name="twitter:url" content="https://shubhamkariya.netlify.app/"></meta>
    <meta name="twitter:title" content="Shubham Kariya Portfolio"></meta>
    <meta name="twitter:description" content="Shubham Kariya Portfolio Website"></meta>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <h3><span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span></h3>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
         
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
