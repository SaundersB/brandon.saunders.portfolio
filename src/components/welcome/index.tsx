import React, {RefObject} from 'react';
import Header from "../header";
import SocialMediaLinksComponent from "../common/SocialMediaLinksComponent";
import {graphql, Link, StaticQuery} from "gatsby";
import {SocialMediaConstants} from "../common/SocialMediaConstants";
import ProjectCategorySelectorComponent from "../projects/ProjectCategorySelectorComponent";
import GatsbyImage from "gatsby-image";
import Img from "gatsby-image";

export const query = graphql`
    query {
        fileName: file(relativePath: {eq: "profile_photo.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default function Welcome(props: any) {
    const mainTextStyles = {
        color: '#ffffff',
        textDecoration: `none`,
        fontSize: '1rem',
    }

    return (
        <div
            style={{
                backgroundImage: 'linear-gradient(#1d1d1d, #A52F2F2F)'
            }}
            className={'container-fluid'}>
            <div style={{
                height: '100vh',
            }} className={'row justify-content-center align-items-center'}>
                <div className="col-xs-12 col-md-4">
                    <StaticQuery
                        key={'static-query'}
                        query={query}
                        render={(data) => (
                            <>
                                <Img key={'image'} fluid={data.fileName.childImageSharp.fluid} style={{
                                    borderRadius: 5,
                                    width: 250,
                                    height:  250,
                                }}/>
                            </>
                        )
                        }
                    />
                </div>
                <div className="col-xs-6 col-md-6">
                    <h1 style={{ textAlign: 'left' }}>
                        <div style={{
                            ...mainTextStyles
                        }}>
                            Hello, my name is<br/>
                        </div>
                        <div style={{
                            color: '#ffffff',
                            textDecoration: `none`,
                            fontSize: '2rem',
                        }}>
                            Brandon Saunders
                        </div>
                        <div style={{
                            ...mainTextStyles
                        }}>
                            I'm a full-stack developer specialized in frontend and backend development for complex scalable web apps.
                        </div>
                        <div style={{
                            ...mainTextStyles
                        }}>
                            Check out my <Link style={{
                            ...mainTextStyles,
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }} to={'/projects'}>projects</Link> and <Link style={{
                            ...mainTextStyles,
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }} to={'/resume'}>resume</Link>.
                        </div>
                        <div
                            onClick={() => window.open(SocialMediaConstants.EMAIL)}
                            style={{
                                ...mainTextStyles,
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }}
                        >
                            Let's work together.
                        </div>
                    </h1>
                </div>
            </div>
        </div>)
}
