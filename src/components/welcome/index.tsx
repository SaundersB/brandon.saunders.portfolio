import React from 'react';
import {Link} from "gatsby";
import {SocialMediaConstants} from "../common/SocialMediaConstants";
import ProfilePhoto from "../common/ProfilePhoto";
import CardComponent from "../common/CardComponent";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Welcome() {
    const baseColor = '';
    return (
        <div
            className={'container flex-fill d-flex row base-background full-size justify-content-center align-content-center'}>
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
                                                    }} to={'/projects/'}>
                                projects
                            </Link> and <Link className={'default-text white-text header-two alt-hyperlink'} style={{
                                cursor: 'pointer'
                            }} to={'/resume/'}>
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
            <div className={'flex-column flex-fill shade-darker-white-background d-flex p-5 row'}>
                <div className={'secondary-inner-wrapper text-center m-auto default-text'}>
                    <h2>Skills Overview</h2>
                        I have more than 5 years' experience building rich web applications for several clients and
                        businesses.
                        Below is a quick overview of my main technical skill sets and tools I use. Want to find out more
                        about
                        my experience? <Link className={'default-text white-background-hyperlink'} style={{
                        cursor: 'pointer'
                    }} to={'/resume/'}>Check out my online resume</Link>
                </div>
                <div className={'row p-5'}>
                    <div className={'col-md-4'}>
                        <CardComponent children={
                            <div className={'my-3'}>
                                <h3 className={'text-center default-text'}>Front end</h3>
                                <ul className={'center-unordered-list no-bullets pl-2'}>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />React/Redux</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />JavaScript</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />Vue</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />Node.js</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />HTML/CSS/SCSS</li>
                                </ul>
                            </div>
                        }/>
                    </div>
                    <div className={'col-md-4'}>
                        <CardComponent children={
                            <div className={'my-3'}>
                                <h3 className={'text-center default-text'}>Back end</h3>
                                <ul className={'center-unordered-list no-bullets pl-2'}>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />PHP</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />Python</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />Node.js</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />Java</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />MySQL</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />MongoDB</li>
                                </ul>
                            </div>
                        }/>
                    </div>
                    <div className={'col-md-4'}>
                        <CardComponent children={
                            <div className={'my-3'}>
                                <h3 className={'text-center default-text'}>Others</h3>
                                <ul className={'center-unordered-list no-bullets pl-2'}>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />DevOps</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />AWS Certified</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />Automated Testing</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />Product Development</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />Agile</li>
                                    <li className={'default-text'}><FontAwesomeIcon icon={faCheckCircle} color={baseColor} className={'mr-2'} />Scrum Certified</li>
                                </ul>
                            </div>
                        }/>
                    </div>
                </div>
            </div>
            <div className={'col-md-1'}/>
        </div>)
}
