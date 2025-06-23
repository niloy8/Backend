import { useMemo, useState } from "react";

const Usememo = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);        // actual value to compute on
    const [inputData, setInputData] = useState(0); // controlled input field

    const doublev = (v) => {
        console.log('inside expensive task');
        let temp = 0;
        for (let index = 0; index < 100000000; index++) {
            temp += index * v;
        }
        return v * 2;
    };

    const doubleValue = useMemo(() => doublev(Number(data)), [data]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <input
                type="number"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={() => setData(inputData)}>Calculate</button>
            <div>Double: {doubleValue}</div>
            <div>Count: {count}</div>
        </div>
    );
};

export default Usememo;
