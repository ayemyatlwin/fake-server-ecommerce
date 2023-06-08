import axios from "axios";
import React from "react";
import { useState } from "react";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const createProduct=async()=>{
    const {data}=await axios.post("http://localhost:3000/products",
    {
        title,description,image,price,category
    });
    console.log(data)
  }
  const OnSubmitHandler=e=>{
    e.preventDefault();
    console.log(title,description,price,image,category)
    createProduct();
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={OnSubmitHandler} className=" flex flex-col ga-4 border rounded w-96 p-10 items-center justify-center ">
          <h1 className="text-primary  font-bold text-2xl tracking-wider">
            Create New Product
          </h1>
          <input
          value={title}
          onChange={e=>setTitle(e.target.value)}
            className="w-full outline-none border-b-2 py-2 "
            type="text"
            name=""
            id=""
            placeholder="enter title"
          />
          <input
          value={description}
          onChange={e=>setDescription(e.target.value)}
            className="w-full outline-none border-b-2 py-2 "
            type="text"
            name=""
            id=""
            placeholder="enter description"
          />
          <input
          value={image}
          onChange={e=>setImage(e.target.value)}
            className="w-full outline-none border-b-2 py-2 "
            type="text"
            name=""
            id=""
            placeholder="enter image url"
          />
          <input
          value={category}
          onChange={e=>setCategory(e.target.value)}
            className="w-full outline-none border-b-2 py-2 "
            type="text"
            name=""
            id=""
            placeholder="enter category"
          />
          <input
          value={price}
          onChange={e=>setPrice(e.target.value)}
            className="w-full outline-none border-b-2 py-2 "
            type="text"
            name=""
            id=""
            placeholder="enter price"
          />
          <button type="submit" className="px-4 py-1 my-6 bg-primary text-white text-sm rounded">
            create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
