import pareja from 'assets/img/team/fondo_pareja.png'
import parejanueva from 'assets/img/team/foto-pareja-2.png'

const stats = [
    { label: 'Fundado', value: '2015' },
    { label: 'Empleados', value: '5' },
    { label: 'Clientes Beta', value: '900' },
    { label: 'Sedes', value: '1' },
  ]
  
  export default function Testimonios() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto lg:mx-12 lg:grid lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={parejanueva}
                  alt=""
                />

                {/* Capa azul más sutil */}
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply opacity-50" />

                {/* Gradiente más natural y translúcido */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-700 via-indigo-500 to-transparent opacity-40" />

                <div className="relative px-8">
                  <br />
                  <br />
                  <br />
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-300"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Proteger tu patrimonio es asegurar la continuidad de tus sueños.
                      </p>
                    </div>

                    <footer className="mt-4">
                      <p className="text-base font-semibold text-indigo-100">
                        Gali Seguros , 2025
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Misión
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  Brindar soluciones en seguros que protejan el patrimonio y bienestar de nuestros clientes, 
                  ofreciendo asesoría integral y personalizada con un alto estándar de calidad, ética y compromiso. 
                  Nuestro propósito es ser el aliado estratégico que garantice tranquilidad y respaldo ante cualquier 
                  eventualidad.
                </p>
              </div>
              <h2 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Visión
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  Ser una empresa reconocida a nivel nacional por la excelencia en el servicio, 
                  la innovación en soluciones de seguros y la confianza que generamos en nuestros clientes, 
                  consolidándonos como una firma líder en asesoría y gestión de seguros todo riesgo y líneas complementarias.
                </p>
              </div>
              <h2 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Valores Corporativos
              </h2>
              <div className="mt-6 text-gray-500">
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>
                    <strong>Compromiso:</strong> trabajamos con dedicación y responsabilidad en cada gestión.
                  </li>
                  <li>
                    <strong>Transparencia:</strong> mantenemos relaciones claras, honestas y éticas con nuestros clientes y aliados.
                  </li>
                  <li>
                    <strong>Confiabilidad:</strong> actuamos con profesionalismo y respaldo, generando seguridad en cada asesoría.
                  </li>
                  <li>
                    <strong>Empatía:</strong> entendemos las necesidades de cada cliente y buscamos siempre la mejor alternativa para su protección.
                  </li>
                  <li>
                    <strong>Excelencia:</strong> buscamos la mejora continua en cada servicio que ofrecemos.
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }