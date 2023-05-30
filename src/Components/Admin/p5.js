import React, { useEffect, useState } from 'react'
import { fifthData } from '../../Pages/DB';

const Ps5 = () => {
  // localStorage.setItem('fifthdata', JSON.stringify(fifthData));
const [fifthHead, setfifthHead] = useState(localStorage.getItem('fifthHead'));
const [fcard, setFcard] = useState({});

const [ fifthdata, setFifthdata] = useState(JSON.parse(localStorage.getItem('fifthdata')));


const saveChanges = ()=>{
   localStorage.setItem('fifthHead', fifthHead);
}
useEffect(()=>{
  localStorage.setItem('fifthdata', JSON.stringify(fifthdata));
},[fifthdata]);
// saveCardChanges

  const inputHeadChange = (e)=>{
    setfifthHead(e.target.value);
  }

  // save card Changes
  const cardChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFcard(arr => ({...arr, [name]: value}));
    
  }
  const cardImgChange = (e)=>{
    // const name = e.target.name;
    // const file = e.target.files[0];
    const name = e.target.name;
    const value = e.target.value;
    // console.log(URL.createObjectURL(file));
    // setImage(URL.createObjectURL(file));
    setFcard(arr => ({...arr, [name]: value}));

  
  }
  const saveCChanges = ()=> {
    setFifthdata(arr => ([...arr, fcard]));
      }
  const resetDefault = ()=>{
    localStorage.setItem('fifthdata', JSON.stringify(fifthData));
    setFifthdata(JSON.parse(localStorage.getItem('fifthdata')));
  }

  return (
    <div>
        <div className='container mb-5'>
        <h2>Forth Section</h2>
        <h3>Heading = {fifthHead}</h3>
        <button class="btn grey" data-bs-toggle="modal" data-bs-target="#ps5HeadModal">Edit Heading</button>

        <h3>Images</h3>
        <div className='row'>
        {fifthdata.map((ele)=>{
          return(
            <>
            <div className='col'>
            <img src={ele.src}  style={{width: "250px"}}/>
            <h5>{ele.heading}</h5>
            <p>{ele.text}</p>
            </div>
            </>
          )
        })}
        </div>

        {fifthdata.length <=7 ? 
        <button class="btn grey" data-bs-toggle="modal" data-bs-target="#card5Modal">Add Card</button>
          :
        <p className='nomoredata'>Couldnt Add more data, delete something 
        <button className='reset' onClick={resetDefault}>Reset to Default</button>
        </p>
      }
        
        </div>

        









  <div class="modal fade" id="ps5HeadModal" tabindex="-1" aria-labelledby="ps5ModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add in Second section</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input name="name" type="text" placeholder="Name" onChange={inputHeadChange}/>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={saveChanges}>Save changes</button>
      </div>
    </div>
  </div>
  </div>

  <div class="modal fade" id="card5Modal" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add in Second section</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input name="heading" type="text" placeholder="Heading" className='w-100 mb-3' required minLength={5} onChange={cardChange}/> <br/>
            <textarea name="text" placeholder="Text" className='w-100 mb-3' required minLength={20} onChange={cardChange}/> <br/>
            {/* <input name="src" type="file" placeholder="Name" required /> */}
            <input name='src' type='text' placeholder='enter img Link' className='w-100 mb-3' required  onChange={cardImgChange}/>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={ saveCChanges}>Save changes</button>
      </div>
    </div>
  </div>
  </div>

  </div>

  )
}

export default Ps5