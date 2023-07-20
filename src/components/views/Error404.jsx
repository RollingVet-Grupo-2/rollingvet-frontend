import '../../css/error404.css'
import { Button } from 'react-bootstrap';
import perrito from '../../assets/Dog-Transparent-Background.png';

const Error404 = () => {
    return (
        <section className="text-center seccionPrincipal">
            <div>
                <div className='perrito'><img className='perrito_error404' src={perrito} alt="Error 404" /></div>
                <div className='contenedor-404 p-5 card-error'>
                    <h3>ERROR 404</h3>
                    <p>No se pudo encontrar la pagina solicitada.</p>
                    <p>Puedes elegir las siguientes opciones:</p>
                    <div className='flex-sm-column mb-5'>
                        <Button className='boton-error404 my-2 my-sm-0 mx-2'><b>VOLVER ATRAS</b></Button>
                        <Button className='boton-error404'><b>PAGINA DE INICIO</b></Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error404;