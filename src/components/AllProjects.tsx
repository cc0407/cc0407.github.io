import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

interface projectTypes {
    type: "work" | "personal"
}
interface props extends projectTypes {}

const messaging = {
    'work':"Work Experience",
    'personal': "Personal Projects"
}

// Default values are defined in this interface
const defaultProps: Partial<props> = {};
export const AllProjects: React.FC<props> = (props) => {
    const data = useStaticQuery(graphql`
    {
        allProject{
            nodes {
              ... on project {
                    name
                    slug
                    link
                    projectType
                }
            }
        }
    }
  `).allProject.nodes


    return (
        <div className="w-full column items-center pt-12 flex-grow-default">
            <div className="projectTitle">
                {messaging[props.type]}
            </div>
            <ul>
                {data.map((project) => {
                    if(project.projectType == props.type) {
                        return(
                            <li key={project.name}>
                                <Link className="projectListItem" to={project.slug}>
                                    {project.name}
                                </Link>
                            </li>
                        )
                    }
                })}
            </ul> 
        </div>
    );
};

AllProjects.defaultProps = defaultProps;

export default AllProjects;