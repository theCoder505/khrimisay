"use client"
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MainHeader from "../../components/MainHeader";
import MainSideBar from "../../components/MainSideBar";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileEdit from "../../components/ProfileEdit";
import ChooseUtterworthyHeader from "../../components/ChooseUtterworthyHeader";
import UtterReach from "../../components/UtterReach";
import "../../../../public/assets/css/SupportUtters.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";

export default function KhrimiPage() {

    const showSupportDiv = (event) => {
        $(event).html("SUPPORT");
        $(event).parent().children('.some_other_time').html("CANCEL");
        $(event).parent().parent().children(".will_support").removeClass("d-none");
    }

    const cacnelSupport = (event) => {
        $(event).parent().children('.btn_two').html("Yes, I'll suppport");
        $(event).parent().children('.some_other_time').html("Some other time");
        $(event).parent().parent().children(".will_support").addClass("d-none");
    }


    return (
        <>

            <MainHeader />
            <MainSideBar />

            <div className="main">
                <div className="body_main">
                    <div className="bodyGrid">

                        <div className="leftSR">
                            <div className="left_top">
                                <Image src="/assets/images/create_utterfit.png" alt="leftop" fill />
                                <h3 className="utterfit_title">Utterreach</h3>
                            </div>


                            <div className="utterreach_sipports_holder">
                                <div className="utterreach_supports">
                                    <Image src="/assets/images/support_plus.png" alt="support" fill />
                                    <h4 className="support_text">Support Requests</h4>
                                </div>
                                <div className="utterreach_supports">
                                    <Image src="/assets/images/support_right.png" alt="support" fill />
                                    <h4 className="support_text">Supported Requests</h4>
                                </div>

                                <div className="utterfit_btn_holder">
                                    <button className="btn bg_grey text_light cancBut btn_two">CREATE UTTERREACH</button>
                                </div>
                            </div>
                        </div>


                        <div className="rightSR">
                            <h3 className="request_title">Support Requests</h3>



                            <div className="sr">
                                <div className="sret sret1">
                                    <Image src="/assets/images/side2.png" alt="s2" fill />
                                    <p className="text-dark"><b>Hellen Keller</b> is requesting Utterfit Support. <br /> Business <span
                                        className="text_grey">We remain alive</span></p>
                                </div>
                                <div className="sret sret2">
                                    <Image src="/assets/images/sre.png" alt="sre" fill />
                                    <p className="text-dark">Hey Everyone. Checkout my new album.</p>
                                    <a href="#">www.albumfever.com</a>
                                </div>


                                <div className="will_support d-none">
                                    <div className="input_results">
                                        <div className="left_input">
                                            <Image src="/assets/images/32.png" alt="" className="coin_icon" fill />
                                            <div className="number_input" contenteditable="true" onkeyup="checkValue(this)">20</div>
                                        </div>
                                        <div className="middle_line">
                                            <div className="the_line_through"></div>
                                        </div>
                                        <div className="right_output">
                                            <Image src="/assets/images/utterworthy/19.png" alt="" className="coin_icon" fill />
                                            <div className="number_input final_output">100</div>
                                        </div>
                                    </div>

                                    <div className="boxed_middle">
                                        <div className="box_top_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/32.png" alt="" className="coin_icon" fill /> → <Image src="/assets/images/32.png" alt=""
                                                    className="coin_icon" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 2
                                            </div>
                                        </div>
                                        <div className="box_middle_item"></div>
                                        <div className="box_bottom_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/two_friends.png" alt="" className="bottom_box_image" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 3
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="sret sret3">
                                    <button className="btn bg_grey text_light cancBut btn_two" onClick={(e) => showSupportDiv(e.target)}>Yes, I&apos;ll suppport</button>
                                    <button className="btn bg_grey text_light cancBut some_other_time" onClick={(e) => cacnelSupport(e.target)}>Some other time</button>
                                    <button className="btn three_dots"><Image src="/assets/images/more.png" alt="more" fill /></button>
                                </div>
                            </div>


                            <div className="sr">
                                <div className="sret sret1">
                                    <Image src="/assets/images/side2.png" alt="s2" fill />
                                    <p className="text-dark"><b>Hellen Keller</b> is requesting Utterfit Support. <br /> Business <span
                                        className="text_grey">We remain alive</span></p>
                                </div>
                                <div className="sret sret2">
                                    <Image src="/assets/images/sre.png" alt="sre" fill />
                                    <p className="text-dark">Hey Everyone. Checkout my new album.</p>
                                    <a href="#">www.albumfever.com</a>
                                </div>


                                <div className="will_support d-none">
                                    <div className="input_results">
                                        <div className="left_input">
                                            <Image src="/assets/images/32.png" alt="" className="coin_icon" fill />
                                            <div className="number_input" contenteditable="true" onkeyup="checkValue(this)">20</div>
                                        </div>
                                        <div className="middle_line">
                                            <div className="the_line_through"></div>
                                        </div>
                                        <div className="right_output">
                                            <Image src="/assets/images/utterworthy/19.png" alt="" className="coin_icon" fill />
                                            <div className="number_input final_output">100</div>
                                        </div>
                                    </div>

                                    <div className="boxed_middle">
                                        <div className="box_top_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/32.png" alt="" className="coin_icon" fill /> → <Image src="/assets/images/32.png" alt=""
                                                    className="coin_icon" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 2
                                            </div>
                                        </div>
                                        <div className="box_middle_item"></div>
                                        <div className="box_bottom_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/two_friends.png" alt="" className="bottom_box_image" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 3
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sret sret3">
                                    <button className="btn bg_grey text_light cancBut btn_two" onClick={(e) => showSupportDiv(e.target)}>Yes, I&apos;ll suppport</button>
                                    <button className="btn bg_grey text_light cancBut some_other_time" onClick={(e) => cacnelSupport(e.target)}>Some other time</button>
                                    <button className="btn three_dots"><Image src="/assets/images/more.png" alt="more" fill /></button>
                                </div>
                            </div>



                            <div className="sr">
                                <div className="sret sret1">
                                    <Image src="/assets/images/side2.png" alt="s2" fill />
                                    <p className="text-dark"><b>Hellen Keller</b> is requesting Utterfit Support. <br /> Business <span
                                        className="text_grey">We remain alive</span></p>
                                </div>
                                <div className="sret sret2">
                                    <Image src="/assets/images/sre.png" alt="sre" fill />
                                    <p className="text-dark">Hey Everyone. Checkout my new album.</p>
                                    <a href="#">www.albumfever.com</a>
                                </div>

                                <div className="will_support d-none">
                                    <div className="input_results">
                                        <div className="left_input">
                                            <Image src="/assets/images/32.png" alt="" className="coin_icon" fill />
                                            <div className="number_input" contenteditable="true" onkeyup="checkValue(this)">20</div>
                                        </div>
                                        <div className="middle_line">
                                            <div className="the_line_through"></div>
                                        </div>
                                        <div className="right_output">
                                            <Image src="/assets/images/utterworthy/19.png" alt="" className="coin_icon" fill />
                                            <div className="number_input final_output">100</div>
                                        </div>
                                    </div>

                                    <div className="boxed_middle">
                                        <div className="box_top_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/32.png" alt="" className="coin_icon" fill /> → <Image src="/assets/images/32.png" alt=""
                                                    className="coin_icon" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 2
                                            </div>
                                        </div>
                                        <div className="box_middle_item"></div>
                                        <div className="box_bottom_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/two_friends.png" alt="" className="bottom_box_image" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 3
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sret sret3">
                                    <button className="btn bg_grey text_light cancBut btn_two" onClick={(e) => showSupportDiv(e.target)}>Yes, I&apos;ll suppport</button>
                                    <button className="btn bg_grey text_light cancBut some_other_time" onClick={(e) => cacnelSupport(e.target)}>Some other time</button>
                                    <button className="btn three_dots"><Image src="/assets/images/more.png" alt="more" fill /></button>
                                </div>
                            </div>



                            <div className="sr">
                                <div className="sret sret1">
                                    <Image src="/assets/images/side2.png" alt="s2" fill />
                                    <p className="text-dark"><b>Hellen Keller</b> is requesting Utterfit Support. <br /> Business <span
                                        className="text_grey">We remain alive</span></p>
                                </div>
                                <div className="sret sret2">
                                    <Image src="/assets/images/sre.png" alt="sre" fill />
                                    <p className="text-dark">Hey Everyone. Checkout my new album.</p>
                                    <a href="#">www.albumfever.com</a>
                                </div>

                                <div className="will_support d-none">
                                    <div className="input_results">
                                        <div className="left_input">
                                            <Image src="/assets/images/32.png" alt="" className="coin_icon" fill />
                                            <div className="number_input" contenteditable="true" onkeyup="checkValue(this)">20</div>
                                        </div>
                                        <div className="middle_line">
                                            <div className="the_line_through"></div>
                                        </div>
                                        <div className="right_output">
                                            <Image src="/assets/images/utterworthy/19.png" alt="" className="coin_icon" fill />
                                            <div className="number_input final_output">100</div>
                                        </div>
                                    </div>

                                    <div className="boxed_middle">
                                        <div className="box_top_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/32.png" alt="" className="coin_icon" fill /> → <Image src="/assets/images/32.png" alt=""
                                                    className="coin_icon" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 2
                                            </div>
                                        </div>
                                        <div className="box_middle_item"></div>
                                        <div className="box_bottom_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/two_friends.png" alt="" className="bottom_box_image" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 3
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sret sret3">
                                    <button className="btn bg_grey text_light cancBut btn_two" onClick={(e) => showSupportDiv(e.target)}>Yes, I&apos;ll suppport</button>
                                    <button className="btn bg_grey text_light cancBut some_other_time" onClick={(e) => cacnelSupport(e.target)}>Some other time</button>
                                    <button className="btn three_dots"><Image src="/assets/images/more.png" alt="more" fill /></button>
                                </div>
                            </div>


                            <div className="sr">
                                <div className="sret sret1">
                                    <Image src="/assets/images/side2.png" alt="s2" fill />
                                    <p className="text-dark"><b>Hellen Keller</b> is requesting Utterfit Support. <br /> Business <span
                                        className="text_grey">We remain alive</span></p>
                                </div>
                                <div className="sret sret2">
                                    <Image src="/assets/images/sre.png" alt="sre" fill />
                                    <p className="text-dark">Hey Everyone. Checkout my new album.</p>
                                    <a href="#">www.albumfever.com</a>
                                </div>

                                <div className="will_support d-none">
                                    <div className="input_results">
                                        <div className="left_input">
                                            <Image src="/assets/images/32.png" alt="" className="coin_icon" fill />
                                            <div className="number_input" contenteditable="true" onkeyup="checkValue(this)">20</div>
                                        </div>
                                        <div className="middle_line">
                                            <div className="the_line_through"></div>
                                        </div>
                                        <div className="right_output">
                                            <Image src="/assets/images/utterworthy/19.png" alt="" className="coin_icon" fill />
                                            <div className="number_input final_output">100</div>
                                        </div>
                                    </div>

                                    <div className="boxed_middle">
                                        <div className="box_top_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/32.png" alt="" className="coin_icon" fill /> → <Image src="/assets/images/32.png" alt=""
                                                    className="coin_icon" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 2
                                            </div>
                                        </div>
                                        <div className="box_middle_item"></div>
                                        <div className="box_bottom_item">
                                            <div className="left_box">
                                                <Image src="/assets/images/two_friends.png" alt="" className="bottom_box_image" fill />
                                            </div>
                                            <div className="right_box">
                                                <i className="fa fa-times cross_times" aria-hidden="true"></i> 3
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="sret sret3">
                                    <button className="btn bg_grey text_light cancBut btn_two" onClick={(e) => showSupportDiv(e.target)}>Yes, I&apos;ll suppport</button>
                                    <button className="btn bg_grey text_light cancBut some_other_time" onClick={(e) => cacnelSupport(e.target)}>Some other time</button>
                                    <button className="btn three_dots"><Image src="/assets/images/more.png" alt="more" fill /></button>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
