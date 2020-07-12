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
        <div className={'row ml-1 pt-2 justify-content-md-start justify-content-center align-self-start'}>
            <FontAwesomeIcon icon={props.icon} />
            {/*<IconComponent iconData={props.iconData}/>*/}
            <div className={'align-self-end'}>
                <a className={'hyperlink'} target={'_#'} href={props.link}>{props.title}</a>
            </div>
        </div>
    )
}
