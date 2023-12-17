"use client"
import "jquery";
import $ from "jquery";
import React from 'react'
import Image from "next/image"
import allFunctions from '../../../public/test';
import { useState, useEffect, useRef, useLayoutEffect } from "react";

export default function ProfileSidebar() {
  const {
    eidt_profile_func,
    popupfollowing,
    switchInfo,
    showDotted,
    crossFollowPopup,
    prevScroll,
    nextScroll,
    activateTab,
  } = allFunctions;





  return (
    <>

      <div className="col-sm-7 col-md-7 col-lg-8 customrightpadding">
        <div className="header-section-profile">
          <div className="bg-white mb-2 border-radius-10" id="left_detailed_profile">
            <div className="banner-image">
              <Image className="img-fluid w-100" src="/assets/images/26.png" alt="banner" fill />
              <div className="profile-picture">
                <div className="text-center user_circular_profile">
                  <Image className="img-fluid shadowbg" src="/assets/images/monalissa.png" alt="profile" fill />
                </div>

                <div className="new__icons d-flex mb-4 mx-4">
                  <div className="ml-auto">
                    <Image className="img-fluid showhideEye opacity-0" src="/assets/images/promonew/24.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>

            <div id="editImgHolder" onClick={(e) => eidt_profile_func(e.target)}>
              <Image className="img-fluid" src="/assets/images/editicon.png" alt="" fill />
            </div>

            <div id="profile_popup" className="d-none">
              <div className="profile_pop_line">
                <div className="left_image">
                  <Image src="/assets/images/shareicon.png" alt="" className="line_icon" fill />
                </div>
                <div className="right_text_pop">
                  Share Profile
                </div>
              </div>

              <div className="profile_pop_line">
                <div className="left_image">
                  <Image src="/assets/images/shareicon.png" alt="" className="line_icon" fill />
                </div>
                <div className="right_text_pop">
                  Ignore Notification
                </div>
              </div>

              <div className="profile_pop_line">
                <div className="left_image">
                  <Image src="/assets/images/shareicon.png" alt="" className="line_icon" fill />
                </div>
                <div className="right_text_pop">
                  Block
                </div>
              </div>

              <div className="profile_pop_line">
                <div className="left_image">
                  <Image src="/assets/images/notes.png" alt="" className="line_icon" fill />
                </div>
                <div className="right_text_pop">
                  Report
                </div>
              </div>

              <div className="profile_pop_line">
                <div className="left_image">
                  <Image src="/assets/images/profile-icon.png" alt="" className="line_icon" fill />
                </div>
                <div className="right_text_pop">
                  Request Friendship Consideration
                </div>
              </div>

              <div className="profile_pop_line">
                <div className="left_image">
                  <Image src="/assets/images/shareicon.png" alt="" className="line_icon" fill />
                </div>
                <div className="right_text_pop">
                  Become Friends With...
                </div>
              </div>

              <div className="profile_pop_line">
                <div className="left_image">
                  <Image src="/assets/images/shareicon.png" alt="" className="line_icon" fill />
                </div>
                <div className="right_text_pop">
                  Appoint As K-Junior
                </div>
              </div>

            </div>

            <div className="follow-user-section">
              <ul className="nav nav-pill my-nav-pills-follow nav-justified">
                <li className="nav-item text-start">
                  <a className="nav-link d-inline-block px-1 nav-item-follow"
                    onClick={(e) => popupfollowing('following')}>
                    <p className="m-0 totfolloeing"> <Image src="/assets/images/squares.png" alt="" className="sqares_img" fill />
                      <span className="lightdarktxt bold600 suare_hover">Squares</span>
                    </p>
                  </a>
                </li>
                <div className="d-flex username-profile flex-column justify-content-start mb-2">
                  <span>Monalisa Monalisa</span>
                  <span className="totfolloeing">@Monalisa_Monalisa</span>
                </div>
                <li className="nav-item text-end">
                  <a className="nav-link d-inline-block px-1 nav-item-follow"
                    onClick={(e) => popupfollowing('followers')}>
                    <p className="m-0 totfolloeing"> <Image src="/assets/images/audience_round.png" alt="" className="sqares_img" fill /> <span
                      className="lightdarktxt bold600 suare_hover">Audience</span></p>
                  </a>
                </li>
              </ul>


              <div id="following" className="popup_follow d-none">

                <div className="following_title_bar">
                  <div className="follow_title">Squares <span className="tot_sqares">(245)</span> </div>
                  <div className="follow_all_icons">
                    <Image src="/assets/images/promonew/18.png" alt="" className="follow_icon" fill />
                    <Image src="/assets/images/promonew/friends_together.png" alt="" className="follow_icon" fill />
                    <span id="follow_cross" onClick={() => crossFollowPopup()}>
                      <svg viewBox="0 0 24 24" width="18" height="18" className="">
                        <path fill="currentColor"
                          d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                        </path>
                      </svg>
                    </span>
                  </div>
                </div>


                <div className="all_following_list">
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon square_share" src="/assets/images/square_arrow.png" alt="" fill />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon square_share" src="/assets/images/square_arrow.png" alt="" fill />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon square_share" src="/assets/images/square_arrow.png" alt="" fill />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon square_share" src="/assets/images/square_arrow.png" alt="" fill />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon square_share" src="/assets/images/square_arrow.png" alt="" fill />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon square_share" src="/assets/images/square_arrow.png" alt="" fill />
                      </a>
                    </div>
                  </div>
                </div>


              </div>






              <div id="followers" className="popup_follow d-none">

                <div className="following_title_bar">
                  <div className="follow_title">Audience <span className="tot_sqares">(158)</span> </div>
                  <div className="follow_all_icons">
                    <Image src="/assets/images/promonew/18.png" alt="" className="follow_icon" fill />
                    <Image src="/assets/images/promonew/friends_together.png" alt="" className="follow_icon" fill />
                    <span id="follow_cross" onClick={() => crossFollowPopup()}>
                      <svg viewBox="0 0 24 24" width="18" height="18" className="">
                        <path fill="currentColor"
                          d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                        </path>
                      </svg>
                    </span>
                  </div>
                </div>


                <div className="all_following_list">
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon" src="/assets/images/aud_circle.png"
                          width="30" height="30" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon" src="/assets/images/aud_circle.png"
                          width="30" height="30" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon" src="/assets/images/aud_circle.png"
                          width="30" height="30" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon" src="/assets/images/aud_circle.png"
                          width="30" height="30" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon" src="/assets/images/aud_circle.png"
                          width="30" height="30" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-row align-items-center spec_follow_item border-bottom-custom user-info">
                    <a href="suggested_profile.html"
                      className="d-flex text-decoration-none  align-items-center">
                      <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="" fill />
                      <div className="d-flex flex-column justify-content-start ml-3">
                        <span className="d-block userName customTextColor username-comment">
                          LeBron James
                        </span>
                        <span
                          className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                          @LebronJames
                        </span>
                      </div>
                    </a>
                    <div className="ml-auto follow-image pos_relative mr-2">
                      <a href="suggested_profile.html">
                        <Image className="suggested_profile_icon" src="/assets/images/aud_circle.png"
                          width="30" height="30" alt="" />
                      </a>
                    </div>
                  </div>
                </div>


              </div>






              <div className="side_by_side">

                <div className="left_sided_part">
                  <div className="loremTexts max_content_sizing">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id bibendum nibh. Nullam
                    massa
                    enim, posuere eget turpis id, fermentum varius sem. Proin tincidunt tempus mi, a
                    fermentum
                    ipsum finibus in. Praesent mollis nunc id libero fringilla consequat.
                  </div>

                  <div className="linksHolder">
                    <p className="iconbar">
                      <span><span className="icons">
                        <Image src="/assets/images/basket.png" alt="" className="iconimg icon_big_img" fill />
                      </span>
                        <span className="normText gray_small">Sportscenter </span> </span>

                      <span className="gray_small"> <span className="icons"> <span className="dots"></span>
                        <Image src="/assets/images/bookmarks.png" alt="" className="iconimg" fill /> </span>
                        Bookworms </span>

                      <span className="gray_small"> <span className="icons"> <span className="dots"></span>
                        <Image src="/assets/images/arts.png" alt="" className="iconimg icon_big_img" fill />
                      </span> Arts </span>
                    </p>
                  </div>

                </div>


                <div className="right_sided_part">
                  <div className="iconbar">
                    <span className="icons"> <Image src="/assets/images/zoe.png" alt="" className="iconimg" fill /> </span>
                    <a className="link" href="https://zoe.com/">zoe.com</a>
                  </div>
                  <div className="iconbar">
                    <span className="icons"> <Image src="/assets/images/whinny.png" alt="" className="iconimg" fill />
                    </span>
                    <div className="">
                      <a className="link" href="https://whinny.com/">whinny.com </a> <br />
                      <a className="link" href="https://inteswitch.com/"> inteswitch.com</a>
                    </div>
                  </div>
                  <div className="iconbar">
                    <span className="icons"> <Image src="/assets/images/florida.png" alt="" className="iconimg icon_big_img" fill />
                    </span>
                    <span className="normText gray_small">Florida </span>
                  </div>
                </div>


              </div>



            </div>



            <div className="modal fade" id="followers" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="scroll-follow">
                    <p className="text-center">Followers</p>
                    <div className="p-2 followers-section" id="followers" role="tabpanel"
                      aria-labelledby="bio-profile-tab">


                      <div
                        className="d-flex flex-row justify-content-center justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold username-comment">
                            Travis </span>
                          <span className="date user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold username-comment">
                            Travis </span>
                          <span className="date user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold username-comment">
                            Travis </span>
                          <span className="date user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold username-comment">
                            Travis </span>
                          <span className="date user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold username-comment">
                            Travis </span>
                          <span className="date user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold username-comment">
                            Travis </span>
                          <span className="date user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold username-comment">
                            Travis </span>
                          <span className="date user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="following" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                <div className="modal-content">

                  <div className="scroll-follow">
                    <p className="text-center">Following</p>
                    <div className="p-2 following-section" id="following">



                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-dark username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn text-white follow-btn bg-kchat dropdown-toggle"
                              data-toggle="dropdown">
                              Following
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Follow Back</a>
                              <a className="dropdown-item" href="#">Block</a>
                            </div>
                          </div>
                        </div>
                      </div>




                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-dark username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">

                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-danger username-comment">
                            Travis </span>
                          <span className="date text-danger user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <a href="#/"> <button type="button"
                            className="btn follow-btn  btn-danger">Block</button> </a>
                        </div>
                      </div>





                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-dark username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn text-white follow-btn bg-kchat dropdown-toggle"
                              data-toggle="dropdown">
                              Following
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Follow Back</a>
                              <a className="dropdown-item" href="#">Block</a>
                            </div>
                          </div>
                        </div>
                      </div>




                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-dark username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">

                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-danger username-comment">
                            Travis </span>
                          <span className="date text-danger user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <a href="#/"> <button type="button"
                            className="btn follow-btn  btn-danger">Block</button> </a>
                        </div>
                      </div>





                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-dark username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn text-white follow-btn bg-kchat dropdown-toggle"
                              data-toggle="dropdown">
                              Following
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Follow Back</a>
                              <a className="dropdown-item" href="#">Block</a>
                            </div>
                          </div>
                        </div>
                      </div>




                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-dark username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">

                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-danger username-comment">
                            Travis </span>
                          <span className="date text-danger user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <a href="#/"> <button type="button"
                            className="btn follow-btn  btn-danger">Block</button> </a>
                        </div>
                      </div>





                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-dark username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <div className="dropdown">
                            <button type="button"
                              className="btn text-white follow-btn bg-kchat dropdown-toggle"
                              data-toggle="dropdown">
                              Following
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Follow Back</a>
                              <a className="dropdown-item" href="#">Block</a>
                            </div>
                          </div>
                        </div>
                      </div>




                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-dark username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">

                          <div className="dropdown">
                            <button type="button"
                              className="btn follow-btn  btn-success dropdown-toggle"
                              data-toggle="dropdown">
                              Freind
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Unfriend</a>
                              <a className="dropdown-item" href="#">Unfriend and Unfollow</a>
                              <a className="dropdown-item" href="#">Ignore</a>
                              <a className="dropdown-item" href="#">Block</a>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div
                        className="d-flex flex-row justify-content-center border-bottom-follow user-info pb-2">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block font-weight-bold text-danger username-comment">
                            Travis </span>
                          <span className="date text-danger user-date">@
                            travis </span>
                        </div>
                        <div className="d-flex">
                          <a href="#/"> <button type="button"
                            className="btn follow-btn  btn-danger">Block</button> </a>
                        </div>
                      </div>




                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="tab-content d-none scroll-follow mb-5">


            </div>
          </div>






          <div className="tab-content mb-5">
            <div className="tab-pane fade show active" id="bio-profile" role="tabpanel"
              aria-labelledby="bio-profile-tab">

              <div className="linedHolder mb-4">
                <div className="prev d-none" onClick={() => prevScroll()}> &laquo; </div>
                <div className="tabsholder">
                  <span data-id="main_bio_section" className="tabline tab1 activetabline">Bio</span>
                  <span data-id="utter_sec" className="tabline tab1">Utters</span>
                  <span data-id="replies_sec" className="tabline tab1">Comments and Replies</span>
                  <span data-id="media_sec" className="tabline tab1">Media</span>
                  <span data-id="reactions_sec" className="tabline tab2 d-none">Reactions</span>
                  <span data-id="mimi_gold_sec" className="tabline tab2 d-none">@Mimi gold</span>
                  <span data-id="visits_sec" className="tabline tab2 d-none">Visits</span>
                  <span data-id="personals_sec" className="tabline tab2 d-none">My Personals</span>
                </div>
                <div className="next" onClick={() => nextScroll()}> &raquo; </div>
                <div className="unused_tab"></div>
              </div>



              <div className="main_bio_section white_bg_common common_input_sections">

                <div className="main-tags-inputs">


                  <div className="profile_detail_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id bibendum nibh. Nullam
                    massa enim,
                    posuere eget turpis id, fermentum varius sem. Proin tincidunt tempus mi, a fermentum
                    ipsum finibus
                    in. Praesent mollis nunc id libero fringilla consequat.
                  </div>



                  <div className="hobbies">
                    <div className="text-dark intro-title">My Hometown</div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='Favorite athlete(s), music, movie, ' />
                  </div>



                  <div className="hobbies">
                    <div className="text-dark intro-title">My Education</div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='Favorite athlete(s), music, movie, ' />
                  </div>



                  <div className="hobbies">
                    <div className="text-dark intro-title">My Occupation</div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='Favorite athlete(s), music, movie, ' />
                  </div>




                  <div className="hobbies">
                    <div className="text-dark intro-title">interests & hobbies </div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='Favorite athlete(s), music, movie, ' />
                  </div>


                  <div className="hobbies">
                    <div className="text-dark intro-title">Favorite Artistes</div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='Favorite athlete(s), music, movie' />
                  </div>


                  <div className="hobbies">
                    <div className="text-dark intro-title">Favorite songs</div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='reading, music,' />
                  </div>

                  <div className="hobbies">
                    <div className="text-dark intro-title">Favorite authors</div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='reading, music,' />
                  </div>

                  <div className="hobbies">
                    <div className="text-dark intro-title">Favorite books</div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue="reading, movie, " />
                  </div>



                  <div className="hobbies">
                    <div className="text-dark intro-title">Favorite Movies </div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='reading, music, movie' />
                  </div>


                  <div className="hobbies" id="favOthers">
                    <div className="text-dark intro-title">
                      Favorite others
                    </div>

                    <div className="d-flex">
                      <div className="d-flex" id="favsParts"> </div>
                      <input className="mt-2" id="favOthersInput" placeholder='Enter' />
                    </div>






                    <div id="particularFavs"> </div>







                  </div>











                  <div className="hobbies">
                    <div className="text-dark intro-title">places i&apos;ve visited </div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='reading, music, movie, ' />
                  </div>

                  <div className="hobbies">
                    <div className="text-dark intro-title">places i want to visit </div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='reading, music, movie, ' />
                  </div>

                  <div className="hobbies">
                    <div className="text-dark intro-title">quote </div>
                    <input name='tags' className="tags" placeholder='Enter' defaultValue='reading,' />
                  </div>

                </div>
              </div>




              <div className="common_input_sections personals_sec d-none">
                <div className="personal_private_grid">
                  <div className="personal_sec_btns activated_sec_btn" data-info="personal"
                    onClick={(e) => switchInfo(e.target)}>
                    Personal info</div>
                  <div className="personal_sec_btns" data-info="private" onClick={(e) => switchInfo(e.target)}>Private info
                  </div>
                </div>
                <div className="white_bg_common personal_private_box personal">
                  <div className="lines">
                    <div className="personal_texts">Badges</div>
                    <button className="new_member">New Member</button>
                    <button className="founding_member">Founding Member</button>
                  </div>

                  <div className="lines">
                    <div className="personal_texts">User Status <button className="change_coin">Change Coin</button>
                    </div>
                    <div className="dashed_clr_txt">Registered User</div>
                  </div>

                  <div className="lines">
                    <div className="personal_texts">Invites <Image src="/assets/images/plus.png" alt="" className="invites" fill />
                    </div>
                    <div className="dashed_clr_txt">34 sent invites</div>
                  </div>

                  <div className="lines">
                    <div className="personal_texts">Profile Link </div>
                    <div className="profile_link">www.khrimisay.com <Image src="/assets/images/copy.png" alt="" className="copy_image" fill /> </div>
                  </div>

                  <div className="lines">
                    <div className="personal_texts">Location <Image src="/assets/images/ask.png" alt="" className="invites" fill />
                    </div>
                    <div className="dashed_clr_txt">Arlington, VA</div>
                  </div>

                  <div className="joined-date text-center mt-4">
                    <Image src="/assets/images/27.png" className="img-fluid date_img" alt="calendar" fill />
                    <div className="following">
                      <p><span>Joined</span> <span>January</span> <span>2023</span></p>
                    </div>
                  </div>

                </div>

                <div className="white_bg_common personal_private_box private d-none">
                  <Image src="/assets/images/nothing_to_see.png" alt="" className="private_blank_img" fill />
                </div>
              </div>



              <div className="common_input_sections visits_sec d-none">

                <div className="visit_grid">
                  <div className="visitors_visited activevisited" data-id="visitors">Visitors</div>
                  <div className="visitors_visited" data-id="visited">Visited</div>
                </div>

                <div className="white_bg_common">
                  <div className="visited_and_visitors">



                    <div className="common_visits visitors">

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/8.png" alt="" className="w-100" fill />
                        </div>
                        <div className="center_detail_texts">
                          <div className="profile_title">LeBron James</div>
                          <div className="mention_title">@LebronJames</div>
                          <div className="today_text">Today 9:14am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">View</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested2.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Hellen Keller</div>
                          <div className="mention_title">@HellenKeller</div>
                          <div className="today_text">Yesterday 8:15am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">View</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested3.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Kobe Bryant</div>
                          <div className="mention_title">@KobeBryant</div>
                          <div className="today_text">2 days ago 3:14am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">View</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested4.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Steph Curry</div>
                          <div className="mention_title">@StephCurry</div>
                          <div className="today_text">12 days ago 5:15am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">View</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested5.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Ryan Reynolds</div>
                          <div className="mention_title">@RyanReynolds</div>
                          <div className="today_text">20 days ago 2:31am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">View</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested3.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Kobe Bryant</div>
                          <div className="mention_title">@KobeBryant</div>
                          <div className="today_text">2 days ago 3:14am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">View</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines"> <div className="left_img"><Image src="/assets/images/8.png" alt="" className="w-100" fill />
                      </div>
                        <div className="center_detail_texts">
                          <div className="profile_title">LeBron James</div>
                          <div className="mention_title">@LebronJames</div>
                          <div className="today_text">Today 9:14am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">View</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested2.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Hellen Keller</div>
                          <div className="mention_title">@HellenKeller</div>
                          <div className="today_text">Yesterday 8:15am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">View</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                    </div>




                    <div className="common_visits visited d-none">
                      <div className="visitor_lines"> <div className="left_img"><Image src="/assets/images/8.png" alt="" className="w-100" fill />
                      </div>
                        <div className="center_detail_texts">
                          <div className="profile_title">LeBron James</div>
                          <div className="mention_title">@LebronJames</div>
                          <div className="today_text">Today 9:14am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">Hide Visits</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested2.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Hellen Keller</div>
                          <div className="mention_title">@HellenKeller</div>
                          <div className="today_text">Yesterday 8:15am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">Hide Visits</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested3.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Kobe Bryant</div>
                          <div className="mention_title">@KobeBryant</div>
                          <div className="today_text">2 days ago 3:14am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">Hide Visits</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested4.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Steph Curry</div>
                          <div className="mention_title">@StephCurry</div>
                          <div className="today_text">12 days ago 5:15am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">Hide Visits</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested5.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Ryan Reynolds</div>
                          <div className="mention_title">@RyanReynolds</div>
                          <div className="today_text">20 days ago 2:31am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">Hide Visits</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested3.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Kobe Bryant</div>
                          <div className="mention_title">@KobeBryant</div>
                          <div className="today_text">2 days ago 3:14am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">Hide Visits</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="visitor_lines"> <div className="left_img"><Image src="/assets/images/8.png" alt="" className="w-100" fill />
                      </div>
                        <div className="center_detail_texts">
                          <div className="profile_title">LeBron James</div>
                          <div className="mention_title">@LebronJames</div>
                          <div className="today_text">Today 9:14am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">Hide Visits</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      <div className="visitor_lines">
                        <div className="left_img"><Image src="/assets/images/suggested2.png" alt="" className="w-100" fill /></div>
                        <div className="center_detail_texts">
                          <div className="profile_title">Hellen Keller</div>
                          <div className="mention_title">@HellenKeller</div>
                          <div className="today_text">Yesterday 8:15am</div>
                        </div>

                        <div className="dotted_icon">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"
                            onClick={(e) => showDotted(e.target)}></i>

                          <div className="popup_delete d-none">
                            <div className="delete_text">Delete</div>
                            <div className="view_text">
                              <div className="view">Hide Visits</div>
                              <div className="amount">
                                <Image src="/assets/images/dot_active.png" alt="." className="dot" fill />
                                <span className="main_amouny">30</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <p className="center_profile_text sfpro">Only shows your visits in the past 21days</p>
                </div>

              </div>



              <div className="common_input_sections mimi_gold_sec d-none">
                <div className="user-photos-section bg-white cstmbtm">
                  <div className="d-flex flex-column flex-lg-row user-info">
                    <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" width="55" height="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="username-photos">
                            Northwest Agency
                            <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency
                            </span>
                          </span>
                          <span className="text-secondary d-flex flex-wrap align-items-center">
                            <div className="cstmrem9 sfpro">
                              <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                              <span className="text-secondary">8 hr.</span>
                              <span className="rootColor">
                                Selected for the #siteoftheday award by @design :)
                              </span>
                            </div>
                          </span>
                        </div>

                        <div className="ml-auto">
                          <div className="dropdown spec_icon_bg">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Add to Bookmark</a>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>


                  <div className="full_post">

                    <div className="user-photo-img mt-1">
                      <p className="post_details">
                        <span className="rootColor">@Mimi gold</span> It is a long established fact that a
                        reader will be
                        distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a
                        more-or-less normal distribution of letters, as opposed to using &apos;Content here,
                        content here&apos;,
                        making it look like readable English. .
                      </p>
                    </div>

                    <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                      <div className="icons-left d-flex">
                        <div className="like-icon mr-md-4 mr-2">
                          <a href="#/" title="Applaud">
                            <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                        <div className="like-icon">
                          <a href="#/" title="Boo">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                      </div>

                      <div className="center-icon like-icon">
                        <a href="#/" className="comment-icon-toggle text-decoration-none" id="secondone"
                          title="Comment">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                        <span className="text-secondary">120</span>
                      </div>


                      <div className="icons-left dropdown-reutter-and-copylink d-flex">
                        <div className="like-icon">
                          <div className="dropdown show">
                            <a className="dropdown-toggle text-decoration-none text-dark"
                              id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                              <div className="double_face">
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                              </div>
                              <span className="text-secondary">120</span>

                            </a>

                            <div className="show_3dot_popup d-none">
                              <a className="dot3_link" href="#/">Ditto</a>
                              <a className="dot3_link" href="#/">Broadcast
                                <span className="right_side_broadcast">
                                  <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                  <span className="num_in_dot">30</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="like-icon ml-md-4 ml-2">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item"
                                  href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                  Link</a>
                                <a className="dropdown-item" href="#/">Copy Link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="user-photos-section bg-white cstmbtm">
                  <div className="d-flex flex-column flex-lg-row user-info">
                    <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" width="55" height="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="username-photos">
                            Northwest Agency
                            <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency
                            </span>
                          </span>
                          <span className="text-secondary d-flex flex-wrap align-items-center">
                            <div className="cstmrem9 sfpro">
                              <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                              <span className="text-secondary">8 hr.</span>
                              <span className="rootColor">
                                Selected for the #siteoftheday award by @design :)
                              </span>
                            </div>
                          </span>
                        </div>

                        <div className="ml-auto">
                          <div className="dropdown spec_icon_bg">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Add to Bookmark</a>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>


                  <div className="full_post">

                    <div className="user-photo-img mt-1">
                      <p className="post_details">
                        <span className="rootColor">@Mimi gold</span> It is a long established fact that a
                        reader will be
                        distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a
                        more-or-less normal distribution of letters, as opposed to using &apos;Content here,
                        content here&apos;,
                        making it look like readable English. .
                      </p>
                    </div>

                    <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                      <div className="icons-left d-flex">
                        <div className="like-icon mr-md-4 mr-2">
                          <a href="#/" title="Applaud">
                            <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                        <div className="like-icon">
                          <a href="#/" title="Boo">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                      </div>

                      <div className="center-icon like-icon">
                        <a href="#/" className="comment-icon-toggle text-decoration-none" id="secondone"
                          title="Comment">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                        <span className="text-secondary">120</span>
                      </div>


                      <div className="icons-left dropdown-reutter-and-copylink d-flex">
                        <div className="like-icon">
                          <div className="dropdown show">
                            <a className="dropdown-toggle text-decoration-none text-dark"
                              id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                              <div className="double_face">
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                              </div>
                              <span className="text-secondary">120</span>

                            </a>

                            <div className="show_3dot_popup d-none">
                              <a className="dot3_link" href="#/">Ditto</a>
                              <a className="dot3_link" href="#/">Broadcast
                                <span className="right_side_broadcast">
                                  <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                  <span className="num_in_dot">30</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="like-icon ml-md-4 ml-2">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                <span className="text-secondary">120</span>
                              </a>

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item"
                                  href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                  Link</a>
                                <a className="dropdown-item" href="#/">Copy Link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="user-photos-section bg-white cstmbtm">
                  <div className="d-flex flex-column flex-lg-row user-info">
                    <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" width="55" height="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="username-photos">
                            Northwest Agency
                            <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency
                            </span>
                          </span>
                          <span className="text-secondary d-flex flex-wrap align-items-center">
                            <div className="cstmrem9 sfpro">
                              <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                              <span className="text-secondary">8 hr.</span>
                              <span className="rootColor">
                                Selected for the #siteoftheday award by @design :)
                              </span>
                            </div>
                          </span>
                        </div>

                        <div className="ml-auto">
                          <div className="dropdown spec_icon_bg">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Add to Bookmark</a>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>


                  <div className="full_post">

                    <div className="user-photo-img mt-1">
                      <p className="post_details">
                        <span className="rootColor">@Mimi gold</span> It is a long established fact that a
                        reader will be
                        distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a
                        more-or-less normal distribution of letters, as opposed to using &apos;Content here,
                        content here&apos;,
                        making it look like readable English. .
                      </p>
                    </div>

                    <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                      <div className="icons-left d-flex">
                        <div className="like-icon mr-md-4 mr-2">
                          <a href="#/" title="Applaud">
                            <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                        <div className="like-icon">
                          <a href="#/" title="Boo">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                      </div>

                      <div className="center-icon like-icon">
                        <a href="#/" className="comment-icon-toggle text-decoration-none" id="secondone"
                          title="Comment">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                        <span className="text-secondary">120</span>
                      </div>


                      <div className="icons-left dropdown-reutter-and-copylink d-flex">
                        <div className="like-icon">
                          <div className="dropdown show">
                            <a className="dropdown-toggle text-decoration-none text-dark"
                              id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                              <div className="double_face">
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                              </div>
                              <span className="text-secondary">120</span>

                            </a>

                            <div className="show_3dot_popup d-none">
                              <a className="dot3_link" href="#/">Ditto</a>
                              <a className="dot3_link" href="#/">Broadcast
                                <span className="right_side_broadcast">
                                  <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                  <span className="num_in_dot">30</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="like-icon ml-md-4 ml-2">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item"
                                  href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                  Link</a>
                                <a className="dropdown-item" href="#/">Copy Link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="user-photos-section bg-white cstmbtm">
                  <div className="d-flex flex-column flex-lg-row user-info">
                    <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" width="55" height="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="username-photos">
                            Northwest Agency
                            <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency
                            </span>
                          </span>
                          <span className="text-secondary d-flex flex-wrap align-items-center">
                            <div className="cstmrem9 sfpro">
                              <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                              <span className="text-secondary">8 hr.</span>
                              <span className="rootColor">
                                Selected for the #siteoftheday award by @design :)
                              </span>
                            </div>
                          </span>
                        </div>

                        <div className="ml-auto">
                          <div className="dropdown spec_icon_bg">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Add to Bookmark</a>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>


                  <div className="full_post">

                    <div className="user-photo-img mt-1">
                      <p className="post_details">
                        <span className="rootColor">@Mimi gold</span> It is a long established fact that a
                        reader will be
                        distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a
                        more-or-less normal distribution of letters, as opposed to using &apos;Content here,
                        content here&apos;,
                        making it look like readable English. .
                      </p>
                    </div>

                    <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                      <div className="icons-left d-flex">
                        <div className="like-icon mr-md-4 mr-2">
                          <a href="#/" title="Applaud">
                            <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                        <div className="like-icon">
                          <a href="#/" title="Boo">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                      </div>

                      <div className="center-icon like-icon">
                        <a href="#/" className="comment-icon-toggle text-decoration-none" id="secondone"
                          title="Comment">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                        <span className="text-secondary">120</span>
                      </div>


                      <div className="icons-left dropdown-reutter-and-copylink d-flex">
                        <div className="like-icon">
                          <div className="dropdown show">
                            <a className="dropdown-toggle text-decoration-none text-dark"
                              id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                              <div className="double_face">
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                              </div>
                              <span className="text-secondary">120</span>

                            </a>

                            <div className="show_3dot_popup d-none">
                              <a className="dot3_link" href="#/">Ditto</a>
                              <a className="dot3_link" href="#/">Broadcast
                                <span className="right_side_broadcast">
                                  <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                  <span className="num_in_dot">30</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="like-icon ml-md-4 ml-2">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item"
                                  href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                  Link</a>
                                <a className="dropdown-item" href="#/">Copy Link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>


              <div className="common_input_sections media_sec d-none">
                <div className="main-div cstmbtm shadow-sm">
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/8.png" alt="" width="55" height="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos">
                              Northwest Agency Door
                              <span className="cstmrem9 date user-date grayColor sfpro">@Northwest
                                Agency Door </span>
                            </span>
                          </div>
                        </div>

                        <div className="cstmrem9 sfpro"> <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                          <span className="text-secondary">8 hr.</span>
                          <span className="rootColor">
                            Selected for the #siteoftheday award by @design :)
                          </span>
                        </div>


                      </div>
                    </div>


                    <div className="full_post">

                      <div className="user-photo-img mt-2">
                        <Image className="img-fluid post-width" src="/assets/images/door.png" alt="" fill />
                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-4 mr-2">
                            <a href="#/" title="Applaud">
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <a href="#/" title="Boo">
                              <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon">
                          <a href="#/" className="comment-icon-toggle text-decoration-none" id="secondone"
                            title="Comment">
                            <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>


                        <div className="icons-left dropdown-reutter-and-copylink d-flex">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <div className="double_face">
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                </div>
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="show_3dot_popup d-none">
                                <a className="dot3_link" href="#/">Ditto</a>
                                <a className="dot3_link" href="#/">Broadcast
                                  <span className="right_side_broadcast">
                                    <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                    <span className="num_in_dot">30</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="like-icon ml-md-4 ml-2">
                            <div className="like-icon">
                              <div className="dropdown show">
                                <a className="dropdown-toggle text-decoration-none text-dark"
                                  href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                  <span className="text-secondary">120</span>

                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a className="dropdown-item"
                                    href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                    Link</a>
                                  <a className="dropdown-item" href="#/">Copy Link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>


                <div className="main-div cstmbtm shadow-sm">
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-1 postsprofileimg activeday" src="/assets/images/suggested5.png" alt="" width="55" height="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos">
                              Northwest Agency
                              <span className="cstmrem9 date user-date grayColor sfpro">@Northwest
                                Agency </span>
                            </span>
                            <span className="text-secondary d-flex flex-wrap align-items-center">
                              <div className="cstmrem9 sfpro">
                                <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                                <span className="text-secondary">8 hr.</span>
                                <span className="rootColor">
                                  Selected for the #siteoftheday award by @design :)
                                </span>
                              </div>
                            </span>
                          </div>

                          <div className="ml-auto">
                            <div className="dropdown spec_icon_bg">
                              <i id="dropdownMenuButton" aria-haspopup="true"
                                aria-expanded="false"
                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                                data-toggle="dropdown" aria-hidden="true"></i>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#/">Add to Bookmark</a>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                    <div className="full_post">

                      <div className="user-photo-img mt-2">
                        <Image className="img-fluid post-width" src="/assets/images/14.png" alt="" fill />

                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-4 mr-2">
                            <a href="#/" title="Applaud">
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <a href="#/" title="Boo">
                              <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon">
                          <a href="#/" className="comment-icon-toggle text-decoration-none" id="firstone"
                            title="Comment">
                            <Image className="img-fluid" src="/assets/images/23.png" alt="" fill />
                          </a>
                          <span className="text-secondary">120</span>
                        </div>


                        <div className="icons-left dropdown-reutter-and-copylink d-flex">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <div className="double_face">
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                </div>
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="show_3dot_popup d-none">
                                <a className="dot3_link" href="#/">Ditto</a>
                                <a className="dot3_link" href="#/">Broadcast
                                  <span className="right_side_broadcast">
                                    <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                    <span className="num_in_dot">30</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="like-icon ml-md-4 ml-2">
                            <div className="like-icon">
                              <div className="dropdown show">
                                <a className="dropdown-toggle text-decoration-none text-dark"
                                  href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                  <span className="text-secondary">120</span>

                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a className="dropdown-item"
                                    href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                    Link</a>
                                  <a className="dropdown-item" href="#/">Copy Link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>

                  <div className="bg-white write-message hintable write-message-input firstone"
                    hint-classname="hidden-div" style={{ display: "none" }}>
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" width="55" height="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add a Comment..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="firstone"
                            className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="example bg-white comnt__inner__div firstone" style={{ display: "none" }}>
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" width="55" height="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                          sequi sed exercitationem eum alias vo
                        </p>

                        <div className="icons-left d-flex py-3">
                          <div className="like-ico mr-md-4 mr-2">
                            <a href="#/">
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a href="#/" id="firstone" className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold" href="#/">See More
                              Comments &gt;&gt;</a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="bg-white write-message reply__div firstone" style={{ display: "none" }}>
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" width="55" height="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add Reply..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="firstone"
                            className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reply__inner__div bg-white firstone" style={{ display: "none" }}>
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" width="55" height="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <div className="d-flex">
                          <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" width="55" height="55" />
                          <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                            sequi sed exercitationem eum alias vo
                          </p>
                        </div>

                        <div className="icons-left ml-5 d-flex py-3">
                          <div className="like-ico ml-4 mr-md-4 mr-2">
                            <a href="#/">
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a href="#/" className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold" href="#/">See More Replies
                              &gt;&gt;</a>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>



                </div>
              </div>


              <div className="common_input_sections utter_sec d-none">
                <div className="user-photos-section bg-white cstmbtm">
                  <div className="d-flex flex-column flex-lg-row user-info">
                    <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" width="55" height="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="username-photos">
                            Northwest Agency
                            <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency
                            </span>
                          </span>
                          <span className="text-secondary d-flex flex-wrap align-items-center">
                            <div className="cstmrem9 sfpro">
                              <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                              <span className="text-secondary">8 hr.</span>
                              <span className="rootColor">
                                Selected for the #siteoftheday award by @design :)
                              </span>
                            </div>
                          </span>
                        </div>

                        <div className="ml-auto">
                          <div className="dropdown spec_icon_bg">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Add to Bookmark</a>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>


                  <div className="full_post">

                    <div className="user-photo-img mt-1">
                      <p className="post_details">
                        It is a long established fact that a reader will be
                        distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a
                        more-or-less normal distribution of letters, as opposed to using &apos;Content here,
                        content here&apos;,
                        making it look like readable English. .
                      </p>
                    </div>

                    <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                      <div className="icons-left d-flex">
                        <div className="like-icon mr-md-4 mr-2">
                          <a href="#/" title="Applaud">
                            <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                        <div className="like-icon">
                          <a href="#/" title="Boo">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                      </div>

                      <div className="center-icon like-icon">
                        <a href="#/" className="comment-icon-toggle text-decoration-none" id="secondone"
                          title="Comment">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                        <span className="text-secondary">120</span>
                      </div>


                      <div className="icons-left dropdown-reutter-and-copylink d-flex">
                        <div className="like-icon">
                          <div className="dropdown show">
                            <a className="dropdown-toggle text-decoration-none text-dark"
                              id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                              <div className="double_face">
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                              </div>
                              <span className="text-secondary">120</span>

                            </a>

                            <div className="show_3dot_popup d-none">
                              <a className="dot3_link" href="#/">Ditto</a>
                              <a className="dot3_link" href="#/">Broadcast
                                <span className="right_side_broadcast">
                                  <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                  <span className="num_in_dot">30</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="like-icon ml-md-4 ml-2">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item"
                                  href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                  Link</a>
                                <a className="dropdown-item" href="#/">Copy Link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="user-photos-section bg-white cstmbtm">
                  <div className="d-flex flex-column flex-lg-row user-info">
                    <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" width="55" height="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="username-photos">
                            Northwest Agency
                            <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency
                            </span>
                          </span>
                          <span className="text-secondary d-flex flex-wrap align-items-center">
                            <div className="cstmrem9 sfpro">
                              <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                              <span className="text-secondary">8 hr.</span>
                              <span className="rootColor">
                                Selected for the #siteoftheday award by @design :)
                              </span>
                            </div>
                          </span>
                        </div>

                        <div className="ml-auto">
                          <div className="dropdown spec_icon_bg">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Add to Bookmark</a>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>


                  <div className="full_post">

                    <div className="user-photo-img mt-1">
                      <p className="post_details">
                        It is a long established fact that a reader will be
                        distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a
                        more-or-less normal distribution of letters, as opposed to using &apos;Content here,
                        content here&apos;,
                        making it look like readable English. .
                      </p>
                    </div>

                    <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                      <div className="icons-left d-flex">
                        <div className="like-icon mr-md-4 mr-2">
                          <a href="#/" title="Applaud">
                            <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                        <div className="like-icon">
                          <a href="#/" title="Boo">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                      </div>

                      <div className="center-icon like-icon">
                        <a href="#/" className="comment-icon-toggle text-decoration-none" id="secondone"
                          title="Comment">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                        <span className="text-secondary">120</span>
                      </div>


                      <div className="icons-left dropdown-reutter-and-copylink d-flex">
                        <div className="like-icon">
                          <div className="dropdown show">
                            <a className="dropdown-toggle text-decoration-none text-dark"
                              id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                              <div className="double_face">
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                              </div>
                              <span className="text-secondary">120</span>

                            </a>

                            <div className="show_3dot_popup d-none">
                              <a className="dot3_link" href="#/">Ditto</a>
                              <a className="dot3_link" href="#/">Broadcast
                                <span className="right_side_broadcast">
                                  <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                  <span className="num_in_dot">30</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="like-icon ml-md-4 ml-2">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item"
                                  href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                  Link</a>
                                <a className="dropdown-item" href="#/">Copy Link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="user-photos-section bg-white cstmbtm">
                  <div className="d-flex flex-column flex-lg-row user-info">
                    <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" width="55" height="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="username-photos">
                            Northwest Agency
                            <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency
                            </span>
                          </span>
                          <span className="text-secondary d-flex flex-wrap align-items-center">
                            <div className="cstmrem9 sfpro">
                              <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                              <span className="text-secondary">8 hr.</span>
                              <span className="rootColor">
                                Selected for the #siteoftheday award by @design :)
                              </span>
                            </div>
                          </span>
                        </div>

                        <div className="ml-auto">
                          <div className="dropdown spec_icon_bg">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Add to Bookmark</a>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>


                  <div className="full_post">

                    <div className="user-photo-img mt-1">
                      <p className="post_details">
                        It is a long established fact that a reader will be
                        distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a
                        more-or-less normal distribution of letters, as opposed to using &apos;Content here,
                        content here&apos;,
                        making it look like readable English. .
                      </p>
                    </div>

                    <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                      <div className="icons-left d-flex">
                        <div className="like-icon mr-md-4 mr-2">
                          <a href="#/" title="Applaud">
                            <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                        <div className="like-icon">
                          <a href="#/" title="Boo">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                      </div>

                      <div className="center-icon like-icon">
                        <a href="#/" className="comment-icon-toggle text-decoration-none" id="secondone"
                          title="Comment">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                        <span className="text-secondary">120</span>
                      </div>


                      <div className="icons-left dropdown-reutter-and-copylink d-flex">
                        <div className="like-icon">
                          <div className="dropdown show">
                            <a className="dropdown-toggle text-decoration-none text-dark"
                              id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                              <div className="double_face">
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                              </div>
                              <span className="text-secondary">120</span>

                            </a>

                            <div className="show_3dot_popup d-none">
                              <a className="dot3_link" href="#/">Ditto</a>
                              <a className="dot3_link" href="#/">Broadcast
                                <span className="right_side_broadcast">
                                  <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                  <span className="num_in_dot">30</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="like-icon ml-md-4 ml-2">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item"
                                  href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                  Link</a>
                                <a className="dropdown-item" href="#/">Copy Link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="user-photos-section bg-white cstmbtm">
                  <div className="d-flex flex-column flex-lg-row user-info">
                    <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" width="55" height="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="username-photos">
                            Northwest Agency
                            <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency
                            </span>
                          </span>
                          <span className="text-secondary d-flex flex-wrap align-items-center">
                            <div className="cstmrem9 sfpro">
                              <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                              <span className="text-secondary">8 hr.</span>
                              <span className="rootColor">
                                Selected for the #siteoftheday award by @design :)
                              </span>
                            </div>
                          </span>
                        </div>

                        <div className="ml-auto">
                          <div className="dropdown spec_icon_bg">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Add to Bookmark</a>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>


                  <div className="full_post">

                    <div className="user-photo-img mt-1">
                      <p className="post_details">
                        It is a long established fact that a reader will be
                        distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a
                        more-or-less normal distribution of letters, as opposed to using &apos;Content here,
                        content here&apos;,
                        making it look like readable English. .
                      </p>
                    </div>

                    <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                      <div className="icons-left d-flex">
                        <div className="like-icon mr-md-4 mr-2">
                          <a href="#/" title="Applaud">
                            <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                        <div className="like-icon">
                          <a href="#/" title="Boo">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>
                      </div>

                      <div className="center-icon like-icon">
                        <a href="#/" className="comment-icon-toggle text-decoration-none" id="secondone"
                          title="Comment">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                        <span className="text-secondary">120</span>
                      </div>


                      <div className="icons-left dropdown-reutter-and-copylink d-flex">
                        <div className="like-icon">
                          <div className="dropdown show">
                            <a className="dropdown-toggle text-decoration-none text-dark"
                              id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                              <div className="double_face">
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                              </div>
                              <span className="text-secondary">120</span>

                            </a>

                            <div className="show_3dot_popup d-none">
                              <a className="dot3_link" href="#/">Ditto</a>
                              <a className="dot3_link" href="#/">Broadcast
                                <span className="right_side_broadcast">
                                  <Image src="/assets/images/32.png" alt="" className="brod_cast_img" fill />
                                  <span className="num_in_dot">30</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="like-icon ml-md-4 ml-2">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item"
                                  href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                  Link</a>
                                <a className="dropdown-item" href="#/">Copy Link</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>



              <div className="common_input_sections replies_sec d-none">
                <div className="main-div shadow-sm cstmbtm">
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex pos_relative">
                          <div className="d-flex flex-column">
                            <span className="username-photos">
                              Lebron James
                              <span
                                className="cstmrem9 date user-date grayColor sfpro">@LebronJames</span>
                            </span>
                          </div>

                          <div className="ml-auto">
                            <div className="dropdown spec_icon_bg" onClick={(e) => showThreeDotPopup(e.target)}>
                              <i id="dropdownMenuButton"
                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                            </div>
                          </div>

                          <div className="three_dot_popup d-none">
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_bell.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_list.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore utters for a while
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/list_spectacle.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                See more/Begin viewing
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/save.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Save
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/notes.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text" onClick={(e) => show_reportUtterPopup(e.target)}>
                                Report this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/analytics.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                View analytics
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="cstmrem9 sfpro"> <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                          <span className="text-secondary">8 hr.</span>
                          <span className="rootColor">
                            Selected for the #siteoftheday award by @design :)
                          </span>
                        </div>


                      </div>
                    </div>


                    <div className="full_post">

                      <div className="user-photo-img mt-2">
                        <Image className="img-fluid post-width" src="/assets/images/door.png" alt="" fill />
                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-4 mr-2">
                            <a title="Applaud">
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <a title="Boo">
                              <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon" onClick={(e) => openComments(e.target)}>
                          <a className="comment-icon-toggle text-decoration-none">
                            <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>


                        <div className="icons-left dropdown-reutter-and-copylink d-flex">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <div className="double_face">
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                </div>
                                <span className="text-secondary">120</span>

                              </a>


                              <div className="show_3dot_popup d-none">
                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                  </span>
                                  <a className="dot3_link">Ditto</a>
                                </div>

                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image src="/assets/images/shouting.png" alt=""
                                      className="shouting_img" fill />
                                  </span>
                                  <a className="dot3_link">Broadcast
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>

                          <div className="like-icon ml-md-4 ml-2">
                            <div className="like-icon">
                              <div className="dropdown show">
                                <a className="dropdown-toggle text-decoration-none text-dark"
                                  href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                  <span className="text-secondary">120</span>

                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a className="dropdown-item"
                                    href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                    Link</a>
                                  <a className="dropdown-item">Copy Link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>



                      <div className="all_related_comments with_no_comment_box">



                        <div className="user_comment" id="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt=""
                              id="comment-user" fill />
                          </div>

                          <div className="user_bio">
                            <div className="user_name">
                              <h3>Mimi Gold</h3>
                            </div>

                            <div className="user_history">
                              <span>@JamesLored</span>
                              <Image src="/assets/images/time-icon.png" alt="" fill />
                              <span>3hr</span>
                            </div>
                          </div>

                        </div>
                        <div className="comment_text">
                          <span>On this day, James Lored commented on an utter about the inflation
                            rate and its
                            negative
                            effect
                            on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt=""
                                  className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>


                      </div>


                    </div>




                  </div>
                </div>

                <div className="main-div shadow-sm cstmbtm">
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex pos_relative">
                          <div className="d-flex flex-column">
                            <span className="username-photos">
                              Lebron James
                              <span
                                className="cstmrem9 date user-date grayColor sfpro">@LebronJames</span>
                            </span>
                          </div>

                          <div className="ml-auto">
                            <div className="dropdown spec_icon_bg" onClick={(e) => showThreeDotPopup(e.target)}>
                              <i id="dropdownMenuButton"
                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                            </div>
                          </div>

                          <div className="three_dot_popup d-none">
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_bell.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_list.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore utters for a while
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/list_spectacle.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                See more/Begin viewing
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/save.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Save
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/notes.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text" onClick={(e) => show_reportUtterPopup(e.target)}>
                                Report this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/analytics.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                View analytics
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="cstmrem9 sfpro"> <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                          <span className="text-secondary">8 hr.</span>
                          <span className="rootColor">
                            Selected for the #siteoftheday award by @design :)
                          </span>
                        </div>


                      </div>
                    </div>


                    <div className="full_post">

                      <div className="user-photo-img mt-2">
                        <Image className="img-fluid post-width" src="/assets/images/door.png" alt="" fill />
                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-4 mr-2">
                            <a title="Applaud">
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <a title="Boo">
                              <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon" onClick={(e) => openComments(e.target)}>
                          <a className="comment-icon-toggle text-decoration-none">
                            <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>


                        <div className="icons-left dropdown-reutter-and-copylink d-flex">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <div className="double_face">
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                </div>
                                <span className="text-secondary">120</span>

                              </a>


                              <div className="show_3dot_popup d-none">
                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                  </span>
                                  <a className="dot3_link">Ditto</a>
                                </div>

                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image src="/assets/images/shouting.png" alt=""
                                      className="shouting_img" fill />
                                  </span>
                                  <a className="dot3_link">Broadcast
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>

                          <div className="like-icon ml-md-4 ml-2">
                            <div className="like-icon">
                              <div className="dropdown show">
                                <a className="dropdown-toggle text-decoration-none text-dark"
                                  href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                  <span className="text-secondary">120</span>

                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a className="dropdown-item"
                                    href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                    Link</a>
                                  <a className="dropdown-item">Copy Link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>



                      <div className="all_related_comments with_no_comment_box">
                        <div className="related_comment">

                          <div className="comment_list">
                            <div className="user_comment">
                              <div className="user_image">
                                <Image src="/assets/images/suggested3.png" className="rounded-circle"
                                  alt="" id="comment-user" fill />
                              </div>

                              <div className="user_bio">
                                <div className="user_name">
                                  <h3>Lebron James</h3>
                                </div>

                                <div className="user_history">
                                  <span>@JamesLored</span>
                                  <Image src="/assets/images/time-icon.png" alt="" fill />
                                  <span>3hr</span>
                                </div>
                              </div>

                            </div>
                            <div className="comment_text">
                              <span>On this day, James Lored commented on an utter about the
                                inflation rate and its
                                negative
                                effect on the cost of producing local furniture.</span>
                              <div className="text_aria">
                                <div className="reaction">
                                  <div className="like">
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/1.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                    <span>5</span>
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/2.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                  </div>
                                </div>
                                <div className="share">
                                  <div className="share_circle">
                                    <Image src="/assets/images/new_icon/3.png" alt=""
                                      className="comment_icons" fill />
                                  </div>
                                  <span className="number-comment">20</span>
                                  <span className="comment_btn">REPLY</span>
                                  <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                                </div>

                              </div>
                            </div>



                            <div className="in_comment">
                              <div className="bar"></div>

                              <div className="sub_comment">
                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/side2.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Sim Love</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@SimLove</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>



                              </div>
                            </div>

                            <span className="replies"> See more replies <Image
                              src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                          </div>



                        </div>

                      </div>


                    </div>




                  </div>
                </div>
              </div>



              <div className="common_input_sections reactions_sec d-none">
                <div className="main-div cstmbtm shadow-sm">
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex pos_relative">
                          <div className="d-flex flex-column">
                            <span className="username-photos">
                              Northwest Agency
                              <span className="cstmrem9 date user-date grayColor sfpro">@Northwest
                                Agency </span>
                            </span>
                            <span className="text-secondary d-flex flex-wrap align-items-center">
                              <div className="cstmrem9 sfpro">
                                <Image className="ver__sub" src="/assets/images/time-icon.png"
                                  width="20" alt="" height="20" />
                                <span className="text-secondary">8 hr.</span>
                                <span className="rootColor">
                                  Selected for the #siteoftheday award by @design :)
                                </span>
                              </div>
                            </span>
                          </div>

                          <div className="ml-auto">
                            <div className="dropdown spec_icon_bg" onClick={(e) => showThreeDotPopup(e.target)}>
                              <i id="dropdownMenuButton"
                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                            </div>
                          </div>

                          <div className="three_dot_popup d-none">
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_bell.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_list.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore utters for a while
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/list_spectacle.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                See more/Begin viewing
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/save.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Save
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/notes.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text" onClick={(e) => show_reportUtterPopup(e.target)}>
                                Report this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/analytics.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                View analytics
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>


                    <div className="full_post">

                      <div className="user-photo-img mt-1">
                        <p className="text-justify sfpro rem9">
                          It is a long established fact that a reader will be distracted by the
                          readable content of a
                          page
                          when looking at its layout. The point of using Lorem Ipsum is that it has a
                          more-or-less
                          normal
                          distribution of letters, as opposed to using &apos;Content here, content here&apos;,
                          making it look
                          like
                          readable English..
                        </p>
                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-4 mr-2">
                            <a title="Applaud">
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <a title="Boo">
                              <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon" onClick={(e) => openComments(e.target)}>
                          <a className="comment-icon-toggle text-decoration-none">
                            <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>


                        <div className="icons-left dropdown-reutter-and-copylink d-flex">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <div className="double_face">
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                </div>
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="show_3dot_popup d-none">
                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                  </span>
                                  <a className="dot3_link">Ditto</a>
                                </div>

                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image src="/assets/images/shouting.png" alt=""
                                      className="shouting_img" fill />
                                  </span>
                                  <a className="dot3_link">Broadcast
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="like-icon ml-md-4 ml-2">
                            <div className="like-icon">
                              <div className="dropdown show">
                                <a className="dropdown-toggle text-decoration-none text-dark"
                                  href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                  <span className="text-secondary">120</span>

                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a className="dropdown-item"
                                    href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                    Link</a>
                                  <a className="dropdown-item">Copy Link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="all_related_comments d-none">
                        <div className="related_comment">
                          <div className="comment-photos-section bg-white pt-3">
                            <div className="d-flex flex-column flex-lg-row user-info">
                              <Image src="/assets/images/8.png" className="rounded-circle" alt=""
                                id="comment-user" fill />

                              <div className="comment_inputer">
                                <div className="input-item">
                                  <input type="text" placeholder="What an insightful post." className="comment_input" />
                                </div>
                                <div className="comment_others">
                                  <Image src="/assets/images/30.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/camera.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/gif.png" alt="" fill />
                                </div>
                              </div>

                              <div className="comment_sent">
                                <Image src="/assets/images/new_icon/Ksaycomment.png" alt="" fill />
                              </div>
                            </div>
                          </div>

                          <div className="comment_list">
                            <div className="user_comment">
                              <div className="user_image">
                                <Image src="/assets/images/suggested3.png" className="rounded-circle"
                                  alt="" id="comment-user" fill />
                              </div>

                              <div className="user_bio">
                                <div className="user_name">
                                  <h3>James Lored</h3>
                                </div>

                                <div className="user_history">
                                  <span>@JamesLored</span>
                                  <Image src="/assets/images/time-icon.png" alt="" fill />
                                  <span>3hr</span>
                                </div>
                              </div>

                            </div>
                            <div className="comment_text">
                              <span>On this day, James Lored commented on an utter about the
                                inflation rate and its
                                negative
                                effect on the cost of producing local furniture.</span>
                              <div className="text_aria">
                                <div className="reaction">
                                  <div className="like">
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/1.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                    <span>5</span>
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/2.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                  </div>
                                </div>
                                <div className="share">
                                  <div className="share_circle">
                                    <Image src="/assets/images/new_icon/3.png" alt=""
                                      className="comment_icons" fill />
                                  </div>
                                  <span className="number-comment">20</span>
                                  <span className="comment_btn">REPLY</span>
                                  <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                                </div>

                              </div>
                            </div>



                            <div className="in_comment">
                              <div className="bar"></div>

                              <div className="sub_comment">
                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/side2.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Sim Love</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@SimLove</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>








                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/suggested3.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Tom Hanks</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@TomHabks</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>

                              </div>
                            </div>

                            <span className="replies"> See more replies <Image
                              src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                          </div>



                        </div>


                        <div className="user_comment" id="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt=""
                              id="comment-user" fill />
                          </div>

                          <div className="user_bio">
                            <div className="user_name">
                              <h3>James Lored</h3>
                            </div>

                            <div className="user_history">
                              <span>@JamesLored</span>
                              <Image src="/assets/images/time-icon.png" alt="" fill />
                              <span>3hr</span>
                            </div>
                          </div>

                        </div>
                        <div className="comment_text">
                          <span>On this day, James Lored commented on an utter about the inflation
                            rate and its
                            negative
                            effect
                            on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt=""
                                  className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>


                        <div className="btn_aria">
                          <button className="back_top">Back to top</button>
                          <button className="view_more">View more comments</button>
                        </div>
                      </div>
                    </div>

                  </div>





                  <div className="bg-white write-message hintable write-message-input secondone"
                    hint-classname="hidden-div" style={{ display: "none" }}>
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add a Comment..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="example bg-white comnt__inner__div secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                          sequi sed exercitationem eum alias vo
                        </p>

                        <div className="icons-left d-flex py-3">
                          <div className="like-ico mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a id="secondone" className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Comments &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="bg-white write-message reply__div secondone">
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add Reply..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reply__inner__div bg-white secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <div className="d-flex">
                          <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                          <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                            sequi sed exercitationem eum alias vo
                          </p>
                        </div>

                        <div className="icons-left ml-5 d-flex py-3">
                          <div className="like-ico ml-4 mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Replies &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>



                </div>



                <div className="main-div cstmbtm shadow-sm">
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex pos_relative">
                          <div className="d-flex flex-column">
                            <span className="username-photos">
                              Northwest Agency
                              <span className="cstmrem9 date user-date grayColor sfpro">@Northwest
                                Agency </span>
                            </span>
                            <span className="text-secondary d-flex flex-wrap align-items-center">
                              <div className="cstmrem9 sfpro">
                                <Image className="ver__sub" src="/assets/images/time-icon.png"
                                  width="20" alt="" height="20" />
                                <span className="text-secondary">8 hr.</span>
                                <span className="rootColor">
                                  Selected for the #siteoftheday award by @design :)
                                </span>
                              </div>
                            </span>
                          </div>

                          <div className="ml-auto">
                            <div className="dropdown spec_icon_bg" onClick={(e) => showThreeDotPopup(e.target)}>
                              <i id="dropdownMenuButton"
                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                            </div>
                          </div>

                          <div className="three_dot_popup d-none">
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_bell.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_list.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore utters for a while
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/list_spectacle.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                See more/Begin viewing
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/save.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Save
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/notes.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text" onClick={(e) => show_reportUtterPopup(e.target)}>
                                Report this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/analytics.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                View analytics
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>


                    <div className="full_post">

                      <div className="user-photo-img mt-1">
                        <p className="text-justify sfpro rem9">
                          It is a long established fact that a reader will be distracted by the
                          readable content of a
                          page
                          when looking at its layout. The point of using Lorem Ipsum is that it has a
                          more-or-less
                          normal
                          distribution of letters, as opposed to using &apos;Content here, content here&apos;,
                          making it look
                          like
                          readable English..
                        </p>
                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-4 mr-2">
                            <a title="Applaud">
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <a title="Boo">
                              <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon" onClick={(e) => openComments(e.target)}>
                          <a className="comment-icon-toggle text-decoration-none">
                            <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>


                        <div className="icons-left dropdown-reutter-and-copylink d-flex">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <div className="double_face">
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                </div>
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="show_3dot_popup d-none">
                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                  </span>
                                  <a className="dot3_link">Ditto</a>
                                </div>

                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image src="/assets/images/shouting.png" alt=""
                                      className="shouting_img" fill />
                                  </span>
                                  <a className="dot3_link">Broadcast
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="like-icon ml-md-4 ml-2">
                            <div className="like-icon">
                              <div className="dropdown show">
                                <a className="dropdown-toggle text-decoration-none text-dark"
                                  href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                  <span className="text-secondary">120</span>

                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a className="dropdown-item"
                                    href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                    Link</a>
                                  <a className="dropdown-item">Copy Link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="all_related_comments d-none">
                        <div className="related_comment">
                          <div className="comment-photos-section bg-white pt-3">
                            <div className="d-flex flex-column flex-lg-row user-info">
                              <Image src="/assets/images/8.png" className="rounded-circle" alt=""
                                id="comment-user" fill />

                              <div className="comment_inputer">
                                <div className="input-item">
                                  <input type="text" placeholder="What an insightful post." className="comment_input" />
                                </div>
                                <div className="comment_others">
                                  <Image src="/assets/images/30.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/camera.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/gif.png" alt="" fill />
                                </div>
                              </div>

                              <div className="comment_sent">
                                <Image src="/assets/images/new_icon/Ksaycomment.png" alt="" fill />
                              </div>
                            </div>
                          </div>

                          <div className="comment_list">
                            <div className="user_comment">
                              <div className="user_image">
                                <Image src="/assets/images/suggested3.png" className="rounded-circle"
                                  alt="" id="comment-user" fill />
                              </div>

                              <div className="user_bio">
                                <div className="user_name">
                                  <h3>James Lored</h3>
                                </div>

                                <div className="user_history">
                                  <span>@JamesLored</span>
                                  <Image src="/assets/images/time-icon.png" alt="" fill />
                                  <span>3hr</span>
                                </div>
                              </div>

                            </div>
                            <div className="comment_text">
                              <span>On this day, James Lored commented on an utter about the
                                inflation rate and its
                                negative
                                effect on the cost of producing local furniture.</span>
                              <div className="text_aria">
                                <div className="reaction">
                                  <div className="like">
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/1.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                    <span>5</span>
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/2.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                  </div>
                                </div>
                                <div className="share">
                                  <div className="share_circle">
                                    <Image src="/assets/images/new_icon/3.png" alt=""
                                      className="comment_icons" fill />
                                  </div>
                                  <span className="number-comment">20</span>
                                  <span className="comment_btn">REPLY</span>
                                  <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                                </div>

                              </div>
                            </div>



                            <div className="in_comment">
                              <div className="bar"></div>

                              <div className="sub_comment">
                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/side2.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Sim Love</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@SimLove</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>








                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/suggested3.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Tom Hanks</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@TomHabks</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>

                              </div>
                            </div>

                            <span className="replies"> See more replies <Image
                              src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                          </div>



                        </div>


                        <div className="user_comment" id="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt=""
                              id="comment-user" fill />
                          </div>

                          <div className="user_bio">
                            <div className="user_name">
                              <h3>James Lored</h3>
                            </div>

                            <div className="user_history">
                              <span>@JamesLored</span>
                              <Image src="/assets/images/time-icon.png" alt="" fill />
                              <span>3hr</span>
                            </div>
                          </div>

                        </div>
                        <div className="comment_text">
                          <span>On this day, James Lored commented on an utter about the inflation
                            rate and its
                            negative
                            effect
                            on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt=""
                                  className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>


                        <div className="btn_aria">
                          <button className="back_top">Back to top</button>
                          <button className="view_more">View more comments</button>
                        </div>
                      </div>
                    </div>

                  </div>





                  <div className="bg-white write-message hintable write-message-input secondone"
                    hint-classname="hidden-div" style={{ display: "none" }}>
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add a Comment..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="example bg-white comnt__inner__div secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                          sequi sed exercitationem eum alias vo
                        </p>

                        <div className="icons-left d-flex py-3">
                          <div className="like-ico mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a id="secondone" className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Comments &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="bg-white write-message reply__div secondone">
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add Reply..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reply__inner__div bg-white secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <div className="d-flex">
                          <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                          <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                            sequi sed exercitationem eum alias vo
                          </p>
                        </div>

                        <div className="icons-left ml-5 d-flex py-3">
                          <div className="like-ico ml-4 mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Replies &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>



                </div>


                <div className="main-div cstmbtm shadow-sm">
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex pos_relative">
                          <div className="d-flex flex-column">
                            <span className="username-photos">
                              Northwest Agency
                              <span className="cstmrem9 date user-date grayColor sfpro">@Northwest
                                Agency </span>
                            </span>
                            <span className="text-secondary d-flex flex-wrap align-items-center">
                              <div className="cstmrem9 sfpro">
                                <Image className="ver__sub" src="/assets/images/time-icon.png"
                                  width="20" alt="" height="20" />
                                <span className="text-secondary">8 hr.</span>
                                <span className="rootColor">
                                  Selected for the #siteoftheday award by @design :)
                                </span>
                              </div>
                            </span>
                          </div>

                          <div className="ml-auto">
                            <div className="dropdown spec_icon_bg" onClick={(e) => showThreeDotPopup(e.target)}>
                              <i id="dropdownMenuButton"
                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                            </div>
                          </div>

                          <div className="three_dot_popup d-none">
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_bell.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_list.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore utters for a while
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/list_spectacle.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                See more/Begin viewing
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/save.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Save
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/notes.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text" onClick={(e) => show_reportUtterPopup(e.target)}>
                                Report this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/analytics.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                View analytics
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>


                    <div className="full_post">

                      <div className="user-photo-img mt-1">
                        <p className="text-justify sfpro rem9">
                          It is a long established fact that a reader will be distracted by the
                          readable content of a
                          page
                          when looking at its layout. The point of using Lorem Ipsum is that it has a
                          more-or-less
                          normal
                          distribution of letters, as opposed to using &apos;Content here, content here&apos;,
                          making it look
                          like
                          readable English..
                        </p>
                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-4 mr-2">
                            <a title="Applaud">
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <a title="Boo">
                              <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon" onClick={(e) => openComments(e.target)}>
                          <a className="comment-icon-toggle text-decoration-none">
                            <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>


                        <div className="icons-left dropdown-reutter-and-copylink d-flex">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <div className="double_face">
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                </div>
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="show_3dot_popup d-none">
                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                  </span>
                                  <a className="dot3_link">Ditto</a>
                                </div>

                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image src="/assets/images/shouting.png" alt=""
                                      className="shouting_img" fill />
                                  </span>
                                  <a className="dot3_link">Broadcast
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="like-icon ml-md-4 ml-2">
                            <div className="like-icon">
                              <div className="dropdown show">
                                <a className="dropdown-toggle text-decoration-none text-dark"
                                  href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                  <span className="text-secondary">120</span>

                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a className="dropdown-item"
                                    href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                    Link</a>
                                  <a className="dropdown-item">Copy Link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="all_related_comments d-none">
                        <div className="related_comment">
                          <div className="comment-photos-section bg-white pt-3">
                            <div className="d-flex flex-column flex-lg-row user-info">
                              <Image src="/assets/images/8.png" className="rounded-circle" alt=""
                                id="comment-user" fill />

                              <div className="comment_inputer">
                                <div className="input-item">
                                  <input type="text" placeholder="What an insightful post." className="comment_input" />
                                </div>
                                <div className="comment_others">
                                  <Image src="/assets/images/30.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/camera.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/gif.png" alt="" fill />
                                </div>
                              </div>

                              <div className="comment_sent">
                                <Image src="/assets/images/new_icon/Ksaycomment.png" alt="" fill />
                              </div>
                            </div>
                          </div>

                          <div className="comment_list">
                            <div className="user_comment">
                              <div className="user_image">
                                <Image src="/assets/images/suggested3.png" className="rounded-circle"
                                  alt="" id="comment-user" fill />
                              </div>

                              <div className="user_bio">
                                <div className="user_name">
                                  <h3>James Lored</h3>
                                </div>

                                <div className="user_history">
                                  <span>@JamesLored</span>
                                  <Image src="/assets/images/time-icon.png" alt="" fill />
                                  <span>3hr</span>
                                </div>
                              </div>

                            </div>
                            <div className="comment_text">
                              <span>On this day, James Lored commented on an utter about the
                                inflation rate and its
                                negative
                                effect on the cost of producing local furniture.</span>
                              <div className="text_aria">
                                <div className="reaction">
                                  <div className="like">
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/1.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                    <span>5</span>
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/2.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                  </div>
                                </div>
                                <div className="share">
                                  <div className="share_circle">
                                    <Image src="/assets/images/new_icon/3.png" alt=""
                                      className="comment_icons" fill />
                                  </div>
                                  <span className="number-comment">20</span>
                                  <span className="comment_btn">REPLY</span>
                                  <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                                </div>

                              </div>
                            </div>



                            <div className="in_comment">
                              <div className="bar"></div>

                              <div className="sub_comment">
                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/side2.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Sim Love</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@SimLove</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>








                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/suggested3.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Tom Hanks</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@TomHabks</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>

                              </div>
                            </div>

                            <span className="replies"> See more replies <Image
                              src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                          </div>



                        </div>


                        <div className="user_comment" id="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt=""
                              id="comment-user" fill />
                          </div>

                          <div className="user_bio">
                            <div className="user_name">
                              <h3>James Lored</h3>
                            </div>

                            <div className="user_history">
                              <span>@JamesLored</span>
                              <Image src="/assets/images/time-icon.png" alt="" fill />
                              <span>3hr</span>
                            </div>
                          </div>

                        </div>
                        <div className="comment_text">
                          <span>On this day, James Lored commented on an utter about the inflation
                            rate and its
                            negative
                            effect
                            on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt=""
                                  className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>


                        <div className="btn_aria">
                          <button className="back_top">Back to top</button>
                          <button className="view_more">View more comments</button>
                        </div>
                      </div>
                    </div>

                  </div>





                  <div className="bg-white write-message hintable write-message-input secondone"
                    hint-classname="hidden-div" style={{ display: "none" }}>
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add a Comment..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="example bg-white comnt__inner__div secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                          sequi sed exercitationem eum alias vo
                        </p>

                        <div className="icons-left d-flex py-3">
                          <div className="like-ico mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a id="secondone" className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Comments &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="bg-white write-message reply__div secondone">
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add Reply..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reply__inner__div bg-white secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <div className="d-flex">
                          <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                          <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                            sequi sed exercitationem eum alias vo
                          </p>
                        </div>

                        <div className="icons-left ml-5 d-flex py-3">
                          <div className="like-ico ml-4 mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Replies &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>



                </div>


                <div className="main-div cstmbtm shadow-sm">
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex pos_relative">
                          <div className="d-flex flex-column">
                            <span className="username-photos">
                              Northwest Agency
                              <span className="cstmrem9 date user-date grayColor sfpro">@Northwest
                                Agency </span>
                            </span>
                            <span className="text-secondary d-flex flex-wrap align-items-center">
                              <div className="cstmrem9 sfpro">
                                <Image className="ver__sub" src="/assets/images/time-icon.png"
                                  width="20" alt="" height="20" />
                                <span className="text-secondary">8 hr.</span>
                                <span className="rootColor">
                                  Selected for the #siteoftheday award by @design :)
                                </span>
                              </div>
                            </span>
                          </div>

                          <div className="ml-auto">
                            <div className="dropdown spec_icon_bg" onClick={(e) => showThreeDotPopup(e.target)}>
                              <i id="dropdownMenuButton"
                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                            </div>
                          </div>

                          <div className="three_dot_popup d-none">
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_bell.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_list.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore utters for a while
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/list_spectacle.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                See more/Begin viewing
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/save.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Save
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/notes.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text" onClick={(e) => show_reportUtterPopup(e.target)}>
                                Report this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/analytics.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                View analytics
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>


                    <div className="full_post">

                      <div className="user-photo-img mt-1">
                        <p className="text-justify sfpro rem9">
                          It is a long established fact that a reader will be distracted by the
                          readable content of a
                          page
                          when looking at its layout. The point of using Lorem Ipsum is that it has a
                          more-or-less
                          normal
                          distribution of letters, as opposed to using &apos;Content here, content here&apos;,
                          making it look
                          like
                          readable English..
                        </p>
                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-4 mr-2">
                            <a title="Applaud">
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <a title="Boo">
                              <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon" onClick={(e) => openComments(e.target)}>
                          <a className="comment-icon-toggle text-decoration-none">
                            <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>


                        <div className="icons-left dropdown-reutter-and-copylink d-flex">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <div className="double_face">
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                </div>
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="show_3dot_popup d-none">
                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                  </span>
                                  <a className="dot3_link">Ditto</a>
                                </div>

                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image src="/assets/images/shouting.png" alt=""
                                      className="shouting_img" fill />
                                  </span>
                                  <a className="dot3_link">Broadcast
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="like-icon ml-md-4 ml-2">
                            <div className="like-icon">
                              <div className="dropdown show">
                                <a className="dropdown-toggle text-decoration-none text-dark"
                                  href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                  <span className="text-secondary">120</span>

                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a className="dropdown-item"
                                    href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                    Link</a>
                                  <a className="dropdown-item">Copy Link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="all_related_comments d-none">
                        <div className="related_comment">
                          <div className="comment-photos-section bg-white pt-3">
                            <div className="d-flex flex-column flex-lg-row user-info">
                              <Image src="/assets/images/8.png" className="rounded-circle" alt=""
                                id="comment-user" fill />

                              <div className="comment_inputer">
                                <div className="input-item">
                                  <input type="text" placeholder="What an insightful post." className="comment_input" />
                                </div>
                                <div className="comment_others">
                                  <Image src="/assets/images/30.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/camera.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/gif.png" alt="" fill />
                                </div>
                              </div>

                              <div className="comment_sent">
                                <Image src="/assets/images/new_icon/Ksaycomment.png" alt="" fill />
                              </div>
                            </div>
                          </div>

                          <div className="comment_list">
                            <div className="user_comment">
                              <div className="user_image">
                                <Image src="/assets/images/suggested3.png" className="rounded-circle"
                                  alt="" id="comment-user" fill />
                              </div>

                              <div className="user_bio">
                                <div className="user_name">
                                  <h3>James Lored</h3>
                                </div>

                                <div className="user_history">
                                  <span>@JamesLored</span>
                                  <Image src="/assets/images/time-icon.png" alt="" fill />
                                  <span>3hr</span>
                                </div>
                              </div>

                            </div>
                            <div className="comment_text">
                              <span>On this day, James Lored commented on an utter about the
                                inflation rate and its
                                negative
                                effect on the cost of producing local furniture.</span>
                              <div className="text_aria">
                                <div className="reaction">
                                  <div className="like">
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/1.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                    <span>5</span>
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/2.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                  </div>
                                </div>
                                <div className="share">
                                  <div className="share_circle">
                                    <Image src="/assets/images/new_icon/3.png" alt=""
                                      className="comment_icons" fill />
                                  </div>
                                  <span className="number-comment">20</span>
                                  <span className="comment_btn">REPLY</span>
                                  <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                                </div>

                              </div>
                            </div>



                            <div className="in_comment">
                              <div className="bar"></div>

                              <div className="sub_comment">
                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/side2.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Sim Love</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@SimLove</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>








                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/suggested3.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Tom Hanks</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@TomHabks</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>

                              </div>
                            </div>

                            <span className="replies"> See more replies <Image
                              src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                          </div>



                        </div>


                        <div className="user_comment" id="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt=""
                              id="comment-user" fill />
                          </div>

                          <div className="user_bio">
                            <div className="user_name">
                              <h3>James Lored</h3>
                            </div>

                            <div className="user_history">
                              <span>@JamesLored</span>
                              <Image src="/assets/images/time-icon.png" alt="" fill />
                              <span>3hr</span>
                            </div>
                          </div>

                        </div>
                        <div className="comment_text">
                          <span>On this day, James Lored commented on an utter about the inflation
                            rate and its
                            negative
                            effect
                            on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt=""
                                  className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>


                        <div className="btn_aria">
                          <button className="back_top">Back to top</button>
                          <button className="view_more">View more comments</button>
                        </div>
                      </div>
                    </div>

                  </div>





                  <div className="bg-white write-message hintable write-message-input secondone"
                    hint-classname="hidden-div" style={{ display: "none" }}>
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add a Comment..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="example bg-white comnt__inner__div secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                          sequi sed exercitationem eum alias vo
                        </p>

                        <div className="icons-left d-flex py-3">
                          <div className="like-ico mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a id="secondone" className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Comments &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="bg-white write-message reply__div secondone">
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add Reply..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reply__inner__div bg-white secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <div className="d-flex">
                          <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                          <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                            sequi sed exercitationem eum alias vo
                          </p>
                        </div>

                        <div className="icons-left ml-5 d-flex py-3">
                          <div className="like-ico ml-4 mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Replies &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>



                </div>


                <div className="main-div shadow-sm">
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-1 postsprofileimg " src="/assets/images/suggested2.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex pos_relative">
                          <div className="d-flex flex-column">
                            <span className="username-photos">
                              Northwest Agency
                              <span className="cstmrem9 date user-date grayColor sfpro">@Northwest
                                Agency </span>
                            </span>
                            <span className="text-secondary d-flex flex-wrap align-items-center">
                              <div className="cstmrem9 sfpro">
                                <Image className="ver__sub" src="/assets/images/time-icon.png"
                                  width="20" alt="" height="20" />
                                <span className="text-secondary">8 hr.</span>
                                <span className="rootColor">
                                  Selected for the #siteoftheday award by @design :)
                                </span>
                              </div>
                            </span>
                          </div>

                          <div className="ml-auto">
                            <div className="dropdown spec_icon_bg" onClick={(e) => showThreeDotPopup(e.target)}>
                              <i id="dropdownMenuButton"
                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                            </div>
                          </div>

                          <div className="three_dot_popup d-none">
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_bell.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/cross_list.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Ignore utters for a while
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/list_spectacle.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                See more/Begin viewing
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/save.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                Save
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/notes.png" alt="" className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text" onClick={(e) => show_reportUtterPopup(e.target)}>
                                Report this
                              </div>
                            </div>
                            <div className="popup_line">
                              <div className="left_pop_icon">
                                <Image src="/assets/images/analytics.png" alt=""
                                  className="popup_icon" fill />
                              </div>
                              <div className="right_popup_text">
                                View analytics
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>


                    <div className="full_post">

                      <div className="user-photo-img mt-1">
                        <p className="text-justify sfpro rem9">
                          It is a long established fact that a reader will be distracted by the
                          readable content of a
                          page
                          when looking at its layout. The point of using Lorem Ipsum is that it has a
                          more-or-less
                          normal
                          distribution of letters, as opposed to using &apos;Content here, content here&apos;,
                          making it look
                          like
                          readable English..
                        </p>
                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-4 mr-2">
                            <a title="Applaud">
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <a title="Boo">
                              <Image className="img-fluid" src="/assets/images/21.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon" onClick={(e) => openComments(e.target)}>
                          <a className="comment-icon-toggle text-decoration-none">
                            <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                          <span className="text-secondary">120</span>
                        </div>


                        <div className="icons-left dropdown-reutter-and-copylink d-flex">
                          <div className="like-icon">
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-decoration-none text-dark"
                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e.target)}>
                                <div className="double_face">
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                  <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                </div>
                                <span className="text-secondary">120</span>

                              </a>

                              <div className="show_3dot_popup d-none">
                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                    <Image className="img-fluid ditto_icons"
                                      src="/assets/images/19.png" alt="" fill />
                                  </span>
                                  <a className="dot3_link">Ditto</a>
                                </div>

                                <div className="line_flex">
                                  <span className="left_side_broadcast">
                                    <Image src="/assets/images/shouting.png" alt=""
                                      className="shouting_img" fill />
                                  </span>
                                  <a className="dot3_link">Broadcast
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="like-icon ml-md-4 ml-2">
                            <div className="like-icon">
                              <div className="dropdown show">
                                <a className="dropdown-toggle text-decoration-none text-dark"
                                  href="#" role="button" id="dropdownMenuLink"
                                  data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                                  <span className="text-secondary">120</span>

                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <a className="dropdown-item"
                                    href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                                    Link</a>
                                  <a className="dropdown-item">Copy Link</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="all_related_comments d-none">
                        <div className="related_comment">
                          <div className="comment-photos-section bg-white pt-3">
                            <div className="d-flex flex-column flex-lg-row user-info">
                              <Image src="/assets/images/8.png" className="rounded-circle" alt=""
                                id="comment-user" fill />

                              <div className="comment_inputer">
                                <div className="input-item">
                                  <input type="text" placeholder="What an insightful post." className="comment_input" />
                                </div>
                                <div className="comment_others">
                                  <Image src="/assets/images/30.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/camera.png" alt="" fill />
                                  <Image src="/assets/images/new_icon/gif.png" alt="" fill />
                                </div>
                              </div>

                              <div className="comment_sent">
                                <Image src="/assets/images/new_icon/Ksaycomment.png" alt="" fill />
                              </div>
                            </div>
                          </div>

                          <div className="comment_list">
                            <div className="user_comment">
                              <div className="user_image">
                                <Image src="/assets/images/suggested3.png" className="rounded-circle"
                                  alt="" id="comment-user" fill />
                              </div>

                              <div className="user_bio">
                                <div className="user_name">
                                  <h3>James Lored</h3>
                                </div>

                                <div className="user_history">
                                  <span>@JamesLored</span>
                                  <Image src="/assets/images/time-icon.png" alt="" fill />
                                  <span>3hr</span>
                                </div>
                              </div>

                            </div>
                            <div className="comment_text">
                              <span>On this day, James Lored commented on an utter about the
                                inflation rate and its
                                negative
                                effect on the cost of producing local furniture.</span>
                              <div className="text_aria">
                                <div className="reaction">
                                  <div className="like">
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/1.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                    <span>5</span>
                                    <div className="like_circle">
                                      <Image src="/assets/images/new_icon/2.png" alt=""
                                        className="comment_icons" fill />
                                    </div>
                                  </div>
                                </div>
                                <div className="share">
                                  <div className="share_circle">
                                    <Image src="/assets/images/new_icon/3.png" alt=""
                                      className="comment_icons" fill />
                                  </div>
                                  <span className="number-comment">20</span>
                                  <span className="comment_btn">REPLY</span>
                                  <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                                </div>

                              </div>
                            </div>



                            <div className="in_comment">
                              <div className="bar"></div>

                              <div className="sub_comment">
                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/side2.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Sim Love</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@SimLove</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>








                                <div className="user_comment">
                                  <div className="user_image">
                                    <Image src="/assets/images/suggested3.png"
                                      className="rounded-circle" alt="" width="40"
                                      height="40" id="comment-user" />
                                  </div>

                                  <div className="user_bio">
                                    <div className="user_name">
                                      <h3>Tom Hanks</h3>
                                    </div>

                                    <div className="user_history">
                                      <span>@TomHabks</span>
                                      <Image src="/assets/images/time-icon.png" alt="" fill />
                                      <span>3hr</span>
                                    </div>
                                  </div>

                                </div>
                                <div className="comment_text">
                                  <span>On this day, James Lored commented on an utter about
                                    the inflation rate and
                                    its
                                    negative
                                    effect on the cost of producing local furniture.</span>
                                  <div className="text_aria">
                                    <div className="reaction">
                                      <div className="like">
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/1.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                        <span>5</span>
                                        <div className="like_circle">
                                          <Image src="/assets/images/new_icon/2.png"
                                            alt="" className="comment_icons" fill />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="share">
                                      <div className="share_circle">
                                        <Image src="/assets/images/new_icon/3.png" alt=""
                                          className="comment_icons" fill />
                                      </div>
                                      <span className="number-comment">20</span>
                                      <span className="comment_btn">REPLY</span>
                                      <Image src="/assets/images/new_icon/menu  copy 3.png"
                                        alt="" fill />
                                    </div>

                                  </div>
                                </div>

                              </div>
                            </div>

                            <span className="replies"> See more replies <Image
                              src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                          </div>



                        </div>


                        <div className="user_comment" id="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt=""
                              id="comment-user" fill />
                          </div>

                          <div className="user_bio">
                            <div className="user_name">
                              <h3>James Lored</h3>
                            </div>

                            <div className="user_history">
                              <span>@JamesLored</span>
                              <Image src="/assets/images/time-icon.png" alt="" fill />
                              <span>3hr</span>
                            </div>
                          </div>

                        </div>
                        <div className="comment_text">
                          <span>On this day, James Lored commented on an utter about the inflation
                            rate and its
                            negative
                            effect
                            on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt=""
                                    className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt=""
                                  className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>


                        <div className="btn_aria">
                          <button className="back_top">Back to top</button>
                          <button className="view_more">View more comments</button>
                        </div>
                      </div>
                    </div>

                  </div>





                  <div className="bg-white write-message hintable write-message-input secondone"
                    hint-classname="hidden-div" style={{ display: "none" }}>
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add a Comment..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="example bg-white comnt__inner__div secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                          sequi sed exercitationem eum alias vo
                        </p>

                        <div className="icons-left d-flex py-3">
                          <div className="like-ico mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a id="secondone" className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Comments &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="bg-white write-message reply__div secondone">
                    <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-fill justify-content-start ml-1">
                        <input type="text" className="form-control form__comment px-4"
                          placeholder="Add Reply..." name="" id="writeee" />
                        <div className="ml-2">
                          <button id="secondone"
                            className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                          <div
                            className="three__icons d-flex justify-content-between align-items-center my-1">
                            <Image src="/assets/images/att-new.png" alt="" fill />
                            <Image src="/assets/images/giff.png" className="" alt="" fill />
                            <Image src="/assets/images/cam.png" alt="" fill />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reply__inner__div bg-white secondone">
                    <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                      <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                        <div className="d-flex">
                          <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                          <p className="m-0 p-3 comnt__P">So many flaws with this logic.. dummy lorem text
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                            sequi sed exercitationem eum alias vo
                          </p>
                        </div>

                        <div className="icons-left ml-5 d-flex py-3">
                          <div className="like-ico ml-4 mr-md-4 mr-2">
                            <a>
                              <Image src="/assets/images/20.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-ico mr-md-4 mr-2">
                            <a className="reply__toggle">
                              <Image src="/assets/images/reply.png" alt="" fill />
                            </a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="ml-auto">
                            <div className="text-right">
                              <Image src="/assets/images/21.png" alt="" fill />
                              <i className="fa ml-2 fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                            <a className="d-block text-dark font-weight-bold">See More Replies &#62;&#62;</a>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>



                </div>
              </div>
            </div>







            <div className="tab-pane fade" id="utter-profile" role="tabpanel" aria-labelledby="utter-profile-tab">

              <div className="main-div mb-5 border">
                <div className="user-photos-section bg-white px-3 py-3">
                  <div className="d-flex flex-column flex-md-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="font-weight-bold username-photos">
                            Northwest Agency
                            <span className="date user-date text-dark">@Northwest Agency </span>
                          </span>
                          <span className="text-secondary">proud to be selected for the <span
                            className="text-dark">#siteoftheday</span>
                            award by <span className="text-dark">@design :)</span></span>
                        </div>

                        <div className="ml-auto d-flex">
                          <div className="dropdown">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa-th-list"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Unfloat</a>
                            </div>
                          </div>
                          <div className="floated ml-2">
                            <span>Floated</span>
                            <Image className="img-fluid ml-2" src="/assets/images/28.png" alt="floated" fill />
                          </div>
                        </div>

                      </div>

                      <div className="user-photo-img mt-2">
                        <Image className="img-fluid w-100" src="/assets/images/14.png" alt="" fill />

                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white px-3 py-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-5 mr-2">
                            <a data-toggle="modal" data-target=".post-modal"
                              style={{ cursor: "pointer" }}>
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill />
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill />
                          <span className="text-secondary">120</span>
                        </div>

                        <div className="icons-left d-flex">
                          <div className="like-icon">
                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />

                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon ml-md-5 ml-2">
                            <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                            <span className="text-secondary">120</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="bg-white d-flex write-message">
                  <input type="text" style={{ display: "none" }} className="form-control write-message-input hintable"
                    placeholder="Make a Comment..." hint-classname="hidden-div" name="" id="writeee" />
                </div>

                <div className="example hidden-div">
                  <div className="d-flex px-3 border-top py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                      <span className="d-block font-weight-bold username-photos"> Josh Mathews</span>
                      <span className="text-secondary">fri</span>
                      <p className="m-0">So many flaws with this logic.. dummy lorem text
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                        sequi sed exercitationem eum alias vo
                      </p>

                      <div className="user-icons-section d-flex py-3">
                        <div className="icons-left d-flex">
                          <div className="like-ico mr-md-4 mr-2">
                            <a href="#/">
                              <i className="fa fa-thumbs-up" aria-hidden="true"></i></a>
                            <span className="text-secondary">120</span>
                          </div>

                        </div>

                        <div className="center-icon like-ico">
                          <i className="fa fa-commenting" aria-hidden="true"></i>
                          <span className="text-secondary">120</span>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>



              </div>

              <div className="main-div mb-5 border">
                <div className="user-photos-section bg-white px-3 py-3">
                  <div className="d-flex flex-column flex-md-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <span className="font-weight-bold username-photos">
                            Northwest Agency
                            <span className="date user-date text-dark">@Northwest Agency </span>
                          </span>
                          <span className="text-secondary">proud to be selected for the <span
                            className="text-dark">#siteoftheday</span>
                            award by <span className="text-dark">@design :)</span></span>
                        </div>

                        <div className="ml-auto d-flex">
                          <div className="dropdown">
                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                              className="fa dropdown-toggle ellipsis-toggle-none fa-th-list"
                              data-toggle="dropdown" aria-hidden="true"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#/">Unfloat</a>
                            </div>
                          </div>
                          <div className="floated ml-2">
                            <span>Floated</span>
                            <Image className="img-fluid ml-2" src="/assets/images/28.png" alt="floated" fill />
                          </div>
                        </div>

                      </div>



                      <div className="user-photo-img px-2 mt-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Numquam assumenda dolorum odit obcaecati exercitationem quos commodi
                          rerum. Debitis excepturi ab dolores eos nam perferendis in doloremque?
                          Obcaecati voluptas dignissimos magnam!</p>
                      </div>

                      <div className="user-icons-section d-flex justify-content-between bg-white px-3 py-3">
                        <div className="icons-left d-flex">
                          <div className="like-icon mr-md-5 mr-2">
                            <a data-toggle="modal" data-target=".post-modal"
                              style={{ cursor: "pointer" }}>
                              <Image className="img-fluid" src="/assets/images/20.png" alt="" fill /></a>
                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon">
                            <Image className="img-fluid" src="/assets/images/21.png" alt="" fill />
                            <span className="text-secondary">120</span>
                          </div>
                        </div>

                        <div className="center-icon like-icon">
                          <Image className="img-fluid" src="/assets/images/23.png" alt="" fill />
                          <span className="text-secondary">120</span>
                        </div>

                        <div className="icons-left d-flex">
                          <div className="like-icon">
                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />

                            <span className="text-secondary">120</span>
                          </div>
                          <div className="like-icon ml-md-5 ml-2">
                            <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                            <span className="text-secondary">120</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div className="bg-white d-flex write-message">
                  <input type="text" style={{ display: "none" }} className="form-control write-message-input hintable"
                    placeholder="Make a Comment..." hint-classname="hidden-div" name="" id="writeee" />
                </div>

                <div className="example hidden-div">
                  <div className="d-flex px-3 border-top py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
                    <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                      <span className="d-block font-weight-bold username-photos"> Josh Mathews</span>
                      <span className="text-secondary">fri</span>
                      <p className="m-0">So many flaws with this logic.. dummy lorem text
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                        sequi sed exercitationem eum alias vo
                      </p>

                      <div className="user-icons-section d-flex py-3">
                        <div className="icons-left d-flex">
                          <div className="like-ico mr-md-4 mr-2">
                            <a href="#/">
                              <i className="fa fa-thumbs-up" aria-hidden="true"></i></a>
                            <span className="text-secondary">120</span>
                          </div>

                        </div>

                        <div className="center-icon like-ico">
                          <i className="fa fa-commenting" aria-hidden="true"></i>
                          <span className="text-secondary">120</span>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>



              </div>
            </div>

            <div className="tab-pane fade" id="visited" role="tabpanel" aria-labelledby="utter-profile-tab">

              <div className="row">
                <div className="col-sm-6">
                  <div className="text-center mb-5">
                    <span className="visitor-span">Visitors</span>
                    <p className="visitor-p">Only shows visitors from the past month</p>
                  </div>

                  <div className="scroll-follow">


                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle filter-blur" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span
                            className="d-block filter-blur text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date filter-blur text-dark user-date">@
                            travis </span>
                        </div>
                      </a>
                    </div>

                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle filter-blur" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span
                            className="d-block filter-blur text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date filter-blur text-dark user-date">@
                            travis </span>
                        </div>
                      </a>
                    </div>

                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle filter-blur" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span
                            className="d-block filter-blur text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date filter-blur text-dark user-date">@
                            travis </span>
                        </div>
                      </a>
                    </div>

                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle filter-blur" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span
                            className="d-block filter-blur text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date filter-blur text-dark user-date">@
                            travis </span>
                        </div>
                      </a>
                    </div>

                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle filter-blur" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span
                            className="d-block filter-blur text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date filter-blur text-dark user-date">@
                            travis </span>
                        </div>
                      </a>
                    </div>

                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle filter-blur" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span
                            className="d-block filter-blur text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date filter-blur text-dark user-date">@
                            travis </span>
                        </div>
                      </a>
                    </div>

                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle filter-blur" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span
                            className="d-block filter-blur text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date filter-blur text-dark user-date">@
                            travis </span>
                        </div>
                      </a>
                    </div>



                  </div>

                </div>



                <div className="col-sm-6">
                  <div className="text-center mb-5">
                    <span className="visitor-span">Visited</span>
                    <p className="visitor-p">Only shows whom you&apos;ve visited in the past month</p>
                  </div>

                  <div className="scroll-follow">

                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>

                        <div className="d-flex ml-auto">
                          <i className="fa text-secondary fa-eye" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>


                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>

                        <div className="d-flex ml-auto">
                          <i className="fa text-secondary fa-eye" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>


                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>

                        <div className="d-flex ml-auto">
                          <i className="fa text-secondary fa-eye" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>


                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>

                        <div className="d-flex ml-auto">
                          <i className="fa text-secondary fa-eye" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>


                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>

                        <div className="d-flex ml-auto">
                          <i className="fa text-secondary fa-eye" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>


                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>

                        <div className="d-flex ml-auto">
                          <i className="fa text-secondary fa-eye" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>


                    <div className="d-flex flex-row border-bottom-follow user-info pb-2">
                      <a href="#/" className="a-whole text-decoration-none">
                        <Image className="rounded-circle" src="/assets/images/8.png" alt="" height="50" width="50" />
                        <div className="d-flex flex-column justify-content-start ml-1 mr-4">
                          <span className="d-block text-dark font-weight-bold username-comment">
                            Travis </span>
                          <span className="date text-dark user-date">@
                            travis </span>
                        </div>

                        <div className="d-flex ml-auto">
                          <i className="fa text-secondary fa-eye" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>




                  </div>

                </div>

              </div>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}
