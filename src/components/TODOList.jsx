import React from "react";
import ListItem from "./ListItem";

export default function TODOList({ todos }){
    return(
        <ol className="bg-slate-500">
            {todos.length > 0 ? (
                todos.map((item,index)=> <ListItem key={index} item={item} />)
            ) : (
                <p>No Tasks as of now! Add One</p>
            )}
        </ol>
    )
}