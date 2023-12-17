"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import CreateModalPopUp from "./CreateModalPopUp";
import AllUtterModals from "./AllUtterModals";
import { Dropdown, Modal, Button } from 'react-bootstrap';
import Preloader from './Preloader';

export default function KhrimiPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 350);
        return () => clearTimeout(delay);
    }, []);



    const router = useRouter();

    const [popUPCreateModal, setPopUPCreateModal] = useState(false);
    const handleCreatePopUpShow = () => setPopUPCreateModal(true);
    const handleCreatePopUpClose = () => setPopUPCreateModal(false);



    const SendToUtterOrWorthy = (event) => {
        event.stopPropagation();
        const parentElement = event.currentTarget;
        let propertyId = $(parentElement).attr("data-id");
        $("#utterResponse").val(propertyId);
        $(".popups").removeClass("bBlack");
        $(parentElement).addClass("bBlack");
        $("#proceedBtn").addClass("bgActivated");
    }


    const proceedFunc = () => {
        let sendTo = $("#utterResponse").val();
        if (sendTo == 'utterance') {
            $("#popUPCreateModal").modal("hide");
            $("#utterModal").modal("show");
        } else {
            router.push('/site/chooseutterworthy');
        }
        handleCreatePopUpClose();
    }

    return (
        <>

            {isLoading ? (
                <Preloader />
            ) : (

                <>
                    <div className="header">
                        <a id="menu-action" className="ml-2">
                            <Image src="/assets/images/k-open.png" className="img-fluid Khrimisay-logo KImg" alt="Image" fill />
                        </a>
                        <div className="d-flex flex-wrap align-items-center">

                            <Link className="navbar-brand d-none d-md-block mr-2 mr-md-5" href="/site/utter">
                                <Image src="/assets/images/13-copy-small.png" className="img-fluid Khrimisay-logo" id="mainLogo" alt="Image" fill />
                            </Link>

                            <div className="navbar-content ml-0 ml-md-5 d-none d-md-block" style={{ width: "35%" }}>
                                <div className="rounded rounded-pill shadow-sm">
                                    <div className="input-group input-group-b">
                                        <input type="search" placeholder="Search Khrimisay" aria-describedby="button-addon2"
                                            className="sfpro form-control search-bar " />
                                        <div className="input-group-prepend">
                                            <button id="button-addon2" type="submit" className="btn search-butn"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>

                            </div>







                            <div className="bell-gold-new d-flex mr-0 ml-md-auto" >
                                <Link className="text-white d-flex align-items-center mr-2 text-decoration-none" href="/site/utter">
                                    <Image src="/assets/images/home-icon.png" width="24" height="24" className="img-fluid" alt="Image" />
                                    <div className="vl-hr mx-4 border-right-white h-50"></div>
                                </Link>


                                <Dropdown className="btn-group top-head-dropdown">
                                    <Dropdown.Toggle variant="link" id="dropdown-basic" className="d-flex align-items-center dropdown-toggle c_p notification-dropdown mr-4">
                                        <Image src="/assets/images/16.png" className="img-fluid c_p mr-1" width="24" height="24" alt="Image" />
                                        <span className="font-weight-bolder not-number"> <sup className="text-white bg-danger">3</sup> </span>
                                        <div className="vl-hr ml-4 border-right-white h-50"></div>
                                    </Dropdown.Toggle>


                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                        <Dropdown.Item>
                                            <Link href="/site/all_notification" className="seeall">See all notifications</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/site/notifications" className="top-text-block">
                                                <div className="top-text-heading notificationTxt">You have 5 unread Utters</div>
                                                <div className="top-text-light">15 minutes ago</div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/site/notifications" className="top-text-block">
                                                <div className="top-text-heading notificationTxt">You have 5 comments and replies</div>
                                                <div className="top-text-light">2 hours ago</div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/site/notifications" className="top-text-block">
                                                <div className="top-text-heading notificationTxt">You have 3 reactions</div>
                                                <div className="top-text-light">4 hours ago</div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/site/notifications" className="top-text-block">
                                                <div className="top-text-heading notificationTxt">You have 3 Khrimi activities</div>
                                                <div className="top-text-light">4 hours ago</div>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link href="/site/notifications" className="top-text-block">
                                                <div className="top-text-heading notificationTxt">You have 3 other notifications</div>
                                                <div className="top-text-light">5 hours ago</div>
                                            </Link>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>





                                <div className="coins-k-section" id="coinShowingPart">
                                    <Link href="/site/mykhrimi" className="d-flex text-decoration-none align-items-center">
                                        <Image src="/assets/images/32.png" width="22" height="22" className="img-fluid mr-1 nav_coin" alt="image" />
                                        <div className="vl-hr-two text-white">330</div>
                                        <div className="border-right-white ml-3 mr-4 mt-1" style={{ height: "15px" }}></div>
                                    </Link>
                                </div>

                            </div>



                            <Dropdown className="d-flex dropdown show  flex-row user-profile-dropdown pr-0 pr-md-4 pl-0 profile_dropdown" >

                                <Dropdown.Toggle variant="link" id="dropdown-basic" className="d-flex text-decoration-none">
                                    <Image className="rounded-circle on-hover-image navprofileimg" src="/assets/images/shalini.png" alt="image" fill />

                                    <div className="flex-column show-names-on-hover justify-content-start ml-1 ml-md-3">
                                        <span className="d-block text-white font-weight-bold header-username">
                                            Shalini Patel </span>
                                        <span className="date user-date dimLight sfpro">@Shalini_patel</span>
                                    </div>
                                </Dropdown.Toggle>


                                <Dropdown.Menu className="shadow custom-dropdown-menu">

                                    <Link className="dropdown-item" href="/site/drafts" >
                                        <Image className="img-fluid" src="/assets/images/drafts-icon.png" alt="Image" fill />
                                        <span className="drop_text">Drafts</span>
                                    </Link>

                                    <Link className="dropdown-item" href="/site/bookmarks">
                                        <Image className="img-fluid" src="/assets/images/saved.png" alt="Image" fill />
                                        <span className="drop_text"> Saved </span>
                                    </Link>

                                    <Link className="dropdown-item" href="/site/profile">
                                        <Image className="img-fluid" src="/assets/images/profile-icon.png" alt="Image" fill />
                                        <span className="drop_text"> Profile </span>
                                    </Link>


                                    <Dropdown.Item className="dropdown-item create_link">
                                        <Image className="img-fluid" src="/assets/images/create-icon.png" alt="Image" fill />
                                        <span className="drop_text creatingModal" onClick={handleCreatePopUpShow}> Create </span>
                                        <Link className="hand_holder" href="/site/support_request">
                                            <Image src="/assets/images/hand_settings.png" alt="Image" className="create_hand" width={50} height={25} />
                                        </Link>
                                    </Dropdown.Item>

                                    <Link className="dropdown-item" href="/site/settings">
                                        <Image className="img-fluid" src="/assets/images/settings-icon.png"
                                            alt="Image" fill />
                                        <span className="drop_text"> Settings </span>
                                    </Link>

                                    <Link className="dropdown-item" href="/site/faqs">
                                        <Image className="img-fluid" src="/assets/images/help-icon.png"
                                            alt="Image" fill />
                                        <span className="drop_text"> Help </span>
                                    </Link>

                                    <Link className="dropdown-item" href="/">
                                        <Image className="img-fluid" src="/assets/images/log-icon.png"
                                            alt="Image" fill /><span className="drop_text"> Logout </span>
                                    </Link>

                                </Dropdown.Menu>
                            </Dropdown>




                        </div>

                    </div>




                    <Modal show={popUPCreateModal} onHide={handleCreatePopUpClose} id="popUPCreateModal" tabIndex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ borderRadius: "25px" }}>
                        <div className="modal-dialog modal-dialog-centered" style={{ margin: "0px auto" }}>
                            <div className="modal-content modal__content">
                                <div className="modal__body p-3">
                                    <div id="crossCreate" onClick={handleCreatePopUpClose}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                            <path fill="currentColor" d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"></path>
                                        </svg>
                                    </div>

                                    <h5 className="montserrat font-weight-bold">Create and Share</h5>
                                    <h6 className="createsmall mb-3 sfpro">
                                        You can create and manage thoughts to share with users around your world.
                                    </h6>
                                    <input type="hidden" id="utterResponse" value="utterance" />

                                    <div className="createdivs mb-2 d-flex align-items-start p-3 popups SendToUtterOrWorthy" onClick={SendToUtterOrWorthy} data-id="utterance">
                                        <Image className="img-fluid mt-1 mr-2" src="/assets/images/utterance.png" alt="" fill />
                                        <div className="d-flex flex-column">
                                            <h5 className="mb-1 createtitle">Create an Utter</h5>
                                            <p className="mb-0 createsmall remsize9">
                                                Create and share thoughts that your friends and followers can respond to.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="createdivs mb-2 d-flex align-items-start p-3 popups SendToUtterOrWorthy" onClick={SendToUtterOrWorthy} data-id="utterworthy">
                                        <Image className="img-fluid mt-1 mr-2" src="/assets/images/settings.png" alt="" fill />
                                        <div className="d-flex flex-column">
                                            <h5 className="mb-1 createtitle">Create an Utterfit</h5>
                                            <p className="mb-0 createsmall remsize9">
                                                Create Utters that your friends and followers may find fit to support.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <a className="text-white text-decoration-none proceed" onClick={proceedFunc}>
                                            <button className="btn_btn__proceed" id="proceedBtn">
                                                Proceed
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>



                    <AllUtterModals />
                </>

            )}
        </>
    )
}
