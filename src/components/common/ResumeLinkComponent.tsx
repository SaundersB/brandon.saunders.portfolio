import * as React from "react";

interface ResumeLinkPropsInterface {
    link: string;
    title: string;
}

export default function ResumeLinkComponent(props: ResumeLinkPropsInterface){
    return (
        <div className={'row ml-1 justify-content-md-start justify-content-center'}>
            <a className={'hyperlink'} target={'_#'} href={props.link}>{props.title}</a>
        </div>
    )
}
