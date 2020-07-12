import React from 'react';
import GatsbyImage from "gatsby-image";
import {graphql, StaticQuery} from "gatsby";
import Img from "gatsby-image/withIEPolyfill";

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

export default function ProfilePhoto(props: {customStyles?: string}) {

    return (
        <StaticQuery
            key={'static-query'}
            query={query}
            render={(data) => (
                <Img key={'image'}
                     fluid={data.fileName.childImageSharp.fluid}
                     className={'profile-image ' + props.customStyles}
                />
            )
            }
        />
    )
}
