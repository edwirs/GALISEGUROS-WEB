import personalizada from 'assets/img/personalizada.png'
import confianza from 'assets/img/confianza.png'
import acompañamiento from 'assets/img/acompañamiento.png'

const incentives = [
  {
    name: 'Atención personalizada',
    imageSrc: personalizada,
    description:
      'Cada cliente recibe asesoría individual para encontrar el seguro que mejor se adapte a sus necesidades, con acompañamiento durante todo el proceso.',
  },
  {
    name: 'Respaldo y confianza',
    imageSrc: confianza,
    description:
      'Trabajamos con las principales aseguradoras del país, garantizando respaldo, cumplimiento y la tranquilidad de contar con una atención transparente y segura.',
  },
  {
    name: 'Acompañamiento continuo',
    imageSrc: acompañamiento,
    description:
      'Brindamos acompañamiento constante en tus pólizas, recordatorios de renovación y asesoría en la actualización de coberturas para mantener siempre tu protección al día.',
  },
]
  
  export default function Incentivos() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 max-w-full py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Construimos nuestro negocio sobre la base del servicio al cliente.
              </h2>
              <p className="mt-4 text-gray-500">
                En <span className="font-semibold text-indigo-700">Gali Seguros</span> creemos que la atención personalizada y la transparencia 
                son la clave para ofrecer tranquilidad a nuestros clientes. 
                Nos enfocamos en entender tus necesidades para brindarte la mejor protección, 
                ya sea en tu vehículo, tu hogar, tu empresa o tu vida.  
                Nuestro compromiso es acompañarte en cada etapa, garantizando un servicio cercano, ágil y confiable.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }