import React from 'react';
import {VideoComponent} from "../common/VideoComponent";
import Img from "gatsby-image";
import Project from "../../lib/entities/Project";

export function ProjectMediaComponent(props: any){
    const project = props.project;
    const projectObj = new Project(project.node);
    const videoUrl = project.node?.videoUrl;
    const videoComponent = videoUrl !== null ? (
        <VideoComponent
            key={'video-' + props.project.name}
            videoSrcURL={videoUrl} videoTitle={projectObj.name}
                        frameStyles={{minHeight: 400, width: '100%'}}
                        wrapperStyles={{height: '100%', width: '100%'}}/>
    ) : null;

    const imageOrientation = project.node.imageOrientation;
    const imageStyles = imageOrientation === 'portrait' ? {
        width: '50%',
    } : {
        width: '100%'
    };
    const imageUrl = project.node.image?.childImageSharp?.fluid;
    const imageComponent = imageUrl !== undefined ? (
        <Img key={'image-' + props.project.name} fluid={imageUrl} style={{...imageStyles}}/>
    ) : null;
    return (
        <div
            key={'video-media-' + props.project.name}
            onClick={() => props.onClick()}
            style={
                {
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#000',
                }
            }
        >
            {imageComponent}
            {videoComponent}
        </div>
    )
}
