
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';



const Create = () => {

    const [input, setInput] = useState({
        name : '',
        regular_price : '',
        sale_price : '',
        stock : '',
        photo : [],
        file : '',
        category : [],
        tags : [],
        gallery : []
    })

    // get input value
    const handleGetData = (e) => {

        setInput( (prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
  
    // checkbox change category

    const handleCatsCheckbox = (e) => {
        

        if(e.target.checked){

         let cats = input.category;
         cats.push(e.target.value);
         setInput((prevState) => ({
            ...prevState,
            category : cats

         }))
        }else{
           let cats = input.category;
           const newCats = cats.filter( data => data !== e.target.value)
           setInput((prevState) => ({
            ...prevState,
            category : newCats
         }))
        }
    }

  // check box change for tags

  const handleTagCheckbox = (e) => {
   if(e.target.checked){

    let tag = input.tags;
    tag.push(e.target.value);
    setInput((prevState) => ({
        ...prevState,
        tags : tag
    }));

   }else{
    let tag = input.tags;
   const newTag = tag.filter(data => data !== e.target.value)
    setInput((prevState) => ({
        ...prevState,
        tags : newTag
    }));
   }
  }

// handle submit photo

const handleSubmitPhoto = (e) => {
  setInput((prevState) => ({
    ...prevState,
    file : e.target.files[0]
  }))
}


// submit gallery
const handleSubmitGallery = (e) => {
  
    setInput((prevState) => ({
        ...prevState,
        gallery : e.target.files
    }))
}
// submit form
const handleSubmitForm = async (e) => {
  e.preventDefault();
 
  
  const data = new FormData(); 
  data.append('name', input.name);
  data.append('regular_price', input.regular_price);
  data.append('sale_price', input.sale_price);
  data.append('stock', input.stock);
  data.append('category', input.category);
  data.append('tags', input.tags);
  data.append('photo', input.file);


  for (let i = 0; i < input.gallery.length; i++) {
    data.append('gallery', input.gallery[i])
  }

  try {
    await axios.post(`http://localhost:5030/api/v1/products`, data)
  .then( res => {
    swal({
        title: "Good job!",
        text: "Product added successful!",
        icon: "success",
        button: "Aww yiss!",
      });
      setInput({
        name : '',
        regular_price : '',
        sale_price : '',
        stock : '',
        file : ''
      })
      e.target.reset();
  })
  .catch( err => {
    swal({
        title: "Bad job!",
        text: "Product added failed!",
        icon: "danger",
        button: "Aww yiss!",
      });
  });
  } catch (error) {
    console.log(error.message)
  }
  
}

  return (
    <div className='container my-5'>
        <div className="row justify-content-center">
            <div className="col-md-5">
                <Link to="/admin/product" className='btn btn-primary'>back</Link>
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h1>Add product</h1>
                        <form action="#" onSubmit={handleSubmitForm} method="post" encType="multipart/form-data">
                            <div className="my-3">
                                <label htmlFor="">Name</label>
                                <input name='name' type="text" className='form-control' value={input.name} onChange={handleGetData}/>
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Reguler Price</label>
                                <input name='regular_price' type="text" className='form-control' value={input.regular_price} onChange={handleGetData}/>
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Sale price</label>
                                <input name='sale_price' type="text" className='form-control'  value={input.sale_price} onChange={handleGetData}/>
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Stock</label>
                                <input name='stock' type="text" className='form-control'  value={input.stock} onChange={handleGetData}/>
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Photo</label>
                                <input name='photo' type="file" className='form-control' multiple onChange={handleSubmitPhoto}/>
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Gallery</label>
                                <input name='gallery' type="file" className='form-control' multiple onChange={handleSubmitGallery}/>
                            </div>
                            <div className="my-3">
                                <h4>Category</h4>
                                <hr />
                                <br />
                                <label>
                                    <input type="checkbox" value='Men' onChange={handleCatsCheckbox}/> Men
                                </label>
                                <br />
                                <label>
                                    <input type="checkbox" value='Women' onChange={handleCatsCheckbox}/> Women
                                </label>
                                <br />
                                <label>
                                    <input type="checkbox" value='Electronics' onChange={handleCatsCheckbox}/> Electronics
                                </label>
                                <br />
                                <label>
                                    <input type="checkbox" value='Kids' onChange={handleCatsCheckbox}/> Kids
                                </label>
                            </div>
                            <div className="my-3">
                               <h4>Tags</h4>
                               <hr />
                                <br />
                                <label>
                                    <input type="checkbox" value='Shirt' onChange={handleTagCheckbox}/> Shirt
                                </label>
                                <br />
                                <label>
                                    <input type="checkbox" value='Pant' onChange={handleTagCheckbox}/> Pant
                                </label>
                                <br />
                                <label>
                                    <input type="checkbox" value='Punjabi' onChange={handleTagCheckbox}/> Punjabi
                                </label>
                                <br />
                                <label>
                                    <input type="checkbox" value='Shari' onChange={handleTagCheckbox}/> Shari
                                </label>
                            </div>
                            <div className="my-3">
                                
                                <button className='btn btn-primary w-100' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Create;
