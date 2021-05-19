import React from "react"
import {FaMoon, FaSun} from 'react-icons/fa';

export const Nav = ({scrolled, dark, flipDarkMode}) => {
    return(
        <div className={(!scrolled ? `h-16` : `h-12`) + ` nav ` + (dark ? `nav-dark` : `nav-light`)}>
            <div className="nav-item">Christian Catalano</div>
            <div className="nav-options nav-item">
                <div> ABOUT</div>
                <div> RESUME</div>
                <div>
                    {dark ? <FaMoon
                        className="fade"
                        onClick={()=> flipDarkMode()} 
                        style={{zIndex: 11 ,display: 'flex'}}
                        size={24}
                    />
                    : <FaSun
                        className="fade"
                        onClick={()=> flipDarkMode()} 
                        style={{zIndex: 11 ,display: 'flex'}}
                        size={24}
                    />}
                </div>
            </div>
        </div>
    )
};

