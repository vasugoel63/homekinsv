import React, { useEffect, useState } from 'react'
import { listItem } from '../../Pages/DB';


const Forthh = () => {
const [item1, setItem1] = useState("");
const [data, setData] = useState(JSON.parse(localStorage.getItem('list2')));
const [textArea, setTextArea] = useState(JSON.parse(localStorage.getItem('textArea')))
const [image, setImage] = useState(JSON.parse(localStorage.getItem('img')));
const [head, setHead] = useState(JSON.parse(localStorage.getItem('secondhead')));

// localStorage.setItem('list2', JSON.stringify(data));
// localStorage.setItem('secondhead', JSON.stringify("We Are Interior Design"));
// localStorage.setItem('img', JSON.stringify(image));

console.log(data.length);

useEffect(()=>{
  localStorage.setItem('list2', JSON.stringify(data));

}, [data]);
const updateList = (e)=>{
    setItem1(e.target.value);
}

const saveChanges = ()=>{
    const Id = data.length + 1;
    const newName = item1;
    setData( arr=> [...arr, {id: Id , Name: newName}]);
    // console.log(data);
}

const deleteItem = (id)=>{
  const updatedList = data.filter((obj)=> obj.id !== id);
  setData(updatedList);
  // localStorage.setItem('list2', JSON.stringify(data));
}
const resetDefault = ()=>{
  localStorage.setItem('list2', JSON.stringify(listItem));
  setData(JSON.parse(localStorage.getItem('list2')));
}

const handleChange = (event)=>{
    setTextArea(event.target.value);
}

const saveTChanges = ()=>{
    localStorage.setItem('textArea', JSON.stringify(textArea));
    //  const textP = JSON.parse(localStorage.getItem('textArea'));

}

const handleImageChange = (e)=>{
    // const file = e.target.files[0];
    // // console.log(URL.createObjectURL(file));
    // setImage(URL.createObjectURL(file));
    const value = e.target.value;
    setImage(value);
}
const saveIChanges = ()=>{
  localStorage.setItem('img', JSON.stringify(image) );
}
const headChange = (e)=>{
    setHead(e.target.value)
}
const saveHChanges = ()=>{
    localStorage.setItem('secondhead', JSON.stringify(head))
}
// console.log(data);
// const ldata = JSON.parse(localStorage.getItem('list2'));
// localStorage.setItem('textArea', JSON.stringify(textArea));
// const textP = JSON.parse(localStorage.getItem('textArea'));
// console.log(ldata.length);
// console.log(Array.isArray(ldata));
  return (
   <>
   <div className='forth-section mb-5'>
    <div className='container'>
        <h2>Third section</h2>
        <div className='row'>
            <div className='col-sm-6'>
                
            <img className="img-fluid mb-3 " style={{height:"470px"}} src={image} alt='forth'></img>  
            <br/>
            <button class="btn grey" data-bs-toggle="modal" data-bs-target="#ImgModal">Edit Image</button>
            </div>
            <div className='col-sm-6'>
            
            <h5 className='edit'>Edit Heading Here <span><i class="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#headModal"> </i></span></h5>
            <h3 className='pb-3'>{head}</h3>
            
            <p> {textArea}</p>
            <i class="fa-solid fa-circle-plus edit" data-bs-toggle="modal" data-bs-target="#TextModal"> </i>
            <ul>
                {data.map((ele)=>{
                    return(
                        <>
                    <li className='mb-3' key={ele.id}> <span><i class="fa-solid fa-chevron-right"></i>{ele.Name}</span> 
                    <i class="fa-regular fa-trash-can ps-3" onClick={()=> deleteItem(ele.id)}></i>
                    </li>

                        </>
                    )
                })}
              {data.length <=6 ? 
            <h5 className='edit'>Add List Item <i class="fa-solid fa-circle-plus" data-bs-toggle="modal" data-bs-target="#listModal"> 
             </i> 
            </h5>
            :
            <p className='nomoredata'>Couldnt Add More Data
              <button className='reset' onClick={resetDefault}>Reset</button>
            </p>
              }
           
  


            </ul>
            </div>
        </div>
    </div>
   </div>

   {/* Modals */}
   <div class="modal fade" id="listModal" tabindex="-1" aria-labelledby="listModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="listModalLabel">Add List Item</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input name="listitem" type="text" placeholder='list-item' value={item1} onChange={updateList}/>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={saveChanges}>Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="TextModal" tabindex="-1" aria-labelledby="TextModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="listModalLabel">Edit Text Here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                <textarea name="content" value={textArea} onChange={handleChange} rows="4" cols="50" />
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={saveTChanges}>Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="ImgModal" tabindex="-1" aria-labelledby="ImgModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="listModalLabel">Edit Image</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
                {/* <textarea name="content" value={textArea} onChange={handleChange} rows="4" cols="50" /> */}
                {/* <label for="avatar">Choose a picture:</label>

        <input type="file"
        id="avatar" name="avatar"
        /> */}
        <input type='text' name='img' placeholder='enter-image-link' className='w-100' onChange={handleImageChange} ></input>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={saveIChanges}>Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="headModal" tabindex="-1" aria-labelledby="headModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="listModalLabel">Edit Heading Here</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <input type="text" placeholder='heading' onChange={headChange}></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={saveHChanges}>Save changes</button>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default Forthh;