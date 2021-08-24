import React from 'react'
import './noUsers.css'

 const NoResults = () => {

    return(
        <div className="container text-center noUsers">
            <h1 className='icon'>
            <i class="large material-icons">sentiment_neutral</i>
            </h1>
            <h1>We couldn't find any people matching your search</h1>
        </div>
    )
}

export default NoResults;