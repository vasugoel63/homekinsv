import React from 'react'
import Header from '../Header'
import { useSelector } from 'react-redux'
import Ninth from '../FirstPage/Ninth'
import Eleventh from '../FirstPage/Eleventh'
import Footer from '../Footer'
import { useEffect } from 'react'
import bghold from '../bghold'
import Bghold from '../bghold'

const DetailCase = () => {
  const element = useSelector((state)=> state.newdata);

  console.log(element.src);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <div>
      <Header data={true}/>
      <Bghold element={element}/>
    <div className='detail_2section '>
      <div className='container '>
        <div className='row px-5 '>
          <div className='col-sm-8 '>
            <p>The large wood panel of this entertainment unit is what gives it the classic, warm feel. the drawers and cupboards ensure that there is plenty of storage for all your electronics and knick-knacks. go for this classic wood and white combo or pick shades that go well with the rest of your decor</p>
            <br/>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.
            </p>
            <br/>
            <p><b>Tags:</b> <span className='ms-3'>Inspiration, </span> <span>Decoration, </span><span>Interior, </span><span>Minimal </span></p>
            <p><b>Share: </b><i span class="fa-brands fa-instagram ms-3"></i><i class="fa-brands fa-twitter ms-3"></i><i class="fa-brands fa-facebook-f ms-3"></i></p>
          </div>



          <div className='col-sm-4'>
        <table className='acomplishtable'>
          <tr>
          <td className='dyear'>Categories:</td>
          <td className='ddata-1'>Interior</td>
          </tr>
          <tr>
          <td className='dyear'>Client:</td>
          <td className='ddata-1'>Homekins Design</td>
          </tr>
          <tr>
          <td className='dyear'>Completed:</td>
          <td className='ddata-1'>Sept 30, 2020</td>
          </tr>
          <tr>
          <td className='dyear'>Project_type:</td>
          <td className='ddata-1'>Home decoration</td>
          </tr>
        </table>
          </div>
        </div>
      </div>
    </div>
    <Ninth/>
    <Eleventh/>
    <Footer/>
    </div>
  )
}

export default DetailCase