import { useState,useEffect } from 'react'

import HomePage from './pages/Home'
import About from './pages/About'
import { EVENTS } from './const'
import './App.css'

const routes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path:'/about',
    Component: About
  }
]


function Router({routes=[],defaultComponent: DefaultComponent = ()=>null}){

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(()=>{
    const onLocationChange = ()=>{
      setCurrentPath(window.location.pathname)
    }

    //escucha los eventos que se despachan en la función navigate
    window.addEventListener(EVENTS.PUSHSTATE,onLocationChange)
    window.addEventListener(EVENTS.POPSTATE,onLocationChange)

    return ()=>{
      window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE,onLocationChange)
    }

  },[])

  const Page = routes.find(({path})=> path === currentPath)?.Component

  return Page ?<Page/> :<DefaultComponent/>
}



function App() {

  


  return (
    <main>      
      <Router routes={routes}></Router>      
    </main>
  )
}

export default App
