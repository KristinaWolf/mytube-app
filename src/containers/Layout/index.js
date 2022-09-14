import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Main from "../Main";

const Layout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Layout;