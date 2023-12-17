import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ChooseUtterworthyHeader() {
    return (
        <>

            <nav className="navbar navbar-expand-md py-3 navbar-light mb-3 bg__kchat">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <Link href="/site/utter">
                        <Image src="/assets/images/promonew/man_hazard.png" alt="user" className="left_header_icon" fill />
                    </Link>
                    <Image className="mx-1 mx-md-4 left_header_icon" src="/assets/images/promonew/57.png" alt="user" fill />
                    <Image src="/assets/images/promonew/58.png" alt="user" className="left_header_icon" fill />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ml-auto">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <Image className="ml-1 khrimiIcon right_header_icon" src="/assets/images/k-icon-new.png" alt="k" fill />
                                <span className="vl-hr-two text-white count__k">330</span>
                            </div>
                            <div className="hr__line mx-4"></div>
                            <div className="quest__img">
                                <Image src="/assets/images/promonew/question.png" alt="" className="right_header_icon" fill />
                            </div>
                            <div className="hr__line mx-4"></div>
                            <div className="quest__img mr-3">
                                <Image src="/assets/images/promonew/17.png" alt="" className="right_header_icon" fill />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}
