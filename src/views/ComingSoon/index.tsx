import React from "react";
import Anime from "react-anime";
require("../../css/index.css");

export const SoonBody = () => {
  return (
    <div className="full-page-dark">
      <div className="flex flex-col items-center">
        <Anime opacity={[0, 1]} duration={2000} easing={"easeInOutExpo"}>
          <div className="font-light text-4xl xs:text-5xl sm:text-7xl">
            Coming Soon.{" "}
          </div>
        </Anime>
        <Anime opacity={[0, 1]} delay={2000} duration={1000} translateY="1rem">
          <a
            className="hover:text-gray-300 text-accent"
            href="https://github.com/cc0407/cc0407.github.io/tree/staging"
          >
            View development here.
          </a>
        </Anime>
      </div>
    </div>
  )
};
