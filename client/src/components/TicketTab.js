import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/ticketTab.css'

function TicketTab(props) {
const [isDone, setIsDone] = useState("undone")

useEffect(()=>{
    if(props.ticket.done){
        setIsDone("done")
    }
}, [])

function changeDoneStatus(isDoneStatus){
    if(isDoneStatus === "done"){
        axios.patch(`/api/tickets/${props.ticket._id}/undone`).then(()=>{
            setIsDone("undone")
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    else{
        axios.patch(`/api/tickets/${props.ticket._id}/done`).then(()=>{
            setIsDone("done")
        }).catch((err)=>{
            console.log(err.message)
        })
    }
}
    return (
        <div className={`ticket ${isDone}`}>
            <h3 className="ticket-title">{props.ticket.title}</h3>
            <p className="content">{props.ticket.content}</p>
            <div className="ticket-bottom">
            <div>{props.ticket.userEmail} <span className="date">{new Date(props.ticket.creationTime).toUTCString()}</span></div>
            {props.ticket.labels && 
            <div className="labels">
                {props.ticket.labels.map((label, i)=><span key={i} className="label">{label}</span>)}
            </div>
            }
            </div>
            <button className="hideTicketButton" onClick={()=>props.handleClick(props.ticket._id)}>hide</button>
            <button onClick={(event)=>changeDoneStatus(event.target.innerText)}>{isDone === "done" ? <>done</> : <>undone</>}</button>
        </div>
    )
}

export default TicketTab
