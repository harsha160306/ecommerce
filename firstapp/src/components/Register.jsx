import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    let newUser = { name, email, mobile: Number(mobile), password, address };

    axios
      .post("http://localhost:4000/api/create-user", newUser)
      .then((res) => {
        if (res.data.status === 201) {
          alert("Register successful");
          navigate("/login");
        }
      })
      .catch(() => {
        alert("Error while registering");
      });

    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
  }

  return (
    <div className="register-bg d-flex align-items-center">
      <div className="container">
        <div className="register-box mx-auto">
          <h2 className="text-center fw-bold" style={{ color: "#fff" }}>Registration Form</h2>
          <p className="text-center mb-4" style={{ color: "#ddd" }}>
            Fill out the form carefully for registration
          </p>

          <form onSubmit={handleRegister}>
            {/* Row 1 */}
            <div className="row mb-3">
              <div className="col-md-6 mb-2">
                <label className="form-label" style={{ color: "#fff" }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </div>

              <div className="col-md-6 mb-2">
                <label className="form-label" style={{ color: "#fff" }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="row mb-3">
              <div className="col-md-6 mb-2">
                <label className="form-label" style={{ color: "#fff" }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>

              <div className="col-md-6 mb-2">
                <label className="form-label" style={{ color: "#fff" }}>Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter mobile number"
                />
              </div>
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label" style={{ color: "#fff" }}>Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
              />
            </div>

            {/* Button */}
            <div className="text-center">
              <button className="btn btn-success px-5 py-2 fw-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
