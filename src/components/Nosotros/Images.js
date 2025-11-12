import sacos from 'assets/img/Nosotros/seguros1.jpg'
import servicios_randols from 'assets/img/Nosotros/seguros3.jpg'

function Images(){
    return(
        <div className="w-full">
            <div className="grid grid-cols-2 gap-8">

            <img src={sacos}
             className="w-full h-96 object-cover"/>
            <img src={servicios_randols}
             className="w-full h-96 object-cover"/>
            </div>
        </div>
    )
}
export default Images