import React from 'react'
import Header from '../Components/Header'
import Bghold from '../Components/bghold'
import Eleventh from '../Components/FirstPage/Eleventh'
import Footer from '../Components/Footer'
import { useEffect } from 'react'
import BS from './BS'

const element = {
    src: 'http://homekins.on3-step.com/img/news/img2.jpg',
    date: 'Sept 08 2020',
    head: 'Pacific Region Awards',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident'
}
const DetailNews = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[]);
  return (
    <div>
        <BS/>
        <Header data={false}/>
        <Bghold element={element}/>
        <section className='dn2 px-3 px-sm-0'>
            <div className='container pt-5 w-100 w-xl-75'>
                <p className='mt-3'>The large wood panel of this entertainment unit is what gives it the classic, warm feel. the drawers and cupboards ensure that there is plenty of storage for all your electronics and knick-knacks. go for this classic wood and white combo or pick shades that go well with the rest of your decor</p>
                <p className='mb-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.</p>
                <div className='dn2-img'>
                    <img src='http://homekins.on3-step.com/img/news/img1.jpg' alt='img1'/>
                </div>
                <div className='dn2-wood my-5'>
                    <h3 className='mb-5'>The Large Wood</h3>
                    <p className='mb-4'>The large wood panel of this entertainment unit is what gives it the classic, warm feel. the drawers and cupboards ensure that there is plenty of storage for all your electronics and knick-knacks. go for this classic wood and white combo or pick shades that go well with the rest of your decor</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.</p>
                </div>

                <div className='dn2-w-img'>
                    <div className='row'>
                    <div className='col-sm-6'>
                        <div className='dn2-w-1'>
                            <div className='dn-w-img1'>
                            <img src='http://homekins.on3-step.com/img/news/img1.jpg' alt='img-1'className='img-fluid'></img>
                            </div>
                            <div className='dn-w-img2'>
                            <img src='http://homekins.on3-step.com/img/news/img4.jpg' alt='img-4' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='dn2-w-2'>
                        <img src='http://homekins.on3-step.com/img/news/img2.jpg' alt='img-2' className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    </div>
                <div className='dn2-w-3'>
                     <h3 className='my-5'>Entertainment Unit</h3>
                     <p className='mb-5'>The large wood panel of this entertainment unit is what gives it the classic, warm feel. the drawers and cupboards ensure that there is plenty of storage for all your electronics and knick-knacks. go for this classic wood and white combo or pick shades that go well with the rest of your decor</p>
                     <p className='mb-4'><b>Tags:</b> <span className='ms-3'>Inspiration, </span> <span>Decoration, </span><span>Interior, </span><span>Minimal </span></p>
                    <p className='mb-5'><b>Share: </b><i span class="fa-brands fa-instagram ms-3"></i><i class="fa-brands fa-twitter ms-3"></i><i class="fa-brands fa-facebook-f ms-3"></i></p>


                </div>
                    </div>
        </section>
        <Eleventh/>
        <Footer/>
        
    </div>
  )
}

export default DetailNews