import { Route, Routes } from 'react-router-dom'
import './index.css'
import Invest from './pages/Invest'
import Properties from './pages/Properties'
import About from './pages/About'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ViewAllInvestments from './pages/viewAllInvestments/viewAllInvestments';
import UserDashboard from './components/userDashboard/userDashboard';
import logoImg from '/IMG-homePage/pro-logo.png'
import { useEffect, useState } from 'react'
import GetStarted from './pages/GetStarted'
import UpdatePassword from './components/updateAccount/updateAccount'

function App() {
  const navLinks=[
    { name: 'Invest', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Properties', path: '/properties' }
  ]
const sections=[
    {
      title:"Links",
      items:["Investment Terms", "Privacy Policy"]
    },
    {
      title:"Support",
      items:["Contact Us","Help Center"]
    },
    {
      title:"Legal",
      items:["Regional Compliance", "Terms of Use"]
    }
];
const [theme,setTheme]=useState(localStorage.getItem("theme") ||"light");
useEffect(()=>{localStorage.setItem("theme",theme)},[theme])
const changeTheme=()=>{
  //console.log("hello i am",theme)
  setTheme((prevTheme)=>{
    return prevTheme==="light"? "dark" :"light";
  })
  }
  return (
    <div className={` app ${theme}`}>
    <NavBar navLinks={navLinks} logo={logoImg}
    btnTitle="Get Started"
    theme={theme}
    changeTheme={changeTheme}
     />     
    <Routes>
      <Route path='/' element={<Invest/>}/>
      <Route path='/properties' element={<Properties/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/viewAllInvestments' element={<ViewAllInvestments/>} />
      <Route path='/getStarted' element={<GetStarted/>} />
      <Route path='/userDashboard' element={<UserDashboard/>} />
      <Route path='/updatePassword' element={<UpdatePassword/>} />
      <Route />
    </Routes>
    <Footer title="Syria Rebuild"
    paragaraph="A leading platform for real estate investment management in Syria, licensed and operating according to international governance and transparency standards."
    sections={sections}
    />
    </div>
  )
}
export default App
