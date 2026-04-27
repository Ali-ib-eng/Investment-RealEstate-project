import { Route, Routes } from 'react-router-dom'
import './index.css'
import Invest from './pages/Invest'
import Properties from './pages/Properties'
import About from './pages/About'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
    <h1>hello from app</h1>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Invest/>}/>
      <Route path='/properties' element={<Properties/>} />
      <Route path='/about' element={<About/>} />
      <Route />
    </Routes>
    <Footer/>
    </>
  )
}
export default App
