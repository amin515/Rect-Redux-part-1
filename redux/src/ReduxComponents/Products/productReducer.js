
// product reducer

import { GET_ALL_PRODUCTS } from "./actionType";
import initialState from "./initialState";

// import { GET_ALL_PRODUCTS } from "./actionType";

// const productReducer = ( state , {type, payload}) => {
   
//     switch (type) {
//         case GET_ALL_PRODUCTS:
//             return {
//                 ...state,
//                 product : payload
//             }
            
    
//         default:
//            return state
//     }
// }

// // export 

// export default productReducer;


const productReducer = (state = initialState, {type , payload}) => {

  switch (type) {
    case GET_ALL_PRODUCTS:
       return {
        ...state,
        products : payload
       }
  
    default:
       return state;
  }

}

export default productReducer;