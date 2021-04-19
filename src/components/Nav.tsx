import React from "react"
import {FaMoon, FaSun} from 'react-icons/fa';

export const Nav = ({scrolled, dark, setDarkMode}) => {
    return(
        <div className={(!scrolled ? `fade nav` : `fade nav-small`) + ` ` + (dark ? `nav-light` : `nav-dark`)}>
            <div className="nav-item">Christian Catalano</div>
            <div className="nav-options nav-item">
                <div> ABOUT</div>
                <div> RESUME</div>
                <div>
                    {!dark ? <FaMoon
                        className="fade"
                        onClick={()=> setDarkMode(!dark)} 
                        style={{zIndex: 11 ,display: 'flex'}}
                        size={24}
                    />
                    : <FaSun
                        className="fade"
                        onClick={()=> setDarkMode(!dark)} 
                        style={{zIndex: 11 ,display: 'flex'}}
                        size={24}
                    />}
                </div>
            </div>
        </div>
    )
};

