import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "../components/Head";
import ImageSwap from "../components/ImageSwap";
import About from "../components/About";

// This is a high-level view of what the page will be
export const Homepage = () => {
  return (
    <div className="min-h-screen column">
      <Head
        title="Christian Catalano" // Title of page for metadata, displayed on tab menu
        description="" // Description of page for metadata
        url="https://christiancatalano.ca/" // This is the final url of the page, used for embed/meta data
      />
      <Nav 
        active={0} // Active refers to the position on the nav bar, makes it bolded
      />
      <About />
      <Footer />
    </div>
  );
};


// This is the Body of the page, does not include header, nav, or footer
// Custom props are defined in this interface
interface props {}
// Default values are defined in this interface
const defaultProps: Partial<props> = {};

const Sample: React.FC<props> = () => {
  return (
    <div className="bg-offWhite text-darkBlue column page-width text-center justify-center items-center flex-grow-default overflow-x-hidden min-h-[700px]">
      <ImageSwap
        desktopImg={""}
      />
      <div className="h-full w-full z-10 column items-center">
        <div className="sampleContent sampleSpacing">

          <div className="sampleTitle">Sample Page</div>
          <div>
            This page can be used to determine how a page should look
          </div>

          <div className="sampleTitle sampleSpacing">Second Heading</div>
          <div>
            Lorem Ipsum
          </div>

        </div>
      </div>
    </div>
  );
};

Sample.defaultProps = defaultProps;
export default Homepage;
