import React from 'react'

function SearchArea(props) {
    return (
        <div>
            <input id="searchInput" onChange={(event)=>props.handleChange(event.target.value)}/>
        </div>
    )
}

export default SearchArea
