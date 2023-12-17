"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CookieHeader from "../../components/CookieHeader";
import CookieFooter from "../../components/CookieFooter";
import "../../../../public/assets/css/Cookies.modules.css";

export default function KhrimiPage() {
    useEffect(() => {
        document.title = "Cookies of Khrimisay";
    }, []);

    return (
        <>

            <CookieHeader />


            <div className="legal_bar">
                <div className="legal_main_title">
                    <center>
                        Cookies
                    </center>
                </div>
                <div className="legal_short_title">
                    <center>
                        How we use our cookies
                    </center>
                </div>
            </div>



            <div className="cookies_content">
                <div className="cookie_para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                    <br />
                    <br />
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many
                    desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                    search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>

                <div className="cookie_list">
                    1. Information you provide us. <br />
                    2. Outformation we share when you use Khrimisay. <br />
                    3. Outformation we share when you use Khrimisay. <br />
                    4. Outformation we share when you use Khrimisay. <br />
                    5. <a href="/site/utter" className="cookie_link"> Outformation we share when you use Khrimisay. </a> <br />
                </div>

                <div className="cookie_para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                    <br />
                    <br />
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many
                    desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                    search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
            </div>




            <CookieFooter />

        </>
    )
}
