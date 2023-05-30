import React, { useEffect, useState } from 'react'
import { firstdata } from '../../Pages/DB'
import { UserContext } from '../../Pages/Login3';
import { useContext } from 'react';
const Ps1 = () => {
    const [fdata, setFdata] = useState(JSON.parse(localStorage.getItem('first')));
    const [inputs, setInputs] = useState({});
    const  name = useContext(UserContext);
    useEffect(()=>{
    localStorage.setItem('first',JSON.stringify(fdata) );
      
    },[fdata]);
    const inputChange = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInputs(arr=>({...arr, [name]:value}))
    }
  const resetDefault = ()=>{
    localStorage.setItem('first', JSON.stringify(firstdata));
    setFdata(JSON.parse(localStorage.getItem('first')));
  }
  // localStorage.setItem('first',JSON.stringify(firstdata) );
  const saveChanges = ()=>{
    setFdata(arr=> [...arr, inputs ])
  }
  console.log(fdata);
  return (
    <div>
        <div className='container firstadmin mb-5'>
            <h1 className='main-head'>Welcome {name}</h1>
            <h2 className='mb-3'>First Section</h2>
            <div className='row'>
            {fdata.map((ele)=>{
            return(
                <>
                <div className='col'>
                <img src={ele.src} className='w-100'/>
                <h3>{ele.head}</h3>
                <h5>{ele.subhead}</h5>
                <p>{ele.btn}</p>
                </div>
                </>
            )
        })}
            </div>

          {fdata.length <=4 ? <button className='btn grey' data-bs-toggle="modal" data-bs-target="#cardModal">Add New Card</button>
          :
          <div>
          <p className='nomoredata'>Couln't add More data <button className='reset' onClick={resetDefault}> Reset to default</button></p>
          </div>
          }
            
        </div>
        
  <div class="modal fade" id="cardModal" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add in Second section</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            {/* <input name="src" type="file" placeholder="Name" required  /> */}
            <input name="src" type='text' placeholder='Enter Image Link' className='w-100 mb-3' required onChange={inputChange}/>
            <input name="head" type="text" placeholder="Heading" className='w-100 mb-3' required minLength={5} onChange={inputChange}/> <br/>
            <input name="subhead" placeholder="Sub-heading" className='w-100 mb-3' required minLength={20} onChange={inputChange}/> <br/>
            <input  name='btn' placeholder='Enter button name' className='w-100 mb-3' required onChange={inputChange} />
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={saveChanges} >Save changes</button>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Ps1