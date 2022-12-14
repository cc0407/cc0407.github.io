import { graphql } from "gatsby";
import React from "react";

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
        <div className="w-full column items-center pt-12 flex-grow-default">
            {project.name}<br/>
            {project.link}<br/>
            {project.target}<br/>
        </div>
    );
};

export const query = graphql`
  query($id: String) {
    project(id: { eq: $id }) {
        name
        link
        target
    }
  }
`

export default Project;