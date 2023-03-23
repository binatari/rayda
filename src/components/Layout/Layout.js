import React from "react";
import HomeNav from "../Navbar/HomeNav";

const Layout = ({ children }) => {
  return (
    <div style={{paddingBottom:'100px'}}>
      <HomeNav />
      {children}
      
    </div>
  );
};

export default Layout;
