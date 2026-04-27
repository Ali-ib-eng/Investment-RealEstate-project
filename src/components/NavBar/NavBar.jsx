import { Link } from "react-router-dom"
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
      <li><Link to='/'>Invest</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/properties'>Properties</Link></li>
    </div>
  )
}

export default NavBar
