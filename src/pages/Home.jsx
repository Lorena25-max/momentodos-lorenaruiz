import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => { 
  return ( 
    <> 
      <Header /> 

      <section className="hero">
        <div className="hero-content">
          <h1>El arte de la paciencia</h1>

          <p>
            Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza.
          </p>

          <Link to="/reservas">
            <button>
              Reserva un taller
            </button>
          </Link>

        </div>
      </section>

      <br /><br /><br /><br /><br />

      <Footer /> 
    </> 
  ); 
}; 

export default Home;