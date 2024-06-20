import MainLayout from "@/app/_components/MainLayout";
import { metadata } from "@/app/layout";
import React from "react";

const SubCategory = () => {

    metadata.title="Sub-category Page",
metadata.description="description from sub-category page"
  return (
    <MainLayout>
      <div>SubCategory</div>
    </MainLayout>
  );
};

export default SubCategory;
