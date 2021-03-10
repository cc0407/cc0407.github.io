import React from "react"
import { Nav } from "../../components/Nav";
require("../../css/index.css");
import {SoonBody} from "../ComingSoon/index";
import { Body1 } from "./body1"

const Index = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <Body1 />
    </div>
  )
}

export default Index
