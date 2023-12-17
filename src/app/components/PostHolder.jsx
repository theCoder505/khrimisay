"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import allFunctions from "../../../public/test";

export default function PostHolder() {
  const { sayHello, anotherFunction, joinHomeUtter, crossHomeUtter, textVal, showMoreUtterFirstBoxContent, activate_msg_content, showThreeDotPopup, show_reportUtterPopup, openComments, showDotPopup } = allFunctions;
 
 
 return (
    <>

      <div id="postsHolder">


        {/* // search type utter input box starts here  */}
        <div className="main-div shadow-sm cstmbtm">
          <div className="user-photos-section bg-white pt-3">
            <div className="d-flex flex-column flex-lg-row user-info">
              <Image className="rounded-circle rightpoint75" src="/assets/images/8.png" height="55" width="55" alt="Image" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex">


                  <div className="d-flex flex-column" id="showUtterTypeBox">

                    <div className="d-flex" id="showUtterBox">
                      <div id="uttericon">
                        <Image className="commonUtterBoxImg" src="/assets/images/19.png" alt="" fill />
                      </div>
                      <div id="gifTimer" className="d-flex">
                        <div className="gif">
                          <Image className="commonUtterBoxImg" src="/assets/images/gifimage.png" alt="" fill />
                        </div>
                        <div className="timer">
                          <Image className="commonUtterBoxImg" src="/assets/images/blacktimer.png" alt="" fill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* // search type utter input box ends here */}




        <div className="cstmbtm modal-content border-radius-k d-none showHideUtter">
          <div className="user-photos-section border-radius-k bg-white py-3 px-3" style={{ border: "3px solid #ddd" }}>


            <div id="crossHomeUtter">
              <svg viewBox="0 0 24 24" width="24" height="24" className="">
                <path fill="currentColor"
                  d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                </path>
              </svg>
            </div>

            <div className="row user-info-utterbox">

              <div className="col-12">
                <div className="flex_users">
                  <div className="image_holder text-center">
                    <Image className="rounded-circle mr-3" src="/assets/images/8.png" width="55" height="55" alt="Image" />
                  </div>

                  <div className="message_holder activate_msg_holder b_top_none">

                    <div className="warning_holder d-none">
                      <div className="warning_lines flex_gap">
                        <div className="level_base_line">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="low_level_1"
                              value="option1" defaultChecked />
                            <label className="form-check-label checkbox_level" htmlFor="low_level_1">
                              Low level warning
                              <Image src="/assets/images/i_icon.png" alt="" className="info_icon" fill />
                            </label>
                          </div>
                        </div>
                        <div className="level_base_line">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="high_level_2"
                              value="option1" defaultChecked />
                            <label className="form-check-label checkbox_level" htmlFor="high_level_2">
                              High level warning/Triggers
                              <Image src="/assets/images/i_icon.png" alt="" className="info_icon" fill />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="utter_short_row">
                        <textarea className="utter_short_title" rows="2"
                          placeholder="Write other things you might readers to know here (prefereably a non graphic summary)"></textarea>
                        <div className="total_shorts">50</div>
                      </div>
                    </div>

                    <div className="title_holder d-none">
                      <input type="text" className="utter_title_box" placeholder="Title your utter" />
                      <div className="utter_float border_none">
                        <div className="utter_emojis">🙄😂🤔🙂</div>
                        <div className="utter_total">50</div>
                      </div>
                    </div>

                    <textarea name="" className="form-control w-100 border-0 bg-light more_utterbox_holder" placeholder="Utter" cols="50"
                      rows="10" id="textareaPlugin"></textarea>

                    <div className="pieChart">
                      <span className="join d-none" onClick={(e) => joinHomeUtter(2)}>Join</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-12">
                <div className="row d-none home-utter-2 mt-4">
                  <div className="col-2">
                    <div className="closeCrossUtter" onClick={(e) => crossHomeUtter(2)}>
                      <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                          d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                        </path>
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 col-10">
                    <textarea name="" className="form-control w-100 border-0 bg-light" placeholder="Utter" cols="50"
                      rows="8" id="textareaPlugin2"></textarea>

                    <div className="pieChart">
                      <span className="join last_join d-none" onClick={(e) => joinHomeUtter(3)}>Join</span>
                    </div>
                  </div>
                </div>


                <div className="row d-none home-utter-3 mt-4">
                  <div className="col-2">
                    <div className="closeCrossUtter" onClick={(e) => crossHomeUtter(3)}>
                      <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                          d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                        </path>
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 col-10">
                    <textarea name="" className="form-control w-100 border-0 bg-light" placeholder="Utter" cols="50"
                      rows="8" id="textareaPlugin3"></textarea>

                    <div className="pieChart">
                      <span className="join d-none">Done</span>
                    </div>
                  </div>
                </div>

              </div>




              <div className="col-2"></div>
              <div className="col-10">
                <div className="text-center">
                  <a className="text-decoration-none"> <button type="button" className="btn px-5  post-btn"
                    onClick={() => textVal()}>Utter</button>
                  </a>
                </div>
              </div>






              <div className="col-2"></div>
              <div className="col-10">
                <center>
                  <div className="utter-post-icons d-flex w-100 justify-content-between">
                    <div className="video-icon">
                      <a>
                        <Image src="/assets/images/video.png" alt="video-icon" fill />
                      </a>
                    </div>
                    <div className="video-icon">
                      <a>
                        <Image src="/assets/images/31.png" alt="video-icon" fill />
                      </a>
                    </div>

                    <div className="video-icon">
                      <a>
                        <Image src="/assets/images/gif.png" alt="video-icon" fill />
                      </a>
                    </div>


                    <div className="video-icon video-icon-last">
                      <a>
                        <Image src="/assets/images/downarrow.png" alt="video-icon"
                          onClick={(e) => showMoreUtterFirstBoxContent(e.target)} fill />
                      </a>
                    </div>
                  </div>
                </center>
              </div>


              <div className="col-12 page_more_box">
                <div className="f_utter_post_box d-none">
                  <div className="content_line active_content" data-content="more_utterbox_holder" onClick={(e) => activate_msg_content(e.target)}>
                    More Context
                  </div>
                  <div className="content_line" data-content="title_holder" onClick={(e) => activate_msg_content(e.target)}>
                    Title
                  </div>
                  <div className="content_line" data-content="warning_holder" onClick={(e) => activate_msg_content(e.target)}>
                    Warning
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* door post  */}
        <div className="main-div shadow-sm cstmbtm">
          <div className="user-photos-section bg-white">
            <div className="d-flex flex-column flex-lg-row user-info">
              <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex pos_relative">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency Door
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency Door </span>
                    </span>
                  </div>

                  <div className="ml-auto">
                    <div className="dropdown spec_icon_bg" onClick={showThreeDotPopup}>
                      <i id="dropdownMenuButton"
                        className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                    </div>
                  </div>

                  <div className="three_dot_popup d-none">
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore this
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore utters for a while
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                        <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        View analytics
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cstmrem9 sfpro">
                  <Image className="ver__sub" src="/assets/images/time-icon.png" alt="" width="20" height="20" />
                  <span className="text-secondary">8 hr.</span>
                  <span className="rootColor">
                    Quietroomed
                  </span>
                </div>


              </div>
            </div>


            <div className="full_post">

              <div className="user-photo-img mt-2">
                <Image className="img-fluid post-width" alt='' src="/assets/images/door.png" fill />
              </div>

              <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                <div className="icons-left d-flex">
                  <div className="like-icon mr-md-4 mr-2">
                    <a title="Applaud">
                      <Image className="img-fluid" alt='' src="/assets/images/20.png" fill /></a>
                    <span className="text-secondary">120</span>
                  </div>
                  <div className="like-icon">
                    <a title="Boo">
                      <Image className="img-fluid" alt='' src="/assets/images/21.png" fill /></a>
                    <span className="text-secondary">120</span>
                  </div>
                </div>

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill />
                  </a>
                  <span className="text-secondary">155</span>
                </div>


                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" alt='' src="/assets/images/19.png" fill />
                          <Image className="img-fluid" alt='' src="/assets/images/19.png" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>


                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" alt='' src="/assets/images/19.png" fill />
                            <Image className="img-fluid ditto_icons" alt='' src="/assets/images/19.png" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">120</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its
                        negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies
                      <Image src="/assets/images/new_icon/clic.png" alt="" fill />
                    </span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
        </div>
        {/* door post ends */}



        <div className="bg-white write-message hintable write-message-input secondone" style={{ display: 'none' }}>
          <div className="d-flex w-82 px-3 py-2 flex-row user-info">
            <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
            <div className="d-flex flex-fill justify-content-start ml-1">
              <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name="" id="writeee" />
              <div className="ml-2">
                <button id="secondone" className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                <div className="three__icons d-flex justify-content-between align-items-center my-1">
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
            <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
            <Image style={{ visibility: 'hidden' }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55"
              width="55" alt="" />
            <div className="d-flex flex-fill justify-content-start ml-1"> <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name="" id="writeee" />
              <div className="ml-2">
                <button id="secondone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                <div className="three__icons d-flex justify-content-between align-items-center my-1">
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
            <Image style={{ visibility: 'hidden' }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55"
              width="55" alt="" />
            <div className="d-flex flex-column flex-fill justify-content-start ml-1">
              <div className="d-flex">
                <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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





        <div className="main-div cstmbtm shadow-sm">
          <div className="user-photos-section bg-white">
            <div className="d-flex flex-column flex-lg-row user-info">
              <Image className="rounded-circle mr-1 postsprofileimg activeday" src="/assets/images/suggested5.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex pos_relative">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Selected for the #siteoftheday award by @design :)
                        </span>
                      </div>
                    </span>
                  </div>

                  <div className="ml-auto">
                    <div className="dropdown spec_icon_bg" onClick={showThreeDotPopup}>
                      <i id="dropdownMenuButton"
                        className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                    </div>
                  </div>

                  <div className="three_dot_popup d-none">
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore this
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore utters for a while
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                        <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
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

              <div className="user-photo-img mt-2">
                <Image className="img-fluid post-width" src="/assets/images/14.png" alt="" fill />

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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill />
                  </a>
                  <span className="text-secondary">155</span>
                </div>


                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>
                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">120</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its
                        negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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

          <div className="bg-white write-message hintable write-message-input firstone" hint-classname="hidden-div"
            style={{ display: "none" }}>
            <div className="d-flex w-82 px-3 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="firstone" className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="example bg-white comnt__inner__div firstone">
            <div className="d-flex px-3 w-82 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
                    <a id="firstone" className="reply__toggle">
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
          <div className="bg-white write-message reply__div firstone">
            <div className="d-flex w-82 px-3 py-2 flex-row user-info">
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="firstone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reply__inner__div bg-white firstone">
            <div className="d-flex px-3 w-82 py-2 flex-row user-info">
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                <div className="d-flex"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/suggested3.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex pos_relative">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Tunde kelani
                      <span className="cstmrem9 date user-date grayColor sfpro">@Tunde </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Dittoed
                        </span>
                        <span className="just_saying">| Just saying</span>
                      </div>
                    </span>
                  </div>


                </div>

              </div>
            </div>


            <div className="full_post">
              <div className="pecec">

                <div className="d-flex flex-column flex-lg-row user-info">
                  <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/suggested3.png" height="55" width="55" alt="" />
                  <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                    <div className="d-flex pos_relative">
                      <div className="d-flex flex-column">
                        <span className="username-photos">
                          Taiwo Taye
                          <span className="cstmrem9 date user-date grayColor sfpro">@TTY </span>
                        </span>
                        <div className="text-secondary d-flex flex-wrap align-items-center">
                          <div className="cstmrem9 sfpro">
                            <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                            <span className="text-secondary">8 hr.</span>
                            <span className="just_saying">
                              Selected now
                            </span>
                          </div>
                        </div>
                      </div>



                      <div className="three_dot_popup d-none">
                        <div className="popup_line">
                          <div className="left_pop_icon">
                            <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                          </div>
                          <div className="right_popup_text">
                            Ignore this
                          </div>
                        </div>
                        <div className="popup_line">
                          <div className="left_pop_icon">
                            <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                          </div>
                          <div className="right_popup_text">
                            Ignore utters for a while
                          </div>
                        </div>
                        <div className="popup_line">
                          <div className="left_pop_icon">
                            <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                            <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
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
                      Grey writing all through but the color won’t change depending on the matter at hand or not
                      if
                      maybe if. Grey writing all through but the color won’t change depending on the matter at
                      hand
                      or not if maybe if. <br />
                      Grey writing all through but the color won’t change depending on the matter at hand or not
                      if
                      maybe if. Grey writing all through but the color won’t change depending on the matter at
                      hand
                      or not if maybe if. Grey writing all through but the color won’t change.
                    </p>
                  </div>


                </div>

              </div>





              <div className="bg-white write-message hintable write-message-input secondone" hint-classname="hidden-div"
                style={{ display: "none" }}>
                <div className="d-flex w-82 px-3 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
                  <div className="d-flex flex-fill justify-content-start ml-1">
                    <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name="" id="writeee" />
                    <div className="ml-2">
                      <button id="secondone"
                        className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                      <div className="three__icons d-flex justify-content-between align-items-center my-1">
                        <Image src="/assets/images/att-new.png" alt="" fill />
                        <Image src="/assets/images/giff.png" className="" alt="" fill />
                        <Image src="/assets/images/cam.png" alt="" fill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="example bg-white comnt__inner__div secondone" style={{ display: "none" }}>
                <div className="d-flex px-3 w-82 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
                        <a className="d-block text-dark font-weight-bold">See More Comments &gt;&gt;</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="bg-white write-message reply__div secondone" style={{ display: "none" }}>
                <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                  <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
                  <div className="d-flex flex-fill justify-content-start ml-1">
                    <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name="" id="writeee" />
                    <div className="ml-2">
                      <button id="secondone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                      <div className="three__icons d-flex justify-content-between align-items-center my-1">
                        <Image src="/assets/images/att-new.png" alt="" fill />
                        <Image src="/assets/images/giff.png" className="" alt="" fill />
                        <Image src="/assets/images/cam.png" alt="" fill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reply__inner__div bg-white secondone" style={{ display: "none" }}>
                <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                  <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
                  <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                    <div className="d-flex"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
                        <a className="d-block text-dark font-weight-bold">See More Replies &gt;&gt;</a>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

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

              <div className="center-icon like-icon" onClick={openComments}>
                <a className="comment-icon-toggle text-decoration-none">
                  <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                <span className="text-secondary">120</span>
              </div>


              <div className="icons-left dropdown-reutter-and-copylink d-flex">
                <div className="like-icon">
                  <div className="dropdown show">
                    <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                      onClick={(e) => showDotPopup(e.target)}>
                      <div className="double_face">
                        <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                      </div>
                      <span className="text-secondary">120</span>

                    </a>

                    <div className="show_3dot_popup d-none">
                      <div className="line_flex">
                        <span className="left_side_broadcast">
                          <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                        </span>
                        <a className="dot3_link">Ditto</a>
                      </div>

                      <div className="line_flex">
                        <span className="left_side_broadcast">
                          <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                      <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                        id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                    <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                      <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                    <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                      effect on the cost of producing local furniture.</span>
                    <div className="text_aria">
                      <div className="reaction">
                        <div className="like">
                          <div className="like_circle">
                            <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                          </div>
                          <span>5</span>
                          <div className="like_circle">
                            <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                          </div>
                        </div>
                      </div>
                      <div className="share">
                        <div className="share_circle">
                          <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                          <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                        <span>On this day, James Lored commented on an utter about the inflation rate and its
                          negative
                          effect on the cost of producing local furniture.</span>
                        <div className="text_aria">
                          <div className="reaction">
                            <div className="like">
                              <div className="like_circle">
                                <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                              </div>
                              <span>5</span>
                              <div className="like_circle">
                                <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                              </div>
                            </div>
                          </div>
                          <div className="share">
                            <div className="share_circle">
                              <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                            </div>
                            <span className="number-comment">20</span>
                            <span className="comment_btn">REPLY</span>
                            <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                          </div>

                        </div>
                      </div>








                      <div className="user_comment">
                        <div className="user_image">
                          <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                        <span>On this day, James Lored commented on an utter about the inflation rate and its
                          negative
                          effect on the cost of producing local furniture.</span>
                        <div className="text_aria">
                          <div className="reaction">
                            <div className="like">
                              <div className="like_circle">
                                <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                              </div>
                              <span>5</span>
                              <div className="like_circle">
                                <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                              </div>
                            </div>
                          </div>
                          <div className="share">
                            <div className="share_circle">
                              <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                            </div>
                            <span className="number-comment">20</span>
                            <span className="comment_btn">REPLY</span>
                            <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                  <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                </div>



              </div>


              <div className="user_comment" id="user_comment">
                <div className="user_image">
                  <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                  effect
                  on the cost of producing local furniture.</span>
                <div className="text_aria">
                  <div className="reaction">
                    <div className="like">
                      <div className="like_circle">
                        <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                      </div>
                      <span>5</span>
                      <div className="like_circle">
                        <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                      </div>
                    </div>
                  </div>
                  <div className="share">
                    <div className="share_circle">
                      <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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





        <div className="main-div cstmbtm shadow-sm">
          <div className="user-photos-section bg-white">
            <div className="d-flex flex-column flex-lg-row user-info">
              <Image className="rounded-circle mr-1 postsprofileimg activeblueday" src="/assets/images/suggested2.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex pos_relative">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Selected for the #siteoftheday award by @design :)
                        </span>
                      </div>
                    </span>
                  </div>

                  <div className="ml-auto">
                    <div className="dropdown spec_icon_bg" onClick={showThreeDotPopup}>
                      <i id="dropdownMenuButton"
                        className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                    </div>
                  </div>

                  <div className="three_dot_popup d-none">
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore this
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore utters for a while
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                        <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
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
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                  <span className="text-secondary">120</span>
                </div>


                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">120</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its
                        negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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





          <div className="bg-white write-message hintable write-message-input secondone" hint-classname="hidden-div"
            style={{ display: "none" }}>
            <div className="d-flex w-82 px-3 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="example bg-white comnt__inner__div secondone">
            <div className="d-flex px-3 w-82 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
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
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                <div className="d-flex"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/suggested3.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex pos_relative">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Tunde kelani
                      <span className="cstmrem9 date user-date grayColor sfpro">@Tunde </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Dittoed
                        </span>
                        <span className="just_saying">| Just saying</span>
                      </div>
                    </span>
                  </div>


                </div>

              </div>
            </div>

            <div className="post_extra_information rem9">We don’t think this makes any sense. Not that we care. We don’t
              think
              this makes any sense. Not that we care. </div>


            <div className="full_post">
              <div className="pecec">

                <div className="d-flex flex-column flex-lg-row user-info">
                  <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/suggested3.png" height="55" width="55" alt="" />
                  <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                    <div className="d-flex pos_relative">
                      <div className="d-flex flex-column">
                        <span className="username-photos">
                          Taiwo Taye
                          <span className="cstmrem9 date user-date grayColor sfpro">@TTY </span>
                        </span>
                        <div className="text-secondary d-flex flex-wrap align-items-center">
                          <div className="cstmrem9 sfpro">
                            <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                            <span className="text-secondary">8 hr.</span>
                            <span className="just_saying">
                              Selected now
                            </span>
                          </div>
                        </div>
                      </div>



                      <div className="three_dot_popup d-none">
                        <div className="popup_line">
                          <div className="left_pop_icon">
                            <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                          </div>
                          <div className="right_popup_text">
                            Ignore this
                          </div>
                        </div>
                        <div className="popup_line">
                          <div className="left_pop_icon">
                            <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                          </div>
                          <div className="right_popup_text">
                            Ignore utters for a while
                          </div>
                        </div>
                        <div className="popup_line">
                          <div className="left_pop_icon">
                            <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                            <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
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
                      Grey writing all through but the color won’t change depending on the matter at hand or not
                      if
                      maybe if. Grey writing all through but the color won’t change depending on the matter at
                      hand
                      or not if maybe if. <br />
                      Grey writing all through but the color won’t change depending on the matter at hand or not
                      if
                      maybe if. Grey writing all through but the color won’t change depending on the matter at
                      hand
                      or not if maybe if. Grey writing all through but the color won’t change.
                    </p>
                  </div>


                </div>

              </div>





              <div className="bg-white write-message hintable write-message-input secondone" hint-classname="hidden-div"
                style={{ display: "none" }}>
                <div className="d-flex w-82 px-3 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
                  <div className="d-flex flex-fill justify-content-start ml-1">
                    <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name="" id="writeee" />
                    <div className="ml-2">
                      <button id="secondone"
                        className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                      <div className="three__icons d-flex justify-content-between align-items-center my-1">
                        <Image src="/assets/images/att-new.png" alt="" fill />
                        <Image src="/assets/images/giff.png" className="" alt="" fill />
                        <Image src="/assets/images/cam.png" alt="" fill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="example bg-white comnt__inner__div secondone" style={{ display: "none" }}>
                <div className="d-flex px-3 w-82 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
                        <a className="d-block text-dark font-weight-bold">See More Comments &gt;&gt;</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="bg-white write-message reply__div secondone" style={{ display: "none" }}>
                <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                  <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
                  <div className="d-flex flex-fill justify-content-start ml-1">
                    <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name="" id="writeee" />
                    <div className="ml-2">
                      <button id="secondone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                      <div className="three__icons d-flex justify-content-between align-items-center my-1">
                        <Image src="/assets/images/att-new.png" alt="" fill />
                        <Image src="/assets/images/giff.png" className="" alt="" fill />
                        <Image src="/assets/images/cam.png" alt="" fill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reply__inner__div bg-white secondone" style={{ display: "none" }}>
                <div className="d-flex px-3 w-82 py-2 flex-row user-info">
                  <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
                  <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                    <div className="d-flex"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
                        <a className="d-block text-dark font-weight-bold">See More Replies &gt;&gt;</a>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

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

              <div className="center-icon like-icon" onClick={openComments}>
                <a className="comment-icon-toggle text-decoration-none">
                  <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                <span className="text-secondary">120</span>
              </div>


              <div className="icons-left dropdown-reutter-and-copylink d-flex">
                <div className="like-icon">
                  <div className="dropdown show">
                    <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                      onClick={(e) => showDotPopup(e.target)}>
                      <div className="double_face">
                        <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                      </div>
                      <span className="text-secondary">120</span>

                    </a>

                    <div className="show_3dot_popup d-none">
                      <div className="line_flex">
                        <span className="left_side_broadcast">
                          <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                        </span>
                        <a className="dot3_link">Ditto</a>
                      </div>

                      <div className="line_flex">
                        <span className="left_side_broadcast">
                          <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                      <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                        id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                    <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                      <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                    <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                      effect on the cost of producing local furniture.</span>
                    <div className="text_aria">
                      <div className="reaction">
                        <div className="like">
                          <div className="like_circle">
                            <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                          </div>
                          <span>5</span>
                          <div className="like_circle">
                            <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                          </div>
                        </div>
                      </div>
                      <div className="share">
                        <div className="share_circle">
                          <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                          <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                        <span>On this day, James Lored commented on an utter about the inflation rate and its
                          negative
                          effect on the cost of producing local furniture.</span>
                        <div className="text_aria">
                          <div className="reaction">
                            <div className="like">
                              <div className="like_circle">
                                <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                              </div>
                              <span>5</span>
                              <div className="like_circle">
                                <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                              </div>
                            </div>
                          </div>
                          <div className="share">
                            <div className="share_circle">
                              <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                            </div>
                            <span className="number-comment">20</span>
                            <span className="comment_btn">REPLY</span>
                            <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                          </div>

                        </div>
                      </div>








                      <div className="user_comment">
                        <div className="user_image">
                          <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                        <span>On this day, James Lored commented on an utter about the inflation rate and its
                          negative
                          effect on the cost of producing local furniture.</span>
                        <div className="text_aria">
                          <div className="reaction">
                            <div className="like">
                              <div className="like_circle">
                                <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                              </div>
                              <span>5</span>
                              <div className="like_circle">
                                <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                              </div>
                            </div>
                          </div>
                          <div className="share">
                            <div className="share_circle">
                              <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                            </div>
                            <span className="number-comment">20</span>
                            <span className="comment_btn">REPLY</span>
                            <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>

                  <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                </div>



              </div>


              <div className="user_comment" id="user_comment">
                <div className="user_image">
                  <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                  effect
                  on the cost of producing local furniture.</span>
                <div className="text_aria">
                  <div className="reaction">
                    <div className="like">
                      <div className="like_circle">
                        <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                      </div>
                      <span>5</span>
                      <div className="like_circle">
                        <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                      </div>
                    </div>
                  </div>
                  <div className="share">
                    <div className="share_circle">
                      <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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





        <div className="main-div cstmbtm shadow-sm">
          <div className="user-photos-section bg-white">
            <div className="d-flex flex-column flex-lg-row user-info"> <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex pos_relative">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Selected for the #siteoftheday award by @design :)
                        </span>
                      </div>
                    </span>
                  </div>

                  <div className="ml-auto">
                    <div className="dropdown spec_icon_bg" onClick={showThreeDotPopup}>
                      <i id="dropdownMenuButton"
                        className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                    </div>
                  </div>

                  <div className="three_dot_popup d-none">
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore this
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore utters for a while
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                        <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
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

              <div className="user-photo-img mt-3 post-width">
                <iframe className="video w-100" style={{ height: "300px" }} src="http://www.youtube.com/embed/9B7te184ZpQ?rel=0"
                  frameBorder="0" allowFullScreen></iframe>
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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                  <span className="text-secondary">120</span>
                </div>


                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">120</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its
                        negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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











          <div className="bg-white write-message hintable write-message-input thirdone" hint-classname="hidden-div"
            style={{ display: "none" }}>
            <div className="d-flex w-82 px-3 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="thirdone" className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="example bg-white comnt__inner__div thirdone">
            <div className="d-flex px-3 w-82 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
                    <a id="thirdone" className="reply__toggle">
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
          <div className="bg-white write-message reply__div thirdone">
            <div className="d-flex w-82 px-3 py-2 flex-row user-info">
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="thirdone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reply__inner__div bg-white thirdone">
            <div className="d-flex px-3 w-82 py-2 flex-row user-info">
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                <div className="d-flex"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image className="rounded-circle mr-1 postsprofileimg activeday" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Selected for the #siteoftheday award by @design :)
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="full_post">
              <div className="user-photo-img mt-1">
                <p className="text-justify sfpro rem9">
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using <a href="#" className="hreflink">#DeepPurple</a> Lorem
                  Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;,
                  making it look like readable English.
                  <br />
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution.
                  <br />
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                  readable English. It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution.
                </p>

                <div id="hashTags">
                  <div className="hashtag sfpro">IWe out here@OrlyI</div>
                </div>
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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                  <span className="text-secondary">120</span>
                </div>


                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">120</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its
                        negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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








          <div className="bg-white write-message hintable write-message-input secondone" hint-classname="hidden-div"
            style={{ display: "none" }}>
            <div className="d-flex w-82 px-3 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="example bg-white comnt__inner__div secondone">
            <div className="d-flex px-3 w-82 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
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
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                <div className="d-flex"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image className="rounded-circle mr-1 postsprofileimg activeday" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Selected for the #siteoftheday award by @design :)
                        </span>
                      </div>
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="full_post">

              <div className="user-photo-img mt-1">
                <p className="text-justify sfpro rem9">
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                  readable English.
                </p>
                <div id="hashTags">
                  <div className="hashtag sfpro">IWe out here@OrlyI</div>
                  <div className="hashtag sfpro">IWe out here@OrlyI</div>
                </div>
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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                  <span className="text-secondary">120</span>
                </div>


                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">120</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its
                        negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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








          <div className="bg-white write-message hintable write-message-input secondone" hint-classname="hidden-div"
            style={{ display: "none" }}>
            <div className="d-flex w-82 px-3 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="example bg-white comnt__inner__div secondone">
            <div className="d-flex px-3 w-82 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
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
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                <div className="d-flex"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/suggested5.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency Door
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency Door </span>
                    </span>

                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                        <span className="text-secondary">8 hr.</span>
                      </div>
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="full_post">

              <div className="user-photo-img mt-2">
                <Image className="img-fluid post-width w-83" src="/assets/images/mugpen.png" alt="" fill />
              </div>

              <div id="hashTags">
                <div className="hashtag sfpro">IWe out here@OrlyI</div>
                <div className="hashtag sfpro">IWe out here@OrlyI</div>
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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                  <span className="text-secondary">120</span>
                </div>


                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">150</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its
                        negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
        </div>




        <div className="main-div cstmbtm shadow-sm">
          <div className="user-photos-section bg-white">
            <div className="d-flex flex-column flex-lg-row user-info">
              <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/suggested2.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex pos_relative">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" width="20" alt="" height="20" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Selected for the #siteoftheday award by @design :)
                        </span>
                      </div>
                    </span>
                  </div>

                  <div className="ml-auto">
                    <div className="dropdown spec_icon_bg" onClick={showThreeDotPopup}>
                      <i id="dropdownMenuButton"
                        className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                    </div>
                  </div>

                  <div className="three_dot_popup d-none">
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore this
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore utters for a while
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                        <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
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
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                  <span className="text-secondary">120</span>
                </div>


                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">120</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
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
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its
                        negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40" height="40" id="comment-user" />
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and
                            its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill /></span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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





          <div className="bg-white write-message hintable write-message-input secondone" hint-classname="hidden-div"
            style={{ display: "none" }}>
            <div className="d-flex w-82 px-3 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="example bg-white comnt__inner__div secondone">
            <div className="d-flex px-3 w-82 py-2 flex-row user-info"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name="" id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
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
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">
                <div className="d-flex"> <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
              <Image className="rounded-circle mr-1 postsprofileimg" alt="" src="/assets/images/suggested5.png" height="55"
                width="55" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" height="20" width="20" alt="" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Selected for the #siteoftheday award by @design :)
                        </span>
                      </div>
                    </span>
                  </div>

                  <div className="ml-auto">
                    <div className="dropdown spec_icon_bg" onClick={showThreeDotPopup}>
                      <i id="dropdownMenuButton"
                        className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                    </div>
                  </div>

                  <div className="three_dot_popup d-none">
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore this
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore utters for a while
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                        <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
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

              <div className="user-photo-img mt-2">
                <Image className="img-fluid post-width w-83" alt="" src="/assets/images/mugpen.png" fill />
              </div>

              <div id="hashTags">
                <div className="hashtag sfpro">IWe out here@OrlyI</div>
                <div className="hashtag sfpro">IWe out here@OrlyI</div>
                {/* <div className="hashtag sfpro">IWe out here@OrlyI</div>*/}
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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                  <span className="text-secondary">120</span>
                </div>

                {/* {/*start of dropdown-reutter-and-copylink--> */}

                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">150</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                            Link</a>
                          <a className="dropdown-item">Copy Link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* {/*end of dropdown-reutter-and-copylink--> */}
              </div>


              <div className="all_related_comments d-none">
                <div className="related_comment">
                  <div className="comment-photos-section bg-white pt-3">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40"
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40"
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill />
                    </span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
        </div>




        <div className="main-div cstmbtm shadow-sm">
          <div className="user-photos-section bg-white">
            <div className="d-flex flex-column flex-lg-row user-info">
              <Image className="rounded-circle mr-1 postsprofileimg" alt="" src="/assets/images/suggested2.png" height="55"
                width="55" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex pos_relative">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" height="20" width="20" alt="" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Selected for the #siteoftheday award by @design :)
                        </span>
                      </div>
                    </span>
                  </div>

                  <div className="ml-auto">
                    <div className="dropdown spec_icon_bg" onClick={showThreeDotPopup}>
                      <i id="dropdownMenuButton"
                        className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                    </div>
                  </div>

                  <div className="three_dot_popup d-none">
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore this
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore utters for a while
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                        <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
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
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                  <span className="text-secondary">120</span>
                </div>

                {/* {/*start of dropdown-reutter-and-copylink--> */}

                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">120</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                            Link</a>
                          <a className="dropdown-item">Copy Link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* {/*end of dropdown-reutter-and-copylink--> */}
              </div>

              <div className="all_related_comments d-none">
                <div className="related_comment">
                  <div className="comment-photos-section bg-white pt-3">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40"
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40"
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies <Image src="/assets/images/new_icon/clic.png" alt="" fill />
                    </span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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





          {/* {/*start of on focus dialogue box input comment field--> */}
          <div className="bg-white write-message hintable write-message-input secondone" hint-classname="hidden-div"
            style={{ display: "none" }}>
            {/* <button className="btn my-1 mx-1 make-comment-btn btn-primary ">Make a Comment</button>*/}
            <div className="d-flex w-82 px-3 py-2 flex-row user-info">
              <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name=""
                  id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
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
              <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt="" />
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
            {/* <button className="btn my-1 mx-1 make-comment-btn btn-primary ">Make a Comment</button>*/}
            <div className="d-flex w-82 px-3 py-2 flex-row user-info">
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55"
                width="55" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name=""
                  id="writeee" />
                <div className="ml-2">
                  <button id="secondone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
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
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55"
                width="55" />
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

          {/* {/*end of on focus dialogue box input comment field--> */}


        </div>
        {/* {/*end of text post utter main-div--> */}


        <div className="main-div shadow-sm">
          <div className="user-photos-section bg-white">
            <div className="d-flex flex-column flex-lg-row user-info">
              <Image className="rounded-circle mr-1 postsprofileimg" alt="" src="/assets/images/8.png" height="55"
                width="55" />
              <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                <div className="d-flex pos_relative">
                  <div className="d-flex flex-column">
                    <span className="username-photos">
                      Northwest Agency
                      <span className="cstmrem9 date user-date grayColor sfpro">@Northwest Agency </span>
                    </span>
                    <span className="text-secondary d-flex flex-wrap align-items-center">
                      <div className="cstmrem9 sfpro">
                        <Image className="ver__sub" src="/assets/images/time-icon.png" height="20" width="20" alt="" />
                        <span className="text-secondary">8 hr.</span>
                        <span className="rootColor">
                          Selected for the #siteoftheday award by @design :)
                        </span>
                      </div>
                    </span>
                  </div>

                  <div className="ml-auto">
                    <div className="dropdown spec_icon_bg" onClick={showThreeDotPopup}>
                      <i id="dropdownMenuButton"
                        className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"></i>
                    </div>
                  </div>

                  <div className="three_dot_popup d-none">
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_bell.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore this
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/cross_list.png" alt="" className="popup_icon" fill />
                      </div>
                      <div className="right_popup_text">
                        Ignore utters for a while
                      </div>
                    </div>
                    <div className="popup_line">
                      <div className="left_pop_icon">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="popup_icon" fill />
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
                        <Image src="/assets/images/analytics.png" alt="" className="popup_icon" fill />
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

              <div className="user-photo-img mt-3 post-width">
                <iframe className="video w-100" style={{ height: "300px" }}
                  src="http://www.youtube.com/embed/9B7te184ZpQ?rel=0" frameBorder="0" allowFullScreen></iframe>
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

                <div className="center-icon like-icon" onClick={openComments}>
                  <a className="comment-icon-toggle text-decoration-none">
                    <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                  <span className="text-secondary">120</span>
                </div>

                {/* {/*start of dropdown-reutter-and-copylink--> */}

                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                  <div className="like-icon">
                    <div className="dropdown show">
                      <a className="dropdown-toggle text-decoration-none text-dark" id="dropdownMenuLink"
                        onClick={(e) => showDotPopup(e.target)}>
                        <div className="double_face">
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                          <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                        </div>
                        <span className="text-secondary">120</span>

                      </a>

                      <div className="show_3dot_popup d-none">
                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                            <Image className="img-fluid ditto_icons" src="/assets/images/19.png" alt="" fill />
                          </span>
                          <a className="dot3_link">Ditto</a>
                        </div>

                        <div className="line_flex">
                          <span className="left_side_broadcast">
                            <Image src="/assets/images/shouting.png" alt="" className="shouting_img" fill />
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
                        <a className="dropdown-toggle text-decoration-none text-dark" href="#" role="button"
                          id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <Image className="img-fluid" src="/assets/images/22.png" alt="" fill />
                          <span className="text-secondary">120</span>

                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="https://www.youtube.com/watch?v=rJesac0_Ftw">Share
                            Link</a>
                          <a className="dropdown-item">Copy Link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* {/*end of dropdown-reutter-and-copylink--> */}
              </div>

              <div className="all_related_comments d-none">
                <div className="related_comment">
                  <div className="comment-photos-section bg-white pt-3">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image src="/assets/images/8.png" className="rounded-circle" alt="" id="comment-user" fill />

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
                        <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                      <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                        effect on the cost of producing local furniture.</span>
                      <div className="text_aria">
                        <div className="reaction">
                          <div className="like">
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                            </div>
                            <span>5</span>
                            <div className="like_circle">
                              <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                            </div>
                          </div>
                        </div>
                        <div className="share">
                          <div className="share_circle">
                            <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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
                            <Image src="/assets/images/side2.png" className="rounded-circle" alt="" width="40"
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>








                        <div className="user_comment">
                          <div className="user_image">
                            <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" width="40"
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
                          <span>On this day, James Lored commented on an utter about the inflation rate and its
                            negative
                            effect on the cost of producing local furniture.</span>
                          <div className="text_aria">
                            <div className="reaction">
                              <div className="like">
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                                </div>
                                <span>5</span>
                                <div className="like_circle">
                                  <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                                </div>
                              </div>
                            </div>
                            <div className="share">
                              <div className="share_circle">
                                <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
                              </div>
                              <span className="number-comment">20</span>
                              <span className="comment_btn">REPLY</span>
                              <Image src="/assets/images/new_icon/menu  copy 3.png" alt="" fill />
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                    <span className="replies"> See more replies
                      <Image src="/assets/images/new_icon/clic.png" alt="" fill />
                    </span>





                  </div>



                </div>


                <div className="user_comment" id="user_comment">
                  <div className="user_image">
                    <Image src="/assets/images/suggested3.png" className="rounded-circle" alt="" id="comment-user" fill />
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
                  <span>On this day, James Lored commented on an utter about the inflation rate and its negative
                    effect
                    on the cost of producing local furniture.</span>
                  <div className="text_aria">
                    <div className="reaction">
                      <div className="like">
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/1.png" alt="" className="comment_icons" fill />
                        </div>
                        <span>5</span>
                        <div className="like_circle">
                          <Image src="/assets/images/new_icon/2.png" alt="" className="comment_icons" fill />
                        </div>
                      </div>
                    </div>
                    <div className="share">
                      <div className="share_circle">
                        <Image src="/assets/images/new_icon/3.png" alt="" className="comment_icons" fill />
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











          {/* {/*start of on focus dialogue box input comment field--> */}
          <div className="bg-white write-message hintable write-message-input thirdone" hint-classname="hidden-div"
            style={{ display: "none" }}>
            {/* <button className="btn my-1 mx-1 make-comment-btn btn-primary ">Make a Comment</button>*/}
            <div className="d-flex w-82 px-3 py-2 flex-row user-info">
              <Image className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55" width="55" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add a Comment..." name=""
                  id="writeee" />
                <div className="ml-2">
                  <button id="thirdone" className="btn mt-2 py-0 px-2 btn__comnt__click btn__comnt">comment</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="example bg-white comnt__inner__div thirdone">
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
                    <a id="thirdone" className="reply__toggle">
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
          <div className="bg-white write-message reply__div thirdone">
            {/* <button className="btn my-1 mx-1 make-comment-btn btn-primary ">Make a Comment</button>*/}
            <div className="d-flex w-82 px-3 py-2 flex-row user-info">
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55"
                width="55" />
              <div className="d-flex flex-fill justify-content-start ml-1">
                <input type="text" className="form-control form__comment px-4" placeholder="Add Reply..." name=""
                  id="writeee" />
                <div className="ml-2">
                  <button id="thirdone" className="btn mt-2 py-0 px-3 btn__reply btn__comnt">Reply</button>
                  <div className="three__icons d-flex justify-content-between align-items-center my-1">
                    <Image src="/assets/images/att-new.png" alt="" fill />
                    <Image src="/assets/images/giff.png" className="" alt="" fill />
                    <Image src="/assets/images/cam.png" alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reply__inner__div bg-white thirdone">
            <div className="d-flex px-3 w-82 py-2 flex-row user-info">
              <Image style={{ visibility: "hidden" }} className="rounded-circle mr-3" src="/assets/images/8.png" alt="" height="55"
                width="55" />
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

          {/* {/*end of on focus dialogue box input comment field--> */}


        </div>




      </div >

    </>
  )
}
