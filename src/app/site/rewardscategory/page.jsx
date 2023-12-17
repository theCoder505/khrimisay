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
import "../../../../public/assets/css/RewardsCategory.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import React, { Component } from "react";
import Slider from "react-slick";

export default function KhrimiPage() {

    const settings = {
        infinite: true,
        // dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
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
            <MainHeader />
            <MainSideBar />





            <div className="main">

                <Link className="text-dark on-click-active-rewards ml-4 p-2" href="/site/mykhrimi">
                    <i className="fa fa-chevron-circle-left" aria-hidden="true"><span className="ml-3">Back to rewards</span></i>
                </Link>

                <section className="container-flex">
                    <div className="ml-4 p-2">
                        <Slider {...settings} className="doordash-slider my-5 py-2 px-3 d-flex align-items-center p-2">
                            <div className="elem" style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="icon-text-box">
                                    <i className="fa d-block fa-drupal" aria-hidden="true"></i>
                                    <a href="#/" className="text-dark d-block text-decoration-none">Doordash</a>
                                    <a href="#/" className="text-danger text-decoration-none"> <span>10% off Each Order</span> </a>
                                </div>
                            </div>

                            <div className="elem" style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="icon-text-box">
                                    <i className="fa d-block fa-drupal" aria-hidden="true"></i>
                                    <a href="#/" className="text-dark d-block text-decoration-none">Doordash</a>
                                    <a href="#/" className="text-danger text-decoration-none"> <span>10% off Each Order</span> </a>
                                </div>
                            </div>

                            <div className="elem" style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="icon-text-box">
                                    <i className="fa d-block fa-drupal" aria-hidden="true"></i>
                                    <a href="#/" className="text-dark d-block text-decoration-none">Doordash</a>
                                    <a href="#/" className="text-danger text-decoration-none"> <span>10% off Each Order</span> </a>
                                </div>
                            </div>

                            <div className="elem" style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="icon-text-box">
                                    <i className="fa d-block fa-drupal" aria-hidden="true"></i>
                                    <a href="#/" className="text-dark d-block text-decoration-none">Doordash</a>
                                    <a href="#/" className="text-danger text-decoration-none"> <span>10% off Each Order</span> </a>
                                </div>
                            </div>

                            <div className="elem" style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="icon-text-box">
                                    <i className="fa d-block fa-drupal" aria-hidden="true"></i>
                                    <a href="#/" className="text-dark d-block text-decoration-none">Doordash</a>
                                    <a href="#/" className="text-danger text-decoration-none"> <span>10% off Each Order</span> </a>
                                </div>
                            </div>

                            <div className="elem" style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="icon-text-box">
                                    <i className="fa d-block fa-drupal" aria-hidden="true"></i>
                                    <a href="#/" className="text-dark d-block text-decoration-none">Doordash</a>
                                    <a href="#/" className="text-danger text-decoration-none"> <span>10% off Each Order</span> </a>
                                </div>
                            </div>

                            <div className="elem" style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="icon-text-box">
                                    <i className="fa d-block fa-drupal" aria-hidden="true"></i>
                                    <a href="#/" className="text-dark d-block text-decoration-none">Doordash</a>
                                    <a href="#/" className="text-danger text-decoration-none"> <span>10% off Each Order</span> </a>
                                </div>
                            </div>

                            <div className="elem" style={{ width: "150px !important" }} data-slick-index="0">
                                <div className="icon-text-box">
                                    <i className="fa d-block fa-drupal" aria-hidden="true"></i>
                                    <a href="#/" className="text-dark d-block text-decoration-none">Doordash</a>
                                    <a href="#/" className="text-danger text-decoration-none"> <span>10% off Each Order</span> </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>

            </div>






        </>
    )
}
