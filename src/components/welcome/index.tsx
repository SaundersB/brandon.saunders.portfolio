import React from 'react';
import {graphql, Link, StaticQuery} from "gatsby";
import {SocialMediaConstants} from "../common/SocialMediaConstants";
import Img from "gatsby-image/withIEPolyfill"
import {defaultText, header, headerTwo, whiteText} from "../../styles/typography";
import {baseColor, startColor} from "../../styles/colors";

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
                <div className="d-flex col-xs-12 col-md-5 justify-content-md-end justify-content-center align-items-center p-15">
                    <div className="d-flex  justify-content-end">
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
                    className="d-flex col-xs-12 col-lg-7 col-md-7 p-0 p-md-1 m-auto ml-md-0 mb-auto mt-auto text-md-left text-sm-center text-center align-self-center">
                    <div className="col align-content-between">
                        <div className={'default-text white-text header'}>
                            Hello. My name is<br/>
                        </div>
                        <div className={'default-text white-text header-two'}>
                            Brandon Saunders.
                        </div>
                        <div className={'default-text white-text header'}>
                            I'm a full-stack developer specialized in frontend and backend development for complex
                            scalable web apps.
                        </div>
                        <div className={'default-text white-text header'}>
                            Check out my <Link  className={'default-text white-text header'} style={{
                            cursor: 'pointer'
                        }} to={'/projects'}>projects</Link>.
                        </div>
                        <Link className={'default-text white-text header '} onClick={() => window.open(SocialMediaConstants.EMAIL)} to={'/'}>
                            Let's work together.
                        </Link>
                    </div>
                </div>
        </div>)
}
