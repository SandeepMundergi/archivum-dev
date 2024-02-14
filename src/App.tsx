import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Landing from './Pages/Landing/Landing'
// import Modal from './Components/Modal/Modal'
// import Test from './Components/Test/Test'
import Login from './Pages/Login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
