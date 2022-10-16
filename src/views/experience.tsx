import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "../components/Head";
import AllProjects from "../components/AllProjects";

// This is a high-level view of what the page will be
export const Experience = (props) => {
  return (
    <div className="min-h-screen column">
      <Head
        title="Home" // Title of page for metadata, displayed on tab menu
        description="" // Description of page for metadata
        url="https://christiancatalano.ca/" // This is the final url of the page, used for embed/meta data
      />
      <Nav 
        active={1} // Active refers to the position on the nav bar, makes it bolded
      />
      <AllProjects type="work"/>
      <Footer />
    </div>
  );
};


export default Experience;

