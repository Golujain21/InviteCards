"use client"
import React from "react";
import Link from "next/link";

const Header = () => {
  const languages = ["English", "Hindi", "Marathi", "Tamil", "Rajasthani"];
  return (
    <nav className="navbar prls-sub-nav navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse" id="navbarTogglerDemo01">
          <Link href="/" className="navbar-brand" >
            Video Maker
          </Link>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <SearchInput /> */}
            {languages?.map((language, index) => {
              {
                /* console.log(language) */
              }
              return (
                <Link href={`/cards/${language.toLowerCase()}`}  className="nav-link " key={index}>
                  <li key={index} className="nav-item">
                    {language}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div
      style={{ display: "flex", height: "30px", width: "100%", gap: "10px" ,justifyContent:"center"}}
    >
      <Link to={"/cards/english"}>English</Link>
      <Link to={"/cards/hindi"}>Hindi</Link>
      <Link to={"/cards/marathi"}>Marathi</Link>
      <Link to={"/cards/tamil"}>Tamil</Link>
      <Link to={"/cards/rajisthani"}>Rajisthani</Link>
    </div> */}
    </nav>
  );
};

export default Header;
