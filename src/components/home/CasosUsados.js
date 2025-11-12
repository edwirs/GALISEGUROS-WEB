import cliente1 from 'assets/img/clientes/cliente1.jpg'
import cliente2 from 'assets/img/clientes/cliente2.webp'
import cliente3 from 'assets/img/clientes/cliente3.png'
import cliente4 from 'assets/img/clientes/cliente4.png'
import cliente5 from 'assets/img/clientes/testimonio5.jpg'
import cliente6 from 'assets/img/clientes/testimonio6.jpg'
import cliente7 from 'assets/img/clientes/testimonio7.webp'

const posts = [
    {
      title: 'Contenta con Gali Seguros',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Estoy muy agradecida con esta  compañía, son muy cumplidos y prestan una muy buena asesoría. Los felicito y volveré a contratar con ustedes.',
      date: 'Mar, 2019',
      datetime: '2019-03-16',
      imageUrl: cliente1,
      readingTime: '',
      author: {
        name: 'Blanca Verano Chacon',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Confianza con Gali Seguros',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Gali Seguros ha sido un aliado confiable durante años. Su atención es oportuna, clara y eficiente, y siempre me han brindado tranquilidad en la gestión de mis seguros. Valoro mucho su compromiso y seriedad.',
      date: 'Jun, 2017',
      datetime: '2017-06-10',
      imageUrl: cliente2,
      readingTime: '',
      author: {
        name: 'María del Carmen Rojas',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Estimados Gali Seguros',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Les escribo para expresar mi sincero agradecimiento por el excelente servicio que me han brindado. Su profesionalismo, atención y rápida respuesta han superado mis expectativas y hacen que sea un placer contar con su respaldo. Gracias por su buen trabajo. Saludos cordiales.',
      date: 'Feb, 2021',
      datetime: '2021-02-01',
      imageUrl: cliente3,
      readingTime: '',
      author: {
        name: 'Cesar Diaz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Cumplimiento con Gali Seguros',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Cumplen lo que prometen, siempre contestan las dudas o inquietudes y acompañan en todo el proceso, antes y durante la vigencia de las coberturas. Recomendados 10/10.',
      date: 'Sep, 2023',
      datetime: '2023-09-15',
      imageUrl: cliente4,
      readingTime: '',
      author: {
        name: 'Mauricio Hernandez',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Excelencia en productos',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Buena y rápida atención. Llevo muchos años trabajando con Gali seguros y esta empresa marca la diferencia en cuanto al servicio del cliente y eficiencia en sus productos.',
      date: 'Ene, 2022',
      datetime: '2023-09-15',
      imageUrl: cliente5,
      readingTime: '',
      author: {
        name: 'Maria de pilar Gómez',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'La mejor asesoria',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'En las mejores manos no he podido estar Gali seguros la mejor empresa de seguros. Muy profesionales, serios y atentos en todo lo que necesiten, máxima eficiencia. La recomiendo.',
      date: 'Dic, 2023',
      datetime: '2023-09-15',
      imageUrl: cliente6,
      readingTime: '',
      author: {
        name: 'Andres Pineda',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Un gran equipo',
      href: '#',
      category: { name: 'Articulo', href: '#' },
      description:
        'Gran equipo, gente con calidad humana dispuestos a resolver problemas, les agradezco mucho la atención y rapidez con la que me dan solucion a lo que nececesite.',
      date: 'Mar, 2024',
      datetime: '2023-09-15',
      imageUrl: cliente7,
      readingTime: '',
      author: {
        name: 'Daniela Roldan',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  
  export default function CasosUsados() {
    return (
      <div className="relative bg-gray-50 px-4 pt-8 pb-10 sm:px-6 lg:px-8 lg:pt-12 lg:pb-16">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto lg:mx-12 max-w-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Algunos de nuestros Clientes</h2>
            
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img
                          className="h-10 w-10 rounded-full blur-sm hover:blur-none transition duration-300 ease-in-out"
                          src={post.author.imageUrl}
                          alt={post.author.name}
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }