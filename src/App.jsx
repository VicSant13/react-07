import {lazy,Suspense} from 'react'

//import HomePage from './pages/Home'
//import About from './pages/About'
import {Router} from './Router'  // imports estaticos
import Page404 from './pages/404'
import { Route } from './Route'
import './App.css'

//imports dinamicos
/** import('./pages/About.jsx) */
const LazyAboutPage = lazy(()=>import('./pages/About'))
const LazyHomePage = lazy(()=>import('./pages/Home'))



const routes = [
  {
    path:'/',
    Component: LazyHomePage
  },
  {
    path:'/:lang/about',
    Component: LazyAboutPage
  },
  {
    path:'/search/:query',
    Component: Router
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Router routes={routes} defaultComponent={Page404}>        
        <Route path="/about" Component={LazyAboutPage}/>
        <Route path="/" Component={LazyHomePage}/>
      </Router>
      </Suspense>            
    </main>
  )
}

export default App
