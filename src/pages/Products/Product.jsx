import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const Product = () => {
    const [products,setProducts]=useState([])
  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return <div className="container mx-auto">
    <Link to="/create-product">
    <button className="text-white bg-primary rounded shadow-lg px-5 py-2 ">Create New Product</button>
    </Link>
    <div className=" flex flex-wrap my-5 justify-center gap-5">
        {products?.map(product=><Card key={product?.id} product={product} />)}
    </div>
  </div>;
};

export default Product;
