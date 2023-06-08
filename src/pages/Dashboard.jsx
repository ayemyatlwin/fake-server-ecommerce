import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Product from './Products/Product';

const Dashboard = () => {
  const user=JSON.parse(localStorage.getItem("userData"));

  const navigate=useNavigate();

  const logOutHandler=()=>{
    localStorage.removeItem("userData")
    navigate("/login")
  }
  return (
   <>
    <Navbar logOutHandler={logOutHandler}/>
    <Product/>
   </>
  )
}

export default Dashboard