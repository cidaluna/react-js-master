import { useRef } from 'react';
import './App.css';
import Increment from './components/Increment';
import Modal from './components/Modal';

function App() {

  const modalRef = useRef();
  const handleButtonClick = () => {
    modalRef.current.openModal();
  };
  console.log('parent rendered');

  return (
    <div>
      <h1 className="card">React Hooks</h1>
      <div className="divide1">
        <h2>Modal com useImperativeHandle:</h2>
        <button className="btn" onClick={handleButtonClick}>
          Open modal
        </button>
        <Modal modalRef={modalRef}>
          <p>First paragraph on Modal React (parent rendered)!!</p>
        </Modal>
      </div>
      <div className="divide2">
      <h2>Incremento com useState:</h2>
      <Increment/>
      </div>
    </div>
  )
}

export default App
