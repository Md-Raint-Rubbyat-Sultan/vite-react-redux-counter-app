import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/Counter";

const Counter = () => {
    const counter = useSelector((state) => state?.counter);
    const dispatch = useDispatch();
    const handelCounterIncrement = () => {
        dispatch(incrementCounter());
    }
    const handelCounterDecrement = () => {
        dispatch(decrementCounter());
    }
    const handelCounterReset = () => {
        dispatch(resetCounter());
    }
    console.log(counter)

    return (
        <div>
            <h1>Counter app</h1>
            <h3>Counter: {counter}</h3>
            <button onClick={handelCounterIncrement}>Increment</button>
            <button onClick={handelCounterDecrement}>Decrement</button>
            <button onClick={handelCounterReset}>Reset</button>
        </div>
    );
};

export default Counter;