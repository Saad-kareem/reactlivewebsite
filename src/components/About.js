import React from "react";
 import about from './images/about.jpg'
import Common from "./Common";
const About = () => {
  return (
    <>
         <Common
        name=" Welcome to About Page"
        imgsrc={about}
        visit="/contact"
        btName="Contact Now"
      />
    </>
  );
};
export default About;