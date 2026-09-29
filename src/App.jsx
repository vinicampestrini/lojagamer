import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Jogos from './pages/Jogos'
import Contato from './pages/Contato'
import Login from "./pages/Login"
import Error from './pages/Error'


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414} p-1">
        <header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contato" element={<Contato/>} />
            <Route path="/jogos" element={<Jogos/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Error/>} />   
          </Routes>
      </div>
    </Router>
  )
}

export default App
