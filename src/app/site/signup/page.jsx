"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MainHeader from "../../components/MainHeader";
import MainSideBar from "../../components/MainSideBar";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileEdit from "../../components/ProfileEdit";
import ChooseUtterworthyHeader from "../../components/ChooseUtterworthyHeader";
import UtterReach from "../../components/UtterReach";
import "../../../../public/assets/css/Signup.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";
import React, { Component } from "react";

export default function KhrimiPage() {
  const nextQuery = () => {
    let input1 = (($(".input1").val()).trim()).length;
    let input2 = (($(".input2").val()).trim()).length;
    let input3 = (($(".input3").val()).trim()).length;
    let input4 = (($(".input4").val()).trim()).length;
    let input5 = (($(".input5").val()).trim()).length;
    if ((input1 > 0) && (input2 > 0) && (input3 > 0) && (input4 > 0) && (input5 > 0)) {
      $(".nextShow").attr('disabled', false);
    } else {
      $(".nextShow").attr('disabled', true);
    }
  }


  const enableQuery = () => {
    let email = ($(".emailControler").val()).trim();
    let password = ($(".passcontrol").val()).trim();
    if ((email.length > 0) && (password.length > 0)) {
      $(".signIn").attr('disabled', false);
    } else {
      $(".signIn").attr('disabled', true);
    }
  }

  const signupQuery = () => {
    let username = ($(".usersName").val()).trim();
    let displayname = ($(".DisplayName").val()).trim();
    if ((username.length > 0) && (displayname.length > 0)) {
      $(".signMeUp").attr('disabled', false);
    } else {
      $(".signMeUp").attr('disabled', true);
    }
  }


  const passSystem = (event) => {
    event.stopPropagation();
    const parentElem = event.currentTarget;
    let type = $(".passcontrol").attr("type");
    $(parentElem).toggleClass("fa-eye fa-eye-slash");
    if (type == 'password') {
      $(".passcontrol").attr("type", "text");
    } else {
      $(".passcontrol").attr("type", "password");
    }
  }
  return (
    <>

      <Script src="//www.google.com/recaptcha/apifef7.js?hl=en" async defer></Script>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="share-div text-center">
              <Image src="/assets/images/khrimisaylogo.png" className="logoSize img-fluid mt-5 mb-4" alt="" fill />
              <h5 className="font600">Share your thoughts. Support your friends. </h5>
            </div>
          </div>



          <div className="step1 col-12 my-4 main__loginbg dflex align-items-center justify-content-center">
            <div className="w__login mx-auto bg__kchat roundedDiv">

              <div className="bg__kchat border-0">

                <div className="d-flex flex-column signup-heading mb-2">
                  <p className="mb-0 mt-2 text-white font-weight-bolder">Sign Up</p>
                  <span>
                    <div className="customHeader">And see what&apos;s up. 🙂 </div>
                  </span>
                </div>

                <form action="/site/utter" method="get">

                  <div className="gridsystem">
                    <div className="leftpart">
                      <input type="text" required className="form-control customSignSize my-form-control input1"
                        onKeyUp={nextQuery} placeholder="First Name" />
                    </div>
                    <div className="rightpart">
                      <input type="text" required className="form-control customSignSize my-form-control input2"
                        onKeyUp={nextQuery} placeholder="Last Name" />
                    </div>
                  </div>

                  <div className="w-100">
                    <input type="text" required className="form-control customSignSize my-form-control input3"
                      onKeyUp={nextQuery} placeholder="Mobile number or email address" />
                  </div>

                  <div className="w-100">
                    <input type="password" required className="passcontrol form-control customSignSize my-form-control input4"
                      onKeyUp={nextQuery} placeholder="Password" />
                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password eye_icon"
                      onClick={passSystem}></span>
                  </div>

                  <div className="w-100">
                    <input type="password" required className="form-control customSignSize my-form-control input5"
                      onKeyUp={nextQuery} placeholder="Confirm Password" />
                  </div>


                  <button type="button" className="signNext nextShow btn btn-block my-btn" disabled="true">Next</button>


                  <div className="signinTextLink">
                    <Link href="/">Back to Sign In.</Link>
                  </div>

                </form>
              </div>

            </div>
          </div>







          <div className="step2 d-none col-12 my-4 main__loginbg2 dflex align-items-center justify-content-center">
            <div className="w__login mx-auto bg__kchat roundedDiv">

              <div className="bg__kchat border-0">

                <div className="d-flex flex-column signup-heading mb-2">
                  <p className="mb-0 text-white font-weight-bolder">Welcome to Khrimisay</p>
                  <span>
                    <div className="customHeader">Neyo4love@yahoo.com </div>
                  </span>
                </div>

                <form action="/site/utter" method="get">

                  <div className="w-92">
                    <input type="text" required className="form-control customSignSize my-form-control usersName"
                      onKeyUp={signupQuery} placeholder="User Name" />
                  </div>
                  <div className="w-92">
                    <input type="text" required className="form-control customSignSize my-form-control DisplayName"
                      onKeyUp={signupQuery} placeholder="Display Name" />
                  </div>



                  <div className="inputGrids">
                    <div className="w-100">
                      <input type="text" className="form-control customSignSize my-form-control"
                        placeholder="Please, tell us your gender( optional)" />
                    </div>
                    <div className="roundBg"><i className="fa fa-info" aria-hidden="true"></i></div>
                  </div>


                  <div className="inputGrids">
                    <div className="w-100">
                      <select name="" id="" className="form-control" onchange="changeColor(this)">
                        <option value="" disabled selected>Please, tell us your age category (optional)</option>
                        <option value="">Young Adult</option>
                        <option value="">Adult</option>
                        <option value="">Middle Age</option>
                        <option value=""> &gt; Middle Age</option>
                      </select>
                    </div>
                    <div className="roundBg"><i className="fa fa-info" aria-hidden="true"></i></div>
                  </div>



                  <div className="form-group mbtn5 mt-3">
                    <input type="radio" name="" id="years" required />
                    <label for="years">
                      I am at least 18 years old.
                    </label>
                  </div>

                  <div className="form-group mbtn5">
                    <input type="radio" name="" id="messageconf" required />
                    <label for="messageconf">
                      I understand that I will be sent a confirmation message
                      to complete my sign up.
                    </label>
                  </div>

                  <div className="form-group">
                    <input type="radio" name="" id="terms" required />
                    <label for="terms">
                      I agree to Khrimisay&apos;s <Link href="#" className="font600 link_color">Terms</Link>, <Link href="#" className="font600 link_color">Privacy</Link>
                      and <Link href="#" className="font600 link_color">Cookie</Link> policies and Intermittent notifications that I may receive.
                    </label>
                  </div>


                  <div className="g-recaptcha" data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div>


                  <button type="submit" className="signNext signMeUp btn btn-block my-btn" disabled="true">Sign me up</button>


                  <div className="signinTextLink">
                    <Link href="/site/confirmation">Didn&apos;t get confirmation message?</Link>
                  </div>




                </form>
              </div>

            </div>
          </div>







        </div>
      </div>





      <center>
        <footer className="mt-5 py-3 mx-3 container cstmBorder">
          <div id="content">
            <div id="horz-list">
              <ul>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Local</Link></li>
                <li><Link href="#">Friends</Link></li>
                <li><Link href="#">Games</Link></li>
                <li><Link href="#">Market</Link></li>
                <li><Link href="#">Social</Link></li>
                <li><Link href="#">Login</Link></li>
                <li><Link href="#">Jobs</Link></li>
                <li><Link href="#">Help</Link></li>
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms</Link></li>
              </ul>
              <p className="text-center mt-4 mb-0">© <span className="yearSpan"></span> Khrimisay</p>
            </div>
          </div>
        </footer>
      </center>



    </>
  )
}
