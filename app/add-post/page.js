"use client"
import { useState } from "react"

export default function addPost() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const titleEventHandler = ((event) => {
        setTitle(event.target.value);
    }) 

    const contentEventHandler = ((event) => {
        setContent(event.target.value);
    }) 

    const handleSubmit = async (event) =>  {
         event.preventDefault();
         const res = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, content})
         })

         alert("Ny post tillagd!");

         setTitle("");
         setContent("");

    }

    return (
        <div style={{color: "red", display: "flex", flexDirection: "column", width: "320px"}}>
            <h1>Create new document</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={titleEventHandler}/> 
                <textarea placeholder="Content" value={content} onChange={contentEventHandler}/><br/>
                <button type="submit">Save</button>
            </form> 
        </div>
    )

}