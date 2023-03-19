import React from "react";
import SideNav from "./../Component/SideNav/sideNav";
import "./styles/home.css";

const home = () => {
  return (
    <div className="main_container">
      <SideNav />
      <section className="home_container">
        <h1>Home page content</h1>
      </section>
    </div>
  );
};
export default home;
