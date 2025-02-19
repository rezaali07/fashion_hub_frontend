import React from "react";
import { useSelector } from "react-redux";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/MetaData";
import "./About.css";
import Footer from "../../more/Footer";
import { orange } from "@material-ui/core/colors";
// import BottomTab from "../../more/BottomTab";

const About = () => {
  const { loading } = useSelector((state) => state.profile);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
                marginTop:"50px"
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img src="https://res.cloudinary.com/dig1ixe4q/image/upload/v1736784039/Designer_1_c4qiyz.jpg" />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                          color:"#ff6600",
                          
                        }}
                      >
                        Welcome to Fashion Hub                      </span>
                      <p>Welcome to fashion hub, where fashion and individuality converge to create a unique shopping experience. Established recently in 2025 , we have been dedicated to providing our customers with exceptional clothing and unparalleled service.

                      </p>
                      <p>
                        At fashion hub, we believe that clothing is more than just fabric; it's a reflection of who you are and how you want to express yourself to the world. Our vision is to empower individuals to embrace their personal style, confident in the knowledge that the perfect outfit can inspire confidence and make a statement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          {/* <BottomTab /> */}
        </>
      )}
    </>
  );
};

export default About;
