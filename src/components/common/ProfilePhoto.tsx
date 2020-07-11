import React from 'react';
import GatsbyImage from "gatsby-image";
import {graphql, StaticQuery} from "gatsby";
import Img from "gatsby-image/withIEPolyfill";

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

export default function ProfilePhoto() {

    return (
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
    )
}
