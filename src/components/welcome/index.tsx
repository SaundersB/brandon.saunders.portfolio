import React from 'react';
import {graphql, Link, StaticQuery} from "gatsby";
import {SocialMediaConstants} from "../common/SocialMediaConstants";
import Img from "gatsby-image/withIEPolyfill"
import {defaultText, header, headerTwo} from "../../styles/typography";

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

const startColor = '#1d1d1d';
const endColor = 'rgb(79,138,246)';

export default function Welcome(props: any) {
    const boldTextStyles = {
        fontSize: '2em',
    }

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundImage: `linear-gradient(${startColor}, ${endColor})`
            }}
            className={'container-fluid'}>
            <div className={'d-flex row'} style={{
                minHeight: '100vh',
            }}>
                <div style={{
                }} className="col-xs-12 col-md-5 align-self-center pt-5 p-md-3">
                    <StaticQuery
                        key={'static-query'}
                        query={query}
                        render={(data) => (
                            <Img key={'image'}
                                 className='m-auto mr-md-0'
                                 fixed={data.fileName.childImageSharp.fixed}
                                 objectFit="cover"
                                 objectPosition="50% 50%"
                                 style={{
                                display: 'block',
                                borderRadius: 5,
                                width: '100%',
                                maxHeight: 300,
                                maxWidth: 300,
                            }}/>
                        )
                        }
                    />
                </div>
                <div className="d-flex col-xs-12 col-lg-4 col-md-7 p-0 p-md-1 m-auto ml-md-0 mb-auto mt-auto align-self-center">
                    <div className="col align-content-between">
                        <div style={{
                            ...defaultText,
                            ...header,
                        }}>
                            Hello. My name is<br/>
                        </div>
                        <div style={{
                            ...defaultText,
                            ...headerTwo,
                        }}>
                            Brandon Saunders.
                        </div>
                        <div style={{
                            ...defaultText,
                            ...header,
                        }}>
                            I'm a full-stack developer specialized in frontend and backend development for complex scalable web apps.
                        </div>
                        <div style={{
                            ...defaultText,
                            ...header,
                        }}>
                            Check out my <Link style={{
                            ...defaultText,
                            ...header,
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }} to={'/projects'}>projects</Link>.
                        </div>
                        <div
                            onClick={() => window.open(SocialMediaConstants.EMAIL)}
                            style={{
                                ...defaultText,
                                ...header,
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            }}
                        >
                            Let's work together.
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
