import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import useInputValidate from '../hooks/useInputValidate';
import { email_regex, password_regex } from "../hooks/formRegexValidate";
import "../index.css";
function Login() {
  
    // Mail

  const {
    value: mailValue,
    isValid: isMailValid,
    hasError: mailInputError,
    valueInputClass: mailErrorClass,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
  } = useInputValidate((value) => email_regex.test(value));

  // Şifre

  const {
    value: passwordValue,
    isValid: isPasswordValid,
    hasError: passwordInputError,
    valueInputClass: passwordErrorClass,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInputValidate((value) => password_regex.test(value));

  let navigate = useNavigate();

  const handleLoginSubmit = () => {
   return ( isMailValid && isPasswordValid )? navigate("/admindashboard") : false;
  };

  return (
    <section className="vh-100 gradient-custom">
      <Header />
      <div className="h-100 container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold text-uppercase mb-2">GİRİŞ</h2>
                  <p>
                    Lütfen email ve şifrenizi giriniz
                  </p>

                  <div className="form-outline form-white mb-4">
                  <label className="form-label h5">Email</label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Enter your email"
                      id="email"
                      value={mailValue}
                      onChange={mailChangeHandler}
                      onBlur={mailBlurHandler}
                    />
                    {mailInputError ? (
                  <p  className="mailErrorClass">Geçersiz Email</p>
                ) : (
                  ""
                )}
                  </div>

                  <div className="form-outline form-white mb-4">
                  <label className="form-label h5">Şifre</label>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Enter your password"
                      id="password"
                      value={passwordValue}
                      onChange={passwordChangeHandler}
                      onBlur={passwordBlurHandler}
                    />
                    {passwordInputError ? (
                  <div className="passwordErrorClass">
                    Şifre en az 8 karakterden oluşmalı
                  </div>
                ) : (
                  ""
                )}
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="button"
                    onClick={handleLoginSubmit}
                  >
                    Giriş
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
}

export default Login;


