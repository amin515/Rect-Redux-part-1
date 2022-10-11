
// create root reducer
// import { combineReducers } from 'redux';
// import productReducer from './Products/productReducer';

import { combineReducers } from "redux";
import productReducer from "./Products/productReducer";


// const rootReducer = combineReducers({
//     products : productReducer,
// })

// // export

// export default rootReducer;


const rootReducer = combineReducers({
  product : productReducer,
});

// export 
export default rootReducer;