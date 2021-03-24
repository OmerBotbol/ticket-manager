import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TicketTab from './components/TicketTab'
import SearchArea from './components/SearchArea';

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('api/tickets').then((ticketsToDisplay)=>{
      setTickets(ticketsToDisplay.data);
    })
  }, [])

  function handleChange(SearchedValue){
    axios.get(`api/tickets?searchText=${SearchedValue}`).then((ticketsToDisplay)=>{
      setTickets(ticketsToDisplay.data);
    })
  }

  return (
    <>
      <h1>Ticket Manager</h1>
      <SearchArea handleChange={handleChange}/>
      {tickets.map((ticket, i)=>{
      return <TicketTab key={i} ticket={ticket} />
      })}
    </>
  )
}

export default App

