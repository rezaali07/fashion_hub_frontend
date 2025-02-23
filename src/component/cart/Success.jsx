import React, { useEffect } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../actions/CartAction";  // Import the action

const Success = () => {
  const dispatch = useDispatch();

  // console.log("Payment done");

  useEffect(() => {
    // Clear the cart after order is successfully placed
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />
      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default Success;



// import React from "react";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import "./Success.css";
// import { Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";

// const Success = () => {
//   return (
//     <div className="orderSuccess">
//       <CheckCircleIcon />

//       <Typography>Your Order has been Placed successfully </Typography>
//       <Link to="/orders">View Orders</Link>
//     </div>
//   );
// };

// export default Success;
