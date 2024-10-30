import React from "react";
import '../index.css';
import { useState } from "react";
import TODOList from "./TODOList";

export default function Home(){
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");
    function addTask(newTask){
        if(newTask.trim() !== ""){
            const task = {title: newTask, id: crypto.randomUUID(), is_completed: false};
            setTodos([...todos,task]);
            setNewTask("");
        }
    }

    function deleteAll(){
        setTodos([]);
    }
    return (
        <div className="bg-black min-h-screen m-0 p-0">
        <div>
            <h1 className="flex flex-row justify-center text-4xl m-7 mt-0 text-lime-400">gTasks</h1>
        </div>
        <div className="flex flex-col justify-center m-4">
            <div className="block justify-center m-2">
            <input className="text-black rounded-md p-4" name="task" type="text" placeholder="Add Your Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            </div>
            <div className="flex flex-row justify-center">
                <button className="m-2 p-3 text-green-200 border-2 border-indigo-400 rounded-md" onClick={()=>addTask(newTask)}>ADD TASK</button>
                <button className="m-2 p-3 text-white border-2 border-indigo-400 rounded-md" onClick={()=>deleteAll()}>DELETE ALL</button>
            </div>
           
        </div>
            <div className="text-black">
                <TODOList todos={todos}/>
            </div>
        </div>
    )
}
