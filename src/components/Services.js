import React, { useState } from "react"; 
import SData from "./Sdata";
import Card from "./Card";

const Services = () => {

  return (
  <>
      <div className="my-5">
        <h1 className=" text-center">Our Services</h1>
      </div>
      <div className="container-fluid  mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
               {
                SData.map((item,index) =>{
                  return <Card key={index}
                     imgsrc = {item.imgsrc}
                     title = {item.title}
                     Info = {item.Info}
                     btn = {item.btn}
                     />
                })
               }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
