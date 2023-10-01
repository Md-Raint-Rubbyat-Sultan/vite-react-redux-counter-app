import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_REST } from "../constants/constantCounter";

// states
const initialCounter = { counter: 0 }

// reducers
const counterReducer = (state = initialCounter, action) => {
    const { type } = action;
    switch (type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case COUNTER_DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case COUNTER_REST:
            return {
                ...state,
                counter: 0,
            }
        default:
            return state;
    }
}

export {
    counterReducer,
}