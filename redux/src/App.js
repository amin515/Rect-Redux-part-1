
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import './App.css';
import SinglePage from "./Components/SinglePage/SinglePage";
import Create from "./Pages/Create/Create";
import Category from "./Pages/Product/Category";
import Product from "./Pages/Product/Product";
import Tag from "./Pages/Product/Tag";
import Shop from "./Pages/Shop/Shop";
import getAllProduct from "./ReduxComponents/Products/action";

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
     axios.get('http://localhost:5030/api/v1/products')
     .then( res => {
      dispatch(getAllProduct(res.data))
     })
     .catch(err => {
      console.log(err.message)
     })
  })


  return (
  <>
  <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/admin/product" element={<Product/>}/>
    <Route path="/admin/product/create" element={<Create/>}/>
    <Route path="/singlepage" element={<SinglePage/>}/>
    <Route path="/category" element={<Category/>}/>
    <Route path="/tag" element={<Tag/>}/>
  </Routes>
  </>
  );
}

export default App;
