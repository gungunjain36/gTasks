import React from "react";

export default function ListItem({ item }){
    return (
        <li>
            <p>{item.title}</p>
        </li>
    )
}