import React from 'react';

interface CardComponentInterface {
    children: any
}

export default function CardComponent(props: CardComponentInterface){
    return (
        <div style={{
            borderRadius: 5,
            border: "2px solid grey",
        }}>
            {props.children}
        </div>
    )
}
