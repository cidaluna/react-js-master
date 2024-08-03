import { useRef } from 'react';
import './App.css';
import Decrement from './components/Decrement';
import FocusInput from './components/FocusInput';
import Increment from './components/Increment';
import Modal from './components/Modal';
import ResourceType from './components/ResourceType';

function App() {

  const modalRef = useRef();
  const handleButtonClick = () => {
    modalRef.current.openModal();
  };
  console.log('parent rendered');

  return (
    <div className="wrapper">
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
      <div className="divide1">
        <ResourceType />
      </div>
      <div className="divide2">
        <FocusInput />
      </div>
      <div className="divide1">
        <Decrement />
      </div>
    </div>
  )
}

export default App
