import './Login.scss'

import { Header1 } from "../../Components/Header/Header"
import Archivum from "../../Assets/Main/archivum.svg"

function Login() {


  function handelLogin() {
    alert("Login Successfully!")
  }
  return (
    <>
      <Header1 />
      <div className="main">
        <div className="archivum">
          <img src={Archivum} alt="" />
        </div>
        <div className="button">
          <button onClick={handelLogin}>Login with MetaMask</button>
        </div>
      </div>

    </>
  )
}

export default Login
