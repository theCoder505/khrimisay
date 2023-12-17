"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CookieHeader from "../../components/CookieHeader";
import CookieFooter from "../../components/CookieFooter";
import "../../../../public/assets/css/Faqs.modules.css";

export default function KhrimiPage() {
    useEffect(() => {
        document.title = "Privacy Policy of Khrimisay";
    }, []);




    return (
        <>
            <CookieHeader />


            <div className="bg__black top_bg">
                <div className="row no-gutters justify-content-center align-items-center text-center row__height">
                    <div className="col-10 col-md-7 col-lg-5">
                        <h3 className="white__font mb-3">What can we help you with?</h3>
                        <div className="p-1 searchBox shadow-sm mb-4">
                            <div className="input-group">
                                <input type="search" placeholder="Search Khrimisay" aria-describedby="button-addon1"
                                    className="input__search ml-2 border-0 sfpro" />
                                <div className="input-group-append">
                                    <button id="button-addon1" type="submit" className="btn btn-link white__font"><i
                                        className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid my-4 px-2 px-md-5">
                <Link className="text-decoration-none" href="/site/faqsseq">
                    <h2 className="mb-4 yellow__font mt-4">Questions about Khrimisay</h2>
                </Link>
                <div className="row">


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>



                </div>





                <Link className="text-decoration-none" href="/site/faqsseq">
                    <h2 className="mb-4 yellow__font mt-4">Questions about your General Features</h2>
                </Link>
                <div className="row">


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                            </ul>
                        </div>
                    </div>



                </div>



                <Link className="text-decoration-none" href="/site/faqsseq">
                    <h2 className="mb-4 yellow__font mt-4">Questions about Specific Features</h2>
                </Link>
                <div className="row">


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link></li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>



                </div>



                <Link className="text-decoration-none" href="/site/faqsseq">
                    <h2 className="mb-4 yellow__font mt-4">Questions about Content Moderation</h2>
                </Link>
                <div className="row">


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>



                </div>



                <Link className="text-decoration-none" href="/site/faqsseq">
                    <h2 className="mb-4 yellow__font mt-4">Questions about Accounts and Settings</h2>
                </Link>
                <div className="row">


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>


                </div>



                <Link className="text-decoration-none" href="/site/faqsseq">
                    <h2 className="mb-4 yellow__font mt-4">Questions about your Privacy and Security</h2>
                </Link>
                <div className="row">


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>


                </div>



                <Link className="text-decoration-none" href="/site/faqsseq">
                    <h2 className="mb-4 yellow__font mt-4">Questions about Terms and Conditions</h2>
                </Link>
                <div className="row">


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                                <li> <Link href="/site/faqsseq">About Khrimisay</Link> </li>
                            </ul>
                        </div>
                    </div>


                </div>



                <Link className="text-decoration-none" href="/site/faqsseq">
                    <h2 className="mb-4 yellow__font mt-4">Questions about Data Management</h2>
                </Link>
                <div className="row">


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about__questions border border-dark bg__white px-3">
                            <ul className="list-unstyled mb-0">
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                                <li> <Link href="/site/faqsseq">About KhrimLinksay</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>



            <div className="bg__black bottom_bg">
                <div className="row no-gutters  justify-content-center align-items-center text-center row__height">
                    <div className="col-10 col-md-7 col-lg-6">
                        <h3 className="mb-3 white__font"> Didn&apos;t find what you were <br /> Looking for ? </h3>
                        <Link href="#/" className="text-decoration-none textLinkwhite">
                            <button className="btn btn__support sfpro">contact support</button>
                        </Link>
                    </div>
                </div>
            </div>



            <footer className="faqs__footer pb-1 px-2 px-md-5 bg__faqs sfpro">
                <div className="d-flex flex-wrap align-items-center">
                    <p className="custom_footer_text pt-4">Stay in touch. Follow Khrimisay support.</p>
                    <div className="ml-0 ml-md-auto">
                        <ul className="d-flex footer__nav mb-0 list-unstyled">
                            <li className="nav-item">
                                <Link href="/site/faqsseq">ALinkout</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#">Linklog</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#">Con/Linkct</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="settings">Terms ofLinkuse</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="settings">Pri/Linkcy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}