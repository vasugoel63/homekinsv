import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = ({logout}) => {
    const navigate = useNavigate();

//    const logout = ()=>{
//         navigate("/login");
//         console.log("logout clicked");
//    }
  return (
    <>
  

    <div className='navbar'>
        <div className='container'>
        <div className='logo'>
        <img src='http://homekins.on3-step.com/img/logowhite.png' alt='logo' class="img-fluid"></img>
        {/* <span class='text-light callus d-none d-sm-inline'>Call Us: (+6221) 000 888 999</span> */}
        </div>
        {/* <div class="dropdown">
        <i class="fa-regular fa-user user dropdown-toggle" data-bs-toggle="dropdown" ></i>

        <div class="dropdown-menu" >
            <a class="dropdown-item" >Profile</a>
            <a class="dropdown-item" onClick={logout}>Logout</a>
        </div>
        </div> */}
        {/* <div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown"  aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu"aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Link 1</a></li>
    <li><a class="dropdown-item" href="#">Link 2</a></li>
    <li><a class="dropdown-item" href="#">Link 3</a></li>
  </ul>
</div> */}
{/* <Dropdown className='me-5'>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
  <i class="fa-regular fa-user user"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item >Profile</Dropdown.Item>
    <Dropdown.Item  onClick={logout}>Logout</Dropdown.Item>
    {/* <Dropdown.Item href="#/action-3">Item 3</Dropdown.Item> */}
  {/* </Dropdown.Menu>
</Dropdown> */}
{/* <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div> */}
<button onClick={logout}>Logout</button>

        </div>

   
    </div>
    
    </>
  )
}

export default Navbar