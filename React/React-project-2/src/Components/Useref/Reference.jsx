import { useRef, useState } from "react";

const Reference = () => {

    let l = useRef(0)
    const [count, setCount] = useState(0)
    const colorRef = useRef()
    const handleClick = () => {
        setCount(count + 1)
        l.current = l.current + 1
    };

    const handleColor = () => {
        colorRef.current.style.color = "red"
    };

    return (
        <div>
            <div>The value of l: {l.current}</div>
            <button ref={colorRef} onClick={handleClick}>Increment</button>
            <button ref={colorRef} onClick={handleClick}>Increment</button>
            <button onClick={handleColor}>Change Color</button>

        </div>
    );
};

export default Reference;