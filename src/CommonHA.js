import React from 'react'
import { NavLink } from 'react-router-dom'

const CommonHA = (props) => {
    return (
        <>
        <section className='d-flex align-items-center header mt-4'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center align-items-center flex-column">
                  <h1>
                    {" "}
                    {props.name} {" "}
                    <strong className="brand-name">Zakir Husen</strong>
                  </h1>
                  <h2 my-3>
                    We are the team of talented developer making websites{" "}
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="p-2 mx-auto btn-get-started">
                      {props.btnTitle}
                    </NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img className='img-fluid animated'
                    src={props.imgSrc}
                    hieght="90%" width='75%'
                    alt=" home.."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            
        </>
    )
}

export default CommonHA
