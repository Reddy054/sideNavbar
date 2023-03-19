import React from "react";
import SideNav from "../Component/SideNav/sideNav";
import "../pages/styles/services.css";

const services = () => {
  return (
    <div className="main_container">
      <SideNav />
      <section className="services_container">
        <h1>Service page content</h1>
      </section>
    </div>
  );
};

export default services;
