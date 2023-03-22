import React from "react";
import HomeNav from "../Navbar/HomeNav";

const Layout = ({ children }) => {
  return (
    <div>
      <HomeNav />
      {children}
    </div>
  );
};

export default Layout;
