import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import BottomTab from "../../more/BottomTab";
import Footer from "../../more/Footer";
import Loading from "../../more/Loader";
import MetaData from "../../more/MetaData";
import Header from "../Home/Header";
import "./Profile.css";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div>
            <MetaData title={`${user?.name}'s profile`} />
            <div className="profileContainer"> 
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    opacity: "1",
                    fontSize: "2vmax",
                  }}
                >
                  My Profile
                </h1>
                <img
                  src={user?.avatar?.url || ""}
                  alt={`${user?.name}'s avatar`}
                  className="profile__img"
                />
                <Link to="/me/update/profile" className="edit__profile">
                  Edit Profile
                </Link>
              </div>
            </div>
            <div className="information">
              <div className="middle">
                <div className="info">
                  <h4
                    style={{
                      padding: "0px 5px",
                    }}
                  >
                    Full Name:
                  </h4>
                  <p>{user?.name || "N/A"}</p>
                </div>
                <div className="info">
                  <h4
                    style={{
                      padding: "0px 5px",
                    }}
                  >
                    Email:
                  </h4>
                  <p>{user?.email || "N/A"}</p>
                </div>
                <div className="info">
                  <h4
                    style={{
                      padding: "0px 5px",
                    }}
                  >
                    Joined On:
                  </h4>
                  <p>
                    {user?.createdAt
                      ? String(user.createdAt).substr(0, 10)
                      : "N/A"}
                  </p>
                </div>

                <div className="change__info">
                  <Link to="/orders" className="settings">
                    My Orders
                  </Link>
                  <Link to="/me/update" className="settings">
                    Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Profile;
