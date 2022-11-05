import React from "react";

interface projectTypes {
    type: "work" | "personal"
}
interface props extends projectTypes {}

interface project extends projectTypes {
    name: string;
    link: string;
    target: "_blank" | "_self"
}
const projectList:project[] = [
    {name: "VIVA Streaming TV", link: "https://landing.vivatv.ca", target:"_blank", type: 'work'},
    {name: "TLN - Soccer Redesign", link: "https://tln.ca/soccer", target:"_blank", type: 'work'},
    {name: "Portfolio Website (this)", link: "/", target:"_self", type: 'personal'},
    {name: "Russian Alphabet Practice", link: "https://christiancatalano.ca/russian-alphabet-practice", target:"_self", type: 'personal'},
    {name: "Tic-Tac-Toe Clone", link: "https://christiancatalano.ca/tic-tac-toe", target:"_self", type: 'personal'},
    {name: "Stars Arcade", link: "https://github.com/cc0407/stars-arcade", target:"_blank", type: 'personal'},
    {name: "Conway's Game of Life", link: "https://github.com/cc0407/stars-arcade", target:"_blank", type: 'personal'},
]

const messaging = {
    'work':"Work Experience",
    'personal': "Personal Projects"
}

// Default values are defined in this interface
const defaultProps: Partial<props> = {};
export const AllProjects: React.FC<props> = (props) => {

    return (
        <div className="w-full column items-center min-h-128 pt-12 flex-grow-default">
            <div className="projectTitle">
                {messaging[props.type]}
            </div>
            <ul>
                {projectList.map((project) => {
                    if(project.type == props.type) {
                        return(
                            <li key={project.name}>
                                <a className="projectListItem" href={project.link} target={project.target}>
                                    {project.name}
                                </a>
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