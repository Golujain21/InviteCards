import React from "react";

import MainLayout from "@/app/_components/MainLayout";

import CategoryClient from "@/app/_components/CategoryClient";
import { SubCategories, Products } from "../../_utils/utils";
import { metadata } from "@/app/layout";
const Category = ({ params }) => {
  const { language, category } = params;

  const getSubCategory = (language, SubCategories, category) => {
    if (language && category) {
      for (let key in SubCategories) {
        if (key == `${language}-${category}`) {
          let value = SubCategories[key];
          return { "sub-category": value };
        } else {
          return { product: Products };
        }
      }
    }
  };

  const currLanguage = getSubCategory(language, SubCategories, category);
  metadata.title=`${params.language} ${params.category}`,
  metadata.description=`description from Category Page ${params.language} ${params.category}`

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
        <CategoryClient
          SubCategories={currLanguage["sub-category"]}
          Products={currLanguage.product}
          params={params}
        />
      </div>
    </MainLayout>
  );
};

export default Category;
