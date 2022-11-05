import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Seo from "../components/SeoComponent";

// This is a high-level view of what the page will be
export const Contact = () => {
  return (
    <div className="min-h-screen column bg-offWhite">
      <Nav
        active={"Contact"} // Active refers to the position on the nav bar, makes it bolded
      />
      <ContactBody />
    </div>
  );
};

// This is the Body of the page, does not include header, nav, or footer
// Custom props are defined in this interface
interface props {}
// Default values are defined in this interface
const defaultProps: Partial<props> = {};

const ContactBody: React.FC<props> = () => {
  return (
    <div className="bg-offWhite text-darkBlue column page-width text-center items-center flex-grow-default overflow-x-hidden ">
      <div className="column centered contactContent ">
        <div className="contactSubtitle">Business Inquiries</div>
        <div>
          Please send an email to:{" "}
          <a
            className="contactTextLink"
            href="mailto:christiancatalano@outlook.com?subject=Business Inquiry - "
          >
            christiancatalano@outlook.com
          </a>
        </div>
        <div className="contactSubtitle pt-16">Other Communication</div>
        <div>
          Feel free to message me on&#8198;
          <a
            className="contactTextLink"
            href="https://www.linkedin.com/in/christian-catalano/"
            target="_blank"
          >
            LinkedIn
          </a>
          !
        </div>
      </div>
    </div>
  );
};

ContactBody.defaultProps = defaultProps;
export default Contact;

export const Head = () => (
  <Seo
    title="Contact"
    url="/contact-us"
  >
    <meta name="robots" content="noindex"/>
  </Seo>
)   
