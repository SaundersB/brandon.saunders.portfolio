import React from 'react';
import Header from "./header";
import {SocialMediaLinksComponent} from "./common/SocialMediaLinksComponent";
import {Link} from "gatsby";
import {SocialMediaConstants} from "./common/SocialMediaConstants";

export function StaticPlaceholderComponent(props: any){


    return (<div style={{
        ...props.wrapperStyles
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0
        }}>
            <SocialMediaLinksComponent/>
        </div>
        <div style={{

        }}>
            <h1 style={{ margin: 'auto', padding: 60, textAlign: 'left' }}>
                <div style={{
                    color: '#ffffff',
                    textDecoration: `none`,
                    fontSize: '2rem'
                }}>
                    Hello. I'm Brandon, a full stack software engineer based out of Los Angeles, CA.
                </div>
                <div
                    onClick={() => window.open(SocialMediaConstants.EMAIL)}
                    style={{
                        color: '#ffffff',
                        fontSize: '2rem',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                >
                    Let's work together.
                </div>
            </h1>
        </div>
    </div>)
}
