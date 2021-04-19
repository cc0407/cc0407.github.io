import React, { useState } from "react"
import { Nav } from "../../components/Nav";
require("../../css/index.css");
import {SoonBody} from "../ComingSoon/index";
import { Body1 } from "./body1"
import { Body2 } from "./body2"
import {FaArrowCircleUp} from 'react-icons/fa';

const Index = () => {
  const [scrolled, setShowScroll] = useState(false)
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  const checkScrollTop = () => {    
    if (!scrolled && window.pageYOffset > 50){
     setShowScroll(true)    
   } else if (scrolled && window.pageYOffset <= 50){
     setShowScroll(false)    
   }  
   };
   window.addEventListener('scroll', checkScrollTop)
  return (
    <div>
      <FaArrowCircleUp 
          className="scroll-top" 
          onClick={scrollTop} 
          style={{height: 40, display: scrolled ? 'flex' : 'none'}}
          size={24}
      />
      <Nav 
        scrolled={scrolled}
        theme={true}
      />
      <div className="flex flex-col">
        <Body1 />
        <Body2 />
      </div>
    </div>
  )
}

export default Index
