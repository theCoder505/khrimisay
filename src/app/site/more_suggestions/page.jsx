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
import "../../../../public/assets/css/Utters.modules.css";
import allFunctions from "../../../../public/test";
import Script from "next/script";

export default function KhrimiPage() {
  useEffect(() => {
    document.title = 'More suggestions of Khrimisay';
  }, []);

  function showSuggestionDetails(e) {
    e.stopPropagation();
    const parentDiv = e.currentTarget;
    $(parentDiv).children(".popup_suggestions_part").toggleClass("d-none");
  }


  return (
    <>


      <MainHeader />
      <MainSideBar />


      <div className="main">

        <div className="mb-4 ml-0 ml-lg-0">

          <div className="row restbars">

            <div className="col-sm-7 col-md-7 col-lg-8 customrightpadding">

              <div id="notificationHolder">

                <h2 className="more_suggestion_text">More Suggestions</h2>
                <div className="dotted_line">
                  <Image src="/assets/images/3man.png" alt="" className="suggestion_img" fill />
                </div>

                <div className="main-div cstmbtm shadow-sm suggestion_line" onClick={(e) => showSuggestionDetails(e)}>
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 postsprofileimg" src="/assets/images/suggested2.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="suggestion_user_details">
                          <div className="">
                            <span className="username-photos montserrat">
                              Helen Keller
                              <div className="date user-date grayColor sfpro">@HelenKeller </div>
                            </span>
                          </div>
                          <div className="details_icon_span">
                            <Image src="/assets/images/user_box.png" alt="" className="user_icon_img" fill />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="user-photo-img">
                      <p className="text-justify sfpro suggestion_text_line">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed id dolor amet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit sed id dolor amet.
                      </p>
                    </div>

                  </div>


                  <div className="popup_suggestions_part d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 popup_profile_img" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos montserrat popup_username">
                              LeBron James
                              <div className="date user-date grayColor sfpro mb-2 popupatrat">@LebronJames </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_text_bordered">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id repellat perspiciatis eum dolores
                      minima, suscipit cumque consequatur laudantium accusantium quisquam adipisci totam maxime ut esse
                      nobis fuga voluptate qui nam omnis.

                      <div className="grid_3_system">
                        <div className="left_grid">
                          <Image src="/assets/images/councelling.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Councelling</span>
                        </div>
                        <div className="middle_grid">
                          <Image src="/assets/images/health.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Health & Fitness</span>
                        </div>
                        <div className="right_grid">
                          <Image src="/assets/images/sports.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Sports</span>
                        </div>
                      </div>

                    </div>

                    <div className="grid_2_system">
                      <div className="center_grid">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="center_grid_imgs" fill />
                      </div>
                      <div className="center_grid">
                        <Image src="/assets/images/binder.png" alt="" className="center_grid_imgs" fill />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-div cstmbtm shadow-sm suggestion_line" onClick={(e) => showSuggestionDetails(e)}>
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 postsprofileimg" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="suggestion_user_details">
                          <div className="">
                            <span className="username-photos montserrat">
                              LeBron James
                              <div className="date user-date grayColor sfpro">@LebronJames </div>
                            </span>
                          </div>
                          <div className="details_icon_span">
                            <Image src="/assets/images/user_box.png" alt="" className="user_icon_img" fill />
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="user-photo-img">
                      <p className="text-justify sfpro suggestion_text_line">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed id dolor amet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit sed id dolor amet.
                      </p>
                    </div>

                  </div>

                  <div className="popup_suggestions_part d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 popup_profile_img" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos montserrat popup_username">
                              LeBron James
                              <div className="date user-date grayColor sfpro mb-2 popupatrat">@LebronJames </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_text_bordered">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit hic inventore, aut quidem natus
                      cum
                      officia recusandae adipisci molestiae magnam. Sapiente illum mollitia dolore libero aperiam!

                      <div className="grid_3_system">
                        <div className="left_grid">
                          <Image src="/assets/images/councelling.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Councelling</span>
                        </div>
                        <div className="middle_grid">
                          <Image src="/assets/images/health.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Health & Fitness</span>
                        </div>
                        <div className="right_grid">
                          <Image src="/assets/images/sports.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Sports</span>
                        </div>
                      </div>

                    </div>

                    <div className="grid_2_system">
                      <div className="center_grid">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="center_grid_imgs" fill />
                      </div>
                      <div className="center_grid">
                        <Image src="/assets/images/user_box.png" alt="" className="center_grid_imgs" fill />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-div cstmbtm shadow-sm suggestion_line" onClick={(e) => showSuggestionDetails(e)}>
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 postsprofileimg" src="/assets/images/suggested3.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="suggestion_user_details">
                          <div className="">
                            <span className="username-photos montserrat">
                              Kobe Bryant
                              <div className="date user-date grayColor sfpro">@KobeBryant </div>
                            </span>
                          </div>
                          <div className="details_icon_span">
                            <Image src="/assets/images/user_box.png" alt="" className="user_icon_img" fill />
                          </div>
                        </div>


                      </div>
                    </div>

                    <div className="user-photo-img">
                      <p className="text-justify sfpro suggestion_text_line">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed id dolor amet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit sed id dolor amet.
                      </p>
                    </div>
                  </div>



                  <div className="popup_suggestions_part d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 popup_profile_img" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos montserrat popup_username">
                              LeBron James
                              <div className="date user-date grayColor sfpro mb-2 popupatrat">@LebronJames </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_text_bordered">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit hic inventore, aut quidem natus
                      cum
                      officia recusandae adipisci molestiae magnam. Sapiente illum mollitia dolore libero aperiam!

                      <div className="grid_3_system">
                        <div className="left_grid">
                          <Image src="/assets/images/councelling.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Councelling</span>
                        </div>
                        <div className="middle_grid">
                          <Image src="/assets/images/health.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Health & Fitness</span>
                        </div>
                        <div className="right_grid">
                          <Image src="/assets/images/sports.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Sports</span>
                        </div>
                      </div>

                    </div>

                    <div className="grid_2_system">
                      <div className="center_grid">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="center_grid_imgs" fill />
                      </div>
                      <div className="center_grid">
                        <Image src="/assets/images/user_box.png" alt="" className="center_grid_imgs" fill />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-div cstmbtm shadow-sm suggestion_line" onClick={(e) => showSuggestionDetails(e)}>
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 postsprofileimg" src="/assets/images/suggested4.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="suggestion_user_details">
                          <div className="">
                            <span className="username-photos montserrat">
                              Steph Curry
                              <div className="date user-date grayColor sfpro">@StephCurry </div>
                            </span>
                          </div>
                          <div className="details_icon_span">
                            <Image src="/assets/images/user_box.png" alt="" className="user_icon_img" fill />
                          </div>
                        </div>


                      </div>
                    </div>

                    <div className="user-photo-img">
                      <p className="text-justify sfpro suggestion_text_line">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed id dolor amet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit sed id dolor amet.
                      </p>
                    </div>
                  </div>

                  <div className="popup_suggestions_part d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 popup_profile_img" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos montserrat popup_username">
                              LeBron James
                              <div className="date user-date grayColor sfpro mb-2 popupatrat">@LebronJames </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_text_bordered">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit hic inventore, aut quidem natus
                      cum
                      officia recusandae adipisci molestiae magnam. Sapiente illum mollitia dolore libero aperiam!

                      <div className="grid_3_system">
                        <div className="left_grid">
                          <Image src="/assets/images/councelling.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Councelling</span>
                        </div>
                        <div className="middle_grid">
                          <Image src="/assets/images/health.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Health & Fitness</span>
                        </div>
                        <div className="right_grid">
                          <Image src="/assets/images/sports.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Sports</span>
                        </div>
                      </div>

                    </div>

                    <div className="grid_2_system">
                      <div className="center_grid">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="center_grid_imgs" fill />
                      </div>
                      <div className="center_grid">
                        <Image src="/assets/images/user_box.png" alt="" className="center_grid_imgs" fill />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-div cstmbtm shadow-sm suggestion_line" onClick={(e) => showSuggestionDetails(e)}>
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 postsprofileimg" src="/assets/images/suggested5.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="suggestion_user_details">
                          <div className="">
                            <span className="username-photos montserrat">
                              Ryan Reynolds
                              <div className="date user-date grayColor sfpro">@RyanReynolds </div>
                            </span>
                          </div>
                          <div className="details_icon_span">
                            <Image src="/assets/images/user_box.png" alt="" className="user_icon_img" fill />
                          </div>
                        </div>


                      </div>
                    </div>

                    <div className="user-photo-img">
                      <p className="text-justify sfpro suggestion_text_line">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed id dolor amet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit sed id dolor amet.
                      </p>
                    </div>
                  </div>

                  <div className="popup_suggestions_part d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 popup_profile_img" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos montserrat popup_username">
                              LeBron James
                              <div className="date user-date grayColor sfpro mb-2 popupatrat">@LebronJames </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_text_bordered">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit hic inventore, aut quidem natus
                      cum
                      officia recusandae adipisci molestiae magnam. Sapiente illum mollitia dolore libero aperiam!

                      <div className="grid_3_system">
                        <div className="left_grid">
                          <Image src="/assets/images/councelling.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Councelling</span>
                        </div>
                        <div className="middle_grid">
                          <Image src="/assets/images/health.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Health & Fitness</span>
                        </div>
                        <div className="right_grid">
                          <Image src="/assets/images/sports.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Sports</span>
                        </div>
                      </div>

                    </div>

                    <div className="grid_2_system">
                      <div className="center_grid">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="center_grid_imgs" fill />
                      </div>
                      <div className="center_grid">
                        <Image src="/assets/images/user_box.png" alt="" className="center_grid_imgs" fill />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-div cstmbtm shadow-sm suggestion_line" onClick={(e) => showSuggestionDetails(e)}>
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 postsprofileimg" src="/assets/images/suggested3.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="suggestion_user_details">
                          <div className="">
                            <span className="username-photos montserrat">
                              Kobe Bryant
                              <div className="date user-date grayColor sfpro">@KobeBryant </div>
                            </span>
                          </div>
                          <div className="details_icon_span">
                            <Image src="/assets/images/user_box.png" alt="" className="user_icon_img" fill />
                          </div>
                        </div>


                      </div>
                    </div>

                    <div className="user-photo-img">
                      <p className="text-justify sfpro suggestion_text_line">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed id dolor amet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit sed id dolor amet.
                      </p>
                    </div>
                  </div>

                  <div className="popup_suggestions_part d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 popup_profile_img" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos montserrat popup_username">
                              LeBron James
                              <div className="date user-date grayColor sfpro mb-2 popupatrat">@LebronJames </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_text_bordered">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit hic inventore, aut quidem natus
                      cum
                      officia recusandae adipisci molestiae magnam. Sapiente illum mollitia dolore libero aperiam!

                      <div className="grid_3_system">
                        <div className="left_grid">
                          <Image src="/assets/images/councelling.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Councelling</span>
                        </div>
                        <div className="middle_grid">
                          <Image src="/assets/images/health.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Health & Fitness</span>
                        </div>
                        <div className="right_grid">
                          <Image src="/assets/images/sports.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Sports</span>
                        </div>
                      </div>

                    </div>

                    <div className="grid_2_system">
                      <div className="center_grid">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="center_grid_imgs" fill />
                      </div>
                      <div className="center_grid">
                        <Image src="/assets/images/user_box.png" alt="" className="center_grid_imgs" fill />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-div cstmbtm shadow-sm suggestion_line" onClick={(e) => showSuggestionDetails(e)}>
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 postsprofileimg" src="/assets/images/suggested2.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="suggestion_user_details">
                          <div className="">
                            <span className="username-photos montserrat">
                              Helen Keller
                              <div className="date user-date grayColor sfpro">@HelenKeller </div>
                            </span>
                          </div>
                          <div className="details_icon_span">
                            <Image src="/assets/images/user_box.png" alt="" className="user_icon_img" fill />
                          </div>
                        </div>


                      </div>
                    </div>

                    <div className="user-photo-img">
                      <p className="text-justify sfpro suggestion_text_line">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed id dolor amet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit sed id dolor amet.
                      </p>
                    </div>
                  </div>

                  <div className="popup_suggestions_part d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 popup_profile_img" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos montserrat popup_username">
                              LeBron James
                              <div className="date user-date grayColor sfpro mb-2 popupatrat">@LebronJames </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_text_bordered">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit hic inventore, aut quidem natus
                      cum
                      officia recusandae adipisci molestiae magnam. Sapiente illum mollitia dolore libero aperiam!

                      <div className="grid_3_system">
                        <div className="left_grid">
                          <Image src="/assets/images/councelling.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Councelling</span>
                        </div>
                        <div className="middle_grid">
                          <Image src="/assets/images/health.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Health & Fitness</span>
                        </div>
                        <div className="right_grid">
                          <Image src="/assets/images/sports.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Sports</span>
                        </div>
                      </div>

                    </div>

                    <div className="grid_2_system">
                      <div className="center_grid">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="center_grid_imgs" fill />
                      </div>
                      <div className="center_grid">
                        <Image src="/assets/images/user_box.png" alt="" className="center_grid_imgs" fill />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-div cstmbtm shadow-sm suggestion_line" onClick={(e) => showSuggestionDetails(e)}>
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 postsprofileimg" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="suggestion_user_details">
                          <div className="">
                            <span className="username-photos montserrat">
                              LeBron James
                              <div className="date user-date grayColor sfpro">@LebronJames </div>
                            </span>
                          </div>
                          <div className="details_icon_span">
                            <Image src="/assets/images/user_box.png" alt="" className="user_icon_img" fill />
                          </div>
                        </div>


                      </div>
                    </div>

                    <div className="user-photo-img">
                      <p className="text-justify sfpro suggestion_text_line">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed id dolor amet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit sed id dolor amet.
                      </p>
                    </div>
                  </div>

                  <div className="popup_suggestions_part d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 popup_profile_img" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos montserrat popup_username">
                              LeBron James
                              <div className="date user-date grayColor sfpro mb-2 popupatrat">@LebronJames </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_text_bordered">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit hic inventore, aut quidem natus
                      cum
                      officia recusandae adipisci molestiae magnam. Sapiente illum mollitia dolore libero aperiam!

                      <div className="grid_3_system">
                        <div className="left_grid">
                          <Image src="/assets/images/councelling.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Councelling</span>
                        </div>
                        <div className="middle_grid">
                          <Image src="/assets/images/health.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Health & Fitness</span>
                        </div>
                        <div className="right_grid">
                          <Image src="/assets/images/sports.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Sports</span>
                        </div>
                      </div>

                    </div>

                    <div className="grid_2_system">
                      <div className="center_grid">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="center_grid_imgs" fill />
                      </div>
                      <div className="center_grid">
                        <Image src="/assets/images/user_box.png" alt="" className="center_grid_imgs" fill />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-div cstmbtm shadow-sm suggestion_line" onClick={(e) => showSuggestionDetails(e)}>
                  <div className="user-photos-section bg-white">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 postsprofileimg" src="/assets/images/suggested4.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="suggestion_user_details">
                          <div className="">
                            <span className="username-photos montserrat">
                              Steph Curry
                              <div className="date user-date grayColor sfpro">@StephCurry </div>
                            </span>
                          </div>
                          <div className="details_icon_span">
                            <Image src="/assets/images/user_box.png" alt="" className="user_icon_img" fill />
                          </div>
                        </div>


                      </div>
                    </div>

                    <div className="user-photo-img">
                      <p className="text-justify sfpro suggestion_text_line">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed id dolor amet Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit sed id dolor amet.
                      </p>
                    </div>
                  </div>

                  <div className="popup_suggestions_part d-none">
                    <div className="d-flex flex-column flex-lg-row user-info">
                      <Image className="rounded-circle mr-2 popup_profile_img" src="/assets/images/8.png" alt="" height="55" width="55" />
                      <div className="d-flex flex-column flex-fill justify-content-start ml-1">

                        <div className="d-flex">
                          <div className="d-flex flex-column">
                            <span className="username-photos montserrat popup_username">
                              LeBron James
                              <div className="date user-date grayColor sfpro mb-2 popupatrat">@LebronJames </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_text_bordered">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit hic inventore, aut quidem natus
                      cum
                      officia recusandae adipisci molestiae magnam. Sapiente illum mollitia dolore libero aperiam!

                      <div className="grid_3_system">
                        <div className="left_grid">
                          <Image src="/assets/images/councelling.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Councelling</span>
                        </div>
                        <div className="middle_grid">
                          <Image src="/assets/images/health.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Health & Fitness</span>
                        </div>
                        <div className="right_grid">
                          <Image src="/assets/images/sports.png" alt="" className="grid_icon" fill />
                          <span className="grid_text">Sports</span>
                        </div>
                      </div>

                    </div>

                    <div className="grid_2_system">
                      <div className="center_grid">
                        <Image src="/assets/images/list_spectacle.png" alt="" className="center_grid_imgs" fill />
                      </div>
                      <div className="center_grid">
                        <Image src="/assets/images/user_box.png" alt="" className="center_grid_imgs" fill />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="col-sm-5 col-md-5 col-lg-4 customleftpadding recommended_right">
              <div className="sidesticky border-radius-k pb-4 utter-section"
                style={{ backgroundColor: '#e2e8e9', marginLeft: '0.30rem' }}>
                <div className="utter-heading text-center pt-3 pb-2 px-4">
                  <h3>Recommended</h3>
                </div>
                <hr className="mb-3 mt-0 border__light" />
                <div className="sfpro">


                  <div className="recommended_line">
                    <a href="#/" title="its clickable"
                      className="align-items-center text-decoration-none justify-content-between rounded-image">
                      <div className="d-flex">
                        <Image className="recommended_img" src="/assets/images/suggested2.png" alt="" fill />
                        <div className="user_details">
                          <div>
                            <h3 className="inner-heading-font">Helen Keller </h3>
                            <div className="date user-date grayColor sfpro">@HelenKeller </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-photo-img">
                        <p className="sfpro recomndText">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                          incididunt ut labore et dolore, ante
                          sodales sagattis suscipit sotedeles.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="recommended_line">
                    <a href="#/" title="its clickable"
                      className="align-items-center text-decoration-none justify-content-between rounded-image">
                      <div className="d-flex">
                        <Image className="recommended_img" src="/assets/images/suggested4.png" alt="" fill />
                        <div className="user_details">
                          <div>
                            <h3 className="inner-heading-font">Steph Curry </h3>
                            <div className="date user-date grayColor sfpro">@StephCurry </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-photo-img">
                        <p className="sfpro recomndText">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                          incididunt ut labore et dolore, ante
                          sodales sagattis suscipit sotedeles.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="recommended_line">
                    <a href="#/" title="its clickable"
                      className="align-items-center text-decoration-none justify-content-between rounded-image">
                      <div className="d-flex">
                        <Image className="recommended_img" src="/assets/images/suggested3.png" alt="" fill />
                        <div className="user_details">
                          <div>
                            <h3 className="inner-heading-font">Kobe Braynt </h3>
                            <div className="date user-date grayColor sfpro">@KobeBryant </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-photo-img">
                        <p className="sfpro recomndText">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                          incididunt ut labore et dolore, ante
                          sodales sagattis suscipit sotedeles.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="recommended_line">
                    <a href="#/" title="its clickable"
                      className="align-items-center text-decoration-none justify-content-between rounded-image">
                      <div className="d-flex">
                        <Image className="recommended_img" src="/assets/images/suggested5.png" alt="" fill />
                        <div className="user_details">
                          <div>
                            <h3 className="inner-heading-font">Ryan Reynolds </h3>
                            <div className="date user-date grayColor sfpro">@RyanReynolds </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-photo-img">
                        <p className="sfpro recomndText">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                          incididunt ut labore et dolore, ante
                          sodales sagattis suscipit sotedeles.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="recommended_line">
                    <a href="#/" title="its clickable"
                      className="align-items-center text-decoration-none justify-content-between rounded-image">
                      <div className="d-flex">
                        <Image className="recommended_img" src="/assets/images/8.png" alt="" fill />
                        <div className="user_details">
                          <div>
                            <h3 className="inner-heading-font">LeBron James </h3>
                            <div className="date user-date grayColor sfpro">@LebronJames </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-photo-img">
                        <p className="sfpro recomndText">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                          incididunt ut labore et dolore, ante
                          sodales sagattis suscipit sotedeles.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="recommended_line">
                    <a href="#/" title="its clickable"
                      className="align-items-center text-decoration-none justify-content-between rounded-image">
                      <div className="d-flex">
                        <Image className="recommended_img" src="/assets/images/suggested2.png" alt="" fill />
                        <div className="user_details">
                          <div>
                            <h3 className="inner-heading-font">Helen Keller </h3>
                            <div className="date user-date grayColor sfpro">@HelenKeller </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-photo-img">
                        <p className="sfpro recomndText">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.
                          incididunt ut labore et dolore, ante
                          sodales sagattis suscipit sotedeles.
                        </p>
                      </div>
                    </a>
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
