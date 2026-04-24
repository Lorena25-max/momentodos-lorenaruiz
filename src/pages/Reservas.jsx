import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import "./Reservas.css";
import Swal from "sweetalert2";
import Button from "../components/Button";

const Reservas = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    nivel: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar en localStorage
    localStorage.setItem("reserva", JSON.stringify(form));

    // Alerta bonita (SweetAlert)
    Swal.fire({
      icon: "success",
      title: "Reserva enviada",
      text: "Nos pondremos en contacto contigo pronto"
    });

    // opcional: limpiar formulario
    setForm({
      nombre: "",
      email: "",
      nivel: "",
      mensaje: ""
    });
  };

  return (
    <>
      <Header />

      <section className="reservas">
        <div className="reservas-header">
          <h1>Reserva un Taller</h1>
          <p>
            Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
          </p>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="formulario">

            {/* NOMBRE */}
            <div className="form-group">
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                placeholder="Ej. Ana Silva"
                value={form.nombre}
                onChange={handleChange}
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            {/* NIVEL */}
            <div className="form-group">
              <label>Nivel de experiencia</label>
              <select
                name="nivel"
                value={form.nivel}
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
              </select>
            </div>

            {/* MENSAJE */}
            <div className="form-group">
              <label>Mensaje (Opcional)</label>
              <textarea
                name="mensaje"
                placeholder="¿Qué te gustaría aprender?"
                rows="4"
                value={form.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* BOTÓN (puedes usar cualquiera de los dos) */}

            {/* Opción 1: botón normal */}
            <button type="submit">Enviar</button>

            {/* Opción 2: componente Button */}
            {/* <Button text="Enviar solicitud" type="submit" /> */}

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Reservas;