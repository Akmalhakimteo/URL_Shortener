import React from 'react'

const PreviousURL = ({previousURL}) => {
    return (
        <div className="task">
            <h3>{previousURL.shortURL}</h3>
            <p>{previousURL.longURL}</p>
        </div>
    )
}

export default PreviousURL
