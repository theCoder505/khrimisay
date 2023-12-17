"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MainHeader from "../../components/MainHeader";
import MainSideBar from "../../components/MainSideBar";
import SeggestedProfileSidebar from "../../components/SeggestedProfileSidebar";
import ProfileEdit from "../../components/ProfileEdit";
import Bars from "../../components/Bars";
import UtterReach from "../../components/UtterReach";
import "../../../../public/assets/css/Profile.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";


export default function KhrimiPage() {
    const { activateTab } = allFunctions;



    useEffect(() => {
        $(".router_back").removeClass("d-none");
    }, []);





    return (
        <>
            <MainHeader />
            <MainSideBar />



            <div className="main">
                <div className="mb-4 ml-0 ml-lg-0">
                    <div className="row">
                        <SeggestedProfileSidebar />



                        <div className="col-sm-5 col-md-5 col-lg-4 customleftpadding">

                            <div id="earnings_section">
                                <div className="earnign_title d-block">
                                    <div className="main_earning_title">
                                        <center>Recent Activity</center>
                                    </div>
                                </div>

                                <div className="profile_lines">
                                    <div className="right_details_part">
                                        <div className="big_name cstmrem85">Monalissa Chinda posted an utter. <span className="mins_span">25mins</span>
                                        </div>
                                        <div className="ref_name"> What the heck is wrong with the national grid</div>
                                    </div>
                                </div>
                                <div className="profile_lines">
                                    <div className="right_details_part">
                                        <div className="big_name cstmrem85">Monalissa Chinda commented on an... <span
                                            className="mins_span">35mins</span> </div>
                                        <div className="ref_name"> What if we don&appos;t want to go with the idea of</div>
                                    </div>
                                </div>
                                <div className="profile_lines">
                                    <div className="right_details_part">
                                        <div className="big_name cstmrem85">Monalissa Chinda replied to a comment. <span
                                            className="mins_span">50mins</span> </div>
                                        <div className="ref_name"> I think the system is rigged against patriots</div>
                                    </div>
                                </div>
                                <div className="profile_lines">
                                    <div className="right_details_part">
                                        <div className="big_name cstmrem85">Monalissa Chinda liked a reply. <span className="mins_span">1hr</span></div>
                                        <div className="ref_name"> The way to go is paved with the sheer will of</div>
                                    </div>
                                </div>

                            </div>






                            <div id="similar_profiles">
                                <div className="similar_title">
                                    Similar Profiles
                                </div>

                                <div className="profile_lines">
                                    <div className="left_image_part">
                                        <Image src="/assets/images/8.png" alt="" className="w-100" fill />
                                    </div>
                                    <div className="right_details_part">
                                        <div className="big_name">LeBron James</div>
                                        <div className="ref_name no_dots">@LebronJames</div>
                                    </div>
                                </div>

                                <div className="profile_lines">
                                    <div className="left_image_part">
                                        <Image src="/assets/images/suggested2.png" alt="" className="w-100" fill />
                                    </div>
                                    <div className="right_details_part">
                                        <div className="big_name">Hellen Keller</div>
                                        <div className="ref_name no_dots">@HellenKeller</div>
                                    </div>
                                </div>

                                <div className="profile_lines">
                                    <div className="left_image_part">
                                        <Image src="/assets/images/suggested3.png" alt="" className="w-100" fill />
                                    </div>
                                    <div className="right_details_part">
                                        <div className="big_name">Kobe Bryant</div>
                                        <div className="ref_name no_dots">@KobeBryant</div>
                                    </div>
                                </div>
                            </div>






                            <div className="right_profile_part">
                                <div className="media_tabs">
                                    {/* <div className="mediatab activateMedia" onClick={(e)=>activateTab(e.target)} data-id="Themes">Themes</div>  */}
                                    <div className="mediatab" onClick={(e) => activateTab(e.target)} data-id="Uttertags">U-tags</div>
                                    <div className="mediatab" onClick={(e) => activateTab(e.target)} data-id="Media">Media</div>
                                </div>



                                <div className="searchMediaResultsLine">
                                    <div className="input-group input-group-b mb-4">
                                        <input type="search" placeholder="Search Uttertags" aria-describedby="button-addon2"
                                            className="searchbtnmedia sfpro form-control search-bar " />
                                        <div className="input-group-prepend">
                                            <button id="button-addon2" type="submit" className="btn search-butn"><i
                                                className="fa fa-search"></i></button>
                                        </div>
                                    </div>



                                    <div className="result_lines searchResults media Media d-none" id="style-3">
                                        <div className="imgLines">
                                            <Image src="/assets/images/media1.png" alt="" fill />
                                        </div>
                                        <div className="imgLines">
                                            <Image src="/assets/images/media2.png" alt="" fill />
                                        </div>
                                        <div className="imgLines">
                                            <Image src="/assets/images/media3.png" alt="" fill />
                                        </div>
                                        <div className="imgLines">
                                            <Image src="/assets/images/media4.png" alt="" fill />
                                        </div>
                                        <div className="imgLines">
                                            <Image src="/assets/images/media5.png" alt="" fill />
                                        </div>
                                        <div className="imgLines">
                                            <Image src="/assets/images/media6.png" alt="" fill />
                                        </div>
                                        <div className="imgLines">
                                            <Image src="/assets/images/media2.png" alt="" fill />
                                        </div>
                                        <div className="imgLines">
                                            <Image src="/assets/images/media3.png" alt="" fill />
                                        </div>
                                        <div className="imgLines">
                                            <Image src="/assets/images/media4.png" alt="" fill />
                                        </div>
                                        <div className="imgLines">
                                            <Image src="/assets/images/media5.png" alt="" fill />
                                        </div>
                                    </div>


                                    <div className="result_lines textTabResults Uttertags">
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump mania </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump mania </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump love </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump card </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trumpers </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump Fans </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump GOP </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trumpers </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump mania </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump GOP </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trumpers </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump Fans </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump GOP </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trumpers </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump Fans </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trump GOP </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> #Trumpers </Link> </div>
                                    </div>



                                    <div className="result_lines textTabResults Themes d-none">
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |No way| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Life of love| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Well let&apos;s see| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Come here| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Love more| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Weoutside| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |No way| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Life of love| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Well let&apos;s see| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Come here| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Love more| </Link> </div>
                                        <div className="restablines"> <Link href="/site/more_suggestions"> |Weoutside| </Link> </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <ProfileEdit />



        </>
    )
}
