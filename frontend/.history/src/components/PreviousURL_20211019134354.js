import React from 'react'

const PreviousURL = ({previousURL}) => {
    return (
        <div className="task">
            <h3 className = "link" href = {previousURL.shortURL} ><a>{previousURL.shortURL}</a></h3>
            <p>{previousURL.actualURL}</p>
        </div>
    )
}

export default PreviousURL
