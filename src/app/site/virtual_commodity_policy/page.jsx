"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useMemo, useEffect, useRef, useState } from 'react';
import CookieHeader from "../../components/CookieHeader";
import CookieFooter from "../../components/CookieFooter";
import "../../../../public/assets/css/Cookies.modules.css";

export default function KhrimiPage() {


    const contentRefs = {
        overview_1: useRef(null),
        overview_2: useRef(null),
        overview_3: useRef(null),
        overview_4: useRef(null),
        overview_5: useRef(null),
    };

    const [activeId, setActiveId] = useState('overview_1');

    useEffect(() => {
        document.title = "Privacy Policy of Khrimisay";
    }, []);

    const scrollTillBar = (id) => {
        const element = contentRefs[id].current;

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        setActiveId(id);
    };

    const handleScroll = () => {
        for (const key in contentRefs) {
            const element = contentRefs[key].current;

            if (element) {
                const rect = element.getBoundingClientRect();

                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveId(key);
                    break;
                }
            }
        }
    };

    window.addEventListener('scroll', handleScroll);






    return (
        <>
            <CookieHeader />


            <div className="legal_bar">
                <div className="legal_main_title">
                    Virtual Commodity Policy
                </div>
                <div className="legal_date">
                    Effective 25th May 2024
                </div>
            </div>


            <div className="legal_rows">
                <div className="left_contents">
                    <div className="left_fixed">
                        <div className="left_title">
                            Content
                        </div>
                        <div className="left_lists">
                            <div className={`list_title ${activeId === 'overview_1' ? 'activated_list' : ''}`}
                                onClick={() => scrollTillBar('overview_1')}
                                data-id="overview_1">
                                1. Overview
                            </div>
                            <div className={`list_title ${activeId === 'overview_2' ? 'activated_list' : ''}`}
                                onClick={() => scrollTillBar('overview_2')}
                                data-id="overview_2">
                                2. Overview
                            </div>
                            <div className={`list_title ${activeId === 'overview_3' ? 'activated_list' : ''}`}
                                onClick={() => scrollTillBar('overview_3')}
                                data-id="overview_3">
                                3. Overview
                            </div>
                            <div className={`list_title ${activeId === 'overview_4' ? 'activated_list' : ''}`}
                                onClick={() => scrollTillBar('overview_4')}
                                data-id="overview_4">
                                4. Overview
                            </div>
                            <div className={`list_title ${activeId === 'overview_5' ? 'activated_list' : ''}`}
                                onClick={() => scrollTillBar('overview_5')}
                                data-id="overview_5">
                                5. Overview
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right_contents">
                    <div className="right_title">
                        Khrimicoins
                    </div>

                    <div ref={contentRefs.overview_1} className="overview_items overview_1">
                        <div className="overview_title">
                            1. Overview
                        </div>
                        <div className="overview_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br />
                            <br />
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                            default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
                            infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </div>
                    </div>

                    <div ref={contentRefs.overview_2} className="overview_items overview_2">
                        <div className="overview_title">
                            2. Overview
                        </div>
                        <div className="overview_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br />
                            <br />
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                            default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
                            infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </div>
                    </div>


                    <div ref={contentRefs.overview_3} className="overview_items overview_3">
                        <div className="overview_title">
                            3. Overview
                        </div>
                        <div className="overview_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br />
                            <br />
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                            default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
                            infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </div>
                    </div>

                    <div ref={contentRefs.overview_4} className="overview_items overview_4">
                        <div className="overview_title">
                            4. Overview
                        </div>
                        <div className="overview_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br />
                            <br />
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                            default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
                            infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </div>
                    </div>


                    <div ref={contentRefs.overview_5} className="overview_items overview_5">
                        <div className="overview_title">
                            5. Overview
                        </div>
                        <div className="overview_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br />
                            <br />
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like
                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                            default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
                            infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </div>
                    </div>

                </div>
            </div>


            <CookieFooter />
        </>
    )
}