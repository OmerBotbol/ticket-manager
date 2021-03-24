import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TicketTab from './components/TicketTab'

function App() {
  const [tickets, setTickets] = useState(["hello"])

  useEffect(() => {
    axios.get('api/tickets').then((ticketsToDisplay)=>{
      setTickets(ticketsToDisplay.data)
    })
  }, [])
  return (
    <>
      {tickets.map((ticket, i)=>{
      return <TicketTab key={i} ticket={ticket} />
      })}
    </>
  )
}

export default App

