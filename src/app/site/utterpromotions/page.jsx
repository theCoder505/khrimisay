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
import "../../../../public/assets/css/Promotions.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";

export default function KhrimiPage() {
    useEffect(() => {
        document.title = 'Utter Promotions On Khrimisay';
    }, []);
    return (
        <>


            <nav className="navbar navbar-expand-md navbar-light mb-3 bg__kchat">
                <Link className="navbar-brand d-flex align-items-center" href="/site/utter">
                    <Image src="/assets/images/promonew/15.png" alt="user" fill />
                    <h4 className="mb-0 ml-3 d-inline-block text-white">Utterworthy Promotions</h4>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ml-auto">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <Image className="promo__coin" src="/assets/images/promonew/16.png" alt="coin" fill />
                                <Image className="mx-1" src="/assets/images/k-icon-new.png" alt="k" width="20" height="20" />
                                <span className="text-white count__k">10000</span>
                            </div>
                            <div className="hr__line mx-3"></div>
                            <div className="quest__img">
                                <Image src="/assets/images/promonew/17.png" alt="" fill />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>




            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <ul className="nav nav-pills promotions__sidenav flex-column" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="Promotions-tab" data-toggle="tab" href="#Promotions" role="tab"
                                    aria-controls="Promotions" aria-selected="true">
                                    <Image src="/assets/images/promonew/21.png" alt="" fill />
                                    Promotions
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="rep-sum-tab" data-toggle="tab" href="#rep-sum" role="tab" aria-controls="rep-sum"
                                    aria-selected="false">
                                    <Image src="/assets/images/promonew/23.png" alt="" fill /> Report
                                    Summary
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="targeting-tab" data-toggle="tab" href="#targeting" role="tab"
                                    aria-controls="targeting" aria-selected="false">
                                    <Image src="/assets/images/promonew/20.png" alt="" fill />
                                    Targeting
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="ut-sup-tab" data-toggle="tab" href="#ut-sup" role="tab" aria-controls="ut-sup"
                                    aria-selected="false">
                                    <Image src="/assets/images/promonew/22.png" alt="" fill />
                                    Utterworthy Support
                                </a>
                            </li>
                        </ul>
                    </div>



                    <div className="col-md-9">
                        <div className="tab-content" id="myTabContent">

                            <div className="tab-pane fade active show" id="Promotions" role="tabpanel" aria-labelledby="Promotions">
                                <h4>Promotions</h4>
                                <div className="all__promotable bg-white p-3">
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <div className="d-flex mb-3 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" className="selectAll" id="selectAll" />
                                                        </div>
                                                        <p className="lable__heading">All Promotions</p>
                                                    </div>
                                                    <div>
                                                        <Image className="img-fluid mx-1" src="/assets/images/promonew/38.png" alt="" fill />
                                                        <Image className="img-fluid" src="/assets/images/promonew/39.png" alt="" fill />
                                                    </div>
                                                    <div className="search__icons ml-3 d-flex align-items-center">
                                                        <input type="text" placeholder="Search" className="form-control border-0 " name="" id="" />
                                                        <Image className="mr-2" src="/assets/images/promonew/18.png" alt="search-icon" fill />
                                                    </div>
                                                    <div className="ml-auto">
                                                        <Link href="/site/newpromotions">
                                                            <button className="btn btn__newpromo">start new Promotions</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe Picture <br /><span>Nov,12 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> Coin <br /> Allocation </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> total coin <br /> recieved</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">

                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/40.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">days remaining <br /> to float</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column align-items-center mr-4">
                                                            <a href="#/">
                                                                <button className="btn mb-2 btn__newpromo">active</button>
                                                            </a>
                                                            <div>
                                                                <Image className="img-fluid" src="/assets/images/promonew/38.png" alt="" fill />
                                                                <Image className="img-fluid" src="/assets/images/promonew/39.png" alt="" fill />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe Picture <br /><span>Nov,12 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> Coin <br /> Allocation </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> total coin <br /> recieved</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">

                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/40.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">days remaining <br /> to float</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column align-items-center mr-4">
                                                            <a href="#/">
                                                                <button className="btn mb-2 btn__newpromo">active</button>
                                                            </a>
                                                            <div>
                                                                <Image className="img-fluid" src="/assets/images/promonew/38.png" alt="" fill />
                                                                <Image className="img-fluid" src="/assets/images/promonew/39.png" alt="" fill />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe Picture <br /><span>Nov,12 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> Coin <br /> Allocation </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> total coin <br /> recieved</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">

                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/40.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">days remaining <br /> to float</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column align-items-center mr-4">
                                                            <a href="#/">
                                                                <button className="btn mb-2 btn__newpromo">active</button>
                                                            </a>
                                                            <div>
                                                                <Image className="img-fluid" src="/assets/images/promonew/38.png" alt="" fill />
                                                                <Image className="img-fluid" src="/assets/images/promonew/39.png" alt="" fill />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe Picture <br /><span>Nov,12 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> Coin <br /> Allocation </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> total coin <br /> recieved</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">

                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/40.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">days remaining <br /> to float</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column align-items-center mr-4">
                                                            <a href="#/">
                                                                <button className="btn mb-2 btn__newpromo">active</button>
                                                            </a>
                                                            <div>
                                                                <Image className="img-fluid" src="/assets/images/promonew/38.png" alt="" fill />
                                                                <Image className="img-fluid" src="/assets/images/promonew/39.png" alt="" fill />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="rep-sum" role="tabpanel" aria-labelledby="rep-sum">
                                <div className="tab-pane active show fade" id="ut-sup2" role="tabpanel" aria-labelledby="ut-sup2">
                                    <h4>Report Summary</h4>

                                    <div className="d-flex mt-3 mb-5 align-items-center">
                                        <div className="search__icons bg-white d-flex align-items-center">
                                            <input type="text" placeholder="Search for report" className="form-control border-0 " name="" id="" />
                                            <Image className="mr-2" src="/assets/images/promonew/18.png" alt="search-icon" fill />
                                        </div>
                                        <div className="ml-auto">
                                            <Link href="/site/newpromotions">
                                                <button className="btn btn__newpromo">download report</button>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="all__promotable bg-white p-4">
                                        <table className="table table-responsive report__summarytable table-borderless">
                                            <thead>
                                                <tr style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="col" className="pl-1">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" className="selectAll " id="selectAll" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <th scope="col">
                                                        <h6 className="mb-0">Promotion-ID</h6>
                                                    </th>
                                                    <th scope="col">
                                                        <h6 className="mb-0">Launched Date</h6>
                                                    </th>
                                                    <th scope="col">
                                                        <h6 className="mb-0">End Date</h6>
                                                    </th>
                                                    <th scope="col">
                                                        <h6 className="mb-0">Promotion Status</h6>
                                                    </th>
                                                    <th scope="col">
                                                        <h6 className="mb-0">Coin Allocation</h6>
                                                    </th>
                                                    <th scope="col">
                                                        <h6 className="mb-0">Coin Support Received</h6>
                                                    </th>
                                                    <th scope="col">
                                                        <h6 className="mb-0">Lowest Gift</h6>
                                                    </th>
                                                    <th scope="col">
                                                        <h6 className="mb-0">Highest Gift</h6>
                                                    </th>
                                                    <th scope="col">
                                                        <h6 className="mb-0">Competitive Status</h6>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="report__tbody">
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            0 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            1 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            2 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            3 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            4 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            5 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            6 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            7 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            8 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            9 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            10 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            11 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            12 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            13 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                                <tr className="table__light" style={{ borderBottom: "4px solid white" }}>
                                                    <th scope="row">
                                                        <div className="check d-flex align-items-baseline">
                                                            <div htmlFor="" className="mb-0 input__label__report">
                                                                <input type="checkbox" id="" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>PR-00
                                                            14 </div>
                                                    </td>
                                                    <td>
                                                        <div>03/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>04/10/22</div>
                                                    </td>
                                                    <td>
                                                        <div>Active</div>
                                                    </td>
                                                    <td>
                                                        <div>K100</div>
                                                    </td>
                                                    <td>
                                                        <div>K200</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>K1000</div>
                                                    </td>
                                                    <td>
                                                        <div>Fairly Competitive</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane fade" id="targeting" role="tabpanel" aria-labelledby="targeting">
                                <h4>Targeting</h4>
                                <div className="all__promotable bg-white p-3">
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <div className="d-flex mb-3 align-items-center">
                                                    <div className="check d-flex align-items-baseline" style={{ width: "20%" }}>
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" className="selectAll" id="selectAll" />
                                                        </div>
                                                        <p className="lable__heading">All Promotions</p>
                                                    </div>
                                                    <div className="search__icons d-flex align-items-center">
                                                        <input type="text" placeholder="Search" className="form-control border-0 " name="" id="" />
                                                        <Image className="mr-2" src="/assets/images/promonew/18.png" alt="search-icon" fill />
                                                    </div>
                                                    <div className="ml-auto">
                                                        <Link href="/site/newpromotions">
                                                            <button className="btn mx-3 btn__newpromo">download target report</button>
                                                        </Link>
                                                        <Link href="/site/newpromotions">
                                                            <button className="btn btn__newpromo">start new Promotions</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe <br /> Picture <br /> <span>Nov,12
                                                            2022</span></p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> Coin support <br /> recieved </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/41.png" alt="" fill />
                                                                    <span>42</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">reach</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/42.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">impressions</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/43.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">clicks</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe <br /> Picture <br /> <span>Nov,12
                                                            2022</span></p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> Coin support <br /> recieved </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/41.png" alt="" fill />
                                                                    <span>42</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">reach</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/42.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">impressions</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/43.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">clicks</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe <br /> Picture <br /> <span>Nov,12
                                                            2022</span></p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> Coin support <br /> recieved </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/41.png" alt="" fill />
                                                                    <span>42</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">reach</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/42.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">impressions</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/43.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">clicks</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe <br /> Picture <br /> <span>Nov,12
                                                            2022</span></p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none"> Coin support <br /> recieved </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/41.png" alt="" fill />
                                                                    <span>42</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">reach</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/42.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">impressions</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/promonew/43.png" alt="" fill />
                                                                    <span>2</span>
                                                                </div>
                                                                <div className="promo__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">clicks</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ut-sup" role="tabpanel" aria-labelledby="ut-sup">
                                <h4>Support Overview</h4>
                                <div className="total__don_friends d-flex flex-wrap align-items-center">
                                    <div className="flex-fill bg-white p-3">
                                        <p className="text-dark mb-0 text-capitalize">total donors</p>
                                        <p className="mb-0 text-secondary">420</p>
                                    </div>
                                    <div className="flex-fill bg-white p-3">
                                        <p className="text-dark mb-0 text-capitalize">friends</p>
                                        <p className="mb-0 text-secondary">420</p>
                                    </div>
                                    <div className="flex-fill bg-white p-3">
                                        <p className="text-dark mb-0 text-capitalize">followers</p>
                                        <p className="mb-0 text-secondary">420</p>
                                    </div>
                                    <div className="flex-fill bg-white p-3">
                                        <p className="text-dark mb-0 text-capitalize">public</p>
                                        <p className="mb-0 text-secondary">420</p>
                                    </div>
                                </div>

                                <div className="all__promotable bg-white p-3">
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <div className="d-flex mb-3 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" className="selectAll" id="selectAll" />
                                                        </div>
                                                        <p className="lable__heading">All Promotions</p>
                                                    </div>
                                                    <div className="search__icons d-flex align-items-center">
                                                        <input type="text" placeholder="Search" className="form-control border-0 " name="" id="" />
                                                        <Image className="mr-2" src="/assets/images/promonew/18.png" alt="search-icon" fill />
                                                    </div>
                                                    <div className="ml-auto">
                                                        <Link href="/site/newpromotions">
                                                            <button className="btn btn__newpromo">start new Promotions</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe <br /> Picture <br /><span>Nov,12
                                                            2022</span></p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">Friends</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">followers</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">public</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">total</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe <br /> Picture <br /><span>Nov,12
                                                            2022</span></p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">Friends</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">followers</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">public</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">total</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe <br /> Picture <br /><span>Nov,12
                                                            2022</span></p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">Friends</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">followers</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">public</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">total</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <div className="d-flex flex-wrap  mb-3 bg-light px-3 py-4 align-items-center">
                                                    <div className="check w-25 d-flex align-items-baseline">
                                                        <div htmlFor="" className="mb-0 input__label">
                                                            <input type="checkbox" id="" />
                                                        </div>
                                                        <p className="lable__heading">Books <br /> Secrets of the Shoe <br /> Picture <br /><span>Nov,12
                                                            2022</span></p>
                                                    </div>
                                                    <div className="ml-auto d-flex flex-wrap">
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">Friends</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">followers</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">public</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mr-4">
                                                            <div className="only__coin mr-2">
                                                                <Image src="/assets/images/promonew/16.png" alt="" fill />
                                                            </div>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex k__icon__span  align-items-center">
                                                                    <Image src="/assets/images/utterworthy/19.png" alt="" fill />
                                                                    <span>420</span>
                                                                </div>
                                                                <div className="f__heading">
                                                                    <a href="#/" className="text-secondary text-decoration-none">total</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>




            <Script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></Script>
            <Script src="//code.jquery.com/jquery-1.11.3.min.js"></Script>

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                integrity="eJI7QwhOS+hwpX2zkaeJQjeiwlhOP+SdQDqhgvvo1DsjtiSQByFdThsxO669S2D-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                crossorigin="anonymous"></Script>
        </>
    )
}
