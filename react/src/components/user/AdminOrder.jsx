import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrder,
  getAllorders,
} from "../../app/redux/feature/user/getAllorderSlice";

const AdminOrder = () => {
  const dispatch = useDispatch();
  const orderData = useSelector(getAllOrder);
  console.log(orderData, "523655635");
  useEffect(() => {
    dispatch(getAllorders());
  }, []);
  return (
    <div>
      <h1 className="p-4 bg-red-200">Admin Order</h1>
      <div>
        <table className="text-center" width="100%">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            {orderData?.userData?.data &&
              orderData?.userData?.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.productname}</td>
                    <td>{item.price}</td>
                    <td>{item.location}</td>
                    <td>{item._id}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrder;
