import React from "react";
import { Link } from "react-router-dom";
import "./HeaderPaciente.css";

function HeaderPaciente() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Paciente</h1>
        <nav className="nav-buttons">
          <Link to="/perfilpaciente" className="nav-button">Perfil</Link>
          <Link to="/sacarcita" className="nav-button">Sacar Cita</Link>
          <Link to="/tucita" className="nav-button">Tu cita</Link>
          <Link to="/buscar" className="nav-button">Buscar</Link>
          <Link to="/" className="nav-button">Cerrar sesion</Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderPaciente;