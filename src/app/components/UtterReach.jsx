"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function UtterReach() {
    return (
        <>

            <div className="col-sm-5 col-md-5 col-lg-4 customleftpadding">

                <div className="sidesticky border-radius-k pb-4 utter-section"
                    style={{backgroundColor: "#e2e8e9", marginLeft: "0.30rem"}}>
                    <div className="utter-heading text-center pt-3 pb-2 px-4">
                        <h3>Utterreach</h3>
                    </div>
                    <hr className="mb-3 mt-0 border__light" />
                    <div className="sfpro">
                        <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                            <Link href="/site/utterreach" title="its clickable"
                                className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                <div className=" img-section ">
                                    <div className="px-3">
                                        <h3 className="inner-heading-font">Business </h3>
                                        <span className="grayText"> We remain alive</span>
                                        <div className="k-icon d-flex">
                                            <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                            <span>300</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-30">
                                    <iframe className="video rounded-image d-none w-100"
                                        src="http://www.youtube.com/embed/9B7te184ZpQ?rel=0" frameBorder="0" allowFullScreen></iframe>
                                    <Image className="img-fluid rounded-image w-100" src="/assets/images/utterworthy/1.png" width="110"
                                        height="50" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                            <Link href="/site/utterreach" title="its clickable"
                                className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                <div className=" img-section ">
                                    <div className="px-3">
                                        <h3 className="inner-heading-font">Music </h3>
                                        <span className="grayText"> My latest single</span>
                                        <div className="k-icon d-flex">
                                            <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                            <span>280</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-30">
                                    <Image className="img-fluid rounded-image w-100" src="/assets/images/utterworthy/2.png" width="110"
                                        height="50" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                            <Link href="/site/utterreach" title="its clickable"
                                className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                <div className=" img-section ">
                                    <div className="px-3">
                                        <h3 className="inner-heading-font">Fashion </h3>
                                        <span className="grayText"> Burka hair</span>
                                        <div className="k-icon d-flex">
                                            <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                            <span>250</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-30">
                                    <Image className="img-fluid rounded-image w-100" src="/assets/images/utterworthy/3.png" width="110"
                                        height="50" alt="" />
                                </div>
                            </Link>
                        </div>

                        <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                            <Link href="/site/utterreach" title="its clickable"
                                className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                <div className=" img-section ">
                                    <div className="px-3">
                                        <h3 className="inner-heading-font">Movie </h3>
                                        <span className="grayText"> A night in tehran</span>
                                        <div className="k-icon d-flex">
                                            <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                            <span>200</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-30">
                                    <Image className="img-fluid rounded-image w-100" src="/assets/images/utterworthy/5.png" width="110"
                                        height="50" alt="" />
                                </div>
                            </Link>
                        </div>

                        <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                            <Link href="/site/utterreach" title="its clickable"
                                className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                <div className=" img-section ">
                                    <div className="px-3">
                                        <h3 className="inner-heading-font">Book </h3>
                                        <span className="grayText"> The Executor</span>
                                        <div className="k-icon d-flex">
                                            <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                            <span>150</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-30">
                                    <Image className="img-fluid rounded-image w-100" src="/assets/images/utterworthy/4.png" width="110"
                                        height="50" alt="" />
                                </div>
                            </Link>
                        </div>

                        <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                            <Link href="/site/utterreach" title="its clickable"
                                className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                <div className=" img-section ">
                                    <div className="px-3">
                                        <h3 className="inner-heading-font">Music </h3>
                                        <span className="grayText"> My latest single</span>
                                        <div className="k-icon d-flex">
                                            <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                            <span>280</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-30">
                                    <Image className="img-fluid rounded-image w-100" src="/assets/images/utterworthy/6.png" width="110"
                                        height="50" alt="" />
                                </div>
                            </Link>
                        </div>

                        <div className="bg-white grey-box  mb-4 ml-4 rounded-image">
                            <Link href="/site/utterreach" title="its clickable"
                                className="bg-light align-items-center text-decoration-none justify-content-between d-flex rounded-image">
                                <div className=" img-section ">
                                    <div className="px-3">
                                        <h3 className="inner-heading-font">Movie </h3>
                                        <span className="grayText"> A night in tehran</span>
                                        <div className="k-icon d-flex">
                                            <Image className="img-fluid" src="/assets/images/utterworthy/8.png" alt="" fill />
                                            <span>200</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-30">
                                    <Image className="img-fluid rounded-image w-100" src="/assets/images/utterworthy/5.png" width="110"
                                        height="50" alt="" />
                                </div>
                            </Link>
                        </div>

                        <div className="mx-4 mt-5 pt-2">
                            <Link href="#" className="load__more d-flex align-items-center">
                                <span className="ml-4 text-capitalize mr-2">more load</span>
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
