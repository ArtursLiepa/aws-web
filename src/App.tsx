import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import StartUpComponent from './components/masterComponents/startupComponent/startUpComponent';
import HeroComponent from './components/workComponents/highlightComponent/heroComponent';
import "./App.css"


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartUpComponent/>}>
      <Route index element={<HeroComponent/>}></Route>        
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
