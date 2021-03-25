import React from 'react'
import '../styles/header.css'


function Header(props) {
    return (
        <div>
            <h1>Ticket Manager</h1>
            <div id="hide-control">
                <span id="hideTicketsCounter">{props.counter}</span> tickets hidden
                <button id="restoreHideTickets" onClick={()=> props.restoreAll()}>Restore</button>
            </div>
        </div>
    )
}

export default Header
