
import { EVENTS } from './const'
import { useState,useEffect,Children } from 'react'
import { match } from 'path-to-regexp'

export function Router({children,routes=[],defaultComponent: DefaultComponent = ()=><h1>404</h1>}){
    console.log(children)
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
  
    let routeParams = {}

    // add routes from children <Route/> Components
    const routesFromChildren = Children.map(children,({props,type})=>{
        
        const {name} = type
        const isRoute = name === 'Route'
        
        return isRoute ? props : null
    })
    console.log(routesFromChildren)


    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
    // old const Page = routes.find(({path}) => path === currentPath)?.Component
    const Page = routes.find(({path}) => {
        if(path === currentPath)return true

        //decodifica el slang :query
        //@path = lo que s equiere matchear
        //@2 forma de decodificar
        const matcherUrl = match(path,{decode:decodeURIComponent})
        const matched = matcherUrl(currentPath)

        if(!matched)return false

        routeParams = matched.params // {query:'valor'} //  /search/javascript
        return true
    })?.Component

    return Page 
           ? <Page routeParams={routeParams}/> 
           : <DefaultComponent routeParams={routeParams}/>
  }