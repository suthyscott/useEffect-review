import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            console.log('hit loop', count)
            setCount(oldie => oldie + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(0)}>reset</button>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={() => incrementFive()}>Increment by 5</button>
        </div>
    )
}

export default Counter