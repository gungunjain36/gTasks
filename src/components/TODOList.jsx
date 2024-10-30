import React from "react";
import ListItem from "./ListItem";

export default function TODOList({ todos }){
    return(
        <ol>
            {todos.length > 0 ? (
                todos.map((item,index)=> <ListItem key={index} item={item} />)
            ) : (
                <p className="text-gray-400 text-sm">No Tasks as of now! Add One</p>
            )}
        </ol>
    )
}