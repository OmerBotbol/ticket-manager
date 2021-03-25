import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TicketTab from './components/TicketTab'
import Header from './components/Header';
import './styles/App.css'

function App() {
  const [tickets, setTickets] = useState([]);
  const [restore, activeRestore] = useState(false);
  const [counter, setCounter] = useState(0);

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

  function changeCounter(){
    setCounter(counter + 1)
    activeRestore(false)
  }

  function restoreAll(){
    activeRestore(true)
    setCounter(0)
  }

  return (
    <>
      <Header counter={counter} restoreAll={restoreAll} handleChange={handleChange}/>
      {tickets.map((ticket, i)=>{
      return <TicketTab key={i} ticket={ticket} changeCounter={changeCounter} restore={restore}/>
      })}
    </>
  )
}

export default App

