import React from "react"
require("../../css/index.css");

export const Body2 = ({darkMode}) => {
    return (
    <div className={`full-page split ` + (darkMode ? `page-dark` : `page-light`)}>
      <div className="centered-column w-2/3">
      </div>
      <div className="left-column w-1/3">
      </div>
    </div>
    )
};