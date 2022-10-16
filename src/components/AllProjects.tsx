import React from "react";

interface props {
    type: "work" | "personal";
}

// Default values are defined in this interface
const defaultProps: Partial<props> = {};
export const AllProjects: React.FC<props> = (props) => {

    return (
        <div className="w-full column centered bg-offWhite min-h-128 flex-grow-default">
            <div className="adjustableRow homeIntroRow homeIntroPadding">
            </div>
        </div>
    );
};

AllProjects.defaultProps = defaultProps;

export default AllProjects;