'use client';
import "jquery";
import $ from 'jquery'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";

export default function AboutHeader() {
    const showCommitmentPopup = () => {
        $(".dedicated_popup_banner").toggleClass("d-none");
    }


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
                                <li className="nav-item about_btns" onClick={showCommitmentPopup}>
                                    <a className="nav-link" aria-current="page">Our Commitment</a>
                                </li>
                                <li className="nav-item about_btns">
                                    <Link className="nav-link" href="/site/utter">Back to Khrimisay</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
