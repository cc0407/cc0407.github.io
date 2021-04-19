import React from "react"
// import "./css/index.css";

export const Nav = ({scrolled, theme}) => {
    return(
        <div className={(!scrolled ? `nav` : `nav-small`) + ` ` + (theme ? `nav-light` : `nav-dark`)}>
            <div className="nav-item">Christian Catalano</div>
            <div className="nav-options nav-item">
                <div> ABOUT</div>
                <div> RESUME</div>
            </div>
        </div>
    )
};

