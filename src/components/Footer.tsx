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
        <a href="https://github.com/cc0407" target="blank" className="hover:text-LightGray2">
          <FaGithub className="cursor-pointer" size={'2em'} title="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/christian-catalano/" target="blank" className="hover:text-LightGray2">
          <FaLinkedin className="cursor-pointer" size={'2em'} title="Facebook"/>
        </a>
      </div>

      <a
        className={"footer-link"}
        target={"_self"}
        href="/contact"
      >
        Contact
      </a>

    </div>
  );
};

Footer.defaultProps = defaultProps;
export default Footer;