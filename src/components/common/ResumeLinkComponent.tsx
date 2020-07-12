import * as React from "react";
import IconComponent from "./IconComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ResumeLinkPropsInterface {
    link: string;
    title: string;
    icon: any;
}

export default function ResumeLinkComponent(props: ResumeLinkPropsInterface){
    return (
        <div className={'row justify-content-md-start justify-content-center'}>
            <FontAwesomeIcon icon={props.icon} className={'m-2'}/>
            <div className={'align-self-end mb-1'}>
                <a className={'hyperlink sub-text'} target={'_#'} href={props.link}>{props.title}</a>
            </div>
        </div>
    )
}
