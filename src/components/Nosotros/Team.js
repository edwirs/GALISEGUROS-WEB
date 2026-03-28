import lilian from 'assets/img/team/lilian_fondo_nuevo.png'
import gabriel from 'assets/img/team/gabriel_final.png'
import luis from 'assets/img/team/luis_gali.png'

const people = [
  {
    name: 'Lilian Quiroga',
    role: 'Gerente General - GL',
    imageUrl: lilian,
    whatsappUrl: 'https://wa.me/573227354638', // <-- cambia por número real
    instagramUrl: 'https://www.instagram.com/gali.seguros?igsh=MWs0cjRmNnFpaHVvOQ==', // <-- cambia por URL real
  },
  {
    name: 'Gabriel Beltran',
    role: 'Gerente Administrativo - GL',
    imageUrl: gabriel,
    whatsappUrl: 'https://wa.me/573027817089',
    instagramUrl: 'https://www.instagram.com/gali.seguros?igsh=MWs0cjRmNnFpaHVvOQ==',
  },
  {
    name: 'Luis Alfonso Quiroga',
    role: 'Dir. Administrativo Planeación - GL',
    imageUrl: luis,
    whatsappUrl: 'https://wa.me/573227354638', // <-- cambia por número real
    instagramUrl: 'https://www.instagram.com/gali.seguros?igsh=MWs0cjRmNnFpaHVvOQ==', // <-- cambia por URL real
  },
]

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* --- Título y texto alineados a la izquierda --- */}
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nuestro Equipo
            </h2>
          </div>

          {/* --- Párrafo ancho completo --- */}
          <div className="w-full">
            <p className="text-xl text-gray-500">
              Nuestro equipo está compuesto por personas comprometidas con la compañía, 
              con amplios conocimientos sobre los productos que ofrecemos. 
              Ellos son los pilares fundamentales para que nuestra compañía sea líder 
              en calidad y cumplimiento.
            </p>
          </div>

          {/* --- SOLO las tarjetas centradas --- */}
          <ul
            role="list"
            className="mx-auto flex flex-wrap justify-center gap-16 max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name} className="w-72 text-center">
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-3">
                    <img
                      className="rounded-lg object-cover shadow-lg mx-auto"
                      src={person.imageUrl}
                      alt={person.name}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>

                    {/* --- ICONOS WhatsApp e Instagram --- */}
                    <ul role="list" className="flex justify-center space-x-6">
                      {/* WhatsApp */}
                      <li>
                        <a
                          href={person.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                        >
                          <span className="sr-only">WhatsApp</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12.04 2C6.52 2 2 6.18 2 11.39c0 2.23.86 4.27 2.3 5.87L2 22l4.97-1.52a10.4 10.4 0 005.07 1.3c5.52 0 10.04-4.18 10.04-9.39S17.56 2 12.04 2zm0 17.03a8.4 8.4 0 01-4.28-1.18l-.31-.19-2.95.9.97-2.8-.2-.29a7.31 7.31 0 01-1.46-4.34c0-4.08 3.42-7.39 7.63-7.39 4.22 0 7.64 3.31 7.64 7.39 0 4.08-3.42 7.39-7.64 7.39z" />
                            <path d="M16.61 14.61c-.27-.13-1.63-.8-1.88-.89-.25-.09-.43-.13-.61.13-.18.27-.7.89-.85 1.07-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.33-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.94.92-.94 2.23 0 1.31.96 2.57 1.09 2.75.13.18 1.89 2.91 4.6 3.99 2.71 1.08 2.71.72 3.2.68.49-.04 1.63-.66 1.86-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.31z" />
                          </svg>
                        </a>
                      </li>

                      {/* Instagram */}
                      <li>
                        <a
                          href={person.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                        >
                          <span className="sr-only">Instagram</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5A3.5 3.5 0 1012 15a3.5 3.5 0 000-7zm5.25-.75a1 1 0 110 2 1 1 0 010-2z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
