import React from "react";
require("../../css/index.css");

export const Body1 = () => {
  return (
    <div className="h-screen bg-backgroundDark text-gray-300 items-center justify-center flex">
      <div className="flex flex-col items-center">
        <div className="font-light text-7xl">Coming Soon. </div>
        <a
          className="hover:text-gray-300 text-accent"
          href="https://github.com/cc0407/cc0407.github.io/tree/staging"
        >
          View development here.
        </a>
      </div>
    </div>
  )
};
