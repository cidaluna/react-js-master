import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h1>Forms</h1>
      <MyForm userProp={{name: "Josias", email:"josias@email.com", bio: "Eu sou programador", role:"admin"}}/>
    </>
  )
}

export default App
