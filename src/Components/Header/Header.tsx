
import logo from "../../Assets/Main/logo.svg";
import './Header.scss'

import profile from "../../Assets/Profile/default_pic.png"


export const Header1 = () => {
  return (
    <div className="header1">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

// export  Header1

export const Header2 = () => {
  return (
    <div className="header2">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="line"></div>
      <div className="profile">
        <img src={profile} alt="logo" />
      </div>
    </div>
  )
}

// export Header2 Header1