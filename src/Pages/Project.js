import Header from "../Components/Header";

import React from 'react'
import Tenth from "../Components/FirstPage/Tenth";
import ProjectSecond from "../Components/Project/Project-second";
import Eleventh from "../Components/FirstPage/Eleventh";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BS from "./BS";

const Project = () => {



  return (
    <div>
      <BS/>
        <Header data= {true}/>
        <div className="project-section">
        <ProjectSecond/>
        </div>
        <Eleventh/>
        <Footer/>



    </div>
  )
}

export default Project