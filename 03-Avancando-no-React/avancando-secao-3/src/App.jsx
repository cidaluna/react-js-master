import CarDetails from '../../components/CarDetails'
import ConditionalRender from '../../components/ConditionalRender'
import Container from '../../components/Container'
import ExecuteFunction from '../../components/ExecuteFunction'
import Fragment from '../../components/Fragment'
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
  const cars = [
    {id: 1, brand: "Ferrari", color:"Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Kia", color:"Branco", newCar: false, km: 74856},
    {id: 3, brand: "Renault", color:"Amarelo", newCar: false, km: 4545},
    {id: 4, brand: "VW", color:"Azul", newCar: true, km: 0},
  ];

  function showMessage(){
    console.log('Evento do componente pai!');
  }

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
        <div>
          <h1>Loop em array de objetos:</h1> {/* Loop na lista de carros */}
          {
            cars.map((car) => (
              <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
            ))
          }
        </div>
        <div>
          <h1>React Fragments:</h1>
          <Fragment propFrag="teste" />
        </div>
        <div>
          <h1>Children:</h1>
          <Container myValue="testando...">
            <p>E este é o conteúdo do container!</p>
          </Container>
          <Container myValue="teste 2.">
            <h4>Conteúdo do container!</h4>
          </Container>
        </div>
        <div>
          <h1>Função como prop:</h1>
          <ExecuteFunction myPropFunction={showMessage} />
        </div>
      </div>
    </>
  )
}

export default App
