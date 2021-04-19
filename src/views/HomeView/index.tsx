import React, { useState } from "react"
import { Nav } from "../../components/Nav";
require("../../css/index.css");
import {SoonBody} from "../ComingSoon/index";
import { Body1 } from "./body1"
import { Body2 } from "./body2"
import {FaArrowAltCircleUp} from 'react-icons/fa';

const Index = () => {
  const [scrolled, setShowScroll] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
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
      <FaArrowAltCircleUp
          className="scroll-top fade" 
          onClick={scrollTop} 
          style={{bottom: 10, right: 32, height: 40, display: scrolled ? 'flex' : 'none'}}
          size={32}
      />
      <Nav 
        scrolled={scrolled}
        dark={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="flex flex-col">
        <Body1 dark={darkMode, setDarkMode}/>
        <Body2 />
      </div>
    </div>
  )
}

export default Index
