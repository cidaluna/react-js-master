import './App.css'
import AverageGrade from './components/AverageGrade'
import CoursesSelector from './components/CoursesSelector'
import Form2 from './components/Form2'
import ListWrapper from './components/ListWrapper'
import MyForm from './components/MyForm'

function App() {
 const grades = [10,9,8,7];
 const itemsList = [
    {
      id: 1,
      name: "Javascript",
    },
    {
      id: 2,
      name: "Java",
    },
    {
      id: 3,
      name: "SQL",
    },
 ];

  return (
    <>
      <h1>Forms</h1>
      <h2>Componente: My Form</h2>
      <MyForm userProp={{name: "Josias", email:"josias@email.com", bio: "Eu sou programador", role:"admin"}} />
      <h2>Componente: Courses Selector</h2>
      <CoursesSelector />
      <h2>Componente: Class Registration Form 2 custom field</h2>
      <Form2 />
      <h2>Componente: Average Grade</h2>
      <AverageGrade grades={grades} />
      <h2>Componente: List Wrapper select ID item</h2>
      <ListWrapper items={itemsList} />
    </>
  )
}

export default App
