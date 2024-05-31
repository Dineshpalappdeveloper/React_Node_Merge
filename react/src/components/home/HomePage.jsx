import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductPage from "../Product/ProductPage";

const HomePage = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("user");
    if (token) {
      setAuth(true);
    }
  }, []);
  return (
    <div>
      <h1 class="text-3xl font-bold  p-4 bg-red-100 text-center">
        Food Delivery App
      </h1>
      <div className="flex justify-end p-10">
        <span className="px-24  ">
          {!auth ? (
            <NavLink to="/login">
              <Button variant="outlined">Login Now</Button>
            </NavLink>
          ) : (
            " "
          )}
        </span>
      </div>
      <ProductPage />
    </div>
  );
};

export default HomePage;
