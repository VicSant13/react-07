import { EVENTS } from './const'

export function navigate(href){
  //refresca la url sin volver a recargar toda la página
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)

  window.dispatchEvent(navigationEvent)
}

export function Link({target,to,...props}){
    const handleClick = (event)=> {
    
    const isMainEvent = event.button === 0 //botón principal
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageable = target === undefined || target ==='_self'

        if(isMainEvent && isManageable && !isModifiedEvent){
            event.preventDefault() //evita que se recargue la página (su comportamiento por default)
            navigate(to)
        }                    
    }
    return <a onClick={handleClick} href={to} target={target} {...props}/>
}