import React, { useState } from "react"
import { Nav } from "../../components/Nav";
require("../../css/index.css");
import {SoonBody} from "../ComingSoon/index";
import { Body1 } from "./body1"
import { Body2 } from "./body2"
import {FaArrowCircleUp} from 'react-icons/fa';

const Index = () => {
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {    
    if (!showScroll && window.pageYOffset > 400){
     setShowScroll(true)    
   } else if (showScroll && window.pageYOffset <= 400){
     setShowScroll(false)    
   }  
   };
   window.addEventListener('scroll', checkScrollTop)
   const scrollTop = () =>{
     window.scrollTo({top: 0, behavior: 'smooth'});
   };
  return (
    <div>
      <FaArrowCircleUp 
          className="scroll-top" 
          onClick={scrollTop} 
          style={{height: 40, display: showScroll ? 'flex' : 'none'}}
          size={24}
      />
      <div className="flex flex-col">
        <Nav />
        <Body1 />
        <Body2 />
      </div>
    </div>
  )
}

export default Index
