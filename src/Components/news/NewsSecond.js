import React from 'react'
import { tenthData } from '../../Pages/DB'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewsSecond = () => {
 const [data,setData] = useState(tenthData);
 const navigate = useNavigate();
  return (
    <div>
         <div className='container'>
             <h1>Latest News From Our Works</h1>

            <div className='project-container'>
                <div className='row px-4 px-md-0'>
        {
            data.map((ele)=>{
                return(
                    <>  
                    <div className='col-sm-4' onClick={()=> navigate('/detailnews')}>
                    <div className='imgslider'>
                    <img src={ele.src} alt="img1" class="img-fluid"/>
                    <div className='imgslider3-text'>
                    <p className='mb-1'>{ele.date}</p> 
                    <h3 className='mb-4'>{ele.head}</h3>
                    <div className='texthidden opacity-75'>
                    <p>{ele.text}</p>
                    </div>
        {/* <p><span className='readtext'>Read</span> More </p> */}
        {/* <p class="text-light texthidden">   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nesciunt fugit illo sunt ut minus, non perspiciatis. Repudiandae ut magnam, dolores natus tempore eos accusamus explicabo quaerat amet voluptatibus cum vero quia odit culpa nisi ad sint! Rem eius sequi, nostrum at saepe iusto facere harum magni quasi blanditiis obcaecati.</p> */}
              
                    </div>
                    <p className='fixed-text'><span className='readtext'>Read</span> More </p>
                    <div className="overlay w-100">
               
                    </div>
                    </div>
                     </div>
                    </>
                )
            })
        }
        </div>
        </div>
        <nav aria-label="Page navigation example" className='pagee'>
        <ul class="pagination">
            <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
                {/* <span aria-hidden="true">&laquo;</span> */}
                {/* <span class="sr-only">Previous</span> */}
                <span><i class="fa-solid fa-chevron-left"></i></span>
            </a>
            </li>
            <li class="page-item"><a class="page-link active" href="">1</a></li>
            <li class="page-item"><a class="page-link" href="">2</a></li>
            <li class="page-item"><a class="page-link" href="">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
                {/* <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span> */}
                <span><i class="fa-solid fa-chevron-right"></i></span>

            </a>
            </li>
        </ul>
        </nav>
       

    </div>
    </div>
  )
}

export default NewsSecond


