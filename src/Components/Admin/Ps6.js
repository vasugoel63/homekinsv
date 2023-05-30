import React, { useEffect } from 'react';
import { useState } from 'react';

import { imgs1 } from '../../Pages/DB';
import { imgs2 } from '../../Pages/DB';
// localStorage.setItem('images1', JSON.stringify(imgs1));
// localStorage.setItem('images2', JSON.stringify(imgs2));

const Ps6 = () => {
  const [image, setImage] = useState(JSON.parse(localStorage.getItem('images1')));
  const [image2, setImage2] = useState(JSON.parse(localStorage.getItem('images2')));
  const [imm, setImm] = useState("");
  useEffect(()=>{
    localStorage.setItem('images1', JSON.stringify(image))
  },[image]);
  useEffect(()=>{
    localStorage.setItem('images2', JSON.stringify(image2))
  },[image2]);
  const imgUpdate = (e)=>{
    const file = e.target.value;
    // console.log(URL.createObjectURL(file));
    // setImage(arr=> [...arr, URL.createObjectURL(file)]);
    // setImage(arr=>[...arr,file]);
    setImm(file);
}
   const img2Update = (e)=>{
    const file = e.target.value;
    // console.log(URL.createObjectURL(file));
    // setImage2(arr=> [...arr, URL.createObjectURL(file)]);
    setImm(file);

   }
   const submitUpdate = ()=>{
    // setImage2(arr=>[...arr,file]);
    setImage(arr=> [...arr, imm]);
   }
   const submit2Update = ()=>{
    setImage2(arr=> [...arr, imm]);
   }

   const resetDefault1 = ()=>{
    localStorage.setItem('images1', JSON.stringify(imgs1));
    setImage(JSON.parse(localStorage.getItem('images1')));
   }

   const resetDefault2 = ()=>{
    localStorage.setItem('images2', JSON.stringify(imgs2));
    setImage2(JSON.parse(localStorage.getItem('images2')));
   }

// console.log(image);
  return (
    <div>
        <div className='container'>
            <h2>Fifth Section</h2>
            <h4>Images-1 Section</h4>
            {image.map((ele)=>{
                return(
                    <>
                <img src={ele} className='img-fluid w-25'/> 
                    </>
                )
            })}
            {/* <i class="fa-duotone fa-plus"></i> */}
            {image.length <=7 ? <i class="fa-solid fa-square-plus square" data-bs-toggle="modal" data-bs-target="#ImgeModal"></i>
            :
            <div className='nomoredata'>
            <p> Couldn't Add more data </p><button className='reset' onClick={resetDefault1}>Reset to default</button>
             </div>
            
        }
        <hr/>
            
            <h4 className='mt-3'>Images-2 Section</h4>
             {image2.map((ele)=>{
                return(
                    <>
                <img src={ele} className='img-fluid w-25'/> 
                    </>
                )
            })}
            {/* <i class="fa-duotone fa-plus"></i> */}
            {/* <i class="fa-sharp fa-solid fa-plus"></i> */}
            {image2.length <=7 ? <i class="fa-solid fa-square-plus square" data-bs-toggle="modal" data-bs-target="#Imge2Modal"></i>
            :
            <div className='nomoredata'>
            <p> Couldn't Add more data </p><button className='reset' onClick={resetDefault2}>Reset to default</button>
             </div>  
        }
            
        </div>


        <div class="modal fade" id="ImgeModal" tabindex="-1" aria-labelledby="ImgModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add in Images-section-1</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
                {/* <input name="name" type="text" placeholder="Name" /> */}
                {/* <input type='file'></input> */}
                {/* <input type="file" required  onChange={imgUpdate}/> */}
                <input type='text'className='w-100'placeholder='Enter Image Link here' onChange={imgUpdate}/>

            </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={submitUpdate} >Save changes</button>
            </div>
            </div>
            </div>
            </div>
            <div class="modal fade" id="Imge2Modal" tabindex="-1" aria-labelledby="Imge2ModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add in Images-section-2</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
                {/* <input name="name" type="text" placeholder="Name" /> */}
                {/* <input type='file'></input> */}
                {/* <input type="file" required /> */}
                <input type='text'className='w-100'placeholder='Enter Image Link here'onChange={img2Update}/>

            </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={submit2Update}>Save changes</button>
            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Ps6 