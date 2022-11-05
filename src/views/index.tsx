import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Seo from "../components/SeoComponent";

// This is a high-level view of what the page will be
export const Homepage = () => {
  return (
    <div className="min-h-screen column">
      <Nav 
        active={"Home"} // Active refers to the position on the nav bar, makes it bolded
      />
      <Intro />
      <Footer />
    </div>
  );
};

const languageList = [
  {lang: "English", text: "Hello"},
  {lang: "Italian", text: "Ciao"},
  {lang: "Russian", text: "привет"},
  {lang: "French",  text: "Bonjour"},
  {lang: "Finnish", text: "Hei"},
  {lang: "Swedish", text: "Hej"},
]
// This is the Body of the page, does not include header, nav, or footer
// Custom props are defined in this interface
interface props {}
// Default values are defined in this interface
const defaultProps: Partial<props> = {};
export const Intro: React.FC<props> = () => {
  /*--- Changes 'Hello' to random language from list ---*/
  const [lang, setLang] = useState(0);
  function changeLanguage(e) {
    var langSelect = lang;
    while(langSelect == lang)
      langSelect = Math.floor(Math.random() * (languageList.length));
      setLang(langSelect);
  }
  function resetLang(e) {
    setLang(0);
  }
  /*----------------------------------------------------*/

  return (
    <div className="w-full column centered bg-offWhite min-h-128 flex-grow-default">
      <div className="adjustableRow homeIntroRow homeIntroPadding">
        <div className="column centered py-4 800:px-10 flex-shrink-0 object-cover">
          <img className="circle-image" src={'https://avatars.githubusercontent.com/u/46330616'} />
        </div>

        <div className=" column homeContent ">
          <div className="homeTitle" onMouseEnter={changeLanguage} onMouseLeave={resetLang}>
              {languageList[lang].text}!
          </div>
          <div className="homeSubtitle">
            I'm <span className="font-bold">Christian Catalano</span>.
          </div>
          <div className="homeBody">
            I am currently studying B.Comp Honours{" "}
            <span className="font-bold">Software Engineering</span>, minoring in{" "}
            <span className="font-bold">Mathematics</span>, at the University of Guelph. With{" "}
            <span className="font-bold">5+ years of full-time experience</span> in the industry, and{" "}
            <span className="font-bold">3 years in full-stack development</span> specifically, I would be a great asset to your team!
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.defaultProps = defaultProps;
export default Homepage;

export const Head = () => (
  <Seo
    title="Home"
    url="/"
  />
)   