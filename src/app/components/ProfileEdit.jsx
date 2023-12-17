"use client"
import "jquery";
import $ from "jquery";
import React from 'react'
import Image from "next/image"
import allFunctions from '../../../public/test';
import { useState, useEffect, useRef } from "react";

export default function ProfileEdit() {
    const {
        crossProfileEdit,
        addHomeUrl,
        addAffiliateLinks,
        completeEdit,
        crossProfileDiscard,
        eidt_profile_func,
    } = allFunctions;

    return (
        <>
            <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content modal__content">
                        <div className="header_popup_part">
                            <h5 className="montserrat font-weight-bold header_tag">Edit Profile</h5>

                            <div id="crossProfileEdit" onClick={(e) => crossProfileEdit(e.target)}>
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor"
                                        d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        <div className="modal__body">

                            <div className="edit_profile_part">
                                <div className="popup_input_holder">
                                    <div className="popup_label">Username
                                        <span className="icon_round">
                                            <i className="fa fa-info" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="popup_input" />
                                </div>

                                <div className="popup_input_holder">
                                    <div className="popup_label">Display name </div>
                                    <input type="text" className="popup_input" />
                                </div>


                                <div className="core_grid">
                                    <div className="popup_label">Core interests (3)
                                        <span className="icon_round">
                                            <i className="fa fa-info" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="search_bar">
                                        <input type="text" className="input_search_bar" placeholder="Search" />
                                        <div className="search_icon"><i className="fa fa-search" aria-hidden="true"></i></div>
                                    </div>
                                </div>

                                <div className="core_imgs_grid">
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/music.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/business.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/fashion.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/sport.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/travel.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/tech.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/politics.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/movie.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/sport.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/travel.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/tech.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/business.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/fashion.png" alt="" fill />
                                    </div>
                                    <div className="core_img_holder">
                                        <Image src="/assets/images/sport.png" alt="" fill />
                                    </div>
                                </div>

                                <div className="progress_bar">
                                    <div className="percent_progress"></div>
                                </div>


                                <div className="popup_input_holder">
                                    <div className="number_text_grid">
                                        <div className="popup_label">Intro
                                            <span className="icon_round">
                                                <i className="fa fa-info" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div className="tot_number">50</div>
                                    </div>
                                    <textarea name="" id="" rows="4" className="popup_textarea"></textarea>
                                </div>

                                <div className="popup_input_holder">
                                    <div className="number_text_grid_full">
                                        <div className="popup_label">Bio</div>
                                        <div className="tot_number">50</div>
                                    </div>

                                    <textarea name="" id="" rows="4" className="popup_textarea_full"></textarea>
                                </div>

                                <div className="popup_input_holder">
                                    <div className="home_aggrigator">
                                        <div className="popup_label">Home URL</div>
                                        <div className="home_url_menufacturer">
                                            <div className="icon_holder" onClick={(e) => addHomeUrl(e.target)}><i className="fa fa-plus" aria-hidden="true"></i>
                                            </div>
                                            <div className="text_of_menufacturer">
                                                Home URL
                                            </div>
                                        </div>
                                    </div>

                                    <div className="home_input_holder home_url_part d-none">
                                        <div className="number_text_grid">
                                            <div className="popup_label">Home URL</div>
                                            <div className="tot_number">50</div>
                                        </div>
                                        <input type="text" className="popup_input" />
                                    </div>
                                </div>




                                <div className="popup_input_holder">
                                    <div className="home_aggrigator">
                                        <div className="popup_label">Affiliation Links</div>

                                        <div className="all_affiliate_links"></div>

                                        <div className="home_url_menufacturer">
                                            <div className="icon_holder" onClick={(e) => addAffiliateLinks(e.target)}><i className="fa fa-plus"
                                                aria-hidden="true"></i></div>
                                            <div className="text_of_menufacturer">
                                                Add Affiliation Links
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="popup_input_holder">
                                    <div className="popup_label">Location
                                        <span className="icon_round">
                                            <i className="fa fa-info" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="popup_input" />
                                </div>


                                <div className="preview_save_btns">
                                    <div className="preview_btn">Preview</div>
                                    <div className="save_btn" onClick={(e) => completeEdit()}>Save</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div className="modal fade" id="editProfileDiscardModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal__content">
                        <div className="header_popup_part">
                            <h5 className="montserrat font-weight-bold header_tag">Discard Changes</h5>

                            <div id="crossProfileDiscard" onClick={(e) => crossProfileDiscard()}>
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor"
                                        d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        <div className="modal__body">
                            <div className="discard_title">Discard the changes you made? </div>

                            <div className="discard_buttons_holder">
                                <div className="discard" onClick={(e) => crossProfileDiscard()}>Yes, Discard </div>
                                <div className="continue_edit" onClick={(e) => eidt_profile_func()}>No, continue </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
