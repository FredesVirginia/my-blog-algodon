import { BrowserRouter } from 'react-router-dom'
import './App.css'
import FirstPlantilla from './components/plantillasTypePeriodico/FirstPlantilla'
import Inicio from './components/plantillasTypePeriodico/Inicio'
import SecondPlantilla from './components/plantillasTypePeriodico/SecondPlantilla'
import ThirdPlantilla from './components/plantillasTypePeriodico/ThirdPlantilla'
import Router from './router/Router'

function App() {
  

  return (
  <div className='' >
    <BrowserRouter>
    
    <Router/>
    </BrowserRouter>
  
  </div>
  )
}

export default App
