import React from "react";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    let token = localStorage.getItem("user");
    if (token) {
      navigate("/checkout");
    } else {
      alert("login Please");
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="flex ">
        <div className="p-4 text-center">
          <Paper
            sx={{
              minWidth: "100px",
              padding: "10px",
              maxWidth: "200px",
              minHeight: "320px",
            }}
            elevation={3}
          >
            <div className="text-center  flex justify-center flex-col">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTOP9SvRI8Pn9c7DVO3x-R9JFPqxfkgL_R1WOQor4vghDey9DhqzdWFmIae5EOdttiG5YlJKup3p5hyTU_NRzu7PitWb1fegxNrvY0M_tOdAiBkzgyycVJyew"
                alt=""
                height={150}
                width={180}
              />
              <h1 className="font-size-4 p-4 text-green-800">Price 300 Rs</h1>
              <Button
                variant="contained"
                type="button"
                onClick={() => handleBuyNow()}
              >
                Buy Now
              </Button>
            </div>
          </Paper>
        </div>
        <div className="p-4 text-center ">
          <Paper
            sx={{
              minWidth: "100px",
              padding: "10px",
              maxWidth: "200px",
              minHeight: "320px",
            }}
            elevation={3}
          >
            <div className="text-center  flex justify-center flex-col">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTOP9SvRI8Pn9c7DVO3x-R9JFPqxfkgL_R1WOQor4vghDey9DhqzdWFmIae5EOdttiG5YlJKup3p5hyTU_NRzu7PitWb1fegxNrvY0M_tOdAiBkzgyycVJyew"
                alt=""
                height={150}
                width={180}
              />
              <h1 className="font-size-4 p-4 text-green-800">Price 300 Rs</h1>
              <Button variant="contained">Buy Now</Button>
            </div>
          </Paper>
        </div>{" "}
        {/* <table border={1} width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created Date</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {userDetails?.userData &&
            userDetails?.userData?.data?.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{item?.fullname}</td>
                  <td>{item?.email}</td>
                  <td>{item?.createdAt}</td>
                  <td>{item?._id}</td>
                </tr>
              );
            })}
        </tbody>
      </table> */}
      </div>
    </div>
  );
};

export default ProductPage;
