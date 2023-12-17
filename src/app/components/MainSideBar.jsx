"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import allFunctions from "../../../public/test";
import { useRouter } from "next/navigation";


export default function KhrimiPage() {
    const { hideSuggestedPopUp, showSideBarPopup, removeScreen, showmanagePopup } = allFunctions;
    const router = useRouter();

    const handleBack = (event) => {
        event.preventDefault();
        router.back();
    };



    return (
        <>


            <div className="sidebar">

                <div className="full_screen_black d-none" onClick={(e) => hideSuggestedPopUp(e.target)}></div>

                <div className="suggestion_popup d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                        <Image className="rounded-circle mr-2 postsprofileimg post_sidebar_popup_img" src="/assets/images/8.png" height="55" width="55" alt="Image" />
                        <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                            <div className="d-flex">
                                <div className="d-flex flex-column">
                                    <div className="username-photos montserrat user_name_sgstd_popup">
                                        <div className="main__sgstd_name">LeBron James</div>
                                        <div className="date user-date grayColor sfpro mb-2 user_at_rat">@LebronJames </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail_text_bordered">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit hic inventore, aut quidem natus cum officia
                        recusandae adipisci molestiae magnam. Sapiente illum mollitia dolore libero aperiam!

                        <div className="grid_3_system">
                            <div className="left_grid">
                                <Image src="/assets/images/councelling.png" alt="Image" className="sgstd_grid_icon" fill />
                                <span className="sgstd_grid_text">Councelling</span>
                            </div>
                            <div className="middle_grid">
                                <Image src="/assets/images/health.png" alt="Image" className="sgstd_grid_icon" fill />
                                <span className="sgstd_grid_text">Health & Fitness</span>
                            </div>
                            <div className="right_grid">
                                <Image src="/assets/images/sports.png" alt="Image" className="sgstd_grid_icon" fill />
                                <span className="sgstd_grid_text">Sports</span>
                            </div>
                        </div>

                    </div>

                    <div className="grid_2_system">
                        <div className="center_grid">
                            <Link href="/site/profile">
                                <Image src="/assets/images/list_spectacle.png" alt="Image" className="center_grid_imgs" fill />
                            </Link>
                        </div>
                        <div className="center_grid">
                            <Link href="/site/profile">
                                <Image src="/assets/images/binder.png" alt="Image" className="center_grid_imgs" fill />
                            </Link>
                        </div>
                    </div>


                </div>


                <div className="navbar-collapse vh-100 d-flex flex-column justify-content-between offcanvas-collapse">
                    <ul className="navbar-nav main-ul w-100">
                        <li className="nav-item over-nav-item-utter">
                            <div className="nav-link" title="Post Utter" data-toggle="modal" data-target=".post-modall">
                                <Image src="/assets/images/1.png" className="iconColorSetup img-fluid  icon-size" alt="Image" fill />
                                <span className="ml-5 opacity-profile opacity-sug opacity-media opacity-msgg opacity-khrimi"> Utter</span>
                            </div>
                        </li>
                        <li className="nav-item over-nav-item-profile">
                            <Link className="nav-link position-relative" title="Profile" href="/site/profile">
                                <Image src="/assets/images/44.png" className="iconColorSetup img-fluid icon-size" alt="Image" fill />
                                <span className="profile__after__profile"></span>
                                <span className="ml-5 opacity-zero-zero  opacity-sug opacity-media  opacity-msgg opacity-khrimi"> Profile</span>
                            </Link>
                        </li>
                        <li className="nav-item over-nav-item-khrimi">
                            <Link className="nav-link" title="Profile" href="/site/mykhrimi">
                                <Image src="/assets/images/3.png" className="iconColorSetup img-fluid icon-size" alt="Image" fill />
                                <span
                                    className="ml-5 opacity-zero-zero opacity-sug opacity-media opacity-msgg opacity-profile profilee-title main-ul-nav-title"
                                    style={{ whiteSpace: "pre" }}>My Khrimi</span>
                            </Link>
                        </li>

                        {/* 
                            <li className="nav-item over-nav-item-msgg">
                                <Link className="nav-link position-relative" data-toggle="tooltip" data-placement="right" title="Messages"
                                    href="messages">
                                    <Image src="/assets/images/2.png" className="iconColorSetup img-fluid icon-size" alt="Image" fill />
                                    <span className="msg__after__msg">2</span>
                                    <span
                                    className="ml-5 opacity-zero-zero opacity-sug opacity-media opacity-khrimi opacity-profile msg-title main-ul-nav-title">
                                    Messages</span>
                                </Link>
                            </li>
                         */}

                        <li className="nav-item over-nav-item-utter router_back d-none">
                            <a className="nav-link" onClick={handleBack}>
                                <Image src="/assets/images/back.png" className="iconColorSetup img-fluid  icon-size" alt="" fill />
                                <span className="ml-5 opacity-profile opacity-sug opacity-media opacity-msgg opacity-khrimi"> Back</span>
                            </a>
                        </li>



                    </ul>

                    {/* <!--start of suggested profile section--> */}

                    <div className="test-profilee w-100">
                        <div className="suggested-profile d-none mb-2 align-items-center main-user-profile-nav border-bottom py-2 px-4">
                            <div className="userIvonBg">
                                <Image src="/assets/images/4.png" className="img-fluid icon-size" alt="Image" fill />
                            </div>
                            <h6 className="customTextColor text-center sug-profile mb-0">Suggested Profiles</h6>
                        </div>

                        <ul className="navbar-nav w-100">
                            <li className="nav-item  over-nav-item-sug suggestItem">
                                <a className="d-flex py-3 px-3 align-items-center text-decoration-none" style={{ height: "50px", lineHeight: "40px" }}
                                    title="Profile">
                                    <Image src="/assets/images/4.png" className="img-fluid icon-size userIvonImg" alt="Image" fill />
                                    <p
                                        className="cstmSuggestText opacity-zero-zero opacity-profile opacity-khrimi opacity-msgg opacity-media customTextColor">
                                        Suggested Profiles
                                    </p>
                                </a>
                            </li>
                        </ul>



                        <div className="main-user-profile-nav hover-px-0 w-100  px-2">


                            <div className="d-flex flex-row align-items-center  border-bottom-custom user-info mx-2 pt-3 pb-3">
                                <Link href="/site/suggested_profile" className="d-flex text-decoration-none  align-items-center">
                                    <Image className="sidebarProfileImg" src="/assets/images/8.png" alt="Image" fill />
                                    <div className="d-flex flex-column justify-content-start ml-3">
                                        <span className="d-block userName customTextColor username-comment">
                                            LeBron James
                                        </span>
                                        <span className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                                            @LebronJames
                                        </span>
                                    </div>
                                </Link>
                                <div className="ml-auto follow-image" onClick={(e) => showSideBarPopup(e.target)} data-username="LeBron James"
                                    data-useratrat="@LebronJames">
                                    <Image className="suggested_profile_icon" src="/assets/images/user_box.png" alt="Image" width="40" height="40" />
                                </div>
                            </div>




                            <div className="d-flex flex-row align-items-center  border-bottom-custom user-info mx-2 pt-3 pb-3">
                                <Link href="/site/suggested_profile" className="d-flex text-decoration-none  align-items-center">
                                    <Image className="sidebarProfileImg" src="/assets/images/suggested2.png" alt="Image" fill />
                                    <div className="d-flex flex-column justify-content-start ml-3">
                                        <span className="d-block userName customTextColor username-comment">
                                            Helen Keller
                                        </span>
                                        <span className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                                            @HelenKeller
                                        </span>
                                    </div>
                                </Link>
                                <div className="ml-auto follow-image" onClick={(e) => showSideBarPopup(e.target)} data-username="Helen Keller"
                                    data-useratrat="@HelenKeller">
                                    <Image className="suggested_profile_icon" src="/assets/images/user_box.png" alt="Image" width="40" height="40" />
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center  border-bottom-custom user-info mx-2 pt-3 pb-3">
                                <Link href="/site/suggested_profile" className="d-flex text-decoration-none  align-items-center">
                                    <Image className="sidebarProfileImg" src="/assets/images/suggested3.png" alt="Image" fill />
                                    <div className="d-flex flex-column justify-content-start ml-3">
                                        <span className="d-block userName customTextColor username-comment">
                                            Kobe Bryant
                                        </span>
                                        <span className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                                            @KobeBryant
                                        </span>
                                    </div>
                                </Link>
                                <div className="ml-auto follow-image" onClick={(e) => showSideBarPopup(e.target)} data-username="Kobe Bryant"
                                    data-useratrat="@KobeBryant">
                                    <Image className="suggested_profile_icon" src="/assets/images/user_box.png" alt="Image" width="40" height="40" />
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center  border-bottom-custom user-info mx-2 pt-3 pb-3">
                                <Link href="/site/suggested_profile" className="d-flex text-decoration-none  align-items-center">
                                    <Image className="sidebarProfileImg" src="/assets/images/suggested4.png" alt="Image" fill />
                                    <div className="d-flex flex-column justify-content-start ml-3">
                                        <span className="d-block userName customTextColor username-comment">
                                            Steph Curry
                                        </span>
                                        <span className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                                            @StephCurry
                                        </span>
                                    </div>
                                </Link>
                                <div className="ml-auto follow-image" onClick={(e) => showSideBarPopup(e.target)} data-username="Steph Curry"
                                    data-useratrat="@StephCurry">
                                    <Image className="suggested_profile_icon" src="/assets/images/user_box.png" alt="Image" width="40" height="40" />
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center  border-bottom-custom user-info mx-2 pt-3 pb-3">
                                <Link href="/site/suggested_profile" className="d-flex text-decoration-none  align-items-center">
                                    <Image className="sidebarProfileImg" src="/assets/images/suggested5.png" alt="Image" fill />
                                    <div className="d-flex flex-column justify-content-start ml-3">
                                        <span className="d-block userName customTextColor username-comment">
                                            Ryan Reynolds
                                        </span>
                                        <span className="d-block grayColor font-weight-light username-comment cstm9rem sfpro">
                                            @RyanReynolds
                                        </span>
                                    </div>
                                </Link>
                                <div className="ml-auto follow-image" onClick={(e) => showSideBarPopup(e.target)} data-username="Ryan Reynolds"
                                    data-useratrat="@RyanReynolds">
                                    <Image className="suggested_profile_icon" src="/assets/images/user_box.png" alt="Image" width="40" height="40" />
                                </div>
                            </div>





                            <div className="text-center load-more sidebar-load-more py-3 moreLoad">
                                <Link className="text-center" href="/site/more_suggestions">
                                    <small className="mb-0 text-capitalize sfpro">More Suggestions</small>
                                    <i className="arrowDown fa fa-chevron-down" aria-hidden="true"></i>
                                </Link>
                            </div>

                        </div>


                        <div className="for_small_sidebar">
                            <a className="customTextColor text-capitalize pl-0">About <span className="ml-2 border__right__w"></span> </a>
                            <a className="customTextColor text-capitalize">cookies...</a>
                        </div>




                        <div id="manage_popup" className="manage_popup_line d-none">
                            <div className="manage_line">Manage Ads</div>
                            <div className="manage_line">Manage Utterreachs</div>
                        </div>


                        <div id="manage_popup" className="about_popup d-none">
                            <div className="manage_line">
                                <Link href="/site/legal" className="manage_line_link">Legal</Link>
                            </div>
                            <div className="manage_line">
                                <Link href="/site/virtual_commodity_policy" className="manage_line_link">VC Policy</Link>
                            </div>
                            <div className="manage_line">Feedback</div>
                            <div className="manage_line">Accessibility</div>
                        </div>

                        <div id="manage_popup" className="terms_popup d-none">
                            <div className="manage_line">
                                <Link href="/site/terms" className="manage_line_link">Terms of Use</Link>
                            </div>
                            <div className="manage_line">
                                <Link href="/site/terms" className="manage_line_link">Terms of Services</Link>
                            </div>
                        </div>



                        <div className="over-nav-item-userr py-2 justify-content-around w-100 customSideFooter">




                            <div className="sfpro">
                                {/* <!-- className="col-6 six-coins"  --> */}
                                <div className="full_screen d-none" onClick={(e) => removeScreen(e.target)}></div>

                                <p className="mb-0 about__careers d-flex align-items-center firstFooter">
                                    <Link href="/site/aboutUs" className="customTextColor text-capitalize pl-0">About</Link>
                                    <span className="border__right__w"></span>
                                    <Link href="/site/cookies" className="customTextColor text-capitalize">cookies</Link>
                                    <span className="border__right__w"></span>
                                    <Link href="/site/privacy_policy" className="customTextColor text-capitalize">privacy</Link>
                                    <span className="border__right__w"></span>
                                    <a className="customTextColor text-capitalize" onClick={() => showmanagePopup('manage_popup_line')}>Manage</a>
                                </p>


                                <p className="mb-0 about__careers d-flex align-items-center lastfooter">
                                    <a className="customTextColor text-capitalize pl-0" onClick={() => showmanagePopup('terms_popup')}>Terms</a>
                                    <span className="border__right__w"></span>
                                    <Link href="/site/help" className="customTextColor text-capitalize terms__pakkar">Advt.</Link>
                                    <span className="border__right__w"></span>
                                    {/* <!-- <Link href="utterpromotions" className="customTextColor text-capitalize terms__pakkar">More</Link> --> */}
                                    <a onClick={() => showmanagePopup('about_popup')} className="customTextColor text-capitalize terms__pakkar">More</a>
                                    <span className="border__right__w"></span>
                                    <Link href="/site/utterpromotions"
                                        className="customTextColor text-capitalize terms__pakkar">©&nbsp;2022&nbsp;Khrimisay</Link>
                                </p>
                            </div>














                        </div>


                    </div>



                </div>
            </div>





        </>
    )
}
