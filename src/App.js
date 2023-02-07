import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import RegisterSuccess from "./component/Auth/RegisterSuccess";
import NavScrollExample from "./component/Navbar/Navbar";
import AddProduct from "./component/product/AddProduct";
import EditProduct from "./component/product/EditProduct";
import ProductList from "./component/product/ProductList";
import Home from "./Home/Home";

const App = () => {
  return (
    <>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-success" element={<RegisterSuccess />} />

        <Route path="/add" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/edit/:id" element={<EditProduct />} />

        <Route path="*" element={<h1>NON FOUND PAGE</h1>} />
      </Routes>
    </>
  );
};

export default App;
