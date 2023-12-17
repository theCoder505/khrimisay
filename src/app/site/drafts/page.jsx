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
import Bars from "../../components/Bars";
import UtterReach from "../../components/UtterReach";
import "../../../../public/assets/css/Drafts.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";

export default function KhrimiPage() {

    const { showThreeDotPopup, show_reportUtterPopup, openComments, showDotPopup, } = allFunctions;



    return (
        <>

            <MainHeader />
            <MainSideBar />

            <div className="main">
                <div className="mb-4">
                    <div className="row restbars">
                        <div className="col-sm-7 col-md-7 col-lg-8 customrightpadding">

                            <div className="flex-buttons mb-3">
                                <Link href="/site/bookmarks" className="inertButton">Saved <span className="totalmarks">(5)</span> </Link>
                                <Link href="/site/drafts" className="inertButton activatedbtn">Drafts <span
                                    className="totalmarks">(3)</span> </Link>
                                <span className="dropdown right3dots">
                                    <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                        className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h"
                                        data-toggle="dropdown" aria-hidden="true"></i>
                                </span>
                            </div>



                            <div className="all_posts">
                                <div className="main-div cstmbtm shadow-sm">
                                    <div className="user-photos-section bg-white">
                                        <div className="d-flex flex-column flex-lg-row user-info">
                                            <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/suggested2.png"
                                                alt="" height="55" width="55" />
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
                                                                    width="20" alt="" height={20} />
                                                                <span className="text-secondary">8 hr.</span>
                                                                <span className="rootColor">
                                                                    Selected for the #siteoftheday award by @design :)
                                                                </span>
                                                            </div>
                                                        </span>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <div className="dropdown spec_icon_bg" onClick={(e) => showThreeDotPopup(e)}>
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
                                                            <div className="right_popup_text" onClick={(e) => show_reportUtterPopup(e)}>
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
                                                    readable content of a page
                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a
                                                    more-or-less normal
                                                    distribution of letters, as opposed to using &appos;Content here, content here&appos;,
                                                    making it look like
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

                                                <div className="center-icon like-icon" onClick={(e) => openComments(e)}>
                                                    <a className="comment-icon-toggle text-decoration-none">
                                                        <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                                                    <span className="text-secondary">120</span>
                                                </div>


                                                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                                                    <div className="like-icon">
                                                        <div className="dropdown show">
                                                            <a className="dropdown-toggle text-decoration-none text-dark"
                                                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e)}>
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
                                                                    <input type="text" placeholder="What an insightful post."
                                                                        className="comment_input" />
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
                                                                inflation rate and its negative
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
                                                                        the inflation rate and its
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
                                                                        the inflation rate and its
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
                                                        rate and its negative
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




                                </div>



                                <div className="main-div cstmbtm shadow-sm">
                                    <div className="user-photos-section bg-white">
                                        <div className="d-flex flex-column flex-lg-row user-info">
                                            <Image className="rounded-circle mr-1 postsprofileimg" src="/assets/images/suggested2.png"
                                                alt="" height="55" width="55" />
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
                                                                    width="20" alt="" height={20} />
                                                                <span className="text-secondary">8 hr.</span>
                                                                <span className="rootColor">
                                                                    Selected for the #siteoftheday award by @design :)
                                                                </span>
                                                            </div>
                                                        </span>
                                                    </div>

                                                    <div className="ml-auto">
                                                        <div className="dropdown spec_icon_bg" onClick={(e) => showThreeDotPopup(e)}>
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
                                                            <div className="right_popup_text" onClick={(e) => show_reportUtterPopup(e)}>
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
                                                    readable content of a page
                                                    when looking at its layout. The point of using Lorem Ipsum is that it has a
                                                    more-or-less normal
                                                    distribution of letters, as opposed to using &appos;Content here, content here&appos;,
                                                    making it look like
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

                                                <div className="center-icon like-icon" onClick={(e) => openComments(e)}>
                                                    <a className="comment-icon-toggle text-decoration-none">
                                                        <Image className="img-fluid" src="/assets/images/23.png" alt="" fill /></a>
                                                    <span className="text-secondary">120</span>
                                                </div>


                                                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                                                    <div className="like-icon">
                                                        <div className="dropdown show">
                                                            <a className="dropdown-toggle text-decoration-none text-dark"
                                                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e)}>
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
                                                                    <input type="text" placeholder="What an insightful post."
                                                                        className="comment_input" />
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
                                                                inflation rate and its negative
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
                                                                        the inflation rate and its
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
                                                                        the inflation rate and its
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
                                                        rate and its negative
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




                                </div>
                            </div>




                        </div>



                        <div className="col-sm-5 col-md-5 col-lg-4 customleftpadding">

                            <div className="sidesticky border-radius-k pb-4 utter-section"
                                style={{ backgroundColor: '#e2e8e9', marginLeft: '0.30rem' }}>
                                <div className="utter-heading text-center pt-3 pb-2 px-4">
                                    <h3>Utterfit</h3>
                                </div>
                                <hr className="mb-3 mt-0 border__light" />
                                <div className="sfpro">
                                    <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                                        <Link href="/site/utterreach" title="its clickable"
                                            className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                            <div className=" img-section ">
                                                <div className="px-3">
                                                    <h3 className="inner-heading-font">Business </h3>
                                                    <span className="grayText"> We remain alive</span>
                                                    <div className="k-icon d-flex">
                                                        <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                                        <span>300</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-30">
                                                <iframe className="video rounded-image d-none w-100"
                                                    src="http://www.youtube.com/embed/9B7te184ZpQ?rel=0" frameBorder="0"
                                                    allowFullScreen></iframe>
                                                <Image className="img-fluid rounded-image w-100"
                                                    src="/assets/images/utterworthy/1.png" width="110" height="30" alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                                        <Link href="/site/utterreach" title="its clickable"
                                            className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                            <div className=" img-section ">
                                                <div className="px-3">
                                                    <h3 className="inner-heading-font">Music </h3>
                                                    <span className="grayText"> My latest single</span>
                                                    <div className="k-icon d-flex">
                                                        <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                                        <span>280</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-30">
                                                <Image className="img-fluid rounded-image w-100"
                                                    src="/assets/images/utterworthy/2.png" width="110" height="30" alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                                        <Link href="/site/utterreach" title="its clickable"
                                            className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                            <div className=" img-section ">
                                                <div className="px-3">
                                                    <h3 className="inner-heading-font">Fashion </h3>
                                                    <span className="grayText"> Burka hair</span>
                                                    <div className="k-icon d-flex">
                                                        <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                                        <span>250</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-30">
                                                <Image className="img-fluid rounded-image w-100"
                                                    src="/assets/images/utterworthy/3.png" width="110" height="30" alt="" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div LinkssName="bg-white grey-box  mb-4 ml-4 rounded-image">
                                        <Link href="/site/utterreach" title="its clickable"
                                            className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                            <div className=" img-section ">
                                                <div className="px-3">
                                                    <h3 className="inner-heading-font">Movie </h3>
                                                    <span className="grayText"> A night in tehran</span>
                                                    <div className="k-icon d-flex">
                                                        <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                                        <span>200</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-30">
                                                <Image className="img-fluid rounded-image w-100"
                                                    src="/assets/images/utterworthy/5.png" width="110" height="30" alt="" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div LinkssName="bg-white grey-box  mb-4 ml-4 rounded-image">
                                        <Link href="/site/utterreach" title="its clickable"
                                            className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                            <div className=" img-section ">
                                                <div className="px-3">
                                                    <h3 className="inner-heading-font">Book </h3>
                                                    <span className="grayText"> The Executor</span>
                                                    <div className="k-icon d-flex">
                                                        <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                                        <span>150</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-30">
                                                <Image className="img-fluid rounded-image w-100"
                                                    src="/assets/images/utterworthy/4.png" width="110" height="30" alt="" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div LinkssName="bg-white grey-box  mb-4 ml-4 rounded-image">
                                        <Link href="/site/utterreach" title="its clickable"
                                            className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                            <div className=" img-section ">
                                                <div className="px-3">
                                                    <h3 className="inner-heading-font">Music </h3>
                                                    <span className="grayText"> My latest single</span>
                                                    <div className="k-icon d-flex">
                                                        <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                                        <span>280</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-30">
                                                <Image className="img-fluid rounded-image w-100"
                                                    src="/assets/images/utterworthy/6.png" width="110" height="30" alt="" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div LinkssName="bg-white grey-box  mb-4 ml-4 rounded-image">
                                        <Link href="/site/utterreach" title="its clickable"
                                            className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                            <div className=" img-section ">
                                                <div className="px-3">
                                                    <h3 className="inner-heading-font">Movie </h3>
                                                    <span className="grayText"> A night in tehran</span>
                                                    <div className="k-icon d-flex">
                                                        <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                                        <span>200</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-30">
                                                <Image className="img-fluid rounded-image w-100"
                                                    src="/assets/images/utterworthy/5.png" width="110" height="30" alt="" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div LinkssName="mx-4 mt-5 pt-2">
                                        <a href="#" className="load__more d-flex align-items-center">
                                            <span className="ml-4 text-capitalize mr-2">more load</span>
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            {/* <Script src="/assets/js/common.js"></Script> */}

        </>
    )
}
