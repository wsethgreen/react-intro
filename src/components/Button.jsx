import React, { useState } from 'react'

const Button = ({ clickAction, clickValue }) => {


    return (
        <div>
            <button type="submit" onClick={() => clickAction(clickValue) }>Increase by {clickValue}</button>
        </div>
    )
}

export default Button;