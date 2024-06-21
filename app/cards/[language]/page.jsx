import MainLayout from "@/app/_components/MainLayout";
import { metadata } from "@/app/layout";
import { LanguageData } from "../_utils/utils";
import LanguageClient from "@/app/_components/Language";

const Language = ({ params }) => {
  // Filter LanguageData based on params.language
  const currLanguage = LanguageData.find(item => item.language === params.language);

  // Update metadata based on currLanguage
  if (currLanguage) {
    metadata.title = currLanguage.meta_title;
    metadata.description = currLanguage.description;
  }

  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", minHeight: "800px" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "50px 0px" }}>
          {currLanguage && (
           <LanguageClient currLanguage={currLanguage} params={params} />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Language;
