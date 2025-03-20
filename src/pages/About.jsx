import { Link } from "../Link"
export default function About(){
  return (
    <>
      <h1>About</h1>
      <img
        src='https://www.rockcontent.com/es/wp-content/uploads/sites/3/2020/05/que-es-un-blog-1.png'
        alt='Blog'
      >
      
      </img>
      <p>About Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque, libero odio, modi magni itaque ea, molestiae cum sunt suscipit fugit obcaecati est ab vel quisquam exercitationem voluptate tenetur minima?</p>
      <Link to='/'>Ir a Home</Link>
    </>
  )
}