import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/ticketTab.css'

function TicketTab(props) {
    const [isDone, setIsDone] = useState("undone");
    const [visible, setvisible] = useState(true);

    useEffect(()=>{
        if(props.ticket.done){
            setIsDone("done")
        }
    }, [props.ticket.done])

    useEffect(()=>{
        if(props.restore === true){
            setvisible(true)
        }
    }, [props.restore])

    function changeDoneStatus(isDoneStatus){
        if(isDoneStatus === "undone"){
            axios.patch(`/api/tickets/${props.ticket._id}/undone`).then(()=>{
                setIsDone("undone")
            }).catch((err)=>{
                console.log(err.message)
            })
        }
        else{
            axios.patch(`/api/tickets/${props.ticket._id}/done`).then(()=>{
                setIsDone("done")
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }

    function handleClick(){
        const changedVisible = !visible;
        setvisible(changedVisible);
        props.changeCounter();
    }
    return (
        <>
        {!visible ? <></> :
        <div className={`ticket ${isDone}`}>
            <h3 className="ticket-title">{props.ticket.title}</h3>
            <p className="content">{props.ticket.content}</p>
            <div className="ticket-bottom">
            <div>{props.ticket.userEmail} <span className="date">{new Date(props.ticket.creationTime).toUTCString()}</span></div>
            {props.ticket.labels && 
            <div className="labels">
                {props.ticket.labels.map((label, i)=><span key={i} className="label">{label}</span>)}
            </div>
            }
            </div>
            <div className="control-buttons">
                <button className="hideTicketButton" onClick={()=>handleClick()}>hide</button>
                <button className="done-status-button" onClick={(event)=>changeDoneStatus(event.target.innerText)}>{isDone === "done" ? <>undone</> : <>done</>}</button>
            </div>
        </div>
        }
        </>
    )
}

export default TicketTab
