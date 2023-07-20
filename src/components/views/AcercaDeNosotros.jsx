import "../../css/AcercaDeNosotros.css";
const AcercaDeNosotros = () => {
    const textTitleSectionAboutUs = "{Acerca de nosotros}";

    return (
        <>
            <section className="heroSection_container d-flex justify-content-center align-items-center">
                <h1 className="titleAboutUs text-light">{textTitleSectionAboutUs}</h1>
            </section>
            <article>
                <h2>Developers</h2>
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </article>
        </>
    );
};

export default AcercaDeNosotros;