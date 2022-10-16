import React from "react";

interface projectTypes {
    type: "work" | "personal"
}
interface props extends projectTypes {}

interface project extends projectTypes {
    name: string;
    link: string;
}
const projectList:project[] = [
    {name: "VIVA Streaming TV", link: "https://landing.vivatv.ca", type: 'work'},
    {name: "TLN - Soccer Redesign", link: "https://tln.ca/soccer", type: 'work'},
    {name: "Portfolio Website (this)", link: "/", type: 'personal'},
    {name: "Russian Alphabet Practice", link: "/russian-alphabet-practice", type: 'personal'},
    {name: "Tic-Tac-Toe Clone", link: "/tic-tac-toe", type: 'personal'},
    {name: "Stars Arcade", link: "https://github.com/cc0407/stars-arcade", type: 'personal'},
    {name: "Conway's Game of Life", link: "https://github.com/cc0407/stars-arcade", type: 'personal'},
]

// Default values are defined in this interface
const defaultProps: Partial<props> = {};
export const AllProjects: React.FC<props> = (props) => {

    return (
        <div className="w-full column centered bg-offWhite min-h-128 flex-grow-default">
            <div className="adjustableRow homeIntroRow homeIntroPadding">
                <ul>
                    {projectList.map((project) => {
                        if(project.type == props.type) {
                            return(
                                <li key={project.name}>
                                    <a href={project.link} target="_blank">
                                        {project.name}
                                    </a>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

AllProjects.defaultProps = defaultProps;

export default AllProjects;