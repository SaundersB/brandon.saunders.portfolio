import React from 'react';


export function CardComponent(props: any){

    return (
        <div style={{
            borderRadius: 50
        }}>
            {props.children}
        </div>
    )
}
