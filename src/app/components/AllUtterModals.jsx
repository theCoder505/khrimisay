"use client";
import "../../../node_modules/jquery";
import $ from "../../../node_modules/jquery";
import React, { useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script';
import allFunctions from "../../../public/test";

export default function UtterModal() {

  const {
    show_more_content,
    activate_content,
    joinUtter,
    crossUtter,
    crosModal,
    textVal
  } = allFunctions;




  return (
    <>

      <div id="utterModal" className="modal fade post-modall" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
        aria-hidden="true">


        <div className="modal-dialog modal-md modal-centered-custom modal-dialog-centered modal-dialog-scrollable">

          <div className="modal-content border-radius-k utter_modal_content">
            <div className="user-photos-section border-radius-k bg-white py-3 px-3"
              style={{ border: '3px solid #ddd', overflowY: 'auto', overflowX: 'hidden', padding: '10px' }}>

              <div id="crossIt">
                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                  <path fill="currentColor"
                    d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                  </path>
                </svg>
              </div>


              <div className="user-info">


                <div className="row modal-child-1">
                  <div className="">
                    <Image className="rounded-circle mx-2" src="/assets/images/8.png" width="55" alt='image' height="55" />
                  </div>



                  <div className="w-86">
                    <textarea name="" className="form-control w-100 border-0 bg-light" placeholder="Utter" cols="50" rows="8"
                      id="textareaPlugin1"></textarea>

                    <div className="pieChart">
                      <span className="join d-none" onClick={(e) => joinUtter(2)}>Join</span>
                    </div>
                  </div>
                </div>


                <div className="row d-none modal-child-2 mt-4">
                  <div className="col-2">
                    <div className="closeCrossUtter" onClick={(e) => crossUtter(2)}>
                      <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                          d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                        </path>
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 col-10">
                    <textarea name="" className="form-control w-100 border-0 bg-light" placeholder="Utter" cols="50" rows="8"
                      id="textareaPlugin2"></textarea>

                    <div className="pieChart">
                      <span className="join last_join d-none" onClick={(e) => joinUtter(3)}>Join</span>
                    </div>
                  </div>
                </div>


                <div className="row d-none modal-child-3 mt-4">
                  <div className="col-2">
                    <div className="closeCrossUtter" onClick={(e) => crossUtter(3)}>
                      <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                          d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                        </path>
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 col-10">
                    <textarea name="" className="form-control w-100 border-0 bg-light" placeholder="Utter" cols="50" rows="8"
                      id="textareaPlugin3"></textarea>

                    <div className="pieChart">
                      <span className="join d-none">Done</span>
                    </div>
                  </div>
                </div>






                <div className="row utteranswer">
                  <div className="col-2"></div>
                  <div className="col-10">
                    <div className="text-center">
                      <a className="text-decoration-none"> <button type="button" className="btn px-5  post-btn"
                        onClick={textVal()}>Utter</button>
                      </a>
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-11">
                    <center>
                      <div className="utter-post-icons d-flex justify-content-between">
                        <div className="video-icon">
                          <a>
                            <Image src="/assets/images/video.png" alt="video-icon" fill />
                          </a>
                        </div>
                        <div className="video-icon">
                          <a>
                            <Image src="/assets/images/31.png" alt="video-icon" fill />
                          </a>
                        </div>

                        <div className="video-icon">
                          <a>
                            <Image src="/assets/images/gif.png" alt="video-icon" fill />
                          </a>
                        </div>
                        {/* 
                        <div className="video-icon">
                          <a onClick="fourhandsNextAppear()" title="By show of hands">
                            <Image src="/assets/images/hand.png" alt="video-icon" fill />
                          </a>
                        </div> */}

                        <div className="video-icon video-icon-last">
                          <a>
                            <Image src="/assets/images/downarrow.png" onClick={(e) => show_more_content(e.target)} alt="video-icon" fill />
                          </a>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>


              </div>



            </div>

            <div className="more_content opacity_none">
              <div className="content_line active_content" data-content="" onClick={activate_content}>More Context</div>
              <div className="content_line" data-content="utterTitleModal" onClick={activate_content}>Title</div>
              <div className="content_line" data-content="warningModal" onClick={activate_content}>Warning</div>
              {/* <div className="content_line" data-content="" onClick={activate_content}>Theme</div>
              <div className="content_line" data-content="" onClick={activate_content}>
                Location
                <span className="info_circle">
                  <i className="fa fa-info" aria-hidden="true"></i>
                </span>
              </div> */}
            </div>

          </div>

        </div>


      </div>




      <div id="warningModal" className="modal fade post-modall" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
        aria-hidden="true">


        <div className="modal-dialog modal-md modal-centered-custom modal-dialog-centered modal-dialog-scrollable">

          <div className="modal-content border-radius-k utter_modal_content">
            <div className="user-photos-section border-radius-k bg-white py-3 px-3"
              style={{ border: "3px solid #ddd", overflowY: "auto", overflowX: "hidden", padding: "10px" }}>

              <div id="crossWarning" onClick={crosModal}>
                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                  <path fill="currentColor"
                    d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                  </path>
                </svg>
              </div>


              <div className="user-info">


                <div className="row modal-child-1">
                  <div className="">
                    <Image className="rounded-circle mx-2" src="/assets/images/8.png" alt='' height="55" width="55" />
                  </div>



                  <div className="w-86">
                    <div className="utter_box">
                      <div className="warning_lines">
                        <div className="level_base_line">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="low_level" defaultValue="option1"
                              defaultChecked />
                            <label className="form-check-label checkbox_level" htmlFor="low_level">
                              Low level warning <Image src="/assets/images/i_icon.png" alt="" className="info_icon" fill />
                            </label>
                          </div>
                        </div>
                        <div className="level_base_line">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="high_level"
                              defaultValue="option1" defaultChecked />
                            <label className="form-check-label checkbox_level" htmlFor="high_level">
                              High level warning/Triggers <Image src="/assets/images/i_icon.png" alt="" className="info_icon" fill />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="utter_short_row">
                        <textarea className="utter_short_title" rows="2"
                          placeholder="Write other things you might readers to know here (prefereably a non graphic summary)"></textarea>
                        <div className="total_shorts">50</div>
                      </div>

                      <div className="utter_warning_details">
                        <textarea name="" className="form-control w-100 border-0 bg-light" placeholder="Utter" cols="50"
                          rows="8" id="textareaPlugin1"></textarea>
                      </div>
                    </div>
                  </div>
                </div>







                <div className="row utteranswer">
                  <div className="col-2"></div>
                  <div className="col-10">
                    <div className="text-center">
                      <a className="text-decoration-none"> <button type="button" className="btn px-5  post-btn"
                        onClick={textVal()}>Utter</button>
                      </a>
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-11">
                    <center>
                      <div className="utter-post-icons d-flex justify-content-between">
                        <div className="video-icon">
                          <a>
                            <Image src="/assets/images/video.png" alt="video-icon" fill />
                          </a>
                        </div>
                        <div className="video-icon">
                          <a>
                            <Image src="/assets/images/31.png" alt="video-icon" fill />
                          </a>
                        </div>

                        <div className="video-icon">
                          <a>
                            <Image src="/assets/images/gif.png" alt="video-icon" fill />
                          </a>
                        </div>

                        {/* <div className="video-icon">
                          <a onClick={(e) => fourhandsNextAppear(e.target)} title="By show of hands">
                            <Image src="/assets/images/hand.png" alt="video-icon" fill />
                          </a>
                        </div> */}

                        <div className="video-icon video-icon-last">
                          <a>
                            <Image src="/assets/images/downactivearrow.png" alt="video-icon" className="utter_share_icon"
                              onClick={(e) => show_more_content(e.target)} fill />
                          </a>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>


              </div>



            </div>


            <div className="more_content opacity_none">
              <div className="content_line active_content" data-content="" onClick={activate_content}>More Context</div>
              <div className="content_line" data-content="utterTitleModal" onClick={activate_content}>Title</div>
              <div className="content_line" data-content="warningModal" onClick={activate_content}>Warning</div>
              {/* <div className="content_line" data-content="" onClick={activate_content}>Theme</div>
                            <div className="content_line" data-content="" onClick={activate_content}>Location
                                <span className="info_circle">
                                    <i className="fa fa-info" aria-hidden="true"></i>
                                </span>
                            </div> */}
            </div>
          </div>
        </div>


      </div>




      <div id="utterTitleModal" className="modal fade post-modall" tabIndex="-1" role="dialog"
        aria-labelledby="mySmallModalLabel" aria-hidden="true">


        <div className="modal-dialog modal-md modal-centered-custom modal-dialog-centered modal-dialog-scrollable">

          <div className="modal-content border-radius-k utter_modal_content">
            <div className="user-photos-section border-radius-k bg-white py-3 px-3"
              style={{ border: "3px solid #ddd", overflowY: "auto", overflowX: "hidden", padding: "10px" }}>

              <div id="crossTitle" onClick={crosModal}>
                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                  <path fill="currentColor"
                    d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                  </path>
                </svg>
              </div>


              <div className="user-info">


                <div className="row modal-child-1">
                  <div className="">
                    <Image className="rounded-circle mx-2" src="/assets/images/8.png" alt='' height="55" width="55" />
                  </div>



                  <div className="w-86">
                    <div className="utter_box">
                      <input type="text" className="utter_title_box" placeholder="Title your utter" />
                      <div className="utter_float">
                        <div className="utter_emojis">🙄😂🤔🙂</div>
                        <div className="utter_total">50</div>
                      </div>
                      <textarea className="utter_textarea" rows="5" placeholder="Utter"></textarea>
                    </div>
                  </div>
                </div>







                <div className="row utteranswer">
                  <div className="col-2"></div>
                  <div className="col-10">
                    <div className="text-center">
                      <a className="text-decoration-none"> <button type="button" className="btn px-5  post-btn"
                        onClick={(e) => textVal()}>Utter</button>
                      </a>
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-11">
                    <center>
                      <div className="utter-post-icons d-flex justify-content-between">
                        <div className="video-icon">
                          <a>
                            <Image src="/assets/images/video.png" alt="video-icon" fill />
                          </a>
                        </div>
                        <div className="video-icon">
                          <a>
                            <Image src="/assets/images/31.png" alt="video-icon" fill />
                          </a>
                        </div>

                        <div className="video-icon">
                          <a>
                            <Image src="/assets/images/gif.png" alt="video-icon" fill />
                          </a>
                        </div>

                        {/* <div className="video-icon">
                          <a onClick={(e) => fourhandsNextAppear(e.target)} title="By show of hands">
                            <Image src="/assets/images/hand.png" alt="video-icon" fill />
                          </a>
                        </div> */}



                        <div className="video-icon video-icon-last">
                          <a>
                            <Image src="/assets/images/downactivearrow.png" alt="video-icon" className="utter_share_icon"
                              onClick={(e) => show_more_content(e.target)} fill />
                          </a>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>


              </div>



            </div>

            <div className="more_content opacity_none">
              <div className="content_line active_content" data-content="" onClick={activate_content}>More Context</div>
              <div className="content_line" data-content="utterTitleModal" onClick={activate_content}>Title</div>
              <div className="content_line" data-content="warningModal" onClick={activate_content}>Warning</div>
              {/* <div className="content_line" data-content="" onClick={activate_content}>Theme</div>
                            <div className="content_line" data-content="" onClick={activate_content}>Location
                                <span className="info_circle">
                                    <i className="fa fa-info" aria-hidden="true"></i>
                                </span>
                            </div> */}
            </div>
          </div>
        </div>


      </div>



    </>
  )
}
