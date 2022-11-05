import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AllProjects from "../components/AllProjects";
import Seo from "../components/SeoComponent";

// This is a high-level view of what the page will be
export const Projects = (props) => {
  return (
    <div className="min-h-screen column bg-offWhite">
      <Nav 
        active={"Projects"} // Active refers to the position on the nav bar, makes it bolded
      />
      <AllProjects type="personal"/>
    </div>
  );
};


export default Projects;

export const Head = () => (
  <Seo
    title="Projects"
    url="/projects"
  />
)   