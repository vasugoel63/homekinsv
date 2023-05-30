import React from 'react'
import Header from '../Components/Header'
import Forth from '../Components/FirstPage/Forth';
// import Fifth from '../Components/Fifth';
import Sixth from '../Components/FirstPage/Sixth';
import Eight from '../Components/FirstPage/Eight';
import Ninth from '../Components/FirstPage/Ninth';
import Seventh from '../Components/FirstPage/Seventh';
import Eleventh from '../Components/FirstPage/Eleventh';
import Footer from '../Components/Footer';
import { useEffect } from 'react';
import BS from './BS';

const About = () => {
  return (
    <div>
        <BS/>
        <Header data= {true}/>
        <div className='second-img-div'>
        <img className='img-fluid second-img' src='http://homekins.on3-step.com/img/imgabout.jpg' alt='About' />
        </div>

        <div className='third-s-section'>
            <div className='container'>
                <div className='row ps-4'>
                    <div className='col-sm-4'>
                        <div className='row'>
                            <div className='col-9'>
                                 <h1>About Interior Designs</h1>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-8 third-d'>
                    {/* <p>Donec posuere bibendum metus. Quisque gravida luctus volutpat mauris interdum lectus in dapibus molestie quam felis sollicitudin amet tempus velit lectus nec lorem. Nullam vel mollis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim dui. Cum sociis natoque penatibus et magnis dis parturient montes ridiculus mus. Vestibulum cursus convallis venenatis. Sed ut blandit mauris.</p> */}
                    <p>We believe that interior design is more than great functionality and beautiful aesthetics. At Homekins, we understand that a well-designed space has the power to transform lives, enhance well-being, and evoke emotions. With this philosophy at the core of our work, we strive to create exceptional living environments that reflect the unique personalities, lifestyles, and aspirations of our clients. Our team of talented designers combines creativity, expertise, and attention to detail to bring each vision to life. </p>
                    </div>
                </div>
            </div>
        </div>
        <Forth/>
        <Sixth/>
        <Eight/>
        <Ninth/>
        <Seventh/>
        <Eleventh/>
        <Footer/>
    </div>
  )
}

export default About