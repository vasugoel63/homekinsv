import React, { useEffect } from 'react'
import { useState } from 'react';
import { secondData } from '../../Pages/DB';
const Ps2 = () => {
    const [inputs,setInputs] = useState({});
    const [sdata, setData] = useState(JSON.parse(localStorage.getItem("second")));
    useEffect(()=>{
      localStorage.setItem('second', JSON.stringify(sdata))
    }, [sdata]);
    const inputChange = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    const updateStorage = ()=>{
    // console.log(inputs);
    // setData(inputs);
    // console.log(sdata);
      setData(arr => [...arr, inputs ]);
      localStorage.setItem("second", JSON.stringify(sdata));


  }
  const resetDefault = ()=>{
    localStorage.setItem('second', JSON.stringify(secondData));
    setData(JSON.parse(localStorage.getItem('second')));
  }

  // localStorage.setItem("second", JSON.stringify(sdata));
  return (
      <div className='container mt-3 mb-5'>
      <h2>Second Section</h2>
     <div className='second-section'>
          <div className='container'>
            <div className='row'>
      {
          sdata.map((ele,k)=>{
              return(
                  <>
                  
                          <div className='col-md-6 col-lg'>
                              <div className='second-icon'>
                                  <div className='row'>
                                  <div className=' d-flex justify-content-center'>
                                      <i className={ele.iconlink} />
                                      {ele.name}
                               </div>
                           
                      </div>
                  </div>
                  </div>
                  </>
              ) })}
        </div>
        {sdata.length <=5 ?
        <button type="button" class="btn grey" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Card
    </button> : 
    <p className='nomoredata'>Couldnt Add more data, delete something 
      <button className='reset' onClick={resetDefault}>Reset to Default</button>
    </p>
        }
      </div>
    </div>
    
    

    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add in Second section</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
                <input name="name" type="text" placeholder="Name" onChange={inputChange}/>
                <input name="iconlink" type="url" placeholder='icon' onChange={inputChange}/>
            </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onClick={updateStorage} data-bs-dismiss="modal">Save changes</button>
            </div>
        </div>
        </div>
    </div>


    </div>
  )
}
const Secondd = ({data}) => {


    return (
      <>
      {/* <i class="fa-solid fa-circle-plus" data-bs-toggle="modal" data-bs-target="myModal"></i>
      <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
  
        <div class="modal-header">
          <h4 class="modal-title">Modal Heading</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
  
        <div class="modal-body">
          Modal body..
        </div>
  
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>
  </div> */}
      
         
      
      
      </>
      
    )
  }
export default Ps2;



