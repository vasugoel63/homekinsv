import React, { useState } from 'react'
import pic from '../images/logowhite.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = ({data}) => {
  const location = useLocation();
    const [sidebar, setSidebar] = useState(false);
    const [header, setHeader] = useState(data);
    const showSidebar = ()=> setSidebar(!sidebar);
    const navigate = useNavigate();


    const changeBackground = ()=>{
        if(window.scrollY >= 80){
            setHeader(true);
        }
        else{
            setHeader(false);
        }
    
    }
    if(location.pathname === '/' || location.pathname === '/detail' || location.pathname === '/detailnews'){
    window.addEventListener('scroll', changeBackground);
    }
    // else{
    //     setHeader(true)
    // }
    // else{
    // window.removeEventListener('scroll', changeBackground);
    // }

  return (
    <>
  

    <div className={header ? 'header header-colored' : 'header header-transparent'}>
        <div className='container-fluid'>
        <div className='logo' onClick={()=> navigate('/')}>
        <img src={pic} alt='logo' class="img-fluid"></img>
        <span class='text-light callus d-none d-sm-inline'>Call Us: (+6221) 000 888 999</span>
        </div>
        <div className='ham-icon-main'>
        <div className='ham-icon' onClick={showSidebar}>
           <span  class="ham-1"></span>
           <span class="ham-2"></span>
           <span class="ham-3"></span>

        </div>
        </div>
    </div>

    <div className={sidebar ?  'sidebar active' : 'sidebar'}>
    <div className='sidebar-wrapper pe-5'>
    <i class="fa-solid fa-xmark" onClick={showSidebar}></i>
    <div className='nav-list'>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/About'>About</a></li>
        <li><a href='/project'>Projects</a></li>
        <li><a href='/News'>News</a></li>
        <li><a href='/contact'>Contact</a></li>
    </ul>
        <hr/>
        <p> 
            <a>(+6221) 000 888 999 </a><br/>
           <a id="email"> support@homekins.com </a><br/>
            <a >129 Park street, New York 10903 </a>
            
        </p>
        </div>
        <div className='icons'>
            <span class="me-3 fw-bold">Follow us: </span>
                    <i class="fa-brands fa-facebook-f me-3"></i>
                    <i class="fa-brands fa-twitter me-3" ></i>
                    <i class="fa-brands fa-linkedin-in me-3"></i>
                    <i class="fa-brands fa-instagram me-3"></i>
        </div>

    
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Header