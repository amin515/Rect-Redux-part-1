
import React from 'react'
import { useSelector } from 'react-redux';

const ProductTable = () => {

    const { products } = useSelector(state => state.product)

  return (
    <div>
        <div className="col">
            <div className="card">
                <div className="card-body">
                    
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Regular price</th>
                                <th>Sale Price</th>
                                <th>Stock</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map( (data, index) =>
                                <tr>
                                <th>{index + 1}</th>
                                <th>{data.name}</th>
                                <th>{data.regular_price}</th>
                                <th>{data.sale_price}</th>
                                <th>{data.stock}</th>
                                <th><img style={{width : '40px', height : '40px', objectFit : 'cover'}} src={`http://localhost:5030/images/products/${data.photo}`} alt="" /></th>
                                <th>
                                    <a href="" className='btn btn-info'><i class='fas fa-eye'></i></a> &nbsp;
                                    <a href="" className='btn btn-warning'><i class='fas fa-edit'></i></a> &nbsp;
                                    <a href="" className='btn btn-danger'><i class='fas fa-trash'></i></a>
                                </th>
                                </tr>
                                
                                )
                            }
                         
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductTable;