import MainLayout from "./_components/MainLayout";


export default function Home() {
  return (
    <>
   
      <MainLayout>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h1
            style={{ fontSize: "24px", fontFamily: "Poppins", margin: "0px" }}
          >
            Deal Yourself In: Discover the Perfect Cards for Every Occasion!
          </h1>
          <h2
            style={{
              fontSize: "18px",
              fontFamily: "Poppins",
              margin: "0px",
              maxWidth: "1300px",
              textAlign: "center",
            }}
          >
            Here's a paragraph you can use for a cards creating website: Welcome
            to our cards creating website, where creativity meets customization!
            Whether you're celebrating a special occasion, sending heartfelt
            wishes, or simply expressing your creativity, our platform offers
            you the tools to design the perfect card. Choose from a variety of
            templates, personalize with your own messages and images, and tailor
            every detail to suit your unique style. Whether it's a birthday,
            anniversary, holiday greeting, or a heartfelt thank-you note, our
            intuitive interface makes crafting meaningful cards effortless and
            enjoyable. Join us in bringing smiles and spreading joy, one
            personalized card at a time!
          </h2>
        </div>
      </MainLayout>
    </>
  );
}
