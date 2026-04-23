import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Filosofia = () => {
  return (
    <>
      <Header />

      <section className="container" style={{ padding: "80px 0" }}>
        <h1>Menos es más</h1>
        <p>Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales. Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.</p>
        <br />
        <br />

        <p>
          En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la intervención humana y la expresión salvaje de la naturaleza.
        </p>

        {/* <Button text="Reserva un taller" /> */}
      </section>

      <Footer />
    </>
  );
};

export default Filosofia;