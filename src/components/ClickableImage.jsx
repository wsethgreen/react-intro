import React from 'react'

const ClickableImage = ({ href, src }) => {
    return (
        <a href={href}>
            <img src={src} />
        </a>
    )
}

export default ClickableImage;