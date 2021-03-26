import React, { useState } from 'react'
import axios from 'axios'

function NewTicketForm() {

    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const [userEmail, setUserEmail]=useState('')
    const [labels, setLabels]=useState('')
    
    function handleSubmit(){
        const dataToSend = {
            title: title,
            content: content,
            userEmail: userEmail,
            labels: labels.split(',')
        }
        axios.post("/api/tickets", dataToSend)
    }

    return (
        <form onSubmit={()=>handleSubmit()}>
            <h3>Create new ticket</h3>
            <label>Title: </label><br/>
            <input type="text" required value={title} onChange={(event)=>setTitle(event.target.value)}/><br/>
            <label>Content: </label><br/>
            <input type="text" required value={content} onChange={(event)=>setContent(event.target.value)}/><br/>
            <label>email: </label><br/>
            <input type="email" required value={userEmail} onChange={(event)=>setUserEmail(event.target.value)}/><br/>
            <label>Labels (seperate labels with commas): </label><br/>
            <input type="text" value={labels} onChange={(event)=>setLabels(event.target.value)}/><br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewTicketForm
