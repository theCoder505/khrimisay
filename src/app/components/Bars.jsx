"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";


export default function KhrimiPage() {




    return (



        <>



            <div id="normalBar" className="d-none">

                <Link href="/site/utterworthy_next_step">
                    <div className="ml-2 imgList featuresContainer image-hover-zoom"
                        style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                        <div className=" toptext">Trump </div>
                        <div className="btmtext ">#&nbsp;287k</div>
                    </div>
                </Link>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>Coming to America</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                    <Link href="">
                        <div className=" toptext">Capital Riot</div>
                        <div className="btmtext ">#&nbsp;200</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <Image className="img-fluid" width="100" height="100" src="/assets/images/king.png" alt="Image" />
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/window.png')" }}>
                    <Link href="">
                        <div className=" toptext">Trump is a disgrace</div>
                        <div className="btmtext ">#&nbsp;287k</div>
                    </Link>
                </div>



                {/* <!-- second 7 divs  --> */}
                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>


            </div>





            <div id="themesBar" className="d-none">



                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes1.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Premiership| </div>
                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Holiday Trip| </div>
                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes3.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |We here @Orly| </div>
                        <div className="btmtext text-normal">20.1k&nbsp;Utters</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes4.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |High Live| </div>
                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Music| </div>
                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                    </Link>
                </div>



                {/* <!-- // second 5  --> */}
                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Holiday Trip| </div>
                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Holiday Trip| </div>
                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Holiday Trip| </div>
                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Holiday Trip| </div>
                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                    </Link>
                </div>

                <div className="ml-2 imgList d-none featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes2.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Holiday Trip| </div>
                        <div className="btmtext text-normal">20.5k&nbsp;Utters</div>
                    </Link>
                </div>

                {/* <!-- // third 5  --> */}
                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Music| </div>
                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                    </Link>
                </div>
                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Music| </div>
                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                    </Link>
                </div>
                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Music| </div>
                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                    </Link>
                </div>
                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Music| </div>
                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                    </Link>
                </div>
                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/themes5.png')" }}>
                    <Link href="">
                        <div className="toptext text-normal"> |Music| </div>
                        <div className="btmtext text-normal">40.1k&nbsp;Utters</div>
                    </Link>
                </div>


            </div>





            <div id="uttermostBar" className="">

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                    <Link href="/site/utterworthy_next_step">
                        <div className=" toptext">Trump </div>
                        <div className="btmtext ">#&nbsp;287k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="/site/utterworthy_next_step">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                    <Link href="/site/utterworthy_next_step">
                        <div className=" toptext">Capital Riot</div>
                        <div className="btmtext ">#&nbsp;200</div>
                    </Link>
                </div>


                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="/site/utterworthy_next_step">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>


                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                    <Link href="">
                        <div className=" toptext">Trump </div>
                        <div className="btmtext ">#&nbsp;287k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                    <Link href="">
                        <div className=" toptext">Capital Riot</div>
                        <div className="btmtext ">#&nbsp;200</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>

                {/* <!-- second 7 divs  --> */}
                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                    <Link href="">
                        <div className=" toptext">Capital Riot</div>
                        <div className="btmtext ">#&nbsp;200</div>
                    </Link>
                </div>




                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                    style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                    <Link href="">
                        <div className=" toptext">Trump2 </div>
                        <div className="btmtext ">#&nbsp;287k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>


                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                    style={{ backgroundImage: "url('/assets/images/black.png')" }}>
                    <Link href="">
                        <div className=" toptext">Capital Riot</div>
                        <div className="btmtext ">#&nbsp;200</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                    style={{ backgroundImage: "url('/assets/images/book.png')" }}>
                    <Link href="">
                        <div className=" toptext">US Election</div>
                        <div className="btmtext ">#&nbsp;300k</div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom d-none"
                    style={{ backgroundImage: "url('/assets/images/man.png')" }}>
                    <Link href="">
                        <div className=" toptext">Trump </div>
                        <div className="btmtext ">#&nbsp;287k</div>
                    </Link>
                </div>

            </div>






            <div id="featuresBar" className="d-none">

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>Coming to America</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <Image className="img-fluid" width="100" height="100" src="/assets/images/king.png" alt="Image" />
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>


                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>Coming to America</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <Image className="img-fluid" width="100" height="100" src="/assets/images/king.png" alt="Image" />
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <Image className="img-fluid" width="100" height="100" src="/assets/images/king.png" alt="Image" />
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>



                {/* <!-- second 7 divs  --> */}
                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber 2nd</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>Coming to America</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <Image className="img-fluid" width="100" height="100" src="/assets/images/king.png" alt="Image" />
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>


                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/boy.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <div className="imgText-two justify-content-center m-auto">
                            <span>Coming to America</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <Image className="img-fluid" width="100" height="100" src="/assets/images/king.png" alt="Image" />
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>

                <div className="ml-2 imgList featuresContainer image-hover-zoom"
                    style={{ backgroundImage: "url('/assets/images/king.png')" }}>
                    <Link href="">
                        <Image className="img-fluid" width="100" height="100" src="/assets/images/king.png" alt="Image" />
                        <div className="imgText-two justify-content-center m-auto">
                            <span>justin bieber new album</span>
                        </div>
                    </Link>
                </div>


            </div>



            {/* <!--end of row --> */}



        </>

    )
}
