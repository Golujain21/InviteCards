import MainLayout from "@/app/_components/MainLayout";
import { metadata } from "@/app/layout";
import { LanguageData } from "../_utils/utils";
import Link from "next/link";
// import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

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
            <>
              <h1 style={{ fontSize: "40px", fontFamily: "inherit", textAlign: "center" }}>
                {currLanguage.shadi}
              </h1>
              <h2 style={{ fontSize: "20px", fontFamily: "inherit", textAlign: "center" }}>
                {currLanguage.description}
              </h2>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", width: "100%", marginTop: "40px" }}>
                <div className="container">
                  <div className="row">
                    {currLanguage.category.map((item, i) => (
                      <div key={i} className="col-sm-3" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                          href={`/${params.language}/${item.replace(" ", "")}`}
                          style={{ padding: "20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "10px", cursor: "pointer" }}
                        >
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Language;
