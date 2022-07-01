import React from "react"

export const About = () => {
  return (
    <div className={"w-full column centered bg-offWhite min-h-128 flex-grow-default"}>

      <div className="row max-w-screen-1024">
        <div className="column centered px-10 flex-shrink-0">
          <img className="circle-image"
            src={'https://avatars.githubusercontent.com/u/46330616?s=400&u=d4130b152c2103dec9dadef214a11a50179c1c8f&v=4'} 
          />
          <div className="font-light">^ That's me! ^</div>
        </div>

        <div className="column justify-center items-start flex-grow-default cursor-default">
          <div className="sampleTitle">Hello!</div>
          <div className="subtitle">
            My name is <span className="font-bold">Christian Catalano</span>.
          </div>
          <div className="body2">
            I am currently studying B.Comp Honours Software Engineering, 
            minoring in Mathematics, at the University of Guelph. With 4+ years of fulltime work experience in software development,
            I would be a great asset to your team!
          </div>
        </div>
      </div>

    </div>
  )
};

export default About;
