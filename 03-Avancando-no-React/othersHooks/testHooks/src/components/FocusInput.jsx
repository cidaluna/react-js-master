import { useRef, useState } from 'react';
import styles from './FocusInput.module.css';

const FocusInput = () => {

    const [name, setName] = useState("");

    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    }

  return (
    <>
      <h2>Focus Input com useRef:</h2>
        <label htmlFor="name">Nome: </label>
        <input className={styles.customInput} type="text" ref={inputRef}  name="name" placeholder="Digite o seu nome" 
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
      <p className={styles.pp}>Hello! My name is {name}</p>
      <button className={styles.btn} onClick={focusInput}>Focus Input</button>
    </>
  )
}

export default FocusInput
