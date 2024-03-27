import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Features from "./components/Features"
import Projects from "./components/Projects"

function App() {
  
  return (
    <>
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/features' element={ <Features /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
