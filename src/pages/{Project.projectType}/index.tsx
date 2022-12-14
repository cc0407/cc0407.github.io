import { graphql } from "gatsby";
import React from "react";
import AllProjects from "../../components/AllProjects";
import Nav from "../../components/Nav";

interface projectTypes {
    type: "work" | "personal"
}

interface project extends projectTypes {
    name: string;
    link: string;
    target: "_blank" | "_self"
}

export const ProjectLanding = ({data}) => {
    return (
        <div className="min-h-screen column bg-offWhite">
          <Nav 
            active={data.project.projectType} // Active refers to the position on the nav bar, makes it bolded
          />
          <AllProjects type={data.project.projectType}/>
        </div>
      );
};
export const query = graphql`
  query($id: String) {
    project(id: { eq: $id }) {
      projectType
    }
  }
`
export default ProjectLanding;