"use client";
import "jquery";
import $ from 'jquery';
import Image from "next/image"
import Link from "next/link";
import Script from "next/script";
import OwlCarousel from '@ntegral/react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState, useEffect, useRef } from "react";
import MainHeader from "../../components/MainHeader";
import MainSideBar from "../../components/MainSideBar";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileEdit from "../../components/ProfileEdit";
import Bars from "../../components/Bars";
import UtterReach from "../../components/UtterReach";
import "../../../../public/assets/css/UtterWorthy.modules.css";
import allFunctions from "../../../../public/test";



export default function KhrimiPage() {

    const showDotPopup = () => {

    }



    const settings = {
        loop: true,
        margin: 35,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }

    useEffect(() => {
        $(".prev_btn").click(function () {
            $(".owl-prev").click();
        });

        $(".next_btn").click(function () {
            $(".owl-next").click();
        });
    }, []);


    return (
        <>

            <MainHeader />
            <MainSideBar />

            <div className="main">

                <div className="owl_carousel_part mt-4 mb-5 shado mx-5 pl-3">
                    <OwlCarousel id="owl-demo" className="owl-carousel owl-theme mt-5" {...settings}>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step1.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line">We the people</div>
                                <div className="title_line">2.5K</div>
                            </div>
                        </div>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step2.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line"># No other name</div>
                                <div className="title_line">30K</div>
                            </div>
                        </div>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step3.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line">We the people</div>
                                <div className="title_line">2.5K</div>
                            </div>
                        </div>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step4.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line"># No other name</div>
                                <div className="title_line">30K</div>
                            </div>
                        </div>

                        <div className="press_image item">
                            <Image src="/assets/images/next_step1.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line">We the people</div>
                                <div className="title_line">2.5K</div>
                            </div>
                        </div>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step2.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line"># No other name</div>
                                <div className="title_line">30K</div>
                            </div>
                        </div>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step3.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line">We the people</div>
                                <div className="title_line">2.5K</div>
                            </div>
                        </div>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step4.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line"># No other name</div>
                                <div className="title_line">30K</div>
                            </div>
                        </div>

                        <div className="press_image item">
                            <Image src="/assets/images/next_step1.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line">We the people</div>
                                <div className="title_line">2.5K</div>
                            </div>
                        </div>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step2.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line"># No other name</div>
                                <div className="title_line">30K</div>
                            </div>
                        </div>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step3.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line">We the people</div>
                                <div className="title_line">2.5K</div>
                            </div>
                        </div>
                        <div className="press_image item">
                            <Image src="/assets/images/next_step4.png" alt="" className="flagged_days" fill />
                            <div className="img_titles">
                                <div className="title_line"># No other name</div>
                                <div className="title_line">30K</div>
                            </div>
                        </div>
                    </OwlCarousel>

                    <div className="prev_next_btn">
                        <div className="prev_btn">
                            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                        </div>
                        <div className="next_btn">
                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>






                <div className="main-pill-section my-4 shado ml-5 mr-4">
                    <div className="row justify-content-between mx-3">
                        <div className="left_col">
                            <div className="common_input_sections mimi_gold_sec">
                                <div className="user-photos-section bg-white cstmbtm">
                                    <div className="d-flex flex-column flex-lg-row user-info">
                                        <Image className="rounded-circle mr-1 postsprofileimg activeblueday"
                                            src="/assets/images/suggested2.png" alt="" width="55" height="55" />
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
                                                            <Image className="ver__sub" src="/assets/images/time-icon.png" alt=""
                                                                width="20" height="20" />
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
                                                It is a long established
                                                fact that a reader will <span className="rootColor weight_600">We the people</span>
                                                be
                                                distracted by the readable
                                                content of a page when looking at its layout. The point of using
                                                Lorem Ipsum is that it has a
                                                more-or-less normal distribution of letters, as opposed to using
                                                &apos;Content here, content here&apos;,
                                                making it look like readable English.
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
                                                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                                            <span className="text-secondary">120</span>

                                                        </a>

                                                        <div className="show_3dot_popup d-none">
                                                            <a className="dot3_link" href="#/">Ditto</a>
                                                            <a className="dot3_link" href="#/">Broadcast
                                                                <span className="right_side_broadcast">
                                                                    <Image src="/assets/images/32.png" alt=""
                                                                        className="brod_cast_img" fill />
                                                                    <span className="num_in_dot">30</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="like-icon ml-md-4 ml-2">
                                                    <div className="like-icon">
                                                        <div className="dropdown show">
                                                            <a className="dropdown-toggle text-decoration-none text-dark" href="#"
                                                                role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
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
                                        <Image className="rounded-circle mr-1 postsprofileimg activeblueday"
                                            src="/assets/images/suggested2.png" alt="" width="55" height="55" />
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
                                                            <Image className="ver__sub" src="/assets/images/time-icon.png" alt=""
                                                                width="20" height="20" />
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
                                                It is a long established
                                                fact that a reader will be
                                                distracted by the readable
                                                content of a page when looking at its layout. The point of using
                                                Lorem Ipsum is that it has a
                                                more-or-less <span className="rootColor weight_600">We the people</span> normal
                                                distribution of letters, as opposed to using
                                                &apos;Content here, content here&apos;,
                                                making it look like readable English.
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
                                                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                                            <span className="text-secondary">120</span>

                                                        </a>

                                                        <div className="show_3dot_popup d-none">
                                                            <a className="dot3_link" href="#/">Ditto</a>
                                                            <a className="dot3_link" href="#/">Broadcast
                                                                <span className="right_side_broadcast">
                                                                    <Image src="/assets/images/32.png" alt=""
                                                                        className="brod_cast_img" fill />
                                                                    <span className="num_in_dot">30</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="like-icon ml-md-4 ml-2">
                                                    <div className="like-icon">
                                                        <div className="dropdown show">
                                                            <a className="dropdown-toggle text-decoration-none text-dark" href="#"
                                                                role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
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
                                        <Image className="rounded-circle mr-1 postsprofileimg activeblueday"
                                            src="/assets/images/suggested2.png" alt="" width="55" height="55" />
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
                                                            <Image className="ver__sub" src="/assets/images/time-icon.png" alt=""
                                                                width="20" height="20" />
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
                                                It is a long established
                                                fact that a reader will be
                                                distracted by the readable
                                                content of a page when looking at its layout. The point of using
                                                Lorem Ipsum is that it has a
                                                more-or-less normal distribution of letters, as opposed to using
                                                &apos;Content here, content here&apos;,
                                                making it look like readable English. <span className="rootColor weight_600">We the
                                                    people</span>
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
                                                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                                            <span className="text-secondary">120</span>

                                                        </a>

                                                        <div className="show_3dot_popup d-none">
                                                            <a className="dot3_link" href="#/">Ditto</a>
                                                            <a className="dot3_link" href="#/">Broadcast
                                                                <span className="right_side_broadcast">
                                                                    <Image src="/assets/images/32.png" alt=""
                                                                        className="brod_cast_img" fill />
                                                                    <span className="num_in_dot">30</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="like-icon ml-md-4 ml-2">
                                                    <div className="like-icon">
                                                        <div className="dropdown show">
                                                            <a className="dropdown-toggle text-decoration-none text-dark" href="#"
                                                                role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
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
                                        <Image className="rounded-circle mr-1 postsprofileimg activeblueday"
                                            src="/assets/images/suggested2.png" alt="" width="55" height="55" />
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
                                                            <Image className="ver__sub" src="/assets/images/time-icon.png" alt=""
                                                                width="20" height="20" />
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
                                                It is a long established
                                                fact that a reader will be
                                                distracted by the readable
                                                content of a page when looking at its layout. The point <span
                                                    className="rootColor weight_600">We the people</span> of using
                                                Lorem Ipsum is that it has a
                                                more-or-less normal distribution of letters, as opposed to using
                                                &apos;Content here, content here&apos;,
                                                making it look like readable English.
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
                                                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                                            <Image className="img-fluid" src="/assets/images/19.png" alt="" fill />
                                                            <span className="text-secondary">120</span>

                                                        </a>

                                                        <div className="show_3dot_popup d-none">
                                                            <a className="dot3_link" href="#/">Ditto</a>
                                                            <a className="dot3_link" href="#/">Broadcast
                                                                <span className="right_side_broadcast">
                                                                    <Image src="/assets/images/32.png" alt=""
                                                                        className="brod_cast_img" fill />
                                                                    <span className="num_in_dot">30</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="like-icon ml-md-4 ml-2">
                                                    <div className="like-icon">
                                                        <div className="dropdown show">
                                                            <a className="dropdown-toggle text-decoration-none text-dark" href="#"
                                                                role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
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
                        </div>




                        <div className="right_col">
                            <div className="searchMediaResultsLine">
                                <div className="result_lines textTabResults Uttertags">
                                    <div className="restablines"> <a href="more_suggestions.html"> Sports </a> </div>
                                    <div className="restablines"> <a href="more_suggestions.html"> Music </a> </div>
                                    <div className="restablines"> <a href="more_suggestions.html"> Art </a> </div>
                                    <div className="restablines more_space"> <a href="more_suggestions.html"> Entertainment </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>



            <Script src="//cdn.tiny.cloud/1/invalid-origin/tinymce/5.10.7-133/tinymce.min.js"></Script>
            <Script src="/assets/js/common.js"></Script>
        </>
    )
}
