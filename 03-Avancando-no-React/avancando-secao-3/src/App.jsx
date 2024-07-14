import ManageData from '../../components/ManageData'
import './App.css'
import City from './assets/city.jpg'

function App() {

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        <div>
          { /* Imagem em public, geralmente no public colocamos o logo da aplicação */}
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        <div>
          { /* Imagem em assets */ }
          <img src={City} alt="Cidade" />
        </div>
        <ManageData />
      </div>
    </>
  )
}

export default App
