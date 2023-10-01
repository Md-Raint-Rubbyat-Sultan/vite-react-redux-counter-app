import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_REST } from "../constants/constantCounter"

const incrementCounter = () => {
    return {
        type: COUNTER_INCREMENT,
    }
}

const decrementCounter = () => {
    return {
        type: COUNTER_DECREMENT,
    }
}

const resetCounter = () => {
    return {
        type: COUNTER_REST,
    }
}

export {
    incrementCounter,
    decrementCounter,
    resetCounter,
}