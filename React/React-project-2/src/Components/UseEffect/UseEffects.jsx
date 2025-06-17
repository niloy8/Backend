import { useEffect, useState } from "react";

const UseEffects = () => {
    //First --> Side Effect funtion
    // Second --> Clean Up
    // Third --> Dependency Array
    //Variation 1
    // Runs on every render
    // useEffect(() => {
    //     alert("It will run on every render");
    // })


    const [count, setCount] = useState(0);
    // variation 2
    //That runs on only first render
    // useEffect(() => {
    //     alert("It will run on only first render");
    // }, [])

    //variation 3
    //render based on dependency update
    // useEffect(() => {
    //     alert("render based on dependency update");
    // }, [count])

    //variation 4
    //Multiple Dependencies
    // Variation 5
    // Cleanup function

    useEffect(() => {
        alert("Render")

        return (() => {
            alert("Cleanup")
        })
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <p>Count IS : {count}</p>
        </div>
    );
};

export default UseEffects;