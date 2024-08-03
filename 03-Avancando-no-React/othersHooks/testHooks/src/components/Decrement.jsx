import { useReducer } from 'react';
import styles from './Decrement.module.css';

const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return {
                counter: state.counter + 1,
            };
        case "decrement":
            return {
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}

const Decrement = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});

  return (
    <>
      <h2 className={styles.h2}>Increment and Decrement com useReducer:</h2>
      <p className={styles.p}>{state.counter}</p>
      <button className={styles.btn} onClick={() => dispatch({ type: "increment"})}>Increment</button>
      <button className={styles.btn} onClick={() => dispatch({ type: "decrement"})}>Decrement</button>
    </>
  )
}

export default Decrement
