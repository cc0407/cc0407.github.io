import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AllProjects from "../components/AllProjects";
import Seo from "../components/SeoComponent";

// This is a high-level view of what the page will be
export const Experience = (props) => {
  return (
    <div className="min-h-screen column">
      <Nav 
        active={"Experience"} // Active refers to the position on the nav bar, makes it bolded
      />
      <AllProjects type="work"/>
      <Footer />
    </div>
  );
};


export default Experience;

export const Head = () => (
  <Seo
    title="Experience"
    url="/experience"
  />
)   
