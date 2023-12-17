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
import "../../../../public/assets/css/ChooseUtterworthy.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import React, { Component } from "react";
import Slider from "react-slick";

export default function KhrimiPage() {


    useEffect(() => {
        $(".img__tag").click(function () {
            $(".img__tag").removeClass("custom_border");
            $(this).addClass("custom_border");
            $(".btn__proceed").css("background-color", "#007a85");
        });

    }, [])


    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // nextArrow: '<i className="fa cursor  ml-2 fa-chevron-right" aria-hidden="true"></i>',
        // prevArrow: '<i className="fa cursor  mr-2 fa-chevron-left" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 1441,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        ],
    };




    return (
        <>
            <ChooseUtterworthyHeader />

            <div className="container">
                <div className="">
                    <div className="p-3 text-center">
                        <h4 className="utterfit_choose">Choose Your Utterreach Category</h4>
                        <p className="within_text">
                            Within 24 hours to a few days, request that your friends support your utter and get your posts
                            out there to as many as possible.
                            <a className="learn_more_link" href="/site/newpromotions">Learn More</a>
                        </p>
                    </div>
                    <div className="choose__uworthy text-center">
                        <Slider {...settings} className="add__cat__slider py-2 px-3 d-flex align-items-center p-2">

                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Book</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/52.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Tech</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/53.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Food</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/54.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Music</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/55.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Add category</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/56.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Book</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/52.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Tech</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/53.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Food</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/54.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Music</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/55.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Add category</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/56.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Book</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/52.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Tech</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/53.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Food</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/54.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Music</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/55.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="elem " style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="img__tag mx-3 text-center bg-white py-3 round-border">
                                    <a className="text-dark">
                                        <h6 className="utter_title">Add category</h6>
                                        <div className="utter_icon_holder">
                                            <Image className="d-inline-flex" src="/assets/images/promonew/56.png" alt="icon" fill />
                                        </div>
                                    </a>
                                </div>
                            </div>


                        </Slider>
                        <a href="/site/newpromotions"> <button className="btn btn__proceed mt-5 mb-2">proceed to setup</button>
                        </a>
                        <a href="#/" className="d-block quick_check_href"> Check a quick how to guide on setting up Utterreach
                        </a>
                    </div>
                </div>
            </div>



            <Script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></Script>
            <Script src="//code.jquery.com/jquery-1.11.3.min.js"></Script>
            <Script src="/cdn.jsdelivr.net/npm/bootstrap%404.5.3/dist/js/bootstrap.bundle.min.js"></Script>
            <Script src="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js"></Script>
        </>
    )
}
