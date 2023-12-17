'use client';
import "jquery";
import $ from "jquery";
import Image from 'next/image'
import { useState, useEffect, useRef } from "react";
import Head from 'next/head';
import Script from 'next/script'
import FourHand from '@/app/components/FourHand'
import AllUtterModals from '@/app/components/AllUtterModals'
import CreateModalPopUp from '@/app/components/CreateModalPopUp'
import Link from 'next/link';
import '../../public/assets/css/Login.modules.css'




export default function Home() {
  useEffect(() => {
    document.title = 'Login to our platform Khrimisay';
  }, []);


  const sendToScroll = () => {
    $("#khrimisay_login").scrollIntoView();
    window.scrollBy(0, 200);
    $(".emailControler").focus();
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

  const [passwordVisible, setPasswordVisible] = useState(false);
  const passSystem = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="navbar_spacings">
          <Link className="navbar-brand" href="/site/utter">
            <Image src="/assets/images/logo.png" alt="logo" fill />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="float_right_button">
            <div className="btn btn_one text_light" aria-current="page" style={{ cursor: 'pointer' }} onClick={sendToScroll}>
              Enter Khrimisay
            </div>
          </div>
        </div>
      </nav>





      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item carousel_image_holder active">
            <Image className="d-block w-100" src="/assets/images/banneri.png" alt="First slide" fill />
          </div>
          <div className="carousel-item carousel_image_holder">
            <Image className="d-block w-100" src="/assets/images/banner2.png" alt="Second slide" fill />
          </div>
        </div>
      </div>





      <section id="banneri">
        <div className="container">
          <h1 className="header_para">
            A platform <span className="highlight_text">dedicated</span> to <br />
            making the social media space <br />
            <span className="highlight_text">fun</span> and <span className="highlight_text">memorable</span>
          </h1>
        </div>
      </section>


      <section id="thoughts">
        <div className="left_thought">
          <div className="thought_content">
            <h1 className="share_thoughts">Share your thoughts</h1>
            <p className="compar">
              Share your utters around the globe and in your local communities.
            </p>
            <p className="compar">
              Khrimisay continues to find innovative ways to ensure your thoughts are heard as far as they can travel.
            </p>
            <a href="/" className="text_alter">Learn more about Speak Smoothly Rational &#174;</a>
          </div>
        </div>
        <div className="right_img">
          <Image src="/assets/images/thoughts.png" alt="thoughts" fill />
        </div>
      </section>





      <section className="squares_audiences">
        <div className="right_img">
          <Image src="/assets/images/friends.png" alt="thoughts" fill />
        </div>
        <div className="right_thought">
          <div className="thought_content support_friends">
            <h1 className="share_thoughts">Support your friends</h1>
            <p className="compar">
              We are harnessing the power of friendships to ensure that a friendship made is a friendship that counts.
            </p>
            <p className="compar">
              On Khrimisay, &quot;friends&quot; go beyond the word. <br />It actually means something.
            </p>
          </div>
        </div>
      </section>



      <section id="thoughts">
        <div className="left_thought">
          <div className="thought_content audience_content">
            <h1 className="share_thoughts">Squares & Audience</h1>
            <p className="compar">
              Carefully select those you want to join their squares without having to stop seeing other people&apos;s utters.
            </p>
            <p className="compar">
              Choose those who can be your audience.
            </p>
            <p className="compar">
              Let your &quot;squardience&quot; count.
            </p>
          </div>
        </div>
        <div className="right_img">
          <Image src="/assets/images/audience.png" alt="thoughts" fill />
        </div>
      </section>







      <div className="container" id="khrimisay_login">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="share-div text-center">
              <div className="see_whats_up">See what&apos;s up</div>
              <h5 className="font600">Share your thoughts. Support your friends. </h5>
            </div>
          </div>

          <div id="signup_form">
            <div className="signup_background">
              <Image src="/assets/images/login-bg.png" alt="" className="signup_bg_image" fill />
            </div>
            <div className="col-12 my-4 signup_form_bg d-flex align-items-center justify-content-center">
              <div className="w__login mx-auto bg__kchat rounded">
                <form action="/site/utter" method="get">

                  <input type="email" required className="emailControler form-control customSignSize my-form-control"
                    onKeyUp={enableQuery} placeholder="User Name / Email" />


                  <div id="passholder">
                    <input type={passwordVisible ? 'text' : 'password'} required className="passcontrol form-control customSignSize my-form-control"
                      onKeyUp={enableQuery} placeholder="Password" />
                    <span
                      className={`fa fa-fw field-icon toggle-password eye_icon ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'
                        }`}
                      onClick={passSystem}
                    ></span>
                  </div>


                  <button type="submit" className="signIn btn btn-block my-btn" disabled>Sign In</button>

                  <div className="my-2">
                    <center>
                      <a href="site/forget_password" className="text-center underlined">Forgotten Password?</a>
                    </center>
                  </div>

                  <hr className="cstmhr" />

                  <div className="text-center">
                    <a href="site/signup">
                      <button type="button" className="btn my-btn-c cna">Create New Account</button>
                    </a>
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
                <li><a href="#">About</a></li>
                <li><a href="#">Local</a></li>
                <li><a href="#">Friends</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Market</a></li>
                <li><a href="#">Social</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
              <p className="text-center mt-4 mb-0">© <span className="yearSpan"></span> Khrimisay</p>
            </div>
          </div>
        </footer>
      </center>



    </>
  )
}
