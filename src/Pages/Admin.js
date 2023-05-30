import React from 'react'
import { UserContext } from './Login3';
import { useContext } from 'react';
import { useState } from 'react';
import Header from '../Components/Header';
import First from '../Components/FirstPage/First';
import Forthh from '../Components/Admin/Forthh';
import Navbar from '../Components/Admin/Navbar';
import Ps1 from '../Components/Admin/Ps1';
import Ps2 from '../Components/Admin/Ps2';
import Ps5 from '../Components/Admin/p5';
import Ps6 from '../Components/Admin/Ps6';
import '../Components/Admin/style2.css'
const Admin = ({logout}) => {
    const  name = useContext(UserContext);
   
  // console.log(data.length);
 
return (
  <>
  

  <Navbar logout= {logout}/>
  <Ps1/>
  <Ps2/>
  <Forthh/>
  <Ps5/>
  <Ps6/>
  </>
);

}

export default Admin