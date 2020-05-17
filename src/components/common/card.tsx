import React from 'react';
import {defaultPadding} from "../../styles";


export function CardComponent(props: any){

    return (
        <div style={{
            borderRadius: 5,
            border: "2px solid grey",
        }}>
            {props.children}
        </div>
    )
}
