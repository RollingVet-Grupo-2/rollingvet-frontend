import '../../css/error404.css'
import imagen404 from '../../assets/ImagenError404.jpg'
const Error404 = () => {
    return (
        <section className="text-center">
        <img src={imagen404} className='perrito_error404' alt="Error 404" />
        </section>
    );
};

export default Error404;