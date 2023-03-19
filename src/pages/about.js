import React from "react";
import SideNav from "./../Component/SideNav/sideNav";
import "../pages/styles/about.css";

const about = () => {
  return (
    <div className="main_container">
      <SideNav />
      <section className="about_container">
        <h1>About page content</h1>
      </section>
    </div>
  );
};

export default about;
