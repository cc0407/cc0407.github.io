import React, { HTMLProps, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenuLine, RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { RoundedLink } from "./RoundedLink";
import MainLogo from "./Img/MainLogo";
import { Link } from "gatsby";

// Used to switch between mobile and desktop navigations
// nav-desktop is only visible on 800px+ viewports, mobile only visible on logical negation
interface barProps extends HTMLProps<any> {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>
}
const Bar:React.FC<barProps> = (props) => {
  return(
    <>
      <div className="nav-links-desktop">
        {props.children}
      </div>
      <div className={"nav-links-mobile" + (props.state ? " nav-opened" : "")} >
          {props.children}
      </div>
    </>
  )
}

// List of pages, to compare against
type showPage = "None" | "Home" | "Experience" | "Projects" | "Contact";

interface linkArray {
  href: string,                     // Where the link points to
  name: string,                     // Text for this link
  page: showPage,                   // String to compare against to determine if this link is currently active (AKA this page is being displayed)
  linkType: "internal" | "external" // internal = Gatsby Link, external = <a> tag
};

// Array of navigation elements for the nav bar
const links:linkArray[] = [
  {href:"/experience", linkType: "internal", page:"Experience", name:"Experience"}, 
  {href:"/projects",   linkType: "internal", page:"Projects",   name:"Projects"}, 
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
      <div className="nav-placeholder"/>
      <div className={"nav " + props.className}>

        {clicked // Swap icon and display overlay if mobile menu is open
          ? <> 
              <div className="nav-overlay" onClick={() => {setClicked(false)}}/>
              <RiMenuFoldLine size={44} className={"icon"} onClick={()=> {setClicked(false)}}/>
            </>
          : <RiMenuLine size={44} className={"icon"} onClick={()=> {setClicked(true)}}/>
        }
        <Link to="/">
          <MainLogo/>
        </Link>

        <Bar state={clicked} setState={setClicked}>      
            <div className="page-link-wrapper">
                  <>{
                    // props.active is used to highlight the page that is currently being displayed
                    links.map(function(link, i) {
                        return <>
                          {link.linkType == "internal" 
                          ? <Link
                              className={props.active == link.page ? 'nav-link nav-link-active' : 'nav-link nav-link-inactive'}
                              to={link.href}
                            >
                              {link.name}
                            </Link>
                          : <a
                              className={props.active == link.page ?  'nav-link nav-link-active' : 'nav-link nav-link-inactive'}
                              href={link.href}
                            >
                              {link.name}
                            </a>}
                        </>
                    })
                    
                  }
                </>
            </div>
        </Bar>
      </div>
    </>
  );
};

Nav.defaultProps = defaultProps;
export default Nav;
