import { Link } from "../Link"
export default function HomePage(){
  console.log('Importando el archivo HomePage.jsx')
    return (
      <>
        <h1>Home</h1>
        <p>Esta es una página de ejemplo para crear un react router desde cero</p>
        <Link to='/about'>Ir a sobre nosotros</Link>
      </>
    )
  }