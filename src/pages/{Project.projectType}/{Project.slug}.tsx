import { graphql } from "gatsby";
import React from "react";
import AutoLink from "../../components/AutoLink";
import Nav from "../../components/Nav";

interface projectTypes {
    type: "work" | "personal"
}

interface project extends projectTypes {
    name: string;
    link: string;
    target: "_blank" | "_self"
}

export const Project = ({data}) => {
    console.log(data);
    const project = data.project;
    return (
        <div className="min-h-screen column bg-offWhite">
          <Nav 
            active={project.projectType} // Active refers to the position on the nav bar, makes it bolded
          />
            <div className="w-full column items-center pt-12 flex-grow-default relative">
                <AutoLink to={"/" + project.projectType} className=" absolute">
                    Return
                </AutoLink>
                <div className="projectTitle">
                    {project.name}
                </div>
                <div>
                    <AutoLink to={project.link}>
                        View Project
                    </AutoLink>
                </div> 
            </div>
        </div>
    );
};

export const query = graphql`
  query($id: String) {
    project(id: { eq: $id }) {
        ...content
    }
  }
`

export default Project;