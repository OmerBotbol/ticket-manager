import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TicketTab from './components/TicketTab'
import SearchArea from './components/SearchArea';

function App() {
  const [tickets, setTickets] = useState([]);
  const [originalTickets, setOriginalTickets] = useState([]);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get('api/tickets').then((ticketsToDisplay)=>{
      const newArr = [...ticketsToDisplay.data]
      setTickets(ticketsToDisplay.data);
      setOriginalTickets(newArr)
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
    setTickets(originalTickets)
    setCounter(0)
  }

  return (
    <>
      <h1>Ticket Manager</h1>
      <div><span id="hideTicketsCounter">{counter}</span> tickets hidden</div>
      <button id="restoreHideTickets" onClick={()=> restoreAll()}>Restore</button>
      <SearchArea handleChange={handleChange}/>
      {tickets.map((ticket, i)=>{
      return <TicketTab key={i} ticket={ticket} handleClick={handleClick}/>
      })}
    </>
  )
}

export default App

