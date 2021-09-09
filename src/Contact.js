import React, { useState } from "react";
import { Link, Switch } from "react-router-dom";
const Contact = () => {
    const [inputVal, setInputVal] = useState({
        inputName:'',
        phone:'',
        email:''
    })
    const inputHandler=(e) => {
        // console.log('this input handler')
        const {name,value}=e.target;
        // console.log(name , value)
        setInputVal((prevData)=>{
            console.log(prevData)
            return {...prevData, [name]:value}
        })
    }
    let submitHandler = (ev) => {
        ev.preventDefault()
        console.log("submit clicked");
        alert(`Name : ${inputVal.inputName} \n Phone No: ${inputVal.phone} \n Email:  ${inputVal.email}\n Message: ${inputVal.message}`)

      };

  return (
    <>
      <div className="text-center my-3">
        <h1>Contact Us</h1>
      </div>
      <div className="container col-10 ">
        <form className="col-5 mx-auto" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="mt-2 form-label">
              Full Name
            </label>
            <input onChange={inputHandler} value={inputVal.inputName} name='inputName' placeholder='Enter your name'
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="mt-2 form-label">
              Phone
            </label>
            <input onChange={inputHandler} value={inputVal.phone} name='phone'
              type="number" placeholder='Enter your phone no'
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="mt-2 form-label">
              Email address
            </label>
            <input onChange={inputHandler} value={inputVal.email} name='email' placeholder='Enter your Email'
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Message
            </label>
            <textarea onChange={inputHandler} value={inputVal.message} name='message' placeholder='Write something about you'
              className="form-control"
              id="exampleInputPassword1"
            >
              
            </textarea>
          </div>
          <button type="submit"   className="btn btn-light border border-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
