'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { LanguageData } from '../cards/_utils/utils';
const LanguageClient = ({params}) => {

    const [currLanguage, setCurrLanguage] = useState(null);

    useEffect(() => {
      setCurrLanguage(
        ...LanguageData.filter((item) => item.language == params.language)
      );
    }, [params.language]);

  return (
    <div
    className="container"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      padding:"50px 0px"
    }}
  >
    <h1 style={{fontSize:'40px',fontFamily:"inherit",textAlign:"center"}}>{currLanguage?.shadi}</h1>
    <h2 style={{fontSize:'20px',fontFamily:"inherit",textAlign:"center"}}>{currLanguage?.description}</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        width: "100%",
        marginTop: "40px",
      }}
    >
      <div className="container">
        <div className="row">
          {currLanguage?.category.map((item,i) => (
           
              <div
              key={i}
                className="col-sm-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <img
                  title={item}
                  loading="lazy"
                  width="216"
                  height="300"
                  src="https://invitecrafter.com/public/uploads/1691480709.jpg"
                  alt=""
                  style={{ width: "100%" }}
                />
                <Link
                  href={`${params.language}/${item.replace(" ", "")}`}
                  style={{
                    padding: "20px",
                    boxShadow:
                      "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Link>
              </div>
          
          ))}
        </div>
      </div>
    </div>
  </div>

  )
}

export default LanguageClient