import React, {useState} from 'react'
import Button from './Button';
import Display from './Display';

const CountManager = () => {

    const [count, setCount] = useState(0);

    const incrementCounter = (incrementValue) => {
        setCount(count + incrementValue);
    }


    return (
        <div>
            <Button clickAction={incrementCounter} clickValue={1} />
            <Button clickAction={incrementCounter} clickValue={5} />
            <Button clickAction={incrementCounter} clickValue={10} />
            <Display content={count} />
            
        </div>
    )
}

export default CountManager;