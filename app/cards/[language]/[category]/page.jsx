
import React from "react";

import MainLayout from "@/app/_components/MainLayout";

import CategoryClient from "@/app/_components/CategoryClient";
// import { metadata } from "@/app/layout";
const Category = ({ params }) => {

  
// metadata.title=`${params.language} ${params.category}`,
// metadata.description="description from Category Page"


  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <CategoryClient params={params}/>
      
      </div>
    </MainLayout>
  );
};

export default Category;
