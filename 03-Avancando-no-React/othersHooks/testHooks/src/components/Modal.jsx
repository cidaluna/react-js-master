import { useImperativeHandle, useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ modalRef, children}) => {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(modalRef, () => ({
    openModal: () => setModalState(true)
  }));

  console.log('child rendered');

  if(!modalState) return null;

  return (
    <div className={styles.bgg}>
      <div className={styles.modal}>
        <h3>My Title Modal (known as children)</h3>
        {children}
        <p>This is the second modal paragraph! (known as children too)</p>
        <button onClick={() => setModalState(false)}>Close</button>
      </div>
    </div>
  )
};

export default Modal
