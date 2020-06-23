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
    return (
        <div
            style={{
                backgroundImage: 'linear-gradient(#1d1d1d, #fff)'
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
                            color: '#ffffff',
                            textDecoration: `none`,
                            fontSize: '2rem',
                        }}>
                            Hello. I'm Brandon, a full stack software engineer based out of Los Angeles, CA.
                        </div>
                        <div
                            onClick={() => window.open(SocialMediaConstants.EMAIL)}
                            style={{
                                color: '#ffffff',
                                fontSize: '2rem',
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
