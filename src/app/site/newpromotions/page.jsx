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
import "../../../../public/assets/css/NewPromotions.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";

export default function KhrimiPage() {
  useEffect(() => {
    document.title = 'New Promotions On Khrimisay';
  }, []);


  const activatePictureTab = (e) => {
    e.stopPropagation();
    const parentDiv = e.currentTarget;
    $(parentDiv).parent().children(".comp_logo_input").click();
    $(parentDiv).parent().children(".uploaded_img").removeClass('d-none');
    $(parentDiv).parent().children(".drag_down").addClass('d-none');
  }



  useEffect(() => {
    var selectAllItems = ".selectAll";
    var radioItem = ":radio";

    $(selectAllItems).click(function () {

      if (this.defaultChecked) {
        $(radioItem).each(function () {
          this.defaultChecked = true;
        });
      } else {
        $(radioItem).each(function () {
          this.defaultChecked = false;
        });
      }
    });

    $(document).ready(function () {
      $("input[name$='customRadioInlineedit']").click(function () {
        var test = $(this).val();

        $("div.desc").hide();
        $(".customRadioInlineedit" + test).show();
      });
    });
  }, [])


  return (
    <>
      <ChooseUtterworthyHeader />

      <div id="customSpacer"></div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3" id="FixedMenu">
            <ul className="nav nav-pills promotions__sidenav flex-column" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="udetails-tab" data-id="#details">
                  Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollLinks" id="placement-tab" data-id="#placement_bar"> Placement</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollLinks" id="targeting-tab" data-id="#targeting">
                  Targeting</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollLinks" id="cr-format-tab" data-id="#cr-format">
                  Format</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollLinks" id="cr-preview-tab" data-id="#cr-preview">
                  Preview</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3"></div>

          <div className="col-12 col-md-9">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane show active fade" id="placement" role="tabpanel" aria-labelledby="placement">
                <form className="mb-5">
                  <div className="book_change_buttons">
                    <div className="book_btn">BOOK</div>
                    <div className="chng_category_btn">CHANGE CATEGORY</div>
                  </div>
                  <h4 className="font-weight-bold pb-2">Create Utterreach</h4>
                  <div className="bg-white create__utter">
                    <div id="details" className="scrollsec">
                      <h5>Utterreach</h5>
                      <input type="text" placeholder="Utterreach title" className="form-control ut__title__inp" name="" id="" />
                      <div className="start__choose__div py-3">
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <h5 className="utter_level text-left">Start</h5>
                            <div className="d-flex align-items-center">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div htmlFor="" className="mb-0 input__label">
                                  <input type="radio" id="launched" name="start" />
                                  <label className="lable__heading" htmlFor="launched">Immediately as
                                    Launched</label>
                                </div>
                              </div>
                              <div className="check ml-5 d-flex align-items-baseline">
                                <div htmlFor="" className="mb-0 input__label">
                                  <input type="radio" id="shedule" name="start" />
                                  <label className="lable__heading" htmlFor="shedule">Schedule</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <h5 className="utter_level">Choose Utterreach Duration</h5>
                            <div className="d-flex justify-content-end">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div htmlFor="" className="mb-0 input__label">
                                  <input type="radio" name="duration" id="24_hours" />
                                  <label className="lable__heading" htmlFor="24_hours">24
                                    Hours</label>
                                </div>
                              </div>
                              <div className="check ml-5 d-flex align-items-baseline">
                                <div htmlFor="" className="mb-0 input__label">
                                  <input type="radio" name="duration" id="3_days" />
                                  <label className="lable__heading" htmlFor="3_days">3 Days</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="mt-3">Coin allocation</h5>
                      <div className="d-flex align-items-center position-relative">
                        <input type="text" placeholder="Utterreach title"
                          className="form-control position-relative pl-5 ut__title__inp" name="" id="allocation" />
                        <Image className="ut__title__icon" src="/assets/images/promonew/59.png" alt="utter" fill />
                      </div>
                    </div>

                    <div className="row py-3 scrollsec" id="placement_bar">
                      <div className="col-12 col-md-12">
                        <h5 className="utter_level text-left">Who should see the request to support your
                          Utterreach</h5>
                        <div className="d-flex flex-wrap align-items-center">
                          <div className="check ml-1 d-flex align-items-baseline">
                            <div className="mb-0 input__label">
                              <input type="radio" id="friends" name="show_request_to" />
                            </div>
                            <label className="lable__heading" htmlFor="friends">Squarees only</label>
                          </div>
                          <div className="check ml-2 ml-md-5 d-flex align-items-baseline">
                            <div className="mb-0 input__label">
                              <input type="radio" id="followers" name="show_request_to" />
                            </div>
                            <label className="lable__heading" htmlFor="followers">Audience Only</label>
                          </div>
                          <div className="check ml-2 ml-md-5 d-flex align-items-baseline">
                            <div className="mb-0 input__label">
                              <input type="radio" id="friends_n_followers" name="show_request_to" />
                            </div>
                            <label className="lable__heading" htmlFor="friends_n_followers">Squarees and Audience</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div>
                    <h4 className="utterfir_short_titles font-weight-bold pb-2">Targeting Options</h4>
                    <div className="bg-white targ__op">
                      <div className="row">
                        <div className="col-12 scrollsec" id="targeting">
                          <div className="row">
                            <div className="col-12">
                              <h5 className="font-weight-bold">Who are those you think will be
                                interested in your Utterreach</h5>
                              <h5 className="mt-3 mb-2">Gender</h5>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="any" name="customRadioInline" />
                                </div>
                                <label className="lable__heading" htmlFor="any">Any</label>
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="female" name="customRadioInline" />
                                </div>
                                <label className="lable__heading" htmlFor="female">Female</label>
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="male" name="customRadioInline" />
                                </div>
                                <label className="lable__heading" htmlFor="male">Male</label>
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="Other" name="customRadioInline" />
                                </div>
                                <label className="lable__heading" htmlFor="Other">Other</label>
                              </div>
                            </div>
                            <div className="col-12 pt-3">
                              <h5>Age</h5>
                            </div>
                            <div className="col-6 col-md-3">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="Young" name="customRadioInline" />
                                </div>
                                <label className="lable__heading" htmlFor="Young">Young Adult</label>
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="adult" name="customRadioInline" />
                                </div>
                                <label className="lable__heading" htmlFor="adult">Adult</label>
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="middleage" name="customRadioInline" />
                                </div>
                                <label className="lable__heading" htmlFor="middleage">Middle Age</label>
                              </div>
                            </div>
                            <div className="col-6 col-md-3">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="gmiddleage" name="customRadioInline" />
                                </div>
                                <label className="lable__heading" htmlFor="gmiddleage"> &gt; Middle Age</label>
                              </div>
                            </div>

                            <div className="col-12 pt-3 pb-0">
                              <h5>Location where you prefer people to see your Utterreach</h5>
                            </div>
                            <div className="col-12">
                              <div className="d-flex align-items-center">
                                <div className="position-relative d-flex w-100">
                                  <input type="text" placeholder="Search" className="form-control position-rela ut__title__inp"
                                    name="" id="" />
                                  <Image className="search__icon ut__title__icon" src="/assets/images/promonew/18.png" alt="" fill />
                                </div>
                                <div className="file__cross d-flex">
                                  <Image className="right_file" src="/assets/images/file.png" alt="" fill />
                                  <Image className="right_file" src="/assets/images/cross.png" alt="" fill />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="col-12 pt-3 scrollsec" id="cr-format">
                          <h5>Utterreach Format</h5>
                          <div className="row">
                            <div className="col-6 col-md-3">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="cus-text" value="2" defaultChecked name="customRadioInlineedit" />
                                </div>
                                <label className="lable__heading" htmlFor="cus-text">Custom Text</label>
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="picture" value="3" name="customRadioInlineedit" />
                                </div>
                                <label className="lable__heading" htmlFor="picture">Picture</label>
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="check ml-1 d-flex align-items-baseline">
                                <div className="mb-0 input__label">
                                  <input type="radio" id="videor" value="4" name="customRadioInlineedit" />
                                </div>
                                <label className="lable__heading" htmlFor="videor">Video</label>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>





                  <h4 className="utterfir_short_titles font-weight-bold pb-2">Creative</h4>
                  <div className="bg-white creative__section desc customRadioInlineedit2">
                    <div className="d-flex bold__text__radios">
                      <h5>Custom Text</h5>
                      <div className="ml-auto bold__text__radios">
                        <h5>Check template Library</h5>
                      </div>
                    </div>
                    <div className="txt-area">
                      <textarea name="" onKeyUp={(e)=>counter__textarea_custom(e.target)} id="counter__textarea" className="form-control ut__title__inp count__textarea"
                        placeholder="Write here" rows="8"></textarea>
                    </div>
                    <div className="text-right"><span className="details">0</span></div>

                    <div className="intro">
                      <div className="d-flex bold__text__radios">
                        <h5>Intro Message</h5>
                      </div>
                      <div className="txt-area">
                        <textarea name="" onKeyUp={(e)=>counter__textarea_intro(e.target)}
                          className="form-control ut__title__inp count__textarea" rows="4"></textarea>
                      </div>
                      <div className="text-right"><span className="details_intro">0</span></div>
                    </div>
                  </div>




                  <div className="bg-white creative__section Picture__Section px-3 py-3 customRadioInlineedit3 desc"
                    style={{ display: "none" }}>
                    <div className="d-flex bold__text__radios">
                      <p>Picture</p>
                    </div>

                    <div className="video__upload text-center d-flex align-items-center justify-content-center w-100">
                      <div className="w-100">
                        <Image src="" alt="Image" className="uploaded_img d-none" id="logo_pic"
                          onClick={activatePictureTab} fill />
                        <input type="file" className="comp_logo_input d-none" name="user_comp_logo" accept="image/*"
                          onInput={(e) => logo_pic.src = window.URL.createObjectURL(e.target.files[0])} />
                        <div className="drag_down" onClick={activatePictureTab}>
                          <Image src="/assets/images/promonew/65.png" className="drag_old_pic" alt="picture" fill />
                          <p className="mb-0 upload__ptext">Upload Picture<br /> or Drag and Drop</p>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="bg-white creative__section Picture__Section px-3 py-3 customRadioInlineedit4 desc"
                    style={{ display: "none" }}>
                    <div className="d-flex bold__text__radios">
                      <p>Video</p>
                    </div>
                    <div className="video__upload text-center d-flex align-items-center justify-content-center w-100">

                      <div className="w-100">
                        <Image src="" alt="Image" className="uploaded_img d-none" id="video_img"
                          onClick={activatePictureTab} fill />
                        <input type="file" className="comp_logo_input d-none" name="user_comp_logo" accept="image/*"
                          onInput={(e) => video_img.src = window.URL.createObjectURL(e.target.files[0])} />
                        <div className="drag_down" onClick={activatePictureTab}>
                          <Image src="/assets/images/promonew/63.png" className="drag_old_pic" alt="video" fill />
                          <p className="mb-0 upload__ptext">Upload Video<br /> or Drag and Drop</p>
                        </div>
                      </div>
                    </div>

                  </div>




                  <div className="utter_preview_sec">
                    <h4 className="utterfir_short_titles font-weight-bold pb-2">Utterreach Preview</h4>
                    <div className="bg-white creative__section Picture__Section px-3 py-3 customRadioInlineedit4 desc">
                      <div id="cr-preview" className="scrollsec">

                        <div className="preview_holder desc customRadioInlineedit2">
                          <div className="preview_grid">
                            <div className="left_grid_part">
                              <div>
                                <div className="grid_title">Book</div>
                                <div className="executor">The executor</div>
                                <div className="grid_amount">
                                  <Image src="/assets/images/blue_k_icon.png" alt="" className="khrimi_icon" fill /> <span>300</span>
                                </div>
                              </div>
                            </div>

                            <div className="right_grid_part">
                              <Image src="/assets/images/utterworthy/4.png" alt="" className="right_part_img" fill />
                            </div>
                          </div>
                        </div>



                        <div className="preview_holder desc customRadioInlineedit3" style={{ display: "none" }}>
                          <div className="preview_grid">
                            <div className="left_grid_part">
                              <div>
                                <div className="grid_title">Picture</div>
                                <div className="executor">Chilling at the Bar</div>
                                <div className="grid_amount">
                                  <Image src="/assets/images/blue_k_icon.png" alt="" className="khrimi_icon" fill /> <span>300</span>
                                </div>
                              </div>
                            </div>

                            <div className="right_grid_part">
                              <Image src="/assets/images/utterworthy/3.png" alt="" className="right_part_img" fill />
                            </div>
                          </div>
                        </div>





                        <div className="preview_holder desc customRadioInlineedit4" style={{ display: "none" }}>
                          <div className="preview_grid">
                            <div className="left_grid_part">
                              <div>
                                <div className="grid_title">Movie</div>
                                <div className="executor">A night in Tehranr</div>
                                <div className="grid_amount">
                                  <Image src="/assets/images/blue_k_icon.png" alt="" className="khrimi_icon" fill /> <span>300</span>
                                </div>
                              </div>
                            </div>

                            <div className="right_grid_part">
                              <Image src="/assets/images/utterworthy/5.png" alt="" className="right_part_img" fill />
                            </div>
                          </div>
                        </div>




                      </div>



                      <div className="allButtons">
                        <div className="text-left display-inline">
                          <Link href="/site/chooseUtterfit">
                            <button className="btn btn__save mr-3" type="button">Back to Category</button>
                          </Link>
                        </div>
                        <div className="text-right display-inline" style={{ marginTop: "-40px" }}>
                          <a className=" mr-2" href="#/">
                            <button className="btn btn__save mr-3" type="button">save as draft</button>
                          </a>
                          <Link className="" href="/site/launchedpromotions">
                            <button className="btn btn__save" type="button">Launch</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </form>
              </div>



            </div>










          </div>
        </div>


      </div >





      <Script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></Script>
      <Script src="//code.jquery.com/jquery-1.11.3.min.js"></Script>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="eJI7QwhOS+hwpX2zkaeJQjeiwlhOP+SdQDqhgvvo1DsjtiSQByFdThsxO669S2D-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></Script>
      <Script src="/assets/js/newpromotions.js"></Script>
    </>
  )
}
