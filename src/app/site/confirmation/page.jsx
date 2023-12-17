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

    const enableResetQuery = ()=>{
        let emailfield = ($(".passwordControler").val()).trim();
        if ((emailfield.length > 0)) {
            $(".resetPassBtn").attr('disabled', false);
        } else {
            $(".resetPassBtn").attr('disabled', true);
        }
    }
  return (
    <>
    
    <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-12">
        <div className="share-div text-center">
          <Image src="/assets/images/khrimisaylogo.png" className="img-fluid mt-5 mb-4" alt="" fill />
        </div>
      </div>
      <div className="col-12 my-4 main__loginbg d-flex align-items-center justify-content-center">
        <div className="w__reset mx-auto bg__kchat rounded">

          <h4 className="text-center resetPwdTxt">Resend Confirmation Message</h4>

          <form action="/site/utter" method="get">

            <input type="email" required className="form-control customSignSize my-form-control passwordControler"
              onkeyup={enableResetQuery} placeholder="Email address/Mobile number" />

            <button type="submit" className="resetPassBtn btn btn-block my-btn" disabled>Resend Message</button>

            <div className="my-2 signInUp">
              <Link href="/index" className="leftsign">Sign In.</Link>
              <Link href="/site/signup" className="rightsign">Sign Up.</Link>
            </div>

          </form>
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
