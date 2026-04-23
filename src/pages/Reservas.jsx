import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Reservas = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    localStorage.setItem("reserva", JSON.stringify(form));
  };

  return (
    <>
      <Header />

      <section className="container" style={{ padding: "80px 0" }}>
        <h1>Reserva un Taller</h1>
        <p>Déjanos tus datos y te contactaremos.</p>

        <form onSubmit={handleSubmit}>
          <input name="nombre" placeholder="Nombre" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <textarea name="mensaje" placeholder="Mensaje" onChange={handleChange}></textarea>

          <button type="submit">Enviar Solicitud</button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Reservas;