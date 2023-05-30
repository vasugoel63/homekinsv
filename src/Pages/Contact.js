import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Eleventh from '../Components/FirstPage/Eleventh'
import Footer from '../Components/Footer'
import { useState } from 'react'
import BS from './BS'
const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    // useEffect(()=> {
    //     setTimeout(()=>{
    //         setIsLoading(false);
    //     },4000)
    // },[]);
  return (
    <>
        <BS/>
        {isLoading ? 
        <div className="loading-overlay"></div>
            :

        (
            <>
        <Header data={true}/>
        <div className='contact-section pb-5'>
        <div className='container w-100 w-xl-75'>
            <div className='contact-heading py-5 '>
            <h1>Get in touch with us to design </h1>
            <h1>your <span className='drmtxt'>dream </span> home</h1>
            </div>
            <div className='cs-1'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <h3 className='mb-3'>Talk with Our expert designers</h3>
                            <p className='mb-5'>We understand that every design project is unique and deserves personalized attention. Our expert designers are here to listen, understand your vision, and provide tailored solutions that align with your specific needs and preferences. </p>
                            <h5 className='mb-4'>Our Office</h5>
                                <div className='row'>
                                <div className='col-1'>
                                <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div className='col-5'>
                                    <p>
                                70 Washington Square South New York, NY 10012, United States</p>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-1'>
                                <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div className='col-5'>
                                    <p>
                                    contact_info@homekins.com</p>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-1'>
                                <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className='col-5 mb-2'>
                                +92 423 567 7
                                </div>
                                </div>
                        </div>
                        <div className='col-sm-6'>
                            <form className='form'>
                            <label for ="name" className='mb-2'>Name</label><br/>
                            <input type='text' id='name' ></input> <br/>
                            <label for ="email"className='mb-2'>Email</label><br/>
                            <input type='text' id='email' ></input><br/>
                            <label for="msg"className='mb-2'>Message</label> <br/>
                            <textarea id='msg' className='mb-4'></textarea>
                            <button type='submit' className='sbmtbtn'>Send</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Eleventh/>
        <Footer/>
        </>
        )
}
    </>
  )
}

export default Contact