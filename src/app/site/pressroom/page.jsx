'use client';
import "jquery";
import $ from "jquery";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";
import Script from "next/script";
import OwlCarousel from '@ntegral/react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AboutHeader from "../../components/AboutHeader";
import AboutFooter from "../../components/AboutFooter";
import '../../../../public/assets/css/About.modules.css';



export default function KhrimiPage() {
    const sidebyside = (event) => {
        event.stopPropagation();
        const parentElem = event.currentTarget;
        if ($(".side_by_side_part").hasClass('d-none')) {
            $(parentElem).children('img').attr("src", '/assets/images/left_right.png');
        } else {
            $(parentElem).children('img').attr("src", '/assets/images/up_down.png');
        }

        $(".owl_carousel_part").toggleClass("d-none");
        $(".side_by_side_part").toggleClass("d-none");
    }


    const settings = {
        loop: true,
        margin: 35,
        nav: true,
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
            <AboutHeader />

            <section className="press_banner">
                <Image src="/assets/images/pressroom.png" alt="" className="press_banner_image" fill />
                <div className="banner_container">
                    <div className="banner-right">
                        <div className="banner-buttons">
                            <div>
                                <Link href="/site/aboutUs" className="butn butn-rounded button-size">About</Link>
                            </div>
                            <div>
                                <Link href="/site/pressroom" className="butn butn-rounded button-size">Press</Link>
                            </div>
                            <div>
                                <Link href="/" className="butn butn-rounded button-size">Careers</Link>
                            </div>
                            <div>
                                <Link href="/" className="butn butn-rounded button-size">Resources</Link>
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

            <h1 className="pressroomTitle">Pressroom</h1>
            <section className="container mb-5">


                <div className="two_corners">

                    <div className="d-flex">
                        <div className="input-group">
                            <input type="text" className="search-input" placeholder="Search this blog" />
                            <div className="input-group-append">
                                <button className="btn search_btn" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="right_sided_icons" onClick={sidebyside}>
                        <Image src="/assets/images/up_down.png" alt="" className="" fill />
                    </div>
                </div>


                <div className="owl_carousel_part">
                    <OwlCarousel id="owl-demo" className="owl-carousel owl-theme mt-5" {...settings}>

                        <div className="press_image item">
                            <div className="press-image">
                                <Image src="/assets/images/Press room logo.png" alt="" fill />
                                <Image src="/assets/images//press.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
                            </div>
                        </div>

                        <div className="press_image item">
                            <div className="press-image black_press">
                                <Image src="/assets/images/forbes.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
                            </div>
                        </div>

                        <div className="press_image item">
                            <div className="press-image">
                                <Image src="/assets/images/Press room logo.png" alt="" fill />
                                <Image src="/assets/images//press.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
                            </div>
                        </div>

                        <div className="press_image item">
                            <div className="press-image black_press">
                                <Image src="/assets/images/forbes.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
                            </div>
                        </div>

                        <div className="press_image item">
                            <div className="press-image">
                                <Image src="/assets/images/Press room logo.png" alt="" fill />
                                <Image src="/assets/images//press.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
                            </div>
                        </div>

                        <div className="press_image item">
                            <div className="press-image">
                                <Image src="/assets/images/Press room logo.png" alt="" fill />
                                <Image src="/assets/images//press.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
                            </div>
                        </div>

                        <div className="press_image item">
                            <div className="press-image black_press">
                                <Image src="/assets/images/forbes.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
                            </div>
                        </div>

                        <div className="press_image item">
                            <div className="press-image">
                                <Image src="/assets/images/Press room logo.png" alt="" fill />
                                <Image src="/assets/images//press.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
                            </div>
                        </div>

                        <div className="press_image item">
                            <div className="press-image black_press">
                                <Image src="/assets/images/forbes.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
                            </div>
                        </div>

                        <div className="press_image item">
                            <div className="press-image">
                                <Image src="/assets/images/Press room logo.png" alt="" fill />
                                <Image src="/assets/images//press.png" alt="" fill />
                            </div>
                            <div className="press-text">
                                <p>Khrimisay quietly <br /> launches.</p>
                                <p className="date_time">20th Dec, 2023</p>
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






                <div className="side_by_side_part d-none">
                    <div className="press_image item side_by_side_line">
                        <div className="press-image">
                            <Image src="/assets/images/Press room logo.png" alt="" fill />
                            <Image src="/assets/images//press.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image black_press">
                            <Image src="/assets/images/forbes.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image">
                            <Image src="/assets/images/Press room logo.png" alt="" fill />
                            <Image src="/assets/images//press.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image black_press">
                            <Image src="/assets/images/forbes.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image">
                            <Image src="/assets/images/Press room logo.png" alt="" fill />
                            <Image src="/assets/images//press.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image black_press">
                            <Image src="/assets/images/forbes.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image">
                            <Image src="/assets/images/Press room logo.png" alt="" fill />
                            <Image src="/assets/images//press.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image black_press">
                            <Image src="/assets/images/forbes.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>


                    <div className="press_image item side_by_side_line">
                        <div className="press-image">
                            <Image src="/assets/images/Press room logo.png" alt="" fill />
                            <Image src="/assets/images//press.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image black_press">
                            <Image src="/assets/images/forbes.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image">
                            <Image src="/assets/images/Press room logo.png" alt="" fill />
                            <Image src="/assets/images//press.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image black_press">
                            <Image src="/assets/images/forbes.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>


                    <div className="press_image item side_by_side_line">
                        <div className="press-image">
                            <Image src="/assets/images/Press room logo.png" alt="" fill />
                            <Image src="/assets/images//press.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image black_press">
                            <Image src="/assets/images/forbes.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image">
                            <Image src="/assets/images/Press room logo.png" alt="" fill />
                            <Image src="/assets/images//press.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>

                    <div className="press_image item side_by_side_line">
                        <div className="press-image black_press">
                            <Image src="/assets/images/forbes.png" alt="" fill />
                        </div>
                        <div className="press-text">
                            <p>Khrimisay quietly <br /> launches.</p>
                            <p className="date_time">20th Dec, 2023</p>
                        </div>
                    </div>
                </div>






            </section>

            <section className="for_press_question">
                <div className="container-flex">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="press_title">
                                For press-related enquiries, please contact us at
                            </div>
                            <Link href="mailto:press@khrimisay.com" className="link_press">press@khrimisay.com</Link>
                        </div>
                        <div className="col-md-6">
                            <div className="press_title press_title_right">
                                For general questions, please contact us at
                            </div>
                            <Link href="mailto:questions@khrimisay.com" className="link_press right_link">questions@khrimisay.com</Link>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="menu">
                <div className="container-flex">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-white" href="#">
                                Stay in touch. Follow Khrimisay support
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" href="#">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">Terms of use</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">Privecy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </footer>



            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"
                integrity="sha512-n/4gHW3atM3QqRcbCn6ewmpxcLAHGaDjpEBu4xZd47N0W2oQ+6q7oc3PXstrJYXcbNU1OHdQ1T7pAP+gi5Yu8g=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></Script>

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                crossorigin="anonymous"></Script>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js"
                integrity="sha512-gY25nC63ddE0LcLPhxUJGFxa2GoIyA5FLym4UJqHDEMHjp8RET6Zn/SHo1sltt3WuVtqfyxECP38/daUc/WVEA=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></Script>

        </>
    )
}
