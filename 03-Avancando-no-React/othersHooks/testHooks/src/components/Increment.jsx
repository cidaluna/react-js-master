import { useState } from "react";
import styles from './Increment.module.css';


const Increment = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        // embora setCount(count + 1) funcione, o esperado é utilizar sempre o valor anterior para somar 1
        setCount((prevState) => prevState + 1);
    };

  return (
    <>
      <h3>{count}</h3>
      <button className={styles.btn} onClick={incrementCount}>Increment</button>
    </>
  )
}

export default Increment
