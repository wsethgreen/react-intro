import React from 'react'
import ClickableImage from './ClickableImage';

const SearchEngines = () => {

    const data = [
        { href: "http://google.com", src: process.env.PUBLIC_URL + "google.png" },
        { href: "http://bing.com", src: process.env.PUBLIC_URL + "bing.png" },
        { href: "http://yahoo.com", src: process.env.PUBLIC_URL + "yahoo.png" }
      ];


    return (
        <div className="search-engines">
            <h4>Search Engines:</h4>
            <div>
                {data.map(engine => <ClickableImage {...engine} />)}
            </div>
        </div>
    )
}

export default SearchEngines;