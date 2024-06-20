"use client"
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div  style={{display:"flex",flexDirection:"column",height:"100vh",}}>
      <div><Header/></div>
      <div style={{flex:1 }}>{children}</div>
      <div><Footer/> </div>
    </div>
  );
};

export default MainLayout;
