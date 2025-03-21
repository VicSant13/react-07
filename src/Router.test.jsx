import { describe, expect, it,beforeEach } from "vitest";
import {render,screen, cleanup } from '@testing-library/react'
import {Router} from './Router'

describe("Router", () => {

    beforeEach(()=>{
        cleanup()
    })

    it('should render without problems',()=>{
        render(<Router routes={[]}></Router>)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes match',()=>{
        render(<Router routes={[]} defaultComponent={()=><h1>404</h1>}></Router>)
        //console.log(screen.debug())
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('Should render the component of the first route that matches',()=>{
        const routes = [
            {
                path:'/',
                Component:()=><h1>Home</h1>
            },
            { path:'/about',
                Component:()=><h1>About</h1>       
            }]

        render(<Router routes={routes}></Router>)
        expect(screen.getByText('Home')).toBeTruthy()
    })
    it('should navigate using links',()=>{
        
    })



});