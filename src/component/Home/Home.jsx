import React, { useEffect } from "react";
import "./Home.css";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Products/ProductCard";
import Header from "./Header";
import MetaData from "../../more/MetaData";
import Footer from "../../more/Footer";
import BottomTab from "../../more/BottomTab";
import { ToastContainer } from "react-toastify";
import CustomCarousel from "../../component/Home/Carousel"; // Adjust the import path as necessary
import ChatSupport from "../../component/Home/chat_support"; 

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <loading />
      ) : (
        <>
          <MetaData title="Fashion Hub" />
          <Header />

          {/* Use the CustomCarousel component here */}
          <CustomCarousel />

          <h2 className="homeHeading">Featured Products</h2> 
            
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
          <BottomTab />
          
          <ChatSupport />
        </>
      )}
    </>
  );
};

export default Home;
