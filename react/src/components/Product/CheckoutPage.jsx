import { Button, IconButton, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { makeOrders } from "../../app/redux/feature/user/OrderSlice";
import { useNavigate } from "react-router-dom";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const CheckoutPage = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [users, setUsers] = useState({
    name: null,
    fulladdress: null,
    city: null,
    state: null,
    pincode: null,
    _id: null,
  });

  let addressArray = [];

  const onchangeHandle = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleClickOpen = (item) => {
    setOpen(true);
    //  setUsers(item);
  };
  const handleClose = () => {
    setOpen(false);
    setUsers({});
  };
  const onSubmitData = (e) => {
    e.preventDefault();
    localStorage.setItem("address", addressArray);
    addressArray.push({ ...users });
    console.log(addressArray, "ddiii");
    handleClose();
    const body = {
      productname: "roll",
      price: "300",
      location: `${users.fulladdress}`,
    };
    const promise = dispatch(makeOrders(body));
    promise
      .then((res) => {
        alert("Order Created");
        // nav("/");
      })
      .catch((err) => {
        alert("order failed try again");
      });
  };
  return (
    <div>
      <div className="flex justify-end p-4">
        <Button variant="contained" type="button" onClick={handleClickOpen}>
          Add Address{" "}
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="p-4 text-center ">
          <Paper
            sx={{
              minWidth: "100px",
              padding: "10px",
              maxWidth: "400px",
              minHeight: "320px",
            }}
            elevation={3}
          >
            <div className="text-center  flex justify-center flex-col">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTOP9SvRI8Pn9c7DVO3x-R9JFPqxfkgL_R1WOQor4vghDey9DhqzdWFmIae5EOdttiG5YlJKup3p5hyTU_NRzu7PitWb1fegxNrvY0M_tOdAiBkzgyycVJyew"
                alt=""
                height={250}
                width={380}
              />
              <h1 className="font-size-4 p-4 text-green-800">Price 300 Rs</h1>
            </div>
          </Paper>
        </div>
      </div>
      {/* // addres main div */}
      {/* <div>
        {userAddress.length > 0 ? (
          <div>
            {userAddress.map((item) => {
              return (
                <div>
                  <h1>Name:{item.name}</h1>
                  <h1>Full Address :{item.fulladdress}</h1>
                  <h1>City : {item.city}</h1>
                  <h1>State: {item.state}</h1>
                  <h1> PinCode: {item.pincode}</h1>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div> */}
      <BootstrapDialog
        onClose={handleClose}
        sx={{ minWidth: 650 }}
        fullWidth
        maxWidth="xs"
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Address
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <form action="" onSubmit={onSubmitData}>
            <TextField
              id="outlined-basic"
              required
              margin="dense"
              value={users?.name}
              label="FullName"
              name="name"
              variant="outlined"
              fullWidth
              onChange={onchangeHandle}
            />
            <TextField
              id="outlined-basic"
              required
              margin="dense"
              value={users?.fulladdress}
              label="Full Address"
              name="fulladdress"
              multiline
              variant="outlined"
              fullWidth
              onChange={onchangeHandle}
            />
            <TextField
              id="outlined-basic"
              required
              margin="dense"
              value={users?.city}
              label="City"
              name="city"
              variant="outlined"
              fullWidth
              onChange={onchangeHandle}
            />
            <TextField
              id="outlined-basic"
              required
              margin="dense"
              value={users?.state}
              label="State"
              name="state"
              variant="outlined"
              fullWidth
              onChange={onchangeHandle}
            />
            <TextField
              id="outlined-basic"
              required
              type="number"
              margin="dense"
              value={users?.pincode}
              label="Pincode"
              name="pincode"
              variant="outlined"
              fullWidth
              onChange={onchangeHandle}
            />
            <div className="text-center my-5 rounded-full">
              <Button variant="contained" type="submit">
                Add Address
              </Button>
            </div>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default CheckoutPage;
