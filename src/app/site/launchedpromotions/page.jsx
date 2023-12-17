"use client"
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
import "../../../../public/assets/css/Launched.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";

export default function KhrimiPage() {

    useEffect(() => {
        document.title = 'Launched Promotions On Khrimisay';
    }, []);

    return (
        <>

            <nav className="navbar navbar-expand-md py-3 navbar-light mb-3 bg__kchat">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <Link href="/site/utter">
                        <Image className="promo_user_icon" src="/assets/images/promonew/15.png" alt="user" fill />
                    </Link>
                    <Image className="mx-1 mx-md-4 list_promo" src="/assets/images/promonew/57.png" alt="user" fill />
                    <Image className="chart_promo" src="/assets/images/promonew/58.png" alt="user" fill />
                    <h4 className="mb-0 ml-3 d-inline-block text-white">New Promotions</h4>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ml-auto">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <Image className="promo__coin" src="/assets/images/promonew/16.png" alt="coin" fill />
                                <Image className="ml-1 k_icon_img" src="/assets/images/k-icon-new.png" alt="k" fill />
                                <span className="text-white count__k">10000</span>
                            </div>
                            <div className="hr__line mx-3"></div>
                            <div className="quest__img">
                                <Image src="/assets/images/promonew/17.png" alt="" fill />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <div className="bg-white p-3 text-center">
                            <h4 className="mb-0">Congratulations, your promotion has been successfully launched <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h4>
                        </div>
                        <div className="promo__summary">
                            <h5 className="my-4">Promotion Summary</h5>
                            <ul className="list-unstyled mb-5">
                                <li> Promotion Title: <span>The secrets of book</span> </li>
                                <li> Schedule: <span>3 days</span> </li>
                                <li> Coin Allocation: <span>K400</span> </li>
                                <li> Targeting: <span>Male, Young Adult</span> </li>
                            </ul>

                            <div className="d-flex">
                                <a>
                                    <button type="button" className="btn btn__promomanager">go to promotion manger</button>
                                </a>
                                <Link href="/site/chooseutterworthy">
                                    <button className="btn btn__editpromo mx-3">edit promotion</button>
                                </Link>
                            </div>

                            <div className="d-flex align-items-center my-5">
                                <ul className="list-unstyled">
                                    <li>(a): all right 2024...</li>
                                </ul>
                                <div className="ml-auto">
                                    <Link href="/site/settings" className="text-dark">Privacy Settings</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
