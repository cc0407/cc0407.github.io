import React from "react"
import { Nav } from "../../components/Nav";
require("../../css/index.css");
import Anime from "react-anime";
import { About } from "./about";
import { Projects } from "./projects";

const Index = () => {
  return (
    <div className="flex flex-col bg-background1">
      <Anime opacity={[0, 1]} delay={1500} duration={1000} easing={"easeInOutExpo"}>
        <Nav />
      </Anime>
      <Anime opacity={[0, 1]} duration={1000} easing={"easeInExpo"}>
        <About />
        <Projects />
      </Anime>
    </div>
  )
}

export default Index
