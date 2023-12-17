'use client';
import "jquery";
import $ from 'jquery'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";

export default function CookieHeader() {

    return (
        <>
            <section className="menu">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid px-5">
                        <Link className="navbar-brand" href="/site/utter">
                            <Image src="/assets/images/logo.png" alt="logo" fill />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto spec_nav_gap">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Report a bug/misuse</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/site/utter">Back to Khrimisay</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
