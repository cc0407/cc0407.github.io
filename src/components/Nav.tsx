import React, { HTMLProps, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { BsArrowBarUp } from "react-icons/bs";
import { Link } from "gatsby";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// List of pages, to compare against
type showPage = "None" | "Home" | "Experience" | "Projects" | "Contact";

interface linkArray {
  href: string,                     // Where the link points to
  name: string,                     // Text for this link
  page: showPage,                   // String to compare against to determine if this link is currently active (AKA this page is being displayed)
};

// Array of navigation elements for the nav bar
const links:linkArray[] = [
  {href:"/",           page:"Home",       name:"Home"}, 
  {href:"/experience", page:"Experience", name:"Experience"}, 
  {href:"/projects",   page:"Projects",   name:"Projects"}, 
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
          ? <BsArrowBarUp className={"icon nav-item 640:hidden"} onClick={()=> {setClicked(false)}}/>
          : <RiMenuLine className={"icon nav-item 640:hidden"} onClick={()=> {setClicked(true)}}/>
        }
        <ul className={"page-link-wrapper " + (clicked ? "nav-opened" : "")}>
          <>
            {links.map(function(link, i) {
              return <li key={i} className="h-full">
                <Link
                  to={link.href}
                  className={"nav-link " + (props.active == link.page ? 'nav-link-active' : 'nav-item')}
                >
                  {link.name}
                </Link>
              </li>
            })}
          </>
        </ul>
        <div className="social-buttons">
          <a href="https://github.com/cc0407" className="icon nav-item" target="blank">
            <FaGithub className="icon" title="Github" />
          </a>
          <a href="https://www.linkedin.com/in/christian-catalano/" className="icon nav-item" target="blank">
            <FaLinkedin className="icon" title="LinkedIn"/>
          </a>
        </div>
      <div className={"nav-overlay " + (clicked? "visible" : "collapse")} onClick={() => {setClicked(false)}}/>
      </nav>
    </>
  );
};

Nav.defaultProps = defaultProps;
export default Nav;
