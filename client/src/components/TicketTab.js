import React from 'react'

function TicketTab(props) {
    return (
        <div className="ticket">
            <h3>{props.ticket.title}</h3>
            <p>{props.ticket.content}</p>
            <div>{props.ticket.userEmail} <span className="date">{new Date(props.ticket.creationTime).toUTCString()}</span></div>
        </div>
    )
}

export default TicketTab
