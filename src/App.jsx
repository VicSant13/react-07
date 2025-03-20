import HomePage from './pages/Home'
import About from './pages/About'
import {Router} from './Router'
import './App.css'
import Page404 from './pages/404'
import { Route } from './Route'


const routes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path:'/about',
    Component: About
  },
  {
    path:'/search/:query',
    Component: Router
  }
]

function App() {
  return (
    <main>      
      <Router routes={routes} defaultComponent={Page404}>
        
        <Route path="/about" Component={About}/>
          
      </Router>      
    </main>
  )
}

export default App
