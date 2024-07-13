// components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'

// styles 
import './App.css'
import Challenge from './components/Challenge'
import Events from './components/Events'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  )
}

export default App
