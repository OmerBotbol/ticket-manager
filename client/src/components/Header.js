import React from 'react'

function Header(props) {
    return (
        <div>
            <h1>Ticket Manager</h1>
            <div><span id="hideTicketsCounter">{props.counter}</span> tickets hidden</div>
            <button id="restoreHideTickets" onClick={()=> props.restoreAll()}>Restore</button>
        </div>
    )
}

export default Header
