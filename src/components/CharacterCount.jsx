import React, {useState} from 'react'

const CharacterCount = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const element = e.target;
        setInputValue(element.value);
    }

    return (
        <div>
            <textarea cols={80} rows={10} value={inputValue} onChange={handleChange} />
            <div>Character Count: {inputValue.length}</div>
        </div>
    )
}

export default CharacterCount;