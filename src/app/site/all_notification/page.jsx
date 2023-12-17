"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CloseMainHeader from "../../components/CloseMainHeader";
import MainSideBar from "../../components/MainSideBar";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileEdit from "../../components/ProfileEdit";
import Bars from "../../components/Bars";
import UtterReach from "../../components/UtterReach";
import "../../../../public/assets/css/Notifications.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";

export default function KhrimiPage() {



    useEffect(() => {
        document.title = 'Your All Notifications On Khrimisay';
        const activate_notification = (passedThis) => {
            $('.unread').removeClass("notification-btn");
            $(passedThis).addClass("notification-btn");
            let htmlText = $(passedThis).html();

            if (htmlText == 'Unread') {
                $(".bar-notification").addClass("d-none");
                $(".unread_notifications").removeClass("d-none");
            } else {
                $(".bar-notification").removeClass("d-none");
            }
        }
    }, []);



    return (
        <>


            <div className="responsive_className">
                <CloseMainHeader />
                <MainSideBar />


                <div className="main">

                    <div className="mb-4 ml-0 ml-lg-0">

                        <div className="row restbars">

                            <div className="col-sm-7 col-md-7 col-lg-8 customrightpadding">
                                <div className="head_notification">
                                    <span className="unread notification-btn" onClick={(e) => activate_notification(e.target)}>All Notifications</span>
                                    <span className="unread" onClick={(e) => activate_notification(e.target)}>Unread</span>
                                </div>


                                <div className="notification-panel">
                                    <div className="bar-notification read_notification">
                                        <div className="pro-image">
                                            <Image src="/assets/images/suggested3.png" alt="" width="50" height="50" />
                                        </div>
                                        <div className="text-spece">
                                            <span>Tye Tribbet uttered: I am tired of playing these games. Come let’s do something... <span
                                                className="mint_text">23mins</span> </span>
                                        </div>


                                        <div className="dropdown spec_icon_bg" id="icon_bg">
                                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h" data-toggle="dropdown"
                                                aria-hidden="true"></i>

                                        </div>

                                    </div>


                                    <div className="bar-notification unread_notifications">
                                        <div className="pro-image">
                                            <Image src="/assets/images/suggested3.png" alt="" width="50" height="50" />
                                        </div>
                                        <div className="text-spece">
                                            <span>Taye Taiwo uttered: we played a bad game guys,
                                                we can’t blame anyone for it... <span className="mint_text">2days</span> </span>
                                        </div>


                                        <div className="dropdown spec_icon_bg" id="icon_bg">
                                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h" data-toggle="dropdown"
                                                aria-hidden="true"></i>

                                        </div>

                                    </div>


                                    <div className="bar-notification read_notification">
                                        <div className="pro-image">
                                            <Image src="/assets/images/suggested3.png" alt="" width="50" height="50" />
                                        </div>
                                        <div className="text-spece">
                                            <span>Mikel Obi uttered: guys we do this for the country and
                                                for ourselves. Let’s do it... <span className="mint_text">4days</span> </span>
                                        </div>


                                        <div className="dropdown spec_icon_bg" id="icon_bg">
                                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h" data-toggle="dropdown"
                                                aria-hidden="true"></i>

                                        </div>

                                    </div>


                                    <div className="bar-notification unread_notifications">
                                        <div className="pro-image">
                                            <Image src="/assets/images/suggested3.png" alt="" width="50" height="50" />
                                        </div>
                                        <div className="text-spece">
                                            <span>Tye Tribbet commented: I am tired of playing
                                                these games. Come let’s sing of something... <span className="mint_text">5hr</span> </span>
                                        </div>


                                        <div className="dropdown spec_icon_bg" id="icon_bg">
                                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h" data-toggle="dropdown"
                                                aria-hidden="true"></i>

                                        </div>

                                    </div>


                                    <div className="bar-notification read_notification">
                                        <div className="pro-image">
                                            <Image src="/assets/images/suggested3.png" alt="" width="50" height="50" />
                                        </div>
                                        <div className="text-spece">
                                            <span>Taye Taiwo replied: I won’t speak of this again until you
                                                change your ways... <span className="mint_text">3hr</span> </span>
                                        </div>


                                        <div className="dropdown spec_icon_bg" id="icon_bg">
                                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h" data-toggle="dropdown"
                                                aria-hidden="true"></i>

                                        </div>

                                    </div>


                                    <div className="bar-notification read_notification">
                                        <div className="pro-image">
                                            <Image src="/assets/images/suggested3.png" alt="" width="50" height="50" />
                                        </div>
                                        <div className="text-spece">
                                            <span>Tim Laye dittoed one of your utters... <span className="mint_text">3hr</span> </span>
                                        </div>


                                        <div className="dropdown spec_icon_bg" id="icon_bg">
                                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h" data-toggle="dropdown"
                                                aria-hidden="true"></i>

                                        </div>

                                    </div>


                                    <div className="bar-notification unread_notifications">
                                        <div className="pro-image">
                                            <Image src="/assets/images/suggested3.png" alt="" width="50" height="50" />
                                        </div>
                                        <div className="text-spece">
                                            <span>An Utter liked your comment... <span className="mint_text">2hr</span> </span>
                                        </div>


                                        <div className="dropdown spec_icon_bg" id="icon_bg">
                                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h" data-toggle="dropdown"
                                                aria-hidden="true"></i>

                                        </div>

                                    </div>


                                    <div className="bar-notification unread_notifications">
                                        <div className="pro-image">
                                            <Image src="/assets/images/suggested3.png" alt="" width="50" height="50" />
                                        </div>
                                        <div className="text-spece">
                                            <span>Tim Laye sent you 5 Khrimi coins... <span className="mint_text">2hr</span> </span>
                                        </div>


                                        <div className="dropdown spec_icon_bg" id="icon_bg">
                                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h" data-toggle="dropdown"
                                                aria-hidden="true"></i>

                                        </div>

                                    </div>


                                    <div className="bar-notification unread_notifications">
                                        <div className="pro-image">
                                            <Image src="/assets/images/suggested3.png" alt="" width="50" height="50" />
                                        </div>
                                        <div className="text-spece">
                                            <span>Tim Laye requested 25 Khrimi coins... <span className="mint_text">2hr</span> </span>
                                        </div>


                                        <div className="dropdown spec_icon_bg" id="icon_bg">
                                            <i id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false"
                                                className="fa dropdown-toggle ellipsis-toggle-none fa__lg fa-ellipsis-h" data-toggle="dropdown"
                                                aria-hidden="true"></i>

                                        </div>

                                    </div>
                                </div>




                            </div>

                            <div className="col-sm-5 col-md-5 col-lg-4 customleftpadding">
                                <div className="sidesticky border-radius-k pb-4 utter-section"
                                    style={{ backgroundColor: "#e2e8e9", marginLeft: "0.30rem" }}>
                                    <div className="utter-heading text-center pt-3 pb-2 px-4">
                                        <Link href="/site/notifications" className="all_notification_text">All Notifications</Link>
                                    </div>
                                    <hr className="mb-3 mt-0 border__light" />
                                    <div className="sfpro">

                                        <div className="all_notifications">
                                            <div className="notification_line">Friends</div>
                                            <div className="notification_line">@mimigold</div>
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
