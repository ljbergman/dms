"use client"
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

export default function editPost() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [post, setPost] = useState({})

    const router = useRouter();

    const searchParams = useSearchParams();
    const postId = searchParams.get("pid");
    console.log("post id: ", postId);

    useEffect(() => {
        const getPost = async () => {
             const res = await fetch("api/posts/" + postId);
             const data = await res.json();
           
             setPost(data[0]);
        }
        if (postId) getPost();

    }, [postId])



    const titleEventHandler = ((event) => {
        setTitle(event.target.value);
    }) 

    const contentEventHandler = ((event) => {
        setContent(event.target.value);
    }) 

    const handleSubmit = async (event) =>  {

         event.preventDefault();

         

         const res = await fetch("/api/posts/" + postId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, content})
         })

         

         if (res.ok) {
            alert("Post uppdaterad!");
            router.push("/");
         } 

    }

    return (
        <div style={{color: "red", display: "flex", flexDirection: "column", width: "320px"}}>
            {post ? (
            <div>
            <h1>Edit document</h1> 
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={post.title} value={title} onChange={titleEventHandler}/> 
                <textarea placeholder={post.content} value={content} onChange={contentEventHandler}/><br/>
                <button type="submit">Save changes</button>
            </form> 
            </div>
            ) : (
                <div>Loading...</div>
            )}

        </div>
    )

}