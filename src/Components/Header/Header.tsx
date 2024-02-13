
import logo from "../../Assets/Main/logo.svg";
import './Style.scss'
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
              <img src={logo} alt="logo"/>
        </div>
    </div>
  )
}

export default Header