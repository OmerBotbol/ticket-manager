import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TicketTab from './components/TicketTab'
import Header from './components/Header';
import './styles/App.css'

function App() {
  const [tickets, setTickets] = useState([]);
  const [originalTickets, setOriginalTickets] = useState([]);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get('api/tickets').then((ticketsToDisplay)=>{
      const copyOfTickets = [...ticketsToDisplay.data]
      setTickets(ticketsToDisplay.data);
      setOriginalTickets(copyOfTickets)
    })
  }, [])

  function handleChange(SearchedValue){
    axios.get(`api/tickets?searchText=${SearchedValue}`).then((ticketsToDisplay)=>{
      setTickets(ticketsToDisplay.data);
    })
  }

  function handleClick(idToRemove){
    const index = tickets.findIndex((ticket)=>ticket._id === idToRemove);
    tickets.splice(index, 1);
    setCounter(counter + 1)
  }

  function restoreAll(){
    const newTicket = originalTickets.slice()
    setTickets(newTicket)
    setCounter(0)
  }

  return (
    <>
      <Header counter={counter} restoreAll={restoreAll} handleChange={handleChange}/>
      {tickets.map((ticket, i)=>{
      return <TicketTab key={i} ticket={ticket} handleClick={handleClick}/>
      })}
    </>
  )
}

export default App

