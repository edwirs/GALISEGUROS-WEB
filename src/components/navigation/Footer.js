import { connect } from 'react-redux';
import galiseguros from 'assets/img/palabra_gali_seguros_azul_sinfondo.png';
import escudo from 'assets/img/escudo_gali_seguros_azul_sinfondo.png';
import escudoinvertido from 'assets/img/escudo_gali_seguros_blanco.jpg';

const currentYear = new Date().getFullYear();

function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1A5i76EbaP/?mibextid=wwXIfr',
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12
              c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797
              c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195
              2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63
              1.562V12h2.773l-.443 2.89h-2.33v6.988
              C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/gali.seguros?igsh=MWs0cjRmNnFpaHVvOQ==',
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06
              1.064.049 1.791.218 2.427.465a4.902 4.902 0
              011.772 1.153 4.902 4.902 0 011.153 1.772
              c.247.636.416 1.363.465 2.427.048 1.067.06
              1.407.06 4.123v.08c0 2.643-.012 2.987-.06
              4.043-.049 1.064-.218 1.791-.465 2.427a4.902
              4.902 0 01-1.153 1.772 4.902 4.902 0
              01-1.772 1.153c-.636.247-1.363.416-2.427.465
              -1.067.048-1.407.06-4.123.06h-.08
              c-2.643 0-2.987-.012-4.043-.06
              -1.064-.049-1.791-.218-2.427-.465a4.902
              4.902 0 01-1.772-1.153 4.902 4.902 0
              01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427
              -.047-1.024-.06-1.379-.06-3.808v-.63
              c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427
              a4.902 4.902 0 011.153-1.772A4.902 4.902 0
              015.45 2.525c.636-.247 1.363-.416
              2.427-.465C8.901 2.013 9.256 2 11.685
              2h.63z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-100 via-white to-gray-100 border-t border-gray-200 mt-16 shadow-inner">
      <div className="mx-auto w-full max-w-7xl px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0">
          {/* Logo + texto */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={galiseguros}
              alt="Gali Seguros Logo"
              width={160}
              height={80}
              className="opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="text-gray-600 text-sm mt-2">
              Soluciones integrales en seguros y asesoría.
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1A5i76EbaP/?mibextid=wwXIfr"
              className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125 duration-300"
              aria-label="Facebook"
            >
              <svg
                className="h-6 w-6 drop-shadow-md"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12
                  c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797
                  c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195
                  2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63
                  1.562V12h2.773l-.443 2.89h-2.33v6.988
                  C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/gali.seguros?igsh=MWs0cjRmNnFpaHVvOQ=="
              className="transition-transform transform hover:scale-125 duration-300"
              aria-label="Instagram"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f58529" />
                    <stop offset="25%" stopColor="#dd2a7b" />
                    <stop offset="50%" stopColor="#8134af" />
                    <stop offset="75%" stopColor="#515bd4" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#instaGradient)"
                  d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm9 1.8h-9a3.7 3.7 0 00-3.7 3.7v9a3.7 3.7 0 003.7 3.7h9a3.7 3.7 0 003.7-3.7v-9a3.7 3.7 0 00-3.7-3.7zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm4.8-.9a.9.9 0 110 1.8.9.9 0 010-1.8z"
                />
              </svg>
            </a>
          </div>

          {/* Año y derechos */}
          <div className="text-gray-700 text-sm font-medium text-center md:text-right">
            &copy; {currentYear}{' - '}
            <span className="font-semibold">GALI SEGUROS & CIA LTDA</span>
            <br />
            <span className="text-xs text-gray-500">
              NIT 902024636-1 · Todos los derechos reservados
            </span>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="mt-8 border-t border-gray-300"></div>

        {/* Contacto */}
        <div className="text-center text-gray-700 text-sm mt-4 font-semibold">
          <a
            href="tel:+573227354638"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            📞 322 735 4638
          </a>{' '}
          |{' '}
          <a
            href="tel:+573186008106"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            318 600 8106
          </a>{' '}
          |{' '}
          <a
            href="mailto:lilianmq@galiseguros.com"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            ✉ lilianmq@galiseguros.com
          </a>
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    </footer>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
