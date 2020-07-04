import React from 'react';

interface CardComponentInterface {
    children: any
}

export default function CardComponent(props: CardComponentInterface) {
    return (
        <div className={'p-2 mb-4 project-card'}>
            {props.children}
        </div>
    )
}
