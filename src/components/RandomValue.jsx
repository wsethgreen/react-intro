import React from 'react'

const RandomValue = () => {
    return (
        <div>
            <h4>Random Value between 0-100:</h4>
            <h5>{Math.floor(Math.random() * 100)}</h5>
        </div>
    )
}

export default RandomValue;