import * as React from "react";
import IconComponent from "./IconComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ResumeLinkPropsInterface {
    link: string;
    title: string;
    icon: any;
    wrapperStyles?: string;
}

export default function ResumeLinkComponent(props: ResumeLinkPropsInterface){
    return (
        <div className={'row mb-md-3 justify-content-md-start justify-content-center ' + props.wrapperStyles}>
            <FontAwesomeIcon onClick={() => window.open(props.link, '_#')} icon={props.icon} color={'white'} className={'mt-1 mb-1 mr-2 hyperlink'} />
            <div className={'align-self-end'}>
                <a className={'hyperlink sub-text'} target={'_#'} href={props.link}>{props.title}</a>
            </div>
        </div>
    )
}
