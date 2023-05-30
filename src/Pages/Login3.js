import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../Components/Header';
import { useNavigate } from "react-router-dom";
import { createContext } from 'react';
import Admin from './Admin';



export const UserContext = createContext();
const Login3 = ()=>{
const navigate = useNavigate();

const [name, setName] = useState('');
const [pwd, setPwd] = useState('');
const [Auth, setAuth] = useState(false);

const logout = ()=>{
   setAuth(false);
   setName('');
   setPwd('');
}

const handle = () => {
    if(pwd === localStorage.getItem(name)){
      //   console.log("LOGIN SUCCESSFULL")
        alert("LOGIN SUCCESSFULL");
        setAuth(true)
      //   navigate("/adminpage");
    }
    else{
        // localStorage.setItem(name, pwd);
        console.log("TRY again");
    }
   
};

return (
    <>
    {/* <Header/> */}
    <UserContext.Provider value={name}>
    {Auth ? <Admin logout={logout} /> :

   <div className='container-fluid'>
      <div className='loginlogo'>
      <img src='http://homekins.on3-step.com/img/logowhite.png'></img>
      </div>
      <h2 className='ms-5 pt-3'>Welcome To Homekins Admin Page</h2>
   <div className="Login">
    <h2 className= 'fw-bold mb-3'>Admin Login</h2>
    {/* <p>please enter valid credentials</p> */}
     <form>
      <input
         type="text"
         placeholder="Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <input
         type="password"
         placeholder="Password"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
      <div>
         <button onClick={handle}>Login</button>
      </div>
      </form>
   </div>
   </div>

  
    }
     </UserContext.Provider>
   </>
);
};



export default Login3;