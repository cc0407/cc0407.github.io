import React from "react"
require("../../css/index.css");

export const Body1 = ({darkMode}) => {
  return (
    <div className={`full-page split ` + (darkMode ? `page-dark` : `page-light`)}>
      <div className="centered-column justify-center w-full pt-32 sm:w-1/3 sm:pt-16 md:pt-0">
        <img className="circle-image"
          src={'https://avatars.githubusercontent.com/u/46330616?s=400&u=d4130b152c2103dec9dadef214a11a50179c1c8f&v=4'} 
        />
        <div>^ That's me! ^</div>
      </div>
      <div className="left-column justify-center w-2/3">
        <div className="title">Hello!</div>
        <div className="subtitle">
          My name is <span className={(darkMode ? `text-accentDark` : `text-tert`)}>Christian Catalano.</span>
        </div>
        <div className="body2">
          I am currently studying B.Comp Honours Software Engineering, 
          minoring in Mathematics, at the University of Guelph. With 4+ years of fulltime work experience in software development,
          I would be a great asset to your team!
        </div>
      </div>
    </div>
  )
};
