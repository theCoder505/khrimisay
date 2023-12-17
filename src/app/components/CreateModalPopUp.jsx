import React from 'react'
import Image from 'next/image'

export default function CreateModalPopUp() {

  // $("#crossCreate").click(function () {
  //   $("#popUPCreateModal").modal("hide");
  // });

  return (
    <>
      <div className="modal fade" id="popUPCreateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal__content">
            <div className="modal__body p-3">

              <div id="crossCreate">
                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                  <path fill="currentColor"
                    d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z">
                  </path>
                </svg>
              </div>

              <h5 className="montserrat font-weight-bold">Create and Share</h5>
              <h6 className="createsmall mb-3 sfpro">
                You can create and manage thoughts to share with users around your world.
              </h6>
              <input type="hidden" id="utterResponse" value="utterance" />
              <div className="createdivs mb-2 d-flex align-items-start p-3 popups SendToUtterOrWorthy"
                data-id="utterance">
                <Image className="img-fluid mt-1 mr-2" src="/assets/images/utterance.png" alt="" fill />
                <div className="d-flex flex-column">
                  <h5 className="mb-1 createtitle">Create an Utter</h5>
                  <p className="mb-0 createsmall remsize9">
                    Create and share thoughts that your friends and followers can respond to.
                  </p>
                </div>
              </div>
              <div className="createdivs mb-2 d-flex align-items-start p-3 popups SendToUtterOrWorthy"
                data-id="utterworthy">
                <Image className="img-fluid mt-1 mr-2" src="/assets/images/settings.png" alt="" fill />
                <div className="d-flex flex-column">
                  <h5 className="mb-1 createtitle">Create an Utterfit</h5>
                  <p className="mb-0 createsmall remsize9">
                    Create Utters that your friends and followers may find fit to support.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <a className="text-white text-decoration-none proceed">
                  <button className="btn_btn__proceed" id="proceedBtn">proceed</button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
