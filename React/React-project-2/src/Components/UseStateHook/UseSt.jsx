import { useState } from "react";

const UseSt = () => {
    const [count, setCount] = useState([0])
    return (
        <div>
            <br />
            <button onClick={() => setCount([count + 1])}>Click Me {count}</button>
        </div>
    );
};

export default UseSt;