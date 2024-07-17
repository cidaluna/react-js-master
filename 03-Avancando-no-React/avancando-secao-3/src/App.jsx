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
        <div>
          <h1>Trabalhando com props:</h1> {/* Trabalhando com props */ }
          <ShowUserName name={userName} />  
          <Profile avatarUrl={avatar} avatarAltText={alt} avatarUser={user} />
        </div>
        <div>
          <h1>Desestrutando:</h1>  {/* Trabalhando com destructuring */ }
          <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
        </div>
        <div>
          <h1>Reaproveitando componente CarDetails:</h1> {/* Reaproveitando */}
          <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
          <CarDetails brand="Fiat" km={0} color="Branco" newCar={true} />
          <CarDetails brand="Fiat" km={5000} color="Prata" newCar={false} />
        </div>
      </div>
    </>
  )
}

export default App
