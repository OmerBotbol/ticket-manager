import React from 'react'
import '../styles/header.css'


function Header(props) {
    return (
        <div id="header">
            <h1>Ticket Manager</h1>
            {props.counter !== 0 &&
            <div id="hide-control">
                <span id="hideTicketsCounter">{props.counter}</span> tickets hidden
                <button id="restoreHideTickets" onClick={()=> props.restoreAll()}>Restore</button>
            </div>
            }
            <input id="searchInput" placeholder="Enter the title you wish to find" onChange={(event)=>props.handleChange(event.target.value)}/>
            <button id="open-new-ticket-button" onClick={()=>props.openTab()}>{props.openNewTicket ? <> ▲ </>:<> ▼ </>}</button>
        </div>
    )
}

export default Header
