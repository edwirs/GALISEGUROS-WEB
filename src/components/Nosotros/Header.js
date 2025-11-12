

import carro from 'assets/img/carro_gali_sinfondo.png'

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
      { name: 'Contacto', href: '/contacto' },
  ],
  company: [
      { name: 'Casos', href: '/casos' },
      { name: 'Servicios', href: '/servicios' },
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Carreras', href: '/carreras' },
      { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    // === WHATSAPP ===
    {
      name: 'WhatsApp',
      href: 'https://wa.me/573227354638',
      icon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
          <path
            fill="#25D366"
            d="M20.52 3.48A11.8 11.8 0 0012 0a11.8 11.8 0 00-8.52 3.48A11.8 11.8 0 000 12c0 2.09.54 4.12 1.57 5.92L0 24l6.27-1.64A11.93 11.93 0 0012 24a11.8 11.8 0 008.52-3.48A11.8 11.8 0 0024 12a11.8 11.8 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.05-1.37l-.36-.21-3.72.97.99-3.62-.23-.37A9.94 9.94 0 012.07 12a9.9 9.9 0 012.9-7.05A9.9 9.9 0 0112 2a9.9 9.9 0 017.05 2.9A9.9 9.9 0 0122 12a9.9 9.9 0 01-2.9 7.05A9.9 9.9 0 0112 22zm5.41-7.17c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.65.15s-.75.95-.92 1.15-.34.22-.63.07a8.16 8.16 0 01-2.39-1.47 8.98 8.98 0 01-1.67-2.05c-.18-.32-.02-.49.13-.64.14-.14.32-.37.47-.55.16-.18.21-.3.32-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.56-.9-2.14-.24-.58-.48-.5-.65-.5h-.56c-.18 0-.47.07-.72.35s-.94.92-.94 2.25s.97 2.62 1.1 2.8c.14.18 1.9 2.9 4.6 4.07c.64.28 1.14.45 1.53.57c.64.2 1.22.17 1.68.1c.51-.08 1.57-.64 1.8-1.26c.23-.62.23-1.14.16-1.26c-.07-.12-.26-.2-.55-.35z"
          />
        </svg>
      ),
    },

    // === FACEBOOK ===
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1A5i76EbaP/?mibextid=wwXIfr',
      icon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
          <path
            fill="#1877F2"
            d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.028 4.388 11.037 10.125 11.954v-8.457H7.078V12.07h3.047V9.412c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.958h-1.513c-1.49 0-1.953.926-1.953 1.874v2.26h3.328l-.532 3.5h-2.796v8.457C19.612 23.11 24 18.1 24 12.073z"
          />
        </svg>
      ),
    },

    // === INSTAGRAM ===
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/gali.seguros?igsh=MWs0cjRmNnFpaHVvOQ==',
      icon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
          <defs>
            <linearGradient id="igGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#feda75" />
              <stop offset="25%" stopColor="#fa7e1e" />
              <stop offset="50%" stopColor="#d62976" />
              <stop offset="75%" stopColor="#962fbf" />
              <stop offset="100%" stopColor="#4f5bd5" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5.2" fill="url(#igGradient)" />
          <circle cx="12" cy="12" r="3.6" fill="none" stroke="#fff" strokeWidth="1.6" />
          <circle cx="17.6" cy="6.4" r="1.05" fill="#fff" />
        </svg>
      ),
    },

    // === TIKTOK ===
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@gali.seguros?_r=1&_t=ZS-91KJwJ0MAGG',
      icon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
          <path
            fill="#000000"
            d="M16 8.04a5.29 5.29 0 003.09 1.01V6.14a3.28 3.28 0 01-1.73-.48 3.3 3.3 0 01-1.36-1.51 3.31 3.31 0 01-.25-1.45h-2.94v11.14a2.21 2.21 0 01-4.42 0 2.2 2.2 0 012.22-2.19 2.3 2.3 0 01.68.1V8.45a5.24 5.24 0 00-.69-.05A5.16 5.16 0 006.5 13.54 5.15 5.15 0 0011.63 18.7a5.15 5.15 0 005.15-5.15V8.04h-.78z"
          />
          <path
            fill="#EE1D52"
            d="M12 2h2.3a5.2 5.2 0 004.8 3.3v2.3A7.5 7.5 0 0112 2z"
          />
          <path
            fill="#69C9D0"
            d="M10 9.5v5a2 2 0 01-4 0 5 5 0 014-5z"
          />
        </svg>
      ),
    },
  ],
}
function Header() {
  return (
    <main>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 pt-16 pb-4 sm:pt-20 sm:pb-6 lg:pt-28 lg:pb-8">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight pb-10">
              Acerca de Nosotros
            </h1>
            <p className="mt-10 text-lg sm:text-xl max-w-3xl leading-7 text-black">
              En <span className="font-semibold text-indigo-700">Gali Seguros</span> somos un equipo de asesores especializados con 10 años de experiencia,
              enfocados en ofrecer soluciones integrales en seguros de vehículos, vida y empresas.
              Nuestro compromiso es brindarte una <span className="font-semibold text-indigo-700">asesoría personalizada</span> y transparente,
              siempre pensando en proteger lo que más valoras.
            </p>

            <p className="mt-6 text-lg text-gray-700 max-w-3xl leading-7">
              Trabajamos junto a las mejores aseguradoras del país para garantizar respaldo, confianza
              y tranquilidad en cada paso.
            </p>

            <div className="mt-10 flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-orange-500 transition duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-8 w-8" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Imagen decorativa igual que en Home */}
            <div className="absolute inset-x-0 top-[200px] -z-10 bg-white overflow-hidden">
                        <img 
                          src={carro}
                          className="
                            w-auto 
                            h-[60px]        /* celulares */
                            sm:h-[120px]     /* tablets */
                            md:h-[180px]     /* pantallas medianas */
                            lg:h-[200px]     /* pantallas grandes */
                            object-contain object-top 
                            ml-auto 
                            translate-x-[-60px] translate-y-[-20px]
                          "
                          alt='Decoración'
                        />
                      </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header