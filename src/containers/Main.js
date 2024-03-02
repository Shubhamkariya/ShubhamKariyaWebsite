import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";

import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <meta name="description" content="Twinkle Kariya Portfolio Website"></meta>
            <meta name="keywords" content="Twinkle Kariya,Twinkle Kariya, Twinkle-Kariya, T-Kariya, Twinkle-Developer,Twinkle-Developer,, twinkle_kariya, portfolio, website, web developer, open source enthusiast"></meta>
            <meta name="author" content="Twinkle Kariya"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content="https://twinklekariya.netlify.app/"></meta>
            <meta property="og:title" content="Twinkle Kariya Portfolio"></meta>
            <meta property="og:image" content="https://twinklekariya.netlify.app/"></meta>
            <meta property="og:description" content="Twinkle Kariya Portfolio Website"></meta>
            <meta property="og:site_name" content="Twinkle Kariya Portfolio"></meta>
            <meta property="og:locale" content="en_US"></meta>
            <meta property="og:image:width" content="1200"></meta>
            <meta property="og:image:height" content="630"></meta>
            <meta name="twitter:card" content="Twinkle Kariya Portfolio"></meta>
            <meta name="twitter:url" content="https://twinklekariya.netlify.app/"></meta>
            <meta name="twitter:title" content="Twinkle Kariya Portfolio"></meta>
            <meta name="twitter:description" content="Twinkle Kariya Portfolio Website"></meta>
            <Header />
            <Greeting />
            <Skills />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
