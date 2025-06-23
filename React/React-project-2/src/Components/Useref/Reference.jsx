import { useRef, useState } from "react";

const Reference = () => {

    let l = useRef(0)
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
        l.current = l.current + 1
    };
    return (
        <div>
            <div>The value of l: {l.current}</div>
            <button onClick={handleClick}>Increment</button>

        </div>
    );
};

export default Reference;