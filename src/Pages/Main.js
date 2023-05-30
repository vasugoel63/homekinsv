import Header from '../Components/Header';
import First from '../Components/FirstPage/First';
import Second from '../Components/FirstPage/Second';
import Forth from '../Components/FirstPage/Forth';
import '../Components/style.css';
import '../Components/verticalCrousel.css';
import Fifth from '../Components/FirstPage/Fifth';
import Sixth from '../Components/FirstPage/Sixth';
import Seventh from '../Components/FirstPage/Seventh';
import Eight from '../Components/FirstPage/Eight';
import Ninth from '../Components/FirstPage/Ninth';
import Tenth from '../Components/FirstPage/Tenth';
import Eleventh from '../Components/FirstPage/Eleventh';
import Footer from '../Components/Footer';
import SimpleSlider from '../Components/Slider';
// import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';
import { UNSAFE_useScrollRestoration } from 'react-router-dom';
import BS from './BS';

function Main() {
  // console.log(location);
  
    return(
      <>
      <BS/>
      <Header data={false}/>
      <First/>
      <Second/>
      <Forth/>
      <Fifth/>
      <Sixth/>
      <Seventh/>
      <Eight/>
      <Ninth/>
      <Tenth/>
      <Eleventh/>
      {/* <SimpleSlider/>  */}
      <Footer/>
      </>
      
    )
  }

  export default Main;