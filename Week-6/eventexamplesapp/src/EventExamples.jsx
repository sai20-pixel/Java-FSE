import { useState } from "react";

function EventExamples() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const sayHello = () => {
        alert("Hello! Have a nice day.");
    };

    const increase = () => {
        increment();
        sayHello(); // Multiple methods invoked
    };

    const sayWelcome = (message) => {
        alert(message);
    };

    const handlePress = () => {
        alert("I was clicked");
    };

    return (
        <>
            <h2>Counter Example</h2>

            <h3>{count}</h3>

            <button onClick={increase}>Increment</button>

            <button onClick={decrement}>Decrement</button>

            <br />
            <br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br />
            <br />

            <button onClick={handlePress}>
                OnPress
            </button>
        </>
    );
}

export default EventExamples;