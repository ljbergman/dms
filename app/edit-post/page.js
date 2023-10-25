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

            if (res.ok) {
                setTitle(data[0].title);
                setContent(data[0].content);
            }

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
            
            router.push("/");
         } 

         
        }

        // Document Edit Container Styling
        const documentEdit = {
          backgroundColor: "#ffffff",
          padding: "0px",
          margin: "0px",
        }     
        
        // Document Edit Input
        const documentEditInput = {
            display: "block",
            width: "350px",
            height: "38px",
            fontFamily: "sans-serif, arial, verdana",
            fontSize: "12px",
            padding: "20px",
            border: "1px solid #aaaaaa",
            borderRadius: "6px",
            marginBottom: "10px",
            backgroundColor: "#ffffff",
            color: "#000000"
          }    

        // Document Edit TextArea
        const documentEditTA = {
            display: "block",
            width: "350px",
            height: "406px",
            fontFamily: "sans-serif, arial, verdana",
            fontSize: "12px",
            padding: "20px",
            border: "1px solid #aaaaaa",
            borderRadius: "6px",
            backgroundColor: "#ffffff",
            color: "#000000"
          }

        // Document Ul Styling
        const documentUl = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            listStyle: "none"
        
        }     

    // Document Li Styling
    const documentLi = {
        width: "100%",
        height: "fit-content",
        margin: "8px",
        padding: "20px",
        borderRadius: "6px",
        textAlign: "center",
        backgroundColor: "#cccccc",
        boxShadow: "rgba(0, 0, 0, 0.30) 1.95px 1.95px 2.6px"
      
    }

     // Document Label Styling
     const documentLabel = {
        display: "block",
        fontFamily: "sans-serif, arial, verdana",
        fontSize: "20px",
        textAlign: "center",
        color: "#000000"
    }   


  const documentSaveBtn = {

    fontSize: "12px",
    backgroundColor: "#779B29",
    color: "#ffffff",
    border: "0px",
    borderRadius: "6px",
    width: "120px",
    height: "36px",
    padding: "10px",
    cursor: "pointer"

  }

    return (
        <div style={documentEdit}>
            {post ? (
            <div>
            <form onSubmit={handleSubmit}>
            <ul style={documentUl}>
            <li style={documentLi}>
                <label style={documentLabel}>Document Title</label>
                <input style={documentEditInput} type="text" defaultValue={post.title} onChange={titleEventHandler}/> 
                <label style={documentLabel}>Text Content</label>
                <textarea style={documentEditTA} defaultValue={post.content} onChange={contentEventHandler}/><br/>
                <button  style={documentSaveBtn} type="submit">Save changes</button>
            </li>
            </ul>
            </form> 
            </div>
            ) : (
                <div>Loading...</div>
            )}

        </div>
    )

}