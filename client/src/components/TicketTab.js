import React from 'react'

function TicketTab(props) {
    return (
        <div className="ticket">
            <h3 className="ticket-title">{props.ticket.title}</h3>
            <p className="content">{props.ticket.content}</p>
            <div>{props.ticket.userEmail} <span className="date">{new Date(props.ticket.creationTime).toUTCString()}</span></div>
            {props.ticket.labels && 
            <div className="labels">
                {props.ticket.labels.map((label, i)=><span key={i} className="label">{label}</span>)}
            </div>
            }
        </div>
    )
}

export default TicketTab
