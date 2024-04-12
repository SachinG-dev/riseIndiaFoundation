import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import Navbar from '../molecule/navBar/NavBar';

import SideMenu from "../molecule/SideBarMenu/SideBarMenu";
import Footer from "../molecule/Footer/Footer";
import Breadcrumb from "../molecule/Breadcrumb/Breadcrumb";

export function DashboardLayout() {
  const userDetails = useSelector((state: any) => state.userDetails);
  const navigate = useNavigate();
  useEffect(() => {
    // if (userDetails.email === "") {
    //   navigate("/login");
    // }
  }, [userDetails.email, navigate]);

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <SideMenu userDetails={userDetails} />

        <div className="main-panel">
          <div className="content-wrapper">
            <Breadcrumb />
            <div className="row">
              <div className="col-12 grid-margin">
                <Outlet />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
