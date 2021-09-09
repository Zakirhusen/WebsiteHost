import React from "react";
import CommanCard from "./CommanCard";
import Sdata from "./Sdata";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="  col-10 mx-auto">
            <div className="row gy-4 gx-4">
              {
                Sdata.map((currElem,index)=>{
                  const {imgSrc,title}=currElem
                  return <CommanCard imgSrc={imgSrc} title={title} key={index} />
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
