import React from 'react';

interface CardComponentInterface {
    children: any
}

export default function CardComponent(props: CardComponentInterface) {
    return (
        <div style={{
            borderRadius: 5,
            backgroundColor: 'white',
            border: "0.5rem solid white",
        }}>
            {props.children}
        </div>
    )
}
