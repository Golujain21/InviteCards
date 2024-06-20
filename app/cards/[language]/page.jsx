

import MainLayout from "@/app/_components/MainLayout";

import LanguageClient from "@/app/_components/Language";
import { metadata } from "@/app/layout";
import { LanguageData } from "../_utils/utils";


const Language = ({ params }) => {
  let {...data}=LanguageData.filter(item=>item.language==params.language)
  console.log(data[0].meta_title);

metadata.title=`${data[0].meta_title}`,
metadata.description=`${data[0].description}`



  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          minHeight: "800px",
        }}
      >
      <LanguageClient params={params}/>
      </div>
    </MainLayout>
  );
};

export default Language;
