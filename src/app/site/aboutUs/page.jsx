'use client';
import "jquery";
import $ from "jquery";
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import AboutHeader from "../../components/AboutHeader";
import AboutFooter from "../../components/AboutFooter";
import '../../../../public/assets/css/About.modules.css';


export default function AboutUs() {

    useEffect(() => {
        document.title = 'About Our Khrimisay';
    }, []);

    return (
        <>
            <AboutHeader />

            <section className="press_banner">
                <Image src="/assets/images/banner.png" alt="" className="press_banner_image" fill />
                <div className="banner_container">
                    <div className="banner-right">
                        <div className="banner-buttons">
                            <div>
                                <a href="/site/aboutUs" className="butn butn-rounded button-size btn_activated">About</a>
                            </div>
                            <div>
                                <a href="/site/pressroom" className="butn butn-rounded button-size">Press</a>
                            </div>
                            <div>
                                <a href="/" className="butn butn-rounded button-size">Careers</a>
                            </div>
                            <div>
                                <a href="/" className="butn butn-rounded button-size">Resources</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="dedicated_popup_banner d-none">
                <div className="dedicated_pop_up_line">
                    <div className="left_pop_img">
                        <Image src="/assets/images/handshake.png" alt="" fill />
                    </div>
                    <div className="right_pop_text">
                        Dedicated to making the Social Media space fun and memorable.
                    </div>
                </div>

                <div className="dedicated_pop_up_line">
                    <div className="left_pop_img">
                        <Image src="/assets/images/handshake.png" alt="" fill />
                    </div>
                    <div className="right_pop_text">
                        Optimizing to always ensure enjoyable use.
                    </div>
                </div>

                <div className="dedicated_pop_up_line">
                    <div className="left_pop_img">
                        <Image src="/assets/images/handshake.png" alt="" fill />
                    </div>
                    <div className="right_pop_text">
                        Innovative and practical ways to ensure smooth espression.
                    </div>
                </div>

                <div className="dedicated_pop_up_line">
                    <div className="left_pop_img">
                        <Image src="/assets/images/handshake.png" alt="" fill />
                    </div>
                    <div className="right_pop_text">
                        Commited to making sure we &quot;stay true&quot; and &quot;act right&quot; in accordance with our TOS especially as it relates to
                        information and data.
                    </div>
                </div>

                <div className="dedicated_pop_up_line">
                    <div className="left_pop_img">
                        <Image src="/assets/images/handshake.png" alt="" fill />
                    </div>
                    <div className="right_pop_text">
                        Commited to BRAF - Balance, Reason, Agreeability and Fairness. Expect it. Hold us to it.
                    </div>
                </div>
            </div>

            <section className="whoWeAre">
                <div className="container">
                    <div className="common-heading">
                        <h2 className="h2">Who we are</h2>
                    </div>
                    <div className="body-content">
                        <div className="image">
                            <Image className="shadow-left" src="/assets/images/whoWeAre.png" alt="Who We Are" fill />
                        </div>
                        <div className="text">
                            <p>We are Khrimisay and we are a team dedicated to making the social media space
                                fun and memorable.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whyWeAre">
                <div className="container">
                    <div className="body-content-reverse">
                        <div className="left">
                            <div className="common-heading">
                                <h2 className="h2">Why we are</h2>
                            </div>
                            <div className="text">
                                <p>Our purpose is to make social media fun and harness the true power of
                                    friendships as we give an avenue to share thoughts with others in localities
                                    and beyond.</p>
                            </div>
                        </div>
                        <div className="image">
                            <Image className="shadow-right" src="/assets/images/whyWeAre.png" alt="why we are" fill />
                        </div>
                    </div>
                </div>
            </section>

            <section className="howWeAre">
                <div className="container">
                    <div className="common-heading">
                        <h2 className="h2">How we are</h2>
                    </div>
                    <div className="body-content">
                        <div className="image">
                            <Image className="shadow-left" src="/assets/images/howWeAre.png" alt="how we are" fill />
                        </div>
                        <div className="text">
                            <p>
                                We are dedicated to our users and this dedication is the basis of all of our engagement. To ensure
                                we stay true to this, we have established practical ways to ensure everyone has a good time using Khrimisay
                                without feeling muffled or offended. When you come across the terms, “Speak Smoothly Rational“ or
                                “Usercraz<span className="zcy_text">cy</span>”, let it be the constant reminder of our dedication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <AboutFooter />
        </>
    )
}
