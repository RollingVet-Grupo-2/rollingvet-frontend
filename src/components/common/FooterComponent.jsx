import "../../css/footer.css";
import Logo from "../../assets/rollingVetLogo.svg";
const FooterComponent = () => {
    return (
        <footer className="footer">
            <section className="container">
                <div className="row">
                    <article className="col-md-6">
                        <img src={Logo} alt="Logo RollingVet" className="logo"/>
                        <div>
                        <i class="bi bi-facebook"></i>
                        </div>
                    </article>
                    <article className="col-md-6">
                        <h3>TEXTO</h3>
                    </article>
                </div>
            </section>
        </footer>
    );
};

export default FooterComponent;