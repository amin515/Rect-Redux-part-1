
// create action

import { GET_ALL_PRODUCTS } from "./actionType.js"

const getAllProduct = (payload) => {
  return {
    type : GET_ALL_PRODUCTS,
    payload : payload
  }
}

//export 
export default getAllProduct;