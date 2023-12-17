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
import "../../../../public/assets/css/Mykhrimi.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";

export default function KhrimiPage() {
    return (
        <>

            <MainHeader />
            <MainSideBar />


            <div className="main">

                <div className="main-pill-section shado ml-0">
                    <div className="row">
                        <div className="col-12">

                            <ul className="nav nav-pills my-nav-pills nav-justified">
                                <li className="nav-item roundednav">
                                    <a className="nav-link cstmpadding rewards-active-remove active" data-toggle="pill" href="#flamingo"
                                        role="tab" aria-controls="pills-flamingo" aria-selected="true">My KHRIMI</a>
                                </li>
                                <li className="nav-item roundednav">
                                    <a className="nav-link cstmpadding" data-toggle="pill" href="#cuckoo" role="tab" aria-controls="pills-cuckoo"
                                        aria-selected="false">earn</a>
                                </li>
                                {/*
                                    <li className="nav-item roundednav">
                                        <a className="nav-link rewards-active cstmpadding " data-toggle="pill" href="#cuckoore" role="tab"
                                            aria-controls="pills-cuckoo" aria-selected="false">rewards</a>
                                    </li>
                                */}
                            </ul>



                            <div className="tab-content mt-2 mb-5">
                                <div className="tab-pane fade show active" id="flamingo" role="tabpanel" aria-labelledby="flamingo-tab">

                                    <div className="text-center mb-3 bg-white py-5 roundedCorner">

                                        <div className="left_khrimisay_icon">
                                            <Image src="/assets/images/left_mykhrimi_icon.png" className="img-fluid left_khrimi" alt="" fill />
                                        </div>

                                        <div className="k_amount_side">
                                            <div className="d-flex align-items-start justify-content-center">
                                                <Image src="/assets/images/utterworthy/19.png" className="img-fluid khirmiCoinKImg right_khrimi" alt="" fill />
                                                <span className="my-kh-three">330</span>
                                            </div>
                                        </div>

                                        <Image src="/assets/images/coin.png" className="img-fluid cardCoin" alt="" fill />
                                    </div>

                                    <div className="row">

                                        <div className="col-12 col-sm-12 col-md-6 pr-2">
                                            <div className="text-center bg-white py-4 px-5 roundedCorner">
                                                <div className="d-flex flex-column send-coins-section">

                                                    <span className="sendRcvCoins sfpro">Send Coins</span>
                                                    <p className="text-secondary sfpro mb-0">Send coins to only those you know.</p>

                                                    <div className="form-group">
                                                        <label className="labelings">What for?</label>
                                                        <div className="totalCoin px-3 row">
                                                            <input type="text" className="form-control coins-form-control pl-0" placeholder="" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="labelings">To</label>
                                                        <div className="totalCoin px-3 row">
                                                            <input type="text" className="form-control coins-form-control pl-0" placeholder="" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="labelings">Amount</label>
                                                        <div className="totalCoin px-3 row">
                                                            <div className="p-0 text-right">
                                                                <Image src="/assets/images/utterworthy/19.png" alt="" className="khirmiImg" fill />
                                                            </div>
                                                            <div className="col-11 p-0">
                                                                <input type="text" className="form-control coins-form-control pl-1  coinAmount" placeholder="2000" />
                                                            </div>
                                                        </div>
                                                        <div className="review_policy">Review the coin send policy <span className="i_icon">ⓘ</span> </div>
                                                    </div>

                                                    <button className="btn btn-lg send-request-btn" type="button">
                                                        send now
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-6 pl-2">
                                            <div className="text-center bg-white py-4 px-5 roundedCorner">

                                                <div className="d-flex flex-column send-coins-section">

                                                    <span className="sendRcvCoins sfpro">Request Coins</span>
                                                    <p className="text-secondary sfpro mb-0">Request coins from only those you know.</p>


                                                    <div className="form-group">
                                                        <label className="labelings">What for?</label>
                                                        <div className="totalCoin px-3 row">
                                                            <input type="text" className="form-control coins-form-control pl-0" placeholder="" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="labelings">To</label>
                                                        <div className="totalCoin px-3 row">
                                                            <input type="text" className="form-control coins-form-control pl-0" placeholder="" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="labelings">Amount</label>
                                                        <div className="totalCoin px-3 row">
                                                            <div className="p-0 text-right">
                                                                <Image src="/assets/images/utterworthy/19.png" alt="" className="khirmiImg" fill />
                                                            </div>
                                                            <div className="col-11 p-0">
                                                                <input type="text" className="form-control coins-form-control pl-1  coinAmount" placeholder="2000" />
                                                            </div>
                                                        </div>
                                                        <div className="review_policy">Review the coin request policy <span className="i_icon">ⓘ</span> </div>
                                                    </div>

                                                    <button className="btn send-request-btn" type="button">
                                                        Request now
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div className="tab-pane fade" id="cuckoo" role="tabpanel" aria-labelledby="profile-tab">

                                    <div className="text-center mb-2 bg-white py-5">
                                        <Image src="/assets/images/invite.png" className="img-fluid" alt="" width={42} height={42} />
                                        <div className="d-flex flex-column">
                                            <small className="invite-code">
                                                Invite someone
                                                <br />
                                                through an <span className="speclinks">invite code</span>
                                            </small>
                                            <p className="lightText"> <i> Earn 50 Khrimi coins by inviting a friend </i> </p>

                                        </div>
                                        <div className="inline">
                                            <button className=" btn send-request-btn"> Invite code : @Travisgreen2334 &nbsp;
                                            </button>
                                            <Image src="/assets/images/shareicon.png" className="shareimg" alt="" width={28} height={28} />
                                        </div>
                                    </div>

                                    <div className="text-center mb-2 bg-white py-5">
                                        <Image src="/assets/images/videoicon.png" className="img-fluid" alt="" width={61} height={58} />
                                        <div className="d-flex flex-column">
                                            <span className="invite-code montserrat watch">Watch Videos</span>
                                            <p className="lightText"><i> Earn 100 Khrimi coins by watching a short video </i></p>

                                            <Link href="#/">
                                                <button className="btn send-request-btn" type="button">
                                                    Watch video
                                                </button>
                                            </Link>

                                        </div>
                                    </div>


                                </div>

                                <div className="tab-pane fade " id="cuckoore" role="tabpanel" aria-labelledby="profile-tab">

                                    <div className="square-boxes">
                                        <div className="box box1">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Dating</div>
                                                    <Image src="/assets/images/dating.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box box2">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Counselling</div>
                                                    <Image src="/assets/images/dating2.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box box3">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Transportation</div>
                                                    <Image src="/assets/images/dating3.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box box4">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Education</div>
                                                    <Image src="/assets/images/dating4.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box box5">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Sports</div>
                                                    <Image src="/assets/images/dating5.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>


                                    <div className="square-boxes">
                                        <div className="box box21">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">E-Commerce</div>
                                                    <Image src="/assets/images/dating21.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box box22">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Language Learning</div>
                                                    <Image src="/assets/images/dating22.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box box23">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Malls & Shopping</div>
                                                    <Image src="/assets/images/dating23.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box box24">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Foods & Grocery</div>
                                                    <Image src="/assets/images/dating24.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box box25">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Books</div>
                                                    <Image src="/assets/images/dating25.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>


                                    <div className="square-boxes">
                                        <div className="box box31">
                                            <Link href="/site/rewardscategory">
                                                <div>
                                                    <div className="text-white watch">Health & Fitness</div>
                                                    <Image src="/assets/images/dating31.png" alt="" className="datingimg" fill />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="box bg--none "></div>
                                        <div className="box bg--none "></div>
                                        <div className="box bg--none "></div>
                                        <div className="box bg--none "></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>



        </>
    )
}
