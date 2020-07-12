import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ResumeLinkPropsInterface {
    link: string;
    title: string;
    icon: any;
    wrapperStyles?: string;
}

export default function ResumeLinkComponent(props: ResumeLinkPropsInterface){
    return (
        <div onClick={() => window.open(props.link, '_#')} className={'row hyperlink mb-md-3 justify-content-md-start justify-content-center ' + props.wrapperStyles}>
            <FontAwesomeIcon icon={props.icon} color={'white'} className={'hyperlink mt-1 mb-1 mr-2'} />
            <div className={'align-self-end'}>
                <a className={'hyperlink sub-text'} target={'_#'} href={props.link}>{props.title}</a>
            </div>
        </div>
    )
}
