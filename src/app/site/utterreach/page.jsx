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
import "../../../../public/assets/css/UtterReachPage.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";

export default function KhrimiPage() {
    useEffect(() => {
        document.title = 'Utterreach On Khrimisay';
    }, []);


    const { uttermostToggle, seeMore, showDotPopup } = allFunctions;


    const openCommentsUter = (e) => {
        console.log("Open Comments!");
        e.stopPropagation();
        const parentDiv = e.currentTarget;
        $(parentDiv).parent().parent().children(".all_related_comments").toggleClass("d-none");
    }


    return (
        <>
            <MainHeader />
            <MainSideBar />


            <div className="main">
                <div className="mb-4 ml-0 ml-lg-0">
                    <div className="topthemes d-none d-md-block">
                        <div className="utter-most-section d-lg-flex px-2 pt-2 pb-1 mb-4 sfpro">
                            <div className=" weightMedium">
                                <a className="specific" onClick={uttermostToggle}> Uttermost </a> <br />
                            </div>



                            <div id="normalBar" className="d-none">

                                <Link href="/site/utterworthy_next_step">
                                    <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                        style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                                        <div className=" toptext">Trump </div>
                                        <div className="btmtext ">#&nbsp;287k</div>
                                    </div>
                                </Link>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>Coming to America</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                                    <a>
                                        <div className=" toptext">Capital Riot</div>
                                        <div className="btmtext ">#&nbsp;200</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <Image className="img-fluid" alt="" width="100" src="/assets/images/king.png" height={100} />
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/window.png')" }}>
                                    <a>
                                        <div className=" toptext">Trump is a disgrace</div>
                                        <div className="btmtext ">#&nbsp;287k</div>
                                    </a>
                                </div>



                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>


                            </div>





                            <div id="themesBar" className="d-none">



                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes1.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Premiership| </div>
                                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Holiday Trip| </div>
                                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes3.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |We here @Orly| </div>
                                        <div className="btmtext text-normal">20.1k&nbsp;Utters</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes4.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |High Live| </div>
                                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Music| </div>
                                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                                    </a>
                                </div>



                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Holiday Trip| </div>
                                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Holiday Trip| </div>
                                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Holiday Trip| </div>
                                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Holiday Trip| </div>
                                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Holiday Trip| </div>
                                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Music| </div>
                                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                                    </a>
                                </div>
                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Music| </div>
                                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                                    </a>
                                </div>
                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Music| </div>
                                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                                    </a>
                                </div>
                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Music| </div>
                                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                                    </a>
                                </div>
                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                                    <a>
                                        <div className="toptext text-normal"> |Music| </div>
                                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                                    </a>
                                </div>


                            </div>





                            <div id="uttermostBar" className="">

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                                    <a>
                                        <div className=" toptext">Trump </div>
                                        <div className="btmtext ">#&nbsp;287k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                                    <a>
                                        <div className=" toptext">Capital Riot</div>
                                        <div className="btmtext ">#&nbsp;200</div>
                                    </a>
                                </div>


                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>


                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                                    <a>
                                        <div className=" toptext">Trump </div>
                                        <div className="btmtext ">#&nbsp;287k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                                    <a>
                                        <div className=" toptext">Capital Riot</div>
                                        <div className="btmtext ">#&nbsp;200</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                                    <a>
                                        <div className=" toptext">Capital Riot</div>
                                        <div className="btmtext ">#&nbsp;200</div>
                                    </a>
                                </div>




                                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                                    style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                                    <a>
                                        <div className=" toptext">Trump2 </div>
                                        <div className="btmtext ">#&nbsp;287k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>


                                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                                    <a>
                                        <div className=" toptext">Capital Riot</div>
                                        <div className="btmtext ">#&nbsp;200</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                                    <a>
                                        <div className=" toptext">US Election</div>
                                        <div className="btmtext ">#&nbsp;300k</div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                                    style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                                    <a>
                                        <div className=" toptext">Trump </div>
                                        <div className="btmtext ">#&nbsp;287k</div>
                                    </a>
                                </div>

                            </div>






                            <div id="featuresBar" className="d-none">

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>Coming to America</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <Image className="img-fluid" alt="" width="100" src="/assets/images/king.png" height={100} />
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>


                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>Coming to America</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <Image className="img-fluid" alt="" width="100" src="/assets/images/king.png" height={100} />
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <Image className="img-fluid" alt="" width="100" src="/assets/images/king.png" height={100} />
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>



                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber 2nd</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>Coming to America</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <Image className="img-fluid" alt="" width="100" src="/assets/images/king.png" height={100} />
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>


                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>Coming to America</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <Image className="img-fluid" alt="" width="100" src="/assets/images/king.png" height={100} />
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                                    <a>
                                        <Image className="img-fluid" alt="" width="100" src="/assets/images/king.png" height={100} />
                                        <div className="imgText-two justify-content-center m-auto">
                                            <span>justin bieber new album</span>
                                        </div>
                                    </a>
                                </div>


                            </div>



                            <div className="weightMedium">
                                <a className="specific hasttag" onClick={seeMore}> See More </a>
                            </div>

                        </div>



                    </div>

                    <div className="row restbars">
                        <div className="col-sm-7 col-md-7 col-lg-8 customrightpadding">
                            <div id="postsHolder">
                                <div className="main-div shadow-sm">
                                    <div className="user-photos-section bg-white">
                                        <div className="settings_tab">
                                            <div className="settings">
                                                <Image src="/assets/images/create_utterfit.png" alt="" fill />
                                            </div>
                                            <div className="dot_sign"></div>
                                            <div className="hour_sign">
                                                <Image src="/assets/images/time-icon.png" alt="" fill />
                                                <span>3hr</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row user-info">
                                            <Image className="rounded-circle mr-1 postsprofileimg" alt="" src="/assets/images/suggested3.png" height="55" width="55" />
                                            <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                                                <div className="d-flex pos_relative">
                                                    <div className="d-flex flex-column">
                                                        <div className="username-photos">
                                                            Tunde Kelani
                                                            <span className="cstmrem9 date user-date grayColor sfpro">@Tunde </span>
                                                        </div>
                                                        <div className="username-photos">
                                                            Business.
                                                            <span className="cstmrem9 date user-date grayColor sfpro"> My latest
                                                                single </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="full_post">

                                            <div className="round_post">
                                                <div className="user-photo-img">
                                                    <Image className="img-fluid post-width" alt="" src="/assets/images/executor.png" fill />
                                                </div>

                                                <div className="bottom_details">
                                                    <div className="detail_title">Hey everyone. Check my new book.</div>
                                                    <a href="" className="detail_href">www.newbook.com</a>
                                                </div>
                                            </div>

                                            <div className="user-icons-section d-flex justify-content-between bg-white pt-3">
                                                <div className="icons-left d-flex">
                                                    <div className="like-icon mr-md-4 mr-2">
                                                        <a title="Applaud">
                                                            <Image className="img-fluid" alt="" src="/assets/images/20.png" fill /></a>
                                                        <span className="text-secondary">120</span>
                                                    </div>
                                                    <div className="like-icon">
                                                        <a title="Boo">
                                                            <Image className="img-fluid" alt="" src="/assets/images/21.png" fill /></a>
                                                        <span className="text-secondary">120</span>
                                                    </div>
                                                </div>

                                                <div className="center-icon like-icon" onClick={openCommentsUter}>
                                                    <a className="comment-icon-toggle text-decoration-none">
                                                        <Image className="img-fluid" alt="" src="/assets/images/23.png" fill />
                                                    </a>
                                                    <span className="text-secondary">120</span>
                                                </div>


                                                <div className="icons-left dropdown-reutter-and-copylink d-flex">
                                                    <div className="like-icon">
                                                        <div className="dropdown show">
                                                            <a className="dropdown-toggle text-decoration-none text-dark"
                                                                id="dropdownMenuLink" onClick={(e) => showDotPopup(e)}>
                                                                <Image className="img-fluid" alt="" src="/assets/images/19.png" fill />
                                                                <Image className="img-fluid" alt="" src="/assets/images/19.png" fill />
                                                                <span className="text-secondary">120</span>
                                                            </a>

                                                            <div className="show_3dot_popup d-none">
                                                                <div className="line_flex">
                                                                    <span className="left_side_broadcast">
                                                                        <Image className="img-fluid ditto_icons" alt="" src="/assets/images/19.png" fill />
                                                                        <Image className="img-fluid ditto_icons" alt="" src="/assets/images/19.png" fill />
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
                                                                    <Image className="img-fluid" alt="" src="/assets/images/22.png" fill />
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

                                    <div className="bg-white write-message hintable write-message-input firstone" style={{ display: "none" }}>
                                        <div className="d-flex w-82 px-3 py-2 flex-row user-info">
                                            <Image className="rounded-circle mr-3" alt="" src="/assets/images/8.png" height="55" width="55" />
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



                                </div>
                            </div>
                        </div>





                        <div className="col-sm-5 col-md-5 col-lg-4 customleftpadding">

                            <div className="sidesticky border-radius-k pb-4 utter-section"
                                style={{ backgroundColor: "#e2e8e9", marginLeft: "0.30rem" }}>
                                <div className="utter-heading text-center pt-3 pb-2 px-4">
                                    <h3>Utterreach</h3>
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
                                                    src="/assets/images/utterworthy/1.png" alt="" width="110" height="50" />
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
                                                    src="/assets/images/utterworthy/2.png" alt="" width="110" height="50" />
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
                                                    src="/assets/images/utterworthy/3.png" alt="" width="110" height="50" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
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
                                                    src="/assets/images/utterworthy/5.png" alt="" width="110" height="50" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
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
                                                    src="/assets/images/utterworthy/4.png" alt="" width="110" height="50" />
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
                                                    src="/assets/images/utterworthy/6.png" alt="" width="110" height="50" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
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
                                                    src="/assets/images/utterworthy/5.png" alt="" width="110" height="50" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="mx-4 mt-5 pt-2">
                                        <Link href="#" className="load__more d-flex align-items-center">
                                            <span className="ml-4 text-capitalize mr-2">more load</span>
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </Link>
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
