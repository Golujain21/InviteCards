import MainLayout from "@/app/_components/MainLayout";
import { metadata } from "@/app/layout";
import React from "react";

const SubCategory = ({params}) => {

    metadata.title=`Sub-category Page ${params.language} ${params.category} ${params.sub-category}`,
metadata.description=`description from sub-category page  ${params.language} ${params.category} ${params.sub-category}`
  return (
    <MainLayout>
      <h1>SubCategory</h1>
    </MainLayout>
  );
};

export default SubCategory;
