import React, { HTMLProps, useState } from "react";
import { RiMenuLine, RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { BsArrowBarUp } from "react-icons/bs";
import MainLogo from "./Img/MainLogo";
import { Link } from "gatsby";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// List of pages, to compare against
type showPage = "None" | "Home" | "Experience" | "Projects" | "Contact";

interface linkArray {
  href: string,                     // Where the link points to
  name: string,                     // Text for this link
  page: showPage,                   // String to compare against to determine if this link is currently active (AKA this page is being displayed)
  type: "" | "nav-link-mobile",
};

// Array of navigation elements for the nav bar
const links:linkArray[] = [
  {href:"/",           page:"Home",       type:"", name:"Home"}, 
  {href:"/experience", page:"Experience", type:"", name:"Experience"}, 
  {href:"/projects",   page:"Projects",   type:"", name:"Projects"}, 
];

interface props extends HTMLProps<any> {
  active?: showPage;
}
const defaultProps: Partial<props> = { //Declared here, implemented at bottom of file
  active: "None",
  className: ""
}

export const Nav: React.FC<props> = (props) => {
  const [clicked,setClicked] = useState(false);  

  return (
    <>      
      <nav className={"nav " + props.className}>
        {clicked // Swap icon and display overlay if mobile menu is open
          ? <BsArrowBarUp className={"icon"} onClick={()=> {setClicked(false)}}/>
          : <RiMenuLine className={"icon"} onClick={()=> {setClicked(true)}}/>
        }
        <ul className={"page-link-wrapper " + (clicked ? "nav-opened" : "")}>
          <>
            {links.map(function(link, i) {
              return <li key={i} className={link.type + (props.active == link.page ? ' nav-link nav-link-active' : ' nav-link nav-link-inactive')}>
                <Link
                  to={link.href}
                >
                  {link.name}
                </Link>
              </li>
            })}
          </>
        </ul>
        <div className="social-buttons">
          <a href="https://github.com/cc0407" className="social-button" target="blank">
            <FaGithub className="social-button text-black" title="Github" />
          </a>
          <a href="https://www.linkedin.com/in/christian-catalano/" className="social-button" target="blank">
            <FaLinkedin className="social-button text-black" title="LinkedIn"/>
          </a>
        </div>
      <div className={"nav-overlay " + (clicked? "visible" : "collapse")} onClick={() => {setClicked(false)}}/>
      </nav>
    </>
  );
};

Nav.defaultProps = defaultProps;
export default Nav;
