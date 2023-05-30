import React, { useState } from 'react'
import { project } from '../../Pages/DB';
import { useDispatch } from 'react-redux';
import { add} from '../redux/Actions';
import { useNavigate } from "react-router-dom";

const ProjectSecond = () => {
    const [data,setData] = useState(project);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div>
            <div className='container'>
             <h1>Find design ideas from our design gallery</h1>

            <div className='project-container'>
                <div className='row px-4 px-md-0'>
        {
            data.map((ele)=>{
                return(
                    <>  
                    <div className='col-sm-4'>
                    <div className='project-imgslider' onClick={()=> navigate('/detail')}>
                    <div className='imgcol' onClick={()=> dispatch(add(ele))}>
                        <img src={ele.src} alt='seventh-1' className='img-fluid'></img>
                        <div className='content ps-4'>
                        <p>{ele.head}</p>
                        <h2 className='w-50'>{ele.subhead} <br/></h2>
                        <p className='hiddentext'><span className='bordertext'>View</span> Project </p>
                        </div>
                        <div className='overlay'></div>
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

export default ProjectSecond ;