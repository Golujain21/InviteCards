
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div  style={{display:"flex",flexDirection:"column",height:"100vh",}}>
      <header><Header/></header>
      <div style={{flex:1 }}>{children}</div>
      <footer><Footer/></footer>
    </div>
  );
};

export default MainLayout;
