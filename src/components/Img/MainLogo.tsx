import React from "react";
import GenericImage from "./GenericImage";
//@ts-ignore
import LogoLong from "../../img/logos/LogoLong.png";

export const MainLogo: React.FC = () => {
    const info = "Catalano"; // THIS IS THE ALT TEXT FOR YOUR LOGO
    return (
        <GenericImage 
            className="mainLogo"
            src={LogoLong} // CHANGE THIS TO BE THE LOGO IMPORTED ABOVE
            title={info} 
            alt={info} 
        />
    );
};

export default MainLogo;