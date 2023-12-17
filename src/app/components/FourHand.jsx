import React from 'react'
import Image from 'next/image'

export default function FourHand() {
    return (
        <>
            <div id="fourHands1" className="modal fade post-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-centered-custom modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content border-radius-k">

                        <div className="modal-body user-photos-section border-radius-k bg-white py-3 px-3" style={{border: '3px solid #ddd'}}>

                            <div id="crossItFourHand">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor"
                                        d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                                    </path>
                                </svg>
                            </div>

                            <form action="#">
                                <div className="row user-info">
                                    <div className="pl-4">
                                        <Image className="rounded-circle mr-3" src="/assets/images/8.png" height="55" width="55" alt='image'/>
                                    </div>
                                    <div className="col">
                                        <div className="bg-light p-3 pr-5">

                                            <div className="single__multi__checkboxes d-flex mb-4">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" defaultChecked className="custom-control-input" id="customCheck1"
                                                        onClick="checkCurrent(this)" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">
                                                        Single Responses
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox ml-5">
                                                    <input type="checkbox" className="custom-control-input" id="MultiOption" onClick="checkCurrent(this)" />
                                                    <label className="custom-control-label" htmlFor="MultiOption">
                                                        Multi Option Responses
                                                    </label>
                                                </div>
                                            </div>
                                            <textarea name="" className="form-control d-none w-100 border-0 bg-light" placeholder="Utter"
                                                id="mytextare"></textarea>
                                            <h4 className="show__hands my-3">By Show of Hands,</h4>
                                            <div className="form-group form__group__quests">
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ask Questions.." />
                                            </div>


                                            <div id="allOptions">
                                                <div className="form-group form__group__quests">
                                                    <input type="text" className="form-control" placeholder="Option 1" />
                                                </div>

                                                <div id="multipleOptions" className="d-none">

                                                    <div className="options__className align-items-center options__number__two" style={{display: 'flex'}}
                                                        id="optiontwo">
                                                        <div className="d-flex w-100 form-group form__group__quests">
                                                            <input type="text" className="form-control" placeholder="Option 1" />
                                                        </div>
                                                        <div className="add__more">
                                                            <a onClick="addMore()">
                                                                <Image src="/assets/images/promonew/45.png" alt="image" fill/>
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <div className="input__group__pre  mb-3 position-relative align-items-center justify-content-between">
                                                <span className="font__options">Acknowledge Presence</span>
                                            </div>
                                            <h4 className="show__hands my-3">Duration setting</h4>
                                            <div className="row">
                                                <div className="col-12 col-md-5 mb-3">
                                                    <div className="days d-flex justify-content-between align-items-center">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="expirein" />
                                                            <label className="custom-control-label" htmlFor="expirein">
                                                                Expire In
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="days">Days:</label>
                                                            <input type="text" name="" id="" style={{width: '40px'}} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <div className="days d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <label htmlFor="Hours">Hours:</label>
                                                            <input type="text" name="" id="" style={{width: '40px'}} />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="Minutes">Minutes:</label>
                                                            <input type="text" name="" id="" style={{width: '40px'}} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <Image src="/assets/images/promonew/46.png" alt="date time" fill/>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="expireinResponse" />
                                                        <label className="custom-control-label" htmlFor="expireinResponse">
                                                            Expire when total responses are
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <input type="text" className="form-control border-dark" />
                                                </div>

                                                <div className="col-12 col-md-8">
                                                    <a onClick="exitPoll()" className="text-decoration-none"> <button type="button"
                                                        className="btn px-3 exit__draft__btn  post-btn"> SAVE AS DRAFT </button>
                                                    </a>

                                                    <a href="/index.html" className="text-decoration-none"> <button type="button"
                                                        className="btn px-3 exit__draft__btn post-btn"> EXIT </button>
                                                    </a>
                                                </div>

                                                <div className="col-12 col-md-12">
                                                    <svg width="24" height="24" focusable="false">
                                                        <path
                                                            d="M9 11c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 00-1 1c0 .6.4 1 1 1zm6 0c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 00-1 1c0 .6.4 1 1 1zm-3 5.5c2.1 0 4-1.5 4.4-3.5H7.6c.5 2 2.3 3.5 4.4 3.5zM12 4a8 8 0 100 16 8 8 0 000-16zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
                                                            fill-rule="nonzero"></path>
                                                    </svg>
                                                </div>

                                            </div>



                                        </div>


                                        <div className="text-center">
                                            <a className="text-decoration-none"> <button type="button" className="btn px-5  post-btn">Utter</button>
                                            </a>
                                        </div>


                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
