import React from "react";
import web from "./images/web.jpg";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header" className=" d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <dv className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6  pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> SaadKarim</strong>
                  </h1>
                  <h6 className="my-3">
                    We are the team of talented developer making wesbsites
                  </h6>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary rounded-pill">
                      {props.btName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className=" img-fluid animated "
                    alt="home_img"
                    width='400px'
                    height='400px'
                  />
                </div>
              </div>
            </div>
          </dv>
        </div>
      </section>
    </>
  );
};
export default Common;