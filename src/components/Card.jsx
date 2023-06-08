import React from "react";
import { ImCoinDollar } from "react-icons/im";

const Card = ({ product }) => {
  const { id, title, description, category, image, price } = product;
  return (
    <>
      <div className=" relative w-72 p-5 rounded flex flex-col  gap-5 border shadow-lg">
        <img className="h-44 mx-auto" src={image} alt="" />
        <h1>{title?.substring(0, 15)}...</h1>
        <p className="text-sm text-gray-500">
          {description?.substring(0, 25)}...
        </p>
        <div className=" flex items-center gap-1">
          <ImCoinDollar className="text-xl text-primary" />
          <p className="">{price}</p>
        </div>

        <p className="absolute top-3 left-[-3px] bg-gray-300 text-sm rounded px-2 shadow-md text-black">
          {category}
        </p>
        <button className="text-white bg-primary rounded shadow-lg  py-2">
          AddToCard
        </button>
      </div>
    </>
  );
};

export default Card;
