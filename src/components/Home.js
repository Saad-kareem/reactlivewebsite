import React from "react";
import web from "./images/web.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
         <Common
        name=" Grow your bussiness with"
        imgsrc={web}
        visit="/services"
        btName="Get Started"
      />
    </>
  );
};
export default Home;
