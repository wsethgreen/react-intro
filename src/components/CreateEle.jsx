import React from 'react'

const CreateEle = () => {
    
    let date = new Date().toLocaleTimeString();

    return (
        
        React.createElement(
            'div',
            null,
            'Hello React ',
            React.createElement('input'),
            React.createElement(
                'pre',
                null,
                date
            )
        )
    )
}

setInterval(CreateEle, 1000);

export default CreateEle;