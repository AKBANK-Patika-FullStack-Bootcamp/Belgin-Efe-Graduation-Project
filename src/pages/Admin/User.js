import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useInputValidate from "../../hooks/useInputValidate";
import {
  email_regex,
  password_regex,
  telefon_regex,
  tc_regex,
} from "../../hooks/formRegexValidate";

function User() {
  let { user } = useParams();

  let navigate = useNavigate();

  // İsim-soyisim

  const {
    value: nameValue,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInputValidate((value) => value.trim() !== "");

  // Mail

  const {
    value: mailValue,
    hasError: mailInputError,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
  } = useInputValidate((value) => email_regex.test(value));

  // Şifre

  const {
    value: passwordValue,
    hasError: passwordInputError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInputValidate((value) => password_regex.test(value));

  // Telefon

  const {
    value: telValue,
    hasError: telInputError,
    valueChangeHandler: telChangeHandler,
    inputBlurHandler: telBlurHandler,
  } = useInputValidate((value) => telefon_regex.test(value));

  // TC Kimlik No

  const {
    value: tcValue,
    hasError: tcInputError,
    valueChangeHandler: tcChangeHandler,
    inputBlurHandler: tcBlurHandler,
  } = useInputValidate((value) => tc_regex.test(value));

  const addUserSubmit = (e) => {
    navigate("/admindashboard");
  };

  return (
    <div className="container-fluid px-4">
      
      <div className="row">
        <div className="col-8">
          
<section className="vh-100 gradient-custom">
      <div className="title">Yeni kullanıcı ekleyiniz</div>
      <div className="container">
        <form onSubmit={addUserSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">İsim - Soyisim</span>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                value={nameValue}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
              {nameInputError ? <p className="error">İsim boş olamaz</p> : ""}
            </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                placeholder="Enter your email"
                id="email"
                value={mailValue}
                onChange={mailChangeHandler}
                onBlur={mailBlurHandler}
              />
              {mailInputError ? <p className="error">Geçersiz Email</p> : ""}
            </div>

            <div className="input-box">
              <span className="details">TC No :</span>
              <input
                type="tel"
                placeholder="TC No"
                id="tc"
                value={tcValue}
                onChange={tcChangeHandler}
                onBlur={tcBlurHandler}
              />
              {tcInputError ? (
                <p className="error">TC kimlik no 11 haneden oluşmalıdır</p>
              ) : (
                ""
              )}
            </div>

            <div className="input-box">
              <span className="details">Telefon Numarası</span>
              <input
                type="tel"
                placeholder="telefon"
                id="tel"
                value={telValue}
                onChange={telChangeHandler}
                onBlur={telBlurHandler}
              />
              {telInputError ? <p className="error">Geçersiz numara</p> : ""}
            </div>

            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="text"
                placeholder="Enter your password"
                id="password"
                value={passwordValue}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordInputError ? (
                <p className="error">Şifre en az 8 karakterden oluşmalı</p>
              ) : (
                ""
              )}
            </div>

            <div>
              <button className="btn btn-primary" type="submit">
                Ekle
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
        </div>
        <div className="col-4">Tablo</div>
      </div>
    </div>
  );
}

export default User;

