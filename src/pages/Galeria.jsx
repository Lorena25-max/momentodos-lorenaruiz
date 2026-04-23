import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "./Galeria.css";

const Galeria = () => {
  return (
    <>
      <Header />

      <section className="container galeria">
        <h1>Nuestra Colección</h1>
        <p>Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia</p>

        <div className="grid">
          <Card title="Arce Japonés" />
          <Card title="Pino Negro" />
          <Card title="Ficus Retusa" />
          <Card title="Olivo Chino" />
          <Card title="Bambú" />
          <Card title="Azalea" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Galeria;