"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MainHeader from "../../components/MainHeader";
import MainSideBar from "../../components/MainSideBar";
import ProfileSidebar from "../../components/ProfileSidebar";
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
        document.title = 'Your profile on Khrimisay';
    }, []);





    return (
        <>
            <MainHeader />
            <MainSideBar />



            <div className="main">
                <div className="mb-4 ml-0 ml-lg-0">
                    <div className="row">
                        <ProfileSidebar />



                        <div className="col-sm-5 col-md-5 col-lg-4 customleftpadding">

                            <div id="earnings_section">
                                <div className="earnign_title">
                                    <div className="main_earning_title">Khrimi Earning</div>
                                    <Image src="/assets/images/selectnone.png" alt="menu" className="menu_icon" fill />
                                </div>

                                <div className="profile_lines">
                                    <div className="right_details_part">
                                        <div className="big_name cstmrem9">You earned 2 Khrimi coins for posting an utter</div>
                                        <div className="ref_name no_dots">25 mins</div>
                                    </div>
                                </div>
                                <div className="profile_lines">
                                    <div className="right_details_part">
                                        <div className="big_name cstmrem9">You earned 5 Khrimi coins for getting 1k likes</div>
                                        <div className="ref_name no_dots">50 mins</div>
                                    </div>
                                </div>
                                <div className="profile_lines">
                                    <div className="right_details_part">
                                        <div className="big_name cstmrem9">You earned 1 Khrimi coins for signing in</div>
                                        <div className="ref_name no_dots">1 hr</div>
                                    </div>
                                </div>
                                <div className="profile_lines">
                                    <div className="right_details_part">
                                        <div className="big_name cstmrem9">You earned 1 Khrimi coins for commenting</div>
                                        <div className="ref_name no_dots">2 hrs</div>
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
