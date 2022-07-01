import React from "react"

export const Intro = () => {
  return (
    <div className={"w-full column centered bg-offWhite min-h-128 flex-grow-default"}>

      <div className="adjustableRow homeIntroRow homeIntroPadding">
        <div className="column centered py-4 800:px-10 flex-shrink-0">
          <img className="circle-image"
            src={''} 
          />
          <div className="font-light">^ That's me! ^</div>
        </div>

        <div className=" column homeContent ">
          <div className="homeTitle">Hello!</div>
          <div className="homeSubtitle">
            I'm <span className="font-bold">Christian&nbsp;Catalano</span>.
          </div>
          <div className="homeBody">
            I am currently studying B.Comp Honours Software Engineering, 
            minoring in Mathematics, at the University of Guelph. With 4+ years of fulltime work experience in software development,
            I would be a great asset to your team!
          </div>
        </div>
      </div>

    </div>
  )
};

export default Intro;
