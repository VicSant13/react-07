import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const NAVIGATION_EVENT = 'pushState'

function navigate(href){
  //refresca la url sin volver a recargar toda la página
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAVIGATION_EVENT)

  window.dispatchEvent(navigationEvent)
}

function HomePage(){
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un react router desde cero</p>
      <a href='/about'>Ir a sobre nosotros</a>
    </>
  )
}

function About(){
  return (
    <>
      <h1>About</h1>
      <img
        src='https://www.rockcontent.com/es/wp-content/uploads/sites/3/2020/05/que-es-un-blog-1.png'
        alt='Blog'
      >
      
      </img>
      <p>About Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque, libero odio, modi magni itaque ea, molestiae cum sunt suscipit fugit obcaecati est ab vel quisquam exercitationem voluptate tenetur minima?</p>
      <a href='/'>Ir a Home</a>
    </>
  )
}


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      
      { currentPath === '/' && <HomePage/>}
      { currentPath === '/about' && <About/>}
      
    </main>
  )
}

export default App
