import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllusers,
  getalluser,
} from "../../app/redux/feature/user/getAlluserSlice";

import ProductPage from "../Product/ProductPage";

const Dashboard = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector(getalluser);
  useEffect(() => {
    let token = localStorage.getItem("user");
    if (!token) {
      nav("/login");
    } else {
      dispatch(getAllusers(token));
    }
  }, [dispatch, nav]);
  console.log(userDetails, "5525");
  return (
    <div>
      <ProductPage />
    </div>
  );
};

export default Dashboard;
