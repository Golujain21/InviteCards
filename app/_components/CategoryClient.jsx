import React from "react";
import Link from "next/link";

const CategoryClient = ({ SubCategories, Products, params }) => {
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
      <h1>{SubCategories ? "Sub Cateory" : "Products"}</h1>
      {SubCategories ? (
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
            {SubCategories?.map((item, i) => (
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
  );
};

export default CategoryClient;
