import React, { useEffect, useState } from 'react'
import '../styles/ticketTab.css'

function TicketTab(props) {
const [isDone, setIsDone] = useState("undone")

useEffect(()=>{
    console.log(props.ticket.done)
    if(props.ticket.done){
        setIsDone("done")
    }
},[])
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
        </div>
    )
}

export default TicketTab
