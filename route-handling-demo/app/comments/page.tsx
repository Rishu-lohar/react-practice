"use client"

import {useState} from "react";

export default function commentsPage(){

    const [text,setText] = useState("");
    const [message,setMessage] = useState("");

    async function addComment(){
        if(!text.trim()){
            setMessage("Please enter a comment.");
            return;
        }
        const response = await fetch("/comments/api",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text:text,
            }),
        });

        const data =  await response.json();

        if (response.ok){
            setMessage(`Comment added: ${data.id} - ${data.text}`);
            setText("");
        }
        else{
            setMessage("Failed add Comment.");
        }
    }

    return(
        <div>
            <h1>Comments</h1>

            <input 
                type="text"
                value={text}
                placeholder="Enter your comment"
                onChange={(e) => setText(e.target.value)}
            />
            <button className="rounded bg-blue-500"
                onClick={addComment}>
                Add Comment
            </button>

            <p className="text-">{message}</p>
        </div>
    );
}