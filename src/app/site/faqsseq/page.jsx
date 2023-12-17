"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import Script from 'next/script'
import { useState, useEffect, useRef } from "react";
import CookieHeader from "../../components/CookieHeader";
import CookieFooter from "../../components/CookieFooter";
import "../../../../public/assets/css/Faqs.modules.css";

export default function KhrimiPage() {
    useEffect(() => {
        document.title = "What can we help you with Khrimisay";
    }, []);

    const activateQuestion = (passedParam) => {
        $(".spec_side_link").removeClass("active");
        $(passedParam).addClass("active");
        let toActive = $(passedParam).attr("data-id");
        $(".tab-pane").removeClass("show");
        $(".tab-pane").removeClass("active");
        $(toActive).addClass("show");
        $(toActive).addClass("active");
    }


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



            <div className="mainSection">
                <div className="d-flex">
                    <div className="leftQuestionsPart">
                        <ul className="nav nav-pills questions__navpills flex-column" id="myTab" role="tablist">
                            <li className="nav-item">
                                <span className="nav-link spec_side_link active" id="home-tab" data-id="#khrimisay1" role="tab" aria-controls="home" onClick={(e) => activateQuestion(e.target)}
                                    aria-selected="true">About khrimisay 1 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link" id="profile-tab" data-id="#khrimisay2" role="tab" aria-controls="profile" onClick={(e) => activateQuestion(e.target)}
                                    aria-selected="false">About khrimisay 2 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link" id="contact-tab" data-id="#khrimisay3" role="tab" aria-controls="contact" onClick={(e) => activateQuestion(e.target)}
                                    aria-selected="false">About khrimisay 3 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link nav-3" id="profile-tab" data-id="#khrimisay4" role="tab" onClick={(e) => activateQuestion(e.target)}
                                    aria-controls="contact" aria-selected="false">About khrimisay 4 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link" id="home-tab" data-id="#khrimisay1" role="tab" aria-controls="home" onClick={(e) => activateQuestion(e.target)}
                                    aria-selected="true">About khrimisay 1 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link" id="profile-tab" data-id="#khrimisay2" role="tab" aria-controls="profile" onClick={(e) => activateQuestion(e.target)}
                                    aria-selected="false">About khrimisay 2 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link" id="contact-tab" data-id="#khrimisay3" role="tab" aria-controls="contact" onClick={(e) => activateQuestion(e.target)}
                                    aria-selected="false">About khrimisay 3 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link nav-3" id="profile-tab" data-id="#khrimisay4" role="tab" onClick={(e) => activateQuestion(e.target)}
                                    aria-controls="contact" aria-selected="false">About khrimisay 4 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link" id="home-tab" data-id="#khrimisay1" role="tab" aria-controls="home" onClick={(e) => activateQuestion(e.target)}
                                    aria-selected="true">About khrimisay 1 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link" id="profile-tab" data-id="#khrimisay2" role="tab" aria-controls="profile" onClick={(e) => activateQuestion(e.target)}
                                    aria-selected="false">About khrimisay 2 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link" id="contact-tab" data-id="#khrimisay3" role="tab" aria-controls="contact" onClick={(e) => activateQuestion(e.target)}
                                    aria-selected="false">About khrimisay 3 ?</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link spec_side_link nav-3" id="profile-tab" data-id="#khrimisay4" role="tab" onClick={(e) => activateQuestion(e.target)}
                                    aria-controls="contact" aria-selected="false">About khrimisay 4 ?</span>
                            </li>
                        </ul>
                    </div>
                    <div className="rightQuestionsPart">
                        <div className="tab-content" id="myTabContent">

                            <div className="tab-pane fade show active" id="khrimisay1" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="questionTitle">Questions about Khrimisay 1</h3>
                                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <br /><br />

                                    It is a long established fact that a reader will be distracted by the readable content of a page when
                                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                    letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many
                                    desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                                    search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved
                                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    <br /><br />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                    <br /><br />
                                    It is a long established fact that a reader will be distracted by the readable content of a page when
                                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                    letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many
                                    desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                                    search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved
                                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                                </p>
                            </div>
                            <div className="tab-pane fade" id="khrimisay2" role="tabpanel" aria-labelledby="profile-tab">
                                <h3 className="questionTitle">Questions about Khrimisay 2</h3>
                                <p className="text-justify">Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eveniet
                                    earum. Sed
                                    accusantium eligendi molestiae quo hic velit nobis et, tempora placeat ratione rem
                                    blanditiis voluptates vel ipsam? Facilis, earum!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti ea, voluptates
                                    sequi vel facilis autem possimus vero harum quos iste accusantium nihil commodi quod itaque
                                    in debitis, eaque error!
                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ad sint deleniti totam! Nihil
                                    esse quo aut optio repudiandae reiciendis veritatis, cumque error, recusandae ea laborum
                                    fugiat sit nobis eveniet?

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                </p>
                            </div>
                            <div className="tab-pane fade" id="khrimisay3" role="tabpanel" aria-labelledby="contact-tab">
                                <h3 className="questionTitle">Questions about Khrimisay 3</h3>
                                <p className="text-justify">Three Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eveniet
                                    earum. Sed
                                    accusantium eligendi molestiae quo hic velit nobis et, tempora placeat ratione rem
                                    blanditiis voluptates vel ipsam? Facilis, earum!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti ea, voluptates
                                    sequi vel facilis autem possimus vero harum quos iste accusantium nihil commodi quod itaque
                                    in debitis, eaque error!
                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ad sint deleniti totam! Nihil
                                    esse quo aut optio repudiandae reiciendis veritatis, cumque error, recusandae ea laborum
                                    fugiat sit nobis eveniet?

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                </p>

                            </div>
                            <div className="tab-pane fade" id="khrimisay4" role="tabpanel" aria-labelledby="contact-tab">
                                <h3 className="questionTitle">Questions about Khrimisay 4</h3>
                                <p className="text-justify">Three Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eveniet
                                    earum. Sed
                                    accusantium eligendi molestiae quo hic velit nobis et, tempora placeat ratione rem
                                    blanditiis voluptates vel ipsam? Facilis, earum!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti ea, voluptates
                                    sequi vel facilis autem possimus vero harum quos iste accusantium nihil commodi quod itaque
                                    in debitis, eaque error!
                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ad sint deleniti totam! Nihil
                                    esse quo aut optio repudiandae reiciendis veritatis, cumque error, recusandae ea laborum
                                    fugiat sit nobis eveniet?

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                    <br /> <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aut mollitia
                                    blanditiis facere expedita minima quia consequuntur amet maxime sit ab aspernatur
                                    dignissimos, perferendis ullam commodi totam suscipit voluptate!

                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="rating_article_part">
                <h3>Rate this article</h3>
                <div className="star_icons">
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
            </div>


            <div className="related_articles_part">
                <div className="row">
                    <div className="col-md-6">
                        <div className="related_link_title">
                            Related articles
                        </div>
                        <div className="all_links">
                            <a href="" className="article_href_link">Creating Utters</a>
                            <a href="" className="article_href_link">FAQs about our Terms of service and Privacy Policy</a>
                            <a href="" className="article_href_link">Personalization</a>
                            <a href="" className="article_href_link">Phone Number Verification</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="related_link_title">
                            Top articles
                        </div>
                        <div className="all_links">
                            <a href="" className="article_href_link">Creating Utters</a>
                            <a href="" className="article_href_link">FAQs about our Terms of service and Privacy Policy</a>
                            <a href="" className="article_href_link">Personalization</a>
                            <a href="" className="article_href_link">Phone Number Verification</a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="bg__black bottom_bg">
                <div className="row no-gutters  justify-content-center align-items-center text-center row__height">
                    <div className="col-10 col-md-7 col-lg-6">
                        <h3 className="mb-3 white__font"> Didn&apos;t find what you were <br /> Looking for ? </h3>
                        <span data-id="#/" className="text-decoration-none text-white">
                            <button className="btn bt spec_side_linkn__support sfpro">contact support</button>
                        </span>
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
                                <Link href="#">Link spec_side_linklog</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#">Con/ spec_side_linkLinkct</Link>
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