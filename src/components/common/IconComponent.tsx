import React from 'react';

interface IconComponentPropsInterface {
    iconData: string;
}

export default function IconComponent(props: IconComponentPropsInterface) {
    return (
        <div className={'white-background light-rounded-corners flex m-1'}>
            <svg className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false"
                 data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512" data-fa-i2svg="">
                <path fill="currentColor"
                        d={props.iconData}/>
            </svg>
        </div>
    )
}
