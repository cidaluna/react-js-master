import styles from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.modal}>
      <h3>My Title Modal (know as children)</h3>
      {children}
      <p>This is the second modal paragraph! (know as children too)</p>
      <button onClick={() => onClose()}>Close</button>
    </div>
  )
};

export default Modal
