import React from 'react';
import {Link} from "gatsby";
import {SocialMediaConstants} from "../common/SocialMediaConstants";
import ProfilePhoto from "../common/ProfilePhoto";

export default function Welcome() {
    return (
        <div
            className={'flex-fill d-flex row base-background full-size justify-content-center align-content-center'}>
            <div className={'row py-5 my-5'}>
                <div className={'col-md-2'}/>
                <div className="col-xs-12 col-md-2 p-md-2 p-xs-0
                                align-self-center
                                justify-self-center">
                    <div className={'row justify-content-md-start justify-content-center'}>
                        <ProfilePhoto customStyles={'welcome-profile-image'}/>
                    </div>
                </div>
                <div
                    className="col-xs-12 col-md-7 p-0 p-md-1 p-sm-0 m-auto ml-md-0 mb-auto mt-auto
                                text-md-left text-sm-center text-center align-self-center">
                    <div className="col align-content-between">
                        <div className={'default-text white-text header-two p-2 m-2'}>
                            Hello. My name is<br/>
                            <div className={'default-text white-text large-header bold-text'}>
                                Brandon Saunders.
                            </div>
                            I'm a full-stack developer specialized in frontend and backend development for complex
                            scalable web apps. <br/>
                            <div>Check out my <Link className={'default-text white-text header-two alt-hyperlink'}
                                                    style={{
                                                        cursor: 'pointer'
                                                    }} to={'/projects'}>
                                projects
                            </Link> and <Link className={'default-text white-text header-two alt-hyperlink'} style={{
                                cursor: 'pointer'
                            }} to={'/resume'}>
                                resume.
                            </Link></div>
                            <Link className={'default-text white-text header-two alt-hyperlink'}
                                  onClick={() => window.open(SocialMediaConstants.EMAIL)} to={'/'}>
                                <div>Let's work together.</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex-fill shade-darker-white-background d-flex p-5 row white-background'}>
                <div className={'secondary-inner-wrapper text-center m-auto'}>
                    <h2>Skills Overview</h2>
                        I have more than 5 years' experience building rich web applications for several clients and
                        businesses.
                        Below is a quick overview of my main technical skill sets and tools I use. Want to find out more
                        about
                        my experience? <Link className={'default-text white-background-hyperlink'} style={{
                        cursor: 'pointer'
                    }} to={'/resume'}>Check out my online resume</Link>
                </div>
            </div>
            <div className={'col-md-1'}/>
        </div>)
}
