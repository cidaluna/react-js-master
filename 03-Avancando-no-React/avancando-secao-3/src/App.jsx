import CarDetails from '../../components/CarDetails'
import ConditionalRender from '../../components/ConditionalRender'
import ListRender from '../../components/ListRender'
import ManageData from '../../components/ManageData'
import Profile from '../../components/Profile'
import ShowUserName from '../../components/ShowUserName'
import './App.css'
import City from './assets/city.jpg'

function App() {
  const userName = "Luna123";
  const avatar = "https://i.imgur.com/1bX5QH6.jpg";
  const alt = "Test image";
  const user = "Lin";

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
        <ListRender />
        <ConditionalRender />
        <h1>Trabalhando com props:</h1>
        <ShowUserName name={userName} />  {/* Trabalhando com props */ }
        <Profile avatarUrl={avatar} avatarAltText={alt} avatarUser={user} />   {/* Trabalhando com props */ }
        <h1>Desestrutando:</h1>
        <CarDetails brand="VW" km={100000} color="Azul" />
      </div>
    </>
  )
}

export default App
