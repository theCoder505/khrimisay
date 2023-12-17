'use client';
import "jquery";
import $ from 'jquery'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";

export default function CookieFooter() {
  return (
    <>
    

    <div className="bottom_links">
        <div className="all_link_holder">
            <div className="bottom_link_holder">
                <Link href="/site/aboutUs" className="khrimi_links">About Khrimisay</Link>
                <Link href="#" className="khrimi_links">Jobs and Internship</Link>
                <Link href="#" className="khrimi_links">Investors</Link>
            </div>
            <div className="bottom_link_holder">
                <Link href="/site/aboutUs" className="khrimi_links">Help Center</Link>
                <Link href="#" className="khrimi_links">Managing Your Account</Link>
                <Link href="/site/privacy_policy" className="khrimi_links">Rules and Policies</Link>
            </div>
            <div className="bottom_link_holder">
                <Link href="#" className="khrimi_links">Documentation</Link>
                <Link href="#" className="khrimi_links">News Center</Link>
                <Link href="#" className="khrimi_links">Khrimipress</Link>
            </div>
            <div className="bottom_link_holder">
                <Link href="#" className="khrimi_links">Accessibility</Link>
                <Link href="/site/privacy_policy" className="khrimi_links">Privacy Centre</Link>
                <Link href="#" className="khrimi_links">Status</Link>
            </div>
            <div className="bottom_link_holder">
                <Link href="#" className="khrimi_links">Communities</Link>
                <Link href="#" className="khrimi_links">Developer Blog</Link>
                <Link href="/site/terms" className="khrimi_links">Developer Terms</Link>
            </div>
        </div>
    </div>



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
                                <Link className="nav-link" href="#">Terms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Cookie</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Privacy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Language</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Khrimisay ©</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </footer>
    
    </>
  )
}
