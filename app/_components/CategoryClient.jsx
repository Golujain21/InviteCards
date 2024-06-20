"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import {Products, SubCategories } from '../cards/_utils/utils';


const CategoryClient = ({params}) => {

    const { language, category } = params;
    //   const { language, category } = useParams();
    const [currLanguage, setCurrLanguage] = useState(null);
    const [showProducts, setShowProducts] = useState(null);
  
    useEffect(() => {
      if (language && category) {
        for (let key in SubCategories) {
          if (key == `${language}-${category}`) {
            let value = SubCategories[key];
            setCurrLanguage(value);
          } else {
            setShowProducts("Products will be displayed");
          }
        }
      }
    }, [language, category]);
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      justifyContent: "center",
      maxWidth: "900px",
    }}
  >
    {currLanguage ? (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%",
            marginTop: "40px",
          }}
        >
          {currLanguage?.map((item, i) => (
            <div key={i}>
              <Link
                href={`/cards/${params.language}/${
                  params.category
                }/${item.replace(" ", "")}`}
                style={{
                  padding: "20px",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </>
    ) : (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%",
            marginTop: "40px",
          }}
        >
          {Products?.map((item, i) => (
            <div key={i}>
              <Link
                href={`/cards/${params.language}/${
                  params.category
                }/no-sub-category/${item.replace(" ", "")}`}
                style={{
                  padding: "20px",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
  )
}

export default CategoryClient