import React from 'react'

const PreviousURL = ({previousURL}) => {
    return (
        <div className="task">
            <h3 className = "link" href = {previousURL.shortURL} >{previousURL.shortURL}</h3>
            <a href = {previousURL.shortURL}>here</a>
            <p>{previousURL.actualURL}</p>
        </div>
    )
}

export default PreviousURL
