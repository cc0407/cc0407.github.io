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



    return (
        <div className="w-full column items-center pt-12 flex-grow-default">
            {data}
        </div>
    );
};

export default Project;