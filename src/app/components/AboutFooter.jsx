'use client';
import "jquery";
import $ from "jquery";
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";

export default function AboutFooter() {
    return (
        <>
            <div className="bottom_links">
                <div className="bottom_4_lines">
                    <div className="bottom_link_line">
                        <Link href="" className="bottom_link">About Khrimisay</Link>
                        <Link href="" className="bottom_link">Terms of service</Link>
                        <Link href="" className="bottom_link">Developers</Link>
                        <Link href="" className="bottom_link">Jobs and Internships</Link>
                    </div>
                    <div className="bottom_link_line">
                        <div className="center_align_Div">
                            <Link href="" className="bottom_link">Help Center</Link>
                            <Link href="" className="bottom_link">Brand Usage</Link>
                            <Link href="" className="bottom_link">Coverage</Link>
                            <Link href="" className="bottom_link">Meet Us</Link>
                        </div>
                    </div>
                    <div className="bottom_link_line">
                        <div className="center_align_Div">
                            <Link href="" className="bottom_link">Blog</Link>
                            <Link href="" className="bottom_link">Status</Link>
                            <Link href="" className="bottom_link">Documentation</Link>
                            <Link href="" className="bottom_link">News Center</Link>
                        </div>
                    </div>
                    <div className="bottom_link_line">
                        <div className="right_align_Div">
                            <Link href="" className="bottom_link">Get started</Link>
                            <Link href="" className="bottom_link">Accessibility</Link>
                            <Link href="" className="bottom_link">Privacy Center</Link>
                            <Link href="" className="bottom_link">Resources</Link>
                        </div>
                    </div>
                </div>
            </div>




            <footer className="menu">
                <div className="container-flex">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-white stay_touch" href="#">
                                Stay in touch.
                            </Link>
                            <button className="join_sqrs_btn">Join KhrimisayUnveil&apos;s Squares</button>
                            <div className="khrimi_bottom_title">Khrimisay © Khrimisay LLC 2023 </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="social_icons">
                                    <div className="social_icon_line">
                                        <Image src="/assets/images/indeed.png" alt="" className="social_icon_img" fill />
                                    </div>
                                    <div className="social_icon_line">
                                        <Image src="/assets/images/khrimi_k_icon.png" alt="" className="social_icon_img" fill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </footer>
        </>
    )
}
