import React from 'react';
import Header from "./header";

export function StaticPlaceholderComponent(props: any){


    return (<div style={{
        ...props.wrapperStyles
    }}>
        <div style={{

        }}>
            <Header/>
        </div>
    </div>)
}
