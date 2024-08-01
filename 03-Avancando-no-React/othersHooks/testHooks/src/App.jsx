import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false); // o estado do modal inicia falso
 
  const handleButtonClick = () => {
    setOpen(false)
  };

  console.log('parent rendered');

  return (
    <>
      <div>
        <h1 className='card'>Outros hooks</h1>
        <h2>Testando o modal:</h2>
        <button className="btn" onClick={() => setOpen(true)}>  {/* altera o estado boleano a cada clique */}
          Open modal
        </button>
        {open && (
          <Modal onClose={handleButtonClick}>
            <p>First paragraph on Modal React (parent rendered)</p>
          </Modal>
        )}
      </div>
    </>
  )
}

export default App
