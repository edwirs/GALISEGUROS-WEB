import allianz from 'assets/img/aliados/Allianz-logo.png'
import axa from 'assets/img/aliados/AXA_COLPATRIA.png'
import equidad from 'assets/img/aliados/EQUIDAD.png'
import hdi from 'assets/img/aliados/HDI-SEGUROS-COLOR-1.png'
import mapfre from 'assets/img/aliados/Mapfre_logo.svg.png'
import previsora from 'assets/img/aliados/PrevisoraCurrent.webp'
import qualitas from 'assets/img/aliados/qualitas.png'
import sura from 'assets/img/aliados/Seguros_SURA_Logo.svg.png'
import bolivar from 'assets/img/aliados/SEGUROSBOLIVAR.png'
import estado from 'assets/img/aliados/SEGUROSDELESTADO.png'

function Clients(){
    return(
        <div className="bg-white">
                    <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                        <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Aliados de confianza en todo el territorio nacional
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            En Gali Seguros acompañamos a clientes particulares y empresariales a nivel nacional, 
                            brindando asesoría integral en seguros y protección patrimonial. 
                            Nuestro compromiso es ofrecer soluciones confiables que garanticen tranquilidad y respaldo a cada familia y negocio de la región.
                            Contamos con alianzas fuertes de las mejores aseguradoras del pais, con el fin que te sientas como en casa.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a
                                href="/contacto"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
                            >
                                Contactanos
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={axa}
                            alt="Workcation"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img className="max-h-12" src={hdi} alt="Mirage" />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img className="max-h-12" src={estado} alt="Tuple" />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={mapfre}
                            alt="Laravel"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={equidad}
                            alt="StaticKit"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={qualitas}
                            alt="Statamic"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={allianz}
                            alt="Statamic"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={bolivar}
                            alt="Statamic"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={sura}
                            alt="Statamic"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-12"
                            src={previsora}
                            alt="Statamic"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    )
}

export default Clients