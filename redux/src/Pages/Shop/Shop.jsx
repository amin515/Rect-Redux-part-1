import React from 'react';
import SingleModal from '../../Components/SinglePage/SingleModal';
import { Link } from 'react-router-dom';
import './Shop.css';
import { useSelector } from 'react-redux';
const Shop = () => {

    const { products } = useSelector( state => state.product)
return (

<div className='container my-5'>
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h4>Search</h4>
                    <input type="text" className='form-control' />

                    <div className="widget1 my-2">
                        <h4>Category</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'><a href="">Men</a></li>
                            <li className='list-group-item'><a href="">Women</a></li>
                            <li className='list-group-item'><a href="">Electronics</a></li>
                            <li className='list-group-item'><a href="">Kids</a></li>
                        </ul>
                    </div>

                    <div className="my-2">
                        <h4>Tags</h4>
                        <div className="tags">
                            <a href="#">Shirt</a>
                            <a href="#">Pant</a>
                            <a href="#">Panjabi</a>
                            <a href="#">Sari</a>
                            <a href="#">Shoe</a>
                        </div>
                    </div>


                    <div className="my-2">
                        <h4>Filter by Price</h4>
                        <div className="price_range">
                            <input type="range" min={10} max={10000} className='w-100' />
                            <input type="range" min={10} max={10000} className='w-100' />
                            <input type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="row">

                {
                    products.map( data => 
                     <div className="col-md-4 my-2">
                      <div className="card">
                        <div className="card-body">
                         <div className="card-img">
                            <img style={{height : '250px', objectFit : 'cover'}} src={`http://localhost:5030/images/products/${data.photo}`}
                                alt="" />
                        </div>
                        
                        </div>
                        <div className="card-footer">
                        <h5>{data.name}</h5>
                            <h6>Price : ${data.regular_price}</h6>
                            <p>Stock : {data.stock}</p>
                            <a href="#"><SingleModal/></a> &nbsp; &nbsp; &nbsp;
                            <Link to="/singlepage" className='btn btn-warning'>Read More</Link>
                        </div>
                    </div>
                    </div> 
                 )
                }
               
            </div>
        </div>
    </div>

</div>
)
}

export default Shop;