import { Link } from "../Link"

const i18n = {
  es: {
    title: 'Sobre nosotros',
    text: 'Sobre nosotros Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque, libero odio, modi magni itaque ea, molestiae cum sunt suscipit fugit obcaecati est ab vel quisquam exercitationem voluptate tenetur minima?',
    linkText: 'Ir a'
  },
  en: {
    title: 'About',
    text: 'About Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque, libero odio, modi magni itaque ea, molestiae cum sunt suscipit fugit obcaecati est ab vel quisquam exercitationem voluptate tenetur minima?',
    linkText: 'Go to'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}


export default function About({routeParams}){
  console.log('Importando el archivo About.jsx')
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <img
        src='https://www.rockcontent.com/es/wp-content/uploads/sites/3/2020/05/que-es-un-blog-1.png'
        alt='Blog'
      >
      
      </img>
      <p>{i18n.text}</p>
      <Link to='/'>{i18n.linkText} {i18n.title}</Link>
    </>
  )
}