"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CloseMainHeader from "../../components/CloseMainHeader";
import MainSideBar from "../../components/MainSideBar";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileEdit from "../../components/ProfileEdit";
import Bars from "../../components/Bars";
import UtterReach from "../../components/UtterReach";
import "../../../../public/assets/css/Settings.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";


const showParticularDiv = (passedId) => {
    $(".fade").removeClass("show");
    $(".fade").removeClass("active");

    $("#" + passedId).addClass("show");
    $("#" + passedId).addClass("active");
}

const backToPrivacy = (event) => {
    $(".fade").removeClass("show");
    $(".fade").removeClass("active");

    $("#Privacy").addClass("show");
    $("#Privacy").addClass("active");
}

const deactiveOrDelete = (event) => {
    var radioValue = $("input[name='prefferd_action']:defaultChecked").val();
    if (radioValue == 'yes') {
        window.location.href = "/";
    } else {
        showParticularDiv("deactivateAccount");
    }
}



const rotateAdjust = (e) => {
    e.stopPropagation();
    const parentDiv = e.currentTarget;
    if (($(parentDiv).children(".adjustActiveRotation").hasClass("rotate90deg"))) {
        let activeBlock = $(parentDiv).attr("data-id");
        $(parentDiv).children(".adjustActiveRotation").removeClass("rotate90deg");
        $("." + activeBlock).addClass("d-none");
    } else {
        $(".adjustActiveRotation").removeClass("rotate90deg");
        $(".adjust_res_line").addClass("d-none");

        $(parentDiv).children(".adjustActiveRotation").addClass("rotate90deg");
        let activeBlock = $(parentDiv).attr("data-id");
        $("." + activeBlock).removeClass("d-none");
    }
}


const selectNewLang = (e) => {
    e.stopPropagation();
    const parentDiv = e.currentTarget;
    let htmlData = $(parentDiv).html();
    $(parentDiv).parent("#dropSelect").addClass("d-none");
    $(parentDiv).parent().parent().children(".selectedLang").html(htmlData);
    // $(parentDiv).closest("#selectedLang").html(htmlData);
}

const selectedLang = (e) => {
    e.stopPropagation();
    const parentDiv = e.currentTarget;
    $(parentDiv).parent().children("#dropSelect").toggleClass("d-none");
}


const changemail = () => {
    $("#changeEmailDiv").toggleClass("d-none");
}

const changePwd = () => {
    $("#changePasswordDiv").toggleClass("d-none");
}

const checkSave = () => {
    let currPasVal = $(".currPas").val().trim();
    let newPassVal = $(".newPass").val().trim();
    let ReNewPassVal = $(".ReNewPass").val().trim();
    console.log(currPasVal);

    if ((currPasVal != "") && (newPassVal != "") && (ReNewPassVal != "")) {
        if (newPassVal == ReNewPassVal) {
            $("#saveBtn").addClass("darkBtn");
            $(".redAlert").css("color", "green");
            $(".redAlert").html("Paswords Matched");
        } else {
            $("#saveBtn").removeClass("darkBtn");
            $(".redAlert").css("color", "red");
            $(".redAlert").html("Paswords not matched");
        }
    }
}



const faActiveRotation = (e) => {
    e.stopPropagation();
    const parentDiv = e.currentTarget;
    if (($(parentDiv).hasClass("rotate90deg"))) {
        let activeBlock = $(parentDiv).attr("data-id");
        $(parentDiv).removeClass("rotate90deg");
        $("#" + activeBlock).addClass("d-none");
    } else {
        $(".faActiveRotation").removeClass("rotate90deg");
        $(".blocks").addClass("d-none");
        $(parentDiv).addClass("rotate90deg");
        let activeBlock = $(parentDiv).attr("data-id");
        $("#" + activeBlock).removeClass("d-none");
    }
}





export default function KhrimiPage() {

    const [prefferedAction, setPrefferedAction] = useState("");
    const handleRadioChange = (value) => {
        setPrefferedAction(value);
    }


    useEffect(() => {
        class Slider {
            constructor(rangeElement, valueElement, options) {
                this.rangeElement = rangeElement
                this.valueElement = valueElement
                this.options = options

                // Attach a listener to "change" event
                this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
            }

            // Initialize the slider
            init() {
                this.rangeElement.setAttribute('min', options.min)
                this.rangeElement.setAttribute('max', options.max)
                this.rangeElement.value = options.cur

                this.updateSlider()
            }

            // Format the money
            asMoney(value) {
                return '$' + parseFloat(value)
                    .toLocaleString('en-US', {
                        maximumFractionDigits: 2
                    })
            }

            generateBackground(rangeElement) {
                if (this.rangeElement.value === this.options.min) {
                    return
                }

                let percentage = (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
                return 'background: linear-gradient(to right, #404450, #404450 ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
            }

            updateSlider(newValue) {
                this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
                this.rangeElement.style = this.generateBackground(this.rangeElement.value)
            }
        }

        let rangeElement = document.querySelector('.range [type="range"]')
        let valueElement = document.querySelector('.range .range__value span')

        let options = {
            min: 2000,
            max: 75000,
            cur: 37500
        }

        if (rangeElement) {
            let slider = new Slider(rangeElement, valueElement, options)

            slider.init()
        }

    }, [])


    return (
        <>

            <CloseMainHeader />





            <div className="main">
                <div className="my-4">

                    <div className="row">
                        <div className="col-12">

                            <div className="row">
                                <div className="specificColumn" id="leftMenu">

                                    <div id="short_desc" className="d-none">
                                        <div id="firstBg"></div>
                                        <div id="userImage">
                                            <Image src="/assets/images/8.png" alt="" fill />
                                        </div>
                                        <div id="userShortDetails">
                                            <h4 className="font-weight-bold text-dark">Robert Williams</h4>
                                            <p className="font-weight-bold text-muted">@robert-williams</p>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="font-weight-bold">26</p>
                                                    <span className="text-muted">Followers</span>
                                                </div>
                                                <div className="col">
                                                    <p className="font-weight-bold">23</p>
                                                    <span className="text-muted"> Following </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="nav d-block promotions__sidenav vertical-nav-pill nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="pill" href="#Account" role="tab"
                                                aria-controls="pills-Account" aria-selected="true">Account</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#Privacy" role="tab"
                                                aria-controls="pills-Privacy" aria-selected="false">Privacy
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#Emails" role="tab"
                                                aria-controls="pills-Emails" aria-selected="false">Emails and Notifications
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#Display" role="tab"
                                                aria-controls="pills-Display" aria-selected="false">Display Settings
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="pill" href="#Lists" role="tab"
                                                aria-controls="pills-Lists" aria-selected="false">Lists
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="specificColumn"></div>
                                <div id="rightBar">
                                    <div className="tab-content">



                                        <div className="tab-pane fade show active" id="Account" role="tabpanel"
                                            aria-labelledby="Account-tab">
                                            <h4 className="font-weight-bold pb-2">Account Settings</h4>


                                            <div className="rightMenu">

                                                <div
                                                    className="d-flex col-12 col-md-12 col-lg-12 infobars justify-content-between">
                                                    <p className="leadPara ">Email</p>
                                                    <p className=" leadPara">info@kchat.com</p>
                                                </div>

                                                <div
                                                    className="d-flex col-12 col-md-12 col-lg-12 infobars justify-content-between">
                                                    <p className="leadPara ">Change email address</p>
                                                    <p className=" leadPara changemail" onClick={changemail}>Change Email</p>
                                                </div>


                                                <div className="col-12 col-md-12 col-lg-12 infobars justify-content-between d-none"
                                                    id="changeEmailDiv">
                                                    <div className="form-group">
                                                        <input type="text" className="passform currMail"
                                                            placeholder="Current email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="passform newPMail"
                                                            placeholder="New email" />
                                                    </div>
                                                    <button id="saveBtnMail" className="darkBtn">Save</button>
                                                </div>

                                                <div
                                                    className="d-flex col-12 col-md-12 col-lg-12 infobars justify-content-between">
                                                    <p className="leadPara ">Password</p>
                                                    <p className="leadPara changePwd" onClick={changePwd}>Change Password</p>
                                                </div>

                                                <div className="col-12 col-md-12 col-lg-12 infobars justify-content-between d-none"
                                                    id="changePasswordDiv">
                                                    <p className="leadPara ">Update Password</p>
                                                    <div className="form-group">
                                                        <input type="text" className="passform currPas"
                                                            placeholder="Current password" onKeyUp={checkSave} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="passform newPass"
                                                            placeholder="New password" onKeyUp={checkSave} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="passform ReNewPass"
                                                            placeholder="Re-enter new password" onKeyUp={checkSave} />
                                                    </div>
                                                    <small className="redAlert"></small>
                                                    <p style={{ color: "#666" }}>
                                                        Use at least eight and at most twenty characters with at least one
                                                        capital letter,
                                                        one lowercase letter, one number and one special character.
                                                        Allowed special characters are $ @ #^!~=+--.
                                                    </p>
                                                    <button id="saveBtn">Save</button>
                                                </div>

                                                <div
                                                    className="d-flex col-12 col-md-12 col-lg-12 infobars justify-content-between">
                                                    <p className="leadPara ">Country of Residence </p>
                                                    <div className=" leadPara">
                                                        <div id="languagePicker">
                                                            <div className="selectedLang" onClick={selectedLang}>
                                                                <Image src="/assets/images/flags/united-kingdom.png" alt=""
                                                                    className="flagIcon" fill />
                                                                England
                                                            </div>
                                                            <div id="dropSelect" className="d-none">
                                                                <div data-val="UsEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/united-states.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    USA
                                                                </div>
                                                                <div data-val="UkEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/united-kingdom.png"
                                                                        alt="" className="flagIcon" fill />
                                                                    England
                                                                </div>
                                                                <div data-val="UsEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/france.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    France
                                                                </div>
                                                                <div data-val="UkEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/spain.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    Spain
                                                                </div>
                                                                <div data-val="UsEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/italy.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    Italy
                                                                </div>
                                                                <div data-val="UkEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/portugal.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    Portugal
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <i className="fa fa-sort-desc dropBar"></i>
                                                    </div>
                                                </div>

                                                <div
                                                    className="d-flex col-12 col-md-12 col-lg-12 infobars justify-content-between">
                                                    <p className="leadPara ">Language Settings</p>
                                                    <div className=" leadPara">
                                                        <div id="languagePicker">
                                                            <div className="selectedLang" onClick={selectedLang}>
                                                                <div className="d-flex">
                                                                    <Image src="/assets/images/flags/united-states.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    <div className="ml-2">English (United States)</div>
                                                                </div>
                                                            </div>
                                                            <div id="dropSelect" className="d-none">
                                                                <div data-val="UsEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <div className="d-flex">
                                                                        <Image src="/assets/images/flags/united-states.png"
                                                                            alt="" className="flagIcon" fill />
                                                                        <div className="ml-2">English (United States)</div>
                                                                    </div>
                                                                </div>
                                                                <div data-val="UkEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/united-kingdom.png"
                                                                        alt="" className="flagIcon" fill />
                                                                    English (United Kingdom)
                                                                </div>
                                                                <div data-val="UsEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/france.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    French
                                                                </div>
                                                                <div data-val="UkEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/spain.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    Spanish
                                                                </div>
                                                                <div data-val="UsEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/italy.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    Italian
                                                                </div>
                                                                <div data-val="UkEnglish" className="selectNewLang" onClick={selectNewLang}>
                                                                    <Image src="/assets/images/flags/portugal.png" alt=""
                                                                        className="flagIcon" fill />
                                                                    Portuguese
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <i className="fa fa-sort-desc dropBar"></i>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>



                                        <div id="Privacy" className="tab-pane fade" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="border-bottom">
                                                <h4 className="font-weight-bold mb-3 montserrat">Privacy and Security</h4>
                                            </div>
                                            <div className="rightMenu">

                                                <div
                                                    className="d-flex col-12 col-md-12 col-lg-12 mb-2 justify-content-between graybg">
                                                    <p className="leadPara ">Display my coins on homepage</p>
                                                    <label className="switch">

                                                        <input type="checkbox" id="switch-id" defaultChecked data-id="no"
                                                            className="coinShowHide" />

                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>

                                                <div
                                                    className="d-flex col-12 col-md-12 col-lg-12 my-2 justify-content-between graybg">
                                                    <p className="leadPara ">Logout automatically if I&apos;m Idle</p>
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>

                                                <div className="Deactivate-account my-2 graybg">
                                                    <a className="text-decoration-none text-dark"
                                                        onClick={(e) => showParticularDiv('deactivateAccount')}>
                                                        <p className=" leadPara ">Deactivate Account</p>
                                                    </a>
                                                </div>

                                                <div className="Deactivate-account mt-2 graybg">
                                                    <a className="text-decoration-none text-dark"
                                                        onClick={(e) => showParticularDiv('DeleteAccount')}>
                                                        <p className=" leadPara ">Delete Account</p>
                                                    </a>
                                                </div>


                                            </div>
                                        </div>






                                        <div className="rightMenu tab-pane fade" id="DeleteAccount" role="tabpanel"
                                            aria-labelledby="profile-tab">
                                            <div className="border-bottom">
                                                <h2>Delete account</h2>
                                            </div>

                                            <div className="col-12 col-md-12 col-lg-12 px-0 my-2 justify-content-between">
                                                <p className="leadPara ">
                                                    This is an irreversible action. Do you still want to continue?
                                                </p>

                                                <div className="form-group">
                                                    <input
                                                        type="radio"
                                                        id="yes"
                                                        name="preffered_action"
                                                        defaultChecked={prefferedAction === 'yes'}
                                                        value="yes"
                                                        className="normalRadio"
                                                        onChange={() => handleRadioChange('yes')}
                                                    />
                                                    <label htmlhtmlFor="yes">Yes please</label>
                                                </div>

                                                <div className="form-group">
                                                    <input
                                                        type="radio"
                                                        id="no"
                                                        name="preffered_action"
                                                        defaultChecked={prefferedAction === 'no'}
                                                        value="no"
                                                        className="normalRadio"
                                                        onChange={() => handleRadioChange('no')}
                                                    />
                                                    <label htmlhtmlFor="no">No, I think I&apos;ll deactivate instead.</label>
                                                </div>

                                                <a className="text-white text-decoration-none mr-4" onClick={(e) => backToPrivacy()}>
                                                    <button className="btn btn__proceed">Back</button>
                                                </a>
                                                <a className="text-white text-decoration-none" onClick={() => deactiveOrDelete()}>
                                                    <button className="btn btn__proceed">proceed</button>
                                                </a>
                                            </div>


                                        </div>


                                        <div className="rightMenu tab-pane fade" id="deactivateAccount" role="tabpanel"
                                            aria-labelledby="profile-tab">
                                            <div className="border-bottom">
                                                <h2>Deactivate account</h2>
                                            </div>

                                            <div className="col-12 col-md-12 col-lg-12 px-0 my-2 justify-content-between">
                                                <p className="leadPara ">
                                                    This action will make your profile no longer available for viewing or
                                                    engagement.
                                                    To restore your account, just log in back at any time.
                                                </p>
                                            </div>

                                            <a className="text-white text-decoration-none mr-4" onClick={(e) => backToPrivacy()}>
                                                <button className="btn btn__proceed">Back</button>
                                            </a>

                                            <a className="text-white text-decoration-none" href="#">
                                                <button className="btn btn__proceed">Deactivate</button>
                                            </a>


                                        </div>



                                        <div className="tab-pane fade" id="Emails" role="tabpanel" aria-labelledby="profile-tab">

                                            <h4 className="montserrat font600  pb-2">Enable the action you want to be notified about
                                            </h4>

                                            <div className="pb-3 all__radios">

                                                <div className="rightMenu dimRight">


                                                    <div className="sideSections">
                                                        <div className="d-flex pb-1 justify-content-between">
                                                            <h4 className="lead montserrat  mb-0">Utterances and Media Utterances
                                                            </h4>
                                                            <label className="switch mr-3">
                                                                <input type="checkbox" onchange="checkChange(this)" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                        <div className="roundedborder p-3">
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when a friend makes an utterance
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when a follower makes an utterance
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when a friend makes an utterance
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when a friend makes a media utterance
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when a follower makes a media utterance
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when a follower starts a poll
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div className="sideSections">
                                                        <div
                                                            className="d-flex pb-1 pt-5 align-items-center justify-content-between">
                                                            <h4 className="lead montserrat  mb-0">Messages and Comments</h4>
                                                            <label className="switch mr-3">
                                                                <input type="checkbox" onchange="checkChange(this)" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                        <div className="roundedborder p-3">
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when I get a direct message
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when someone comments on my Utter
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when someone likes my comments
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="sideSections">
                                                        <div
                                                            className="d-flex pb-1 pt-5 align-items-center justify-content-between">
                                                            <h4 className="lead montserrat  mb-0">Requests</h4>
                                                            <label className="switch mr-3">
                                                                <input type="checkbox" onchange="checkChange(this)" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                        <div className="roundedborder p-3">
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when i get a follower request
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="sideSections">
                                                        <div
                                                            className="d-flex pb-1 pt-5 align-items-center justify-content-between">
                                                            <h4 className="lead montserrat  mb-0">Profiles</h4>
                                                            <label className="switch mr-3">
                                                                <input type="checkbox" onchange="checkChange(this)" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                        <div className="roundedborder p-3">
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when someone visits my profile
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="sideSections">
                                                        <div
                                                            className="d-flex pb-1 pt-5 align-items-center justify-content-between">
                                                            <h4 className="lead montserrat  mb-0">Actions on your content</h4>
                                                            <label className="switch mr-3">
                                                                <input type="checkbox" onchange="checkChange(this)" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                        <div className="roundedborder p-3">
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when someone visits my profile
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when someone shares my photo or video
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>




                                                    <div className="sideSections">
                                                        <div
                                                            className="d-flex pb-1 pt-5 align-items-center justify-content-between">
                                                            <h4 className="lead montserrat  mb-0">From Khrimisay </h4>
                                                            <label className="switch mr-3">
                                                                <input type="checkbox" onchange="checkChange(this)" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                        <div className="roundedborder p-3">
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when Khrimisay has a friend recommendation for me
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                                                <p className="font-weight-five color__gray mb-0">
                                                                    Email me when Khrimisay has other recommendations for me
                                                                </p>
                                                                <label className="switch">
                                                                    <input type="checkbox" onchange="checkChange(this)" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>




                                                    <div className="sideSections">
                                                        <div
                                                            className="d-flex pb-1 pt-5 align-items-center justify-content-between">
                                                            <h4 className="lead montserrat  mb-0">How often should we email you</h4>
                                                            <label className="switch mr-3">
                                                                <input type="checkbox" onchange="checkChange(this)" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                        <div className="roundedborder p-3">
                                                            <div className="d-flex position-relative w-100 align-items-center mb-4">
                                                                <label
                                                                    className="form-check-label color__gray radio__labelsize font-weight-five"
                                                                    htmlFor="everyday">
                                                                    Everyday
                                                                </label>
                                                                <input onchange="checkRadio(this)" className="form__radioinput"
                                                                    type="radio" name="exampleRadios" id="everyday"
                                                                    value="option1" />
                                                            </div>
                                                            <div className="d-flex position-relative w-100 align-items-center mb-4">
                                                                <label
                                                                    className="form-check-label color__gray radio__labelsize font-weight-five"
                                                                    htmlFor="oneweek">
                                                                    Once a Week
                                                                </label>
                                                                <input onchange="checkRadio(this)" className="form__radioinput"
                                                                    type="radio" name="exampleRadios" id="oneweek"
                                                                    value="option1" />
                                                            </div>
                                                            <div className="d-flex position-relative w-100 align-items-center mb-4">
                                                                <label
                                                                    className="form-check-label color__gray radio__labelsize font-weight-five"
                                                                    htmlFor="everyweek">
                                                                    Every Week
                                                                </label>
                                                                <input onchange="checkRadio(this)" className="form__radioinput"
                                                                    type="radio" name="exampleRadios" id="everyweek"
                                                                    value="option1" />
                                                            </div>
                                                            <div className="d-flex position-relative w-100 align-items-center mb-4">
                                                                <label
                                                                    className="form-check-label color__gray radio__labelsize font-weight-five"
                                                                    htmlFor="everyoweek">
                                                                    Every other Week
                                                                </label>
                                                                <input onchange="checkRadio(this)" className="form__radioinput"
                                                                    type="radio" name="exampleRadios" id="everyoweek"
                                                                    value="option1" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>




                                        <div className="tab-pane fade" id="Display" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="border-bottom">
                                                <h4 className="font-weight-bold mb-3">Display Settings</h4>
                                            </div>

                                            <div className="rightMenu tab-pane">


                                                <div className="adjustLine">
                                                    <div className="text_left">Font Size</div>
                                                    <div className="text_right" onClick={rotateAdjust} data-id="adjstfont">
                                                        Adjust
                                                        <span className="ml-2 adjustActiveRotation">
                                                            <Image src="/assets/images/arrow.png" alt="" fill />
                                                        </span>
                                                    </div>
                                                </div>


                                                <div className="adjust_res_line fonts adjstfont d-none">
                                                    <div className="size">
                                                        <div className="text-center default_text">Default</div>
                                                        <div className="d-flex justify-content-between">
                                                            <span className="minSize">Aa</span>
                                                            <form className="range rangewidth">
                                                                <div className="form-group range__slider">
                                                                    <input type="range" className="w-100" min="0" max="100" step="1"
                                                                        onchange="getvalue(this)" />
                                                                </div>
                                                                <div className="range__value" style={{ opacity: "0" }}>
                                                                    <label>Loan Amount</label>
                                                                    <span></span>
                                                                </div>
                                                            </form>
                                                            <span className="font-weight-bold maxSize">Aa</span>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div className="adjustLine">
                                                    <div className="text_left">Themes</div>
                                                    <div className="text_right" onClick={rotateAdjust} data-id="adjsttheme">
                                                        Change
                                                        <span className="ml-2 adjustActiveRotation">
                                                            <Image src="/assets/images/arrow.png" alt="" fill />
                                                        </span>
                                                    </div>
                                                </div>



                                                <div className="adjust_res_line fonts adjsttheme px-5 d-none">

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="exampleRadios"
                                                            id="exampleRadios1" value="option1" defaultChecked />
                                                        <label className="form-check-label themelabel" htmlFor="exampleRadios1">
                                                            Light Themes
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="exampleRadios"
                                                            id="exampleRadios2" value="option2" />
                                                        <label className="form-check-label themelabel" htmlFor="exampleRadios2">
                                                            Dark Themes
                                                        </label>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>




                                        <div id="Lists" className="fade" role="tabpanel" aria-labelledby="profile-tab">

                                            <h4 className="font-weight-bold mb-2">Lists</h4>

                                            <div className="tab-pane" id="Lists">

                                                <div className="rightMenu">
                                                    <div className="bg-white">
                                                        <div className="listsBg p-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <span className="">Viewings</span>
                                                                <div className="ml-auto">
                                                                    <span className="">500</span>
                                                                    <span className="text-decoration-none text-dark px-2 py-1  faActiveRotation" onClick={faActiveRotation}
                                                                        data-id="Viewings">
                                                                        <Image src="/assets/images/arrow.png" alt="" fill />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="listsBg p-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <span className="">Friends</span>
                                                                <div className="ml-auto">
                                                                    <span className="">500</span>
                                                                    <span className="text-decoration-none text-dark px-2 py-1  faActiveRotation" onClick={faActiveRotation}
                                                                        data-id="Friends">
                                                                        <Image src="/assets/images/arrow.png" alt="" fill />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="listsBg p-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <span className="">Ignored</span>
                                                                <div className="ml-auto">
                                                                    <span className="">500</span>
                                                                    <span className="text-decoration-none text-dark px-2 py-1  faActiveRotation" onClick={faActiveRotation}
                                                                        data-id="Ignored">
                                                                        <Image src="/assets/images/arrow.png" alt="" fill />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="listsBg p-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <span className="">Blocked</span>
                                                                <div className="ml-auto">
                                                                    <span className="">500</span>
                                                                    <span className="text-decoration-none text-dark px-2 py-1  faActiveRotation" onClick={faActiveRotation}
                                                                        data-id="Blocked">
                                                                        <Image src="/assets/images/arrow.png" alt="" fill />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="listsBg p-3">
                                                            <div className="d-flex align-items-center">
                                                                <span className="">squardience</span>
                                                                <div className="ml-auto">
                                                                    <span className="">500</span>
                                                                    <span className="text-decoration-none text-dark px-2 py-1  faActiveRotation" onClick={faActiveRotation}
                                                                        data-id="Squares">
                                                                        <Image src="/assets/images/arrow.png" alt="" fill />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>





                                                <div className="rightMenu blocks d-none" id="Squares">

                                                    <div className="d-flex">
                                                        <h4 className="font-weight-bold">squardience</h4>
                                                        <div className="searchField">
                                                            <div className="rounded rounded-pill">
                                                                <div className="input-group input-group-b">
                                                                    <input type="search" placeholder="Search Khrimisay"
                                                                        aria-describedby="button-addon2"
                                                                        className="form-control friendsearch" />
                                                                    <div className="input-group-prepend">
                                                                        <button id="button-addon2" type="submit"
                                                                            className="btn frnd-search-butn"><i
                                                                                className="fa fa-search"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="bg-white my-3 blocked__users" id="style-3">

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">LeBron James</span>
                                                                    <span className="text-secondary sfpro">@LebronJames</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Squares</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested2.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Hellen Keller</span>
                                                                    <span className="text-secondary sfpro">@HelenKeller</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Squares</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested3.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Kobe Bsuggested5t</span>
                                                                    <span className="text-secondary sfpro">@KobeBsuggested5t</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Squares</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested4.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">suggested4 Curry</span>
                                                                    <span className="text-secondary sfpro">@suggested4Curry</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Squares</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested5.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">suggested5 Reynolds</span>
                                                                    <span className="text-secondary sfpro">@suggested5Reynolds</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Squares</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested2.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Hellen Keller3</span>
                                                                    <span className="text-secondary sfpro">@HelenKeller</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Squares</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested3.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Kobe Bsuggested5t3</span>
                                                                    <span className="text-secondary sfpro">@KobeBsuggested5t</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Squares</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested2.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Hellen Keller2</span>
                                                                    <span className="text-secondary sfpro">@HelenKeller</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Squares</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested3.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Kobe Bsuggested5t2</span>
                                                                    <span className="text-secondary sfpro">@KobeBsuggested5t</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Squares</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="rightMenu blocks d-none" id="Friends">

                                                    <div className="d-flex">
                                                        <h4 className="font-weight-bold">Friends</h4>
                                                        <div className="searchField">
                                                            <div className="rounded rounded-pill">
                                                                <div className="input-group input-group-b">
                                                                    <input type="search" placeholder="Search Khrimisay"
                                                                        aria-describedby="button-addon2"
                                                                        className="form-control friendsearch" />
                                                                    <div className="input-group-prepend">
                                                                        <button id="button-addon2" type="submit"
                                                                            className="btn frnd-search-butn"><i
                                                                                className="fa fa-search"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="bg-white my-3 blocked__users" id="style-3">

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">LeBron James</span>
                                                                    <span className="text-secondary sfpro">@LebronJames</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">UNFRIEND</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested2.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Hellen Keller</span>
                                                                    <span className="text-secondary sfpro">@HelenKeller</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">UNFRIEND</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested3.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Kobe Bsuggested5t</span>
                                                                    <span className="text-secondary sfpro">@KobeBsuggested5t</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">UNFRIEND</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested4.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">suggested4 Curry</span>
                                                                    <span className="text-secondary sfpro">@suggested4Curry</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">UNFRIEND</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested5.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">suggested5 Reynolds</span>
                                                                    <span className="text-secondary sfpro">@suggested5Reynolds</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">UNFRIEND</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested2.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Hellen Keller3</span>
                                                                    <span className="text-secondary sfpro">@HelenKeller</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">UNFRIEND</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested3.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Kobe Bsuggested5t3</span>
                                                                    <span className="text-secondary sfpro">@KobeBsuggested5t</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">UNFRIEND</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested2.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Hellen Keller2</span>
                                                                    <span className="text-secondary sfpro">@HelenKeller</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">UNFRIEND</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested3.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Kobe Bsuggested5t2</span>
                                                                    <span className="text-secondary sfpro">@KobeBsuggested5t</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">UNFRIEND</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="rightMenu blocks d-none" id="Viewings">

                                                    <div className="d-flex">
                                                        <h4 className="font-weight-bold">Viewings</h4>
                                                        <div className="searchField">
                                                            <div className="rounded rounded-pill">
                                                                <div className="input-group input-group-b">
                                                                    <input type="search" placeholder="Search Khrimisay"
                                                                        aria-describedby="button-addon2"
                                                                        className="form-control friendsearch" />
                                                                    <div className="input-group-prepend">
                                                                        <button id="button-addon2" type="submit"
                                                                            className="btn frnd-search-butn"><i
                                                                                className="fa fa-search"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="bg-white my-3 blocked__users" id="style-3">

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">LeBron James</span>
                                                                    <span className="text-secondary sfpro">@LebronJames</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Viewings</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested2.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Hellen Keller</span>
                                                                    <span className="text-secondary sfpro">@HelenKeller</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Viewings</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested3.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Kobe Bsuggested5t</span>
                                                                    <span className="text-secondary sfpro">@KobeBsuggested5t</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Viewings</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested4.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">suggested4 Curry</span>
                                                                    <span className="text-secondary sfpro">@suggested4Curry</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Viewings</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested5.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">suggested5 Reynolds</span>
                                                                    <span className="text-secondary sfpro">@suggested5Reynolds</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Viewings</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested2.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Hellen Keller3</span>
                                                                    <span className="text-secondary sfpro">@HelenKeller</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Viewings</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested3.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Kobe Bsuggested5t3</span>
                                                                    <span className="text-secondary sfpro">@KobeBsuggested5t</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Viewings</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested2.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Hellen Keller2</span>
                                                                    <span className="text-secondary sfpro">@HelenKeller</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Viewings</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3 pr-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/suggested3.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="friendname">Kobe Bsuggested5t2</span>
                                                                    <span className="text-secondary sfpro">@KobeBsuggested5t</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">Viewings</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="rightMenu blocks d-none" id="Ignored">


                                                    <div className="d-flex">
                                                        <h4 className="font-weight-bold">Ignored</h4>
                                                        <div className="searchField">
                                                            <div className="rounded rounded-pill">
                                                                <div className="input-group input-group-b">
                                                                    <input type="search" placeholder="Search Khrimisay"
                                                                        aria-describedby="button-addon2"
                                                                        className="form-control friendsearch" />
                                                                    <div className="input-group-prepend">
                                                                        <button id="button-addon2" type="submit"
                                                                            className="btn frnd-search-butn"><i
                                                                                className="fa fa-search"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="bg-white p-3 blocked__users">
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Robert</span>
                                                                    <span className="text-secondary">@robertbuthurt</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">IGNORED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Robert</span>
                                                                    <span className="text-secondary">@robertbuthurt</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">IGNORED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Robert</span>
                                                                    <span className="text-secondary">@robertbuthurt</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">IGNORED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Robert</span>
                                                                    <span className="text-secondary">@robertbuthurt</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">IGNORED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Robert</span>
                                                                    <span className="text-secondary">@robertbuthurt</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">IGNORED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="rightMenu blocks d-none" id="Blocked">

                                                    <div className="d-flex">
                                                        <h4 className="font-weight-bold">Blocked</h4>
                                                        <div className="searchField">
                                                            <div className="rounded rounded-pill">
                                                                <div className="input-group input-group-b">
                                                                    <input type="search" placeholder="Search Khrimisay"
                                                                        aria-describedby="button-addon2"
                                                                        className="form-control friendsearch" />
                                                                    <div className="input-group-prepend">
                                                                        <button id="button-addon2" type="submit"
                                                                            className="btn frnd-search-butn"><i
                                                                                className="fa fa-search"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-white p-3 blocked__users">
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Edte</span>
                                                                    <span className="text-secondary">@theEdetbet</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">BLOCKED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Edte</span>
                                                                    <span className="text-secondary">@theEdetbet</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">BLOCKED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Edte</span>
                                                                    <span className="text-secondary">@theEdetbet</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">BLOCKED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Edte</span>
                                                                    <span className="text-secondary">@theEdetbet</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">BLOCKED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <Image className="img-fluid mr-2 friend_img"
                                                                    src="/assets/images/8.png" alt="search-icon" fill />
                                                                <div className="d-flex flex-column">
                                                                    <span className="font-weight-bold">Edte</span>
                                                                    <span className="text-secondary">@theEdetbet</span>
                                                                </div>
                                                            </div>

                                                            <div className="ml-auto">
                                                                <div className="dropdown droplef">
                                                                    <button className="btn btn__comnt btn__blocked dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">BLOCKED</button>
                                                                    <div className="dropdown-menu shadow-sm dropdown__menu__blockedusers"
                                                                        aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else
                                                                            here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>

                                        </div>
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
