import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="App">
        <NavBar></NavBar>
        <ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>
        <ItemCount />
     </div>
   
  )
}

export default App
