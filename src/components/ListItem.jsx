import React, { useState } from "react";

export default function ListItem({ item }){
    const [is_completed, setIsCompleted] = useState(false);
    function toggleTask(){
        setIsCompleted(!is_completed);
    }
    return (
        <li>
            <div className={`m-3 border-2 p-4 border-white bg-black rounded-lg ${is_completed ? "bg-slate-600 text-gray-400 border-gray-500 line-through" : "bg-black text-green-200"}`} onClick={ () => toggleTask() }>
                <p className="text-green-200 text-xl">{item.title}</p>
            </div>
            
        </li>
    )
}