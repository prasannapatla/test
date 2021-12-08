import React from "react";
import logo from '../components/images/logo.png'
import comviva_logo from '../components/images/comviva_logo.png'
import banner_img from '../components/images/forgot_banner.png'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./resetmsg.css";
import $ from "jquery";


export default function Resetmsg() {

   $(function () {
     var code = "+91123456789"; // Assigning value from model.
     $("#txtPhone").val(code);
     $("#txtPhone").intlTelInput({
       autoHideDialCode: true,
       autoPlaceholder: "ON",
       dropdownContainer: document.body,
       formatOnDisplay: true,
       hiddenInput: "full_number",
       initialCountry: "auto",
       nationalMode: true,
       placeholderNumberType: "MOBILE",
       preferredCountries: ["US"],
       separateDialCode: true,
     });
     $("#btnSubmit").on("click", function () {
       var code = $("#txtPhone").intlTelInput(
         "getSelectedCountryData"
       ).dialCode;
       var phoneNumber = $("#txtPhone").val();
       var name = $("#txtPhone").intlTelInput("getSelectedCountryData").name;
       alert(
         "Country Code : " +
           code +
           "\nPhone Number : " +
           phoneNumber +
           "\nCountry Name : " +
           name
       );
     });
   });
  
  

 
  return (
    <div>
      <section className="resetmsg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 banner-img">
              {/* <img src={vector} className="vector_img" alt="login banner image" /> */}
              <img
                src={banner_img}
                className="login_banner_img"
                alt="login banner image"
              />
            </div>
            <div className="col-lg-6 col-sm-12 login_main">
              <div className="">
                <div className="row">
                  <div className="col-6">
                    <img src={logo} className="login_logo" alt="logo" />
                  </div>
                </div>
              </div>
              <h4 className="welcom_text" style={{ "margin-top": "9%" }}>
                Your password has been reset successfully
              </h4>
              <p className="welcom_content">
                Please login using your new password.
              </p>
              <Link to="/login">
                <Button className="login_button" type="submit">
                  <span className="login_text">Login Now</span>
                </Button>
              </Link>
            </div>
          </div>
          <input type="tel" id="txtPhone" />
          <input type="button" id="btnSubmit" value="Get Dial Details" />
        </div>
        <br />
        <br />
      </section>
      <section className="container footer">
        <div className="row">
          <div className="col-6 footer_padding" style={{ "margin-top": "12%" }}>
            <p className="footer_text">A PRODUCT OF</p>
            <img src={comviva_logo} className="footer_logo" alt="logo" />
          </div>
        </div>
      </section>
    </div>
  );
}
