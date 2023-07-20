import '../../css/error404.css'
import imagen404 from '../../assets/ImagenError404.jpg'
import { Button } from 'react-bootstrap';
const Error404 = () => {
    return (
        <section className="text-center errorSection">
        <img src={imagen404} className='perrito_error404 img-fluid' alt="Error 404" />
        <div className='flex-sm-column mb-5'>
            <Button className='boton-error404 mx-2'>VOLVER ATRAS</Button>
            <Button className='boton-error404'>PAGINA DE INICIO</Button>
        </div>
        </section>
    );
};

export default Error404;