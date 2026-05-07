import { Route, Routes } from 'react-router-dom'
import './index.css'
import Invest from './pages/Invest'
import Properties from './pages/Properties'
import About from './pages/About'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ViewAllInvestments from './pages/investments/viewAllInvestments/viewAllInvestments';
import logoImg from '/IMG-homePage/pro-logo.png'
function App() {
  const navLinks=[
    { name: 'Invest', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Properties', path: '/properties' }
  ]
const sections=[
    {
      title: "Links",
      items: ["Investment Terms", "Privacy Policy"]
    },
    {
      title: "Support",
      items: ["Contact Us","Help Center"]
    },
    {
      title: "Legal",
      items: ["Regional Compliance", "Terms of Use"]
    }
];
  return (
    <>
    <NavBar navLinks={navLinks} logo={logoImg}
    btnTitle="Get Started"
     />
    <Routes>
      <Route path='/' element={<Invest/>}/>
      <Route path='/properties' element={<Properties/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/viewAllInvestments' element={<ViewAllInvestments/>} />
      <Route />
    </Routes>
    <Footer title="Syria Rebuild"
    paragaraph="A leading platform for real estate investment management in Syria, licensed and operating according to international governance and transparency standards."
    sections={sections}
    />
    </>
  )
}
export default App
