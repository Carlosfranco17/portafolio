
import './App.css'
import About from './component/about/About'
import Home from './component/home/Home'
import Nav from './component/nav/Nav'
import Projects from './component/projects/Projects'

function App() {
  

  return (
    <main className='main'>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
    </main>
  )
}

export default App
