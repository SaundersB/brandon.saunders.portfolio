import React from "react"

interface VideoComponentInterface {
    videoSrcURL: string;
    videoTitle: string;
    wrapperStyles?: object;
    frameStyles?: object
}

export default function VideoComponent(props: VideoComponentInterface){
    return (
        <div className="video" style={{...props.wrapperStyles}}>
            <iframe
                style={{...props.frameStyles}}
                src={props.videoSrcURL}
                title={props.videoTitle}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    )
}
