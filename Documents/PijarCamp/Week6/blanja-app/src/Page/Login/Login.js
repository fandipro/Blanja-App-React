import React from "react";
import Button from "../../component/base/Button";
import styles from "./login.module.css";
import Input from "../../component/base/Input";
import logoPic from "../image/logoBlanja.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="d-flex justify-content-center mb-4">
              <img src={logoPic} alt="" />
              <h4 className="mt-3 fw-bold">Blanja</h4>
            </div>
            <p className="text-center fw-bold">Please Login with your account</p>
            <div className="buttons text-center mb-4">
              <div>
                <Button title="Seller" className={styles.sl}></Button>
                <Button title="Customer" className={styles.cs}></Button>
              </div>
            </div>
            <p className="text-end text-danger">Forgot password?</p>
            <Input classWrapName="form-outline mb-4" type="email" id="email" className="form-control form-control-lg" placeholder="Email"></Input>
            <Input classWrapName="form-outline mb-4" type="password" id="password" className="form-control form-control-lg" placeholder="Password"></Input>
            <div className="d-grid">
              <Button title="Primary" onClick={() => navigate("/Home")} className={styles.btnSubmit} border="none"></Button>
            </div>
            <p className="text-center mt-3">
              Don't Have Tokopedia Account?{" "}
              <span onClick={() => navigate("/Register")} id="register" className="text-danger">
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
