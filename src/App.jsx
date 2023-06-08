import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Guards from "./components/Guards";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateProduct from "./pages/Products/CreateProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Guards>
                <Dashboard />
              </Guards>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/create-product" element={<Guards><CreateProduct/></Guards>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
