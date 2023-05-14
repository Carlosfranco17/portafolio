
import './App.css'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Home from './component/home/Home'
import Nav from './component/nav/Nav'
import Projects from './component/projects/Projects'
import Technology from './component/technology/Technology'

function App() {
  

  return (
    <main className='main'>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Technology/>
      <Contact/>
    </main>
  )
}

export default App
