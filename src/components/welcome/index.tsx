import React from 'react';
import {Link} from "gatsby";
import {SocialMediaConstants} from "../common/SocialMediaConstants";
import ProfilePhoto from "../common/ProfilePhoto";

export default function Welcome() {
    return (
        <div
            className={'flex-fill d-flex row gradient full-size justify-content-center align-content-center'}>
            <div className={'row'}>
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
                            <div className={'default-text white-text header'}>
                                Brandon Saunders.
                            </div>
                            I'm a full-stack developer specialized in frontend and backend development for complex
                            scalable web apps. <br/>
                            <div>Check out my <Link  className={'default-text white-text header-two'} style={{
                                cursor: 'pointer'
                            }} to={'/projects'}>
                                projects
                            </Link> and <Link  className={'default-text white-text header-two'} style={{
                                cursor: 'pointer'
                            }} to={'/resume'}>
                                resume.
                            </Link></div>
                            <Link className={'default-text white-text header-two'}
                                  onClick={() => window.open(SocialMediaConstants.EMAIL)} to={'/'}>
                                <div>Let's work together.</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={'col-md-1'}/>
            </div>

        </div>)
}
