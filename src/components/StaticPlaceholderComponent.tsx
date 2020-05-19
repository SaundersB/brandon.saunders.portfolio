import React from 'react';
import Header from "./header";
import {SocialMediaLinksComponent} from "./common/SocialMediaLinksComponent";

export function StaticPlaceholderComponent(props: any){


    return (<div style={{
        ...props.wrapperStyles
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            right: 0
        }}>
            <SocialMediaLinksComponent/>
        </div>
        <div style={{

        }}>
            <Header/>
        </div>
    </div>)
}
