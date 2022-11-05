import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface props {
  className?: string;
  homepage?: boolean;
}

const defaultProps:Partial<props> = { //Declared here, implemented at bottom of file
  homepage: false,
  className: ""
};

export const Footer:React.FC<props> = (props) => {
  return (
    <div className={`footer ` + (props.homepage? `bg-black ` : `bg-darkBlue `) + `border-t-4 border-opacity-100 border-darkBlue2 column items-center justify-center ` + props.className}>

      <div className="social-buttons">
        <a href="https://github.com/cc0407" target="blank">
          <FaGithub className="social-button" title="Github" />
        </a>
        <a href="https://www.linkedin.com/in/christian-catalano/" target="blank">
          <FaLinkedin className="social-button" title="LinkedIn"/>
        </a>
      </div>

      {/* <a
        className={"footer-link"}
        target={"_self"}
        href="/contact"
      >
        Contact
      </a> */}

    </div>
  );
};

Footer.defaultProps = defaultProps;
export default Footer;