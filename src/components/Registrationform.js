import React from "react";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const Registrationform = () => {
  const [stdname, setstdname] = useState("");
  const [regno, setregno] = useState("");
  const [sec, setsec] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/form", {
        stdname,
        regno,
        sec,
      });
      if (res.data) {
        res.status(200).send({
          message: "success",
          success: true,
        });
      } else {
        console.log("not found any  data");
      }
    } catch (e) {
      console.log("something went wrong in connection attempt");
    }
  };
  return (
    <div className="container">
      <h1>Form Page</h1>
      <form onSubmit={submit} className="col-lg-6 col-md-8 col-sm-10">
        <div className="form-group">
          <label htmlFor="stdname">Enter your name</label>
          <input
            type="text"
            id="stdname"
            className="form-control"
            value={stdname}
            onChange={(e) => setstdname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="regno">Enter Your Registration Number</label>
          <input
            type="text"
            id="regno"
            className="form-control"
            value={regno}
            onChange={(e) => setregno(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sec">Enter Your Section Here</label>
          <input
            type="text"
            id="sec"
            className="form-control"
            value={sec}
            onChange={(e) => setsec(e.target.value)}
          />
        </div>
        <button type="submit" lassName="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </div>
  );
};
export default Registrationform;
