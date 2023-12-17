"use client";
import "../../../../node_modules/jquery";
import $ from "../../../../node_modules/jquery";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MainHeader from "../../components/MainHeader";
import MainSideBar from "../../components/MainSideBar";
import PostHolder from "../../components/PostHolder";
import Bars from "../../components/Bars";
import UtterReach from "../../components/UtterReach";
import "../../../../public/assets/css/Utters.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";


export default function KhrimiPage() {
    const { sayHello, anotherFunction, uttermostToggle, seeMore, removeThreeLinePopup, joinHomeUtter, crossHomeUtter, textVal, showMoreUtterFirstBoxContent, activate_msg_content, showThreeDotPopup, show_reportUtterPopup, openComments, showDotPopup, } = allFunctions;



    return (
        <>
            <MainHeader />
            <MainSideBar />

            <div className="main">

                <div className="mb-4 ml-0 ml-lg-0">

                    <div className="topthemes d-none d-md-block">
                        {/* start of utter most features */}
                        <div className="utter-most-section d-lg-flex px-2 pt-2 pb-1 mb-4 sfpro">
                            <div className=" weightMedium">
                                <a className="specific" onClick={() => uttermostToggle()}> Uttermost </a> <br />
                                {/* <a className="specific hasttag" onClick={() => featuresToggle()}> Features </a>  */}
                            </div>


                            <Bars />

                            <div className="weightMedium">
                                {/* <Link className="specific" onClick={() => themesToggle()}> | Themes | </Link> <br/>  */}
                                <span className="specific hasttag" onClick={() => seeMore()}> See More </span>
                            </div>
                        </div>
                    </div>

                    <div className="row restbars">
                        <div className="col-sm-7 col-md-7 col-lg-8 customrightpadding">
                            <div className="three_dot_cover_bg d-none" onClick={removeThreeLinePopup}></div>
                            <PostHolder />
                        </div>

                        <UtterReach />

                    </div>
                    {/* end of utter most features */}

                </div>
            </div>


        </>
    )
}
