import React from 'react';

export default function card (props) {

    const myList: any[] = [];
    if (props.listText) {
        props.listText.forEach((item: string, index: number) => {
            myList.push(<li key={index}> {item} </li>);
        })
    }

    return(
        <div>
            {/* Render h-tags */}
            {props.h1Text && <h1>{props.h1Text}</h1>}
            {props.h2Text && <h2>{props.h2Text}</h2>}
            {props.h3Text && <h3>{props.h3Text}</h3>}
            {props.h4Text && <h4>{props.h4Text}</h4>}
            {props.h5Text && <h5>{props.h5Text}</h5>}
            {props.h6Text && <h6>{props.h6Text}</h6>}

            {/*Render p-tags*/}
            {props.pText && <p>{props.pText}</p>}

            {/*Render List*/}
            {props.listText && <ul> {myList} </ul>}
        </div>
    )
}

