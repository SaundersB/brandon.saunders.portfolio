import React from 'react';
import {graphql, Link, StaticQuery} from "gatsby";
import {SocialMediaConstants} from "../common/SocialMediaConstants";
import Img from "gatsby-image/withIEPolyfill"

export const query = graphql`
    query {
        fileName: file(relativePath: {eq: "profile_photo.png"}) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default function Welcome() {
    return (
        <div
            className={'d-flex row gradient container'}>
                <div className="d-flex col-xs-12 col-md-5 justify-content-md-end justify-content-center align-items-md-center align-items-end p-md-2 p-xs-0">
                    <div className="d-flex justify-content-end p-0">
                        <StaticQuery
                            key={'static-query'}
                            query={query}
                            render={(data) => (
                                <Img key={'image'}
                                     fixed={data.fileName.childImageSharp.fixed}
                                     className={'profile-image'}
                                />
                            )
                            }
                        />
                    </div>
                </div>
                <div
                    className="d-flex col-xs-12 col-lg-7 col-md-7 p-0 p-md-1 p-sm-0 m-auto ml-md-0 mb-auto mt-auto text-md-left text-sm-center text-center align-self-center">
                    <div className="col align-content-between">
                        <div className={'default-text white-text header-two'}>
                            Hello. My name is<br/>
                            <div className={'default-text white-text header'}>
                                Brandon Saunders.
                            </div>
                            I'm a full-stack developer specialized in frontend and backend development for complex
                            scalable web apps. <br/>
                            <div>Check out my <Link  className={'default-text white-text header-two'} style={{
                                cursor: 'pointer'
                            }} to={'/projects'}>
                                projects.
                            </Link></div>
                            <Link className={'default-text white-text header-two'}
                                  onClick={() => window.open(SocialMediaConstants.EMAIL)} to={'/'}>
                                 <div>Let's work together.</div>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>)
}
