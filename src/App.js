import Header from './Components/Header';
import First from './Components/FirstPage/First';
import Second from './Components/FirstPage/Second';
import Forth from './Components/FirstPage/Forth';
import './Components/style.css';
import './Components/verticalCrousel.css';
import Fifth from './Components/FirstPage/Fifth';
import Sixth from './Components/FirstPage/Sixth';
import Seventh from './Components/FirstPage/Seventh';
import Eight from './Components/FirstPage/Eight';
import Ninth from './Components/FirstPage/Ninth';
import Tenth from './Components/FirstPage/Tenth';
import Eleventh from './Components/FirstPage/Eleventh';
import Footer from './Components/Footer';
import SimpleSlider from './Components/Slider';
import Login from './Components/Login';
import MyForm from './Components/Login2';
import Login3 from './Pages/Login3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Pages/Admin';
import Main from './Pages/Main';
import About from './Pages/About';
import Project from './Pages/Project';
import ProjectSecond from './Components/Project/Project-second';
import { useLocation } from 'react-router-dom';
import DetailCase from './Components/Project/detailCase';
import { Provider } from 'react-redux';
import store from './Components/redux/Store';
import NoMatch from './Components/NoMatch';
import News from './Pages/News';
import DetailNews from './Pages/DetailNews';
import Contact from './Pages/Contact';
import BS from './Pages/BS';
function App() {
  
  return(
    <>
    <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path="/login" element={<Login3/>}/>
    <Route path="/adminpage" element={<Admin/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/project' element={<Project/>} />
    {/* <Route path='/project2' element={<ProjectSecond/>}/> */}
    <Route path='/detail' element={<DetailCase/>} />

    <Route path='*' element={<NoMatch/>}/>
    <Route path='/News' element={<News/>}/>
    <Route path='/detailnews' element={<DetailNews/>} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/bs' element={<BS/>}/>
  </Routes> 
  </BrowserRouter> 
  </Provider>

    </>
    
  )
}

export default App;
