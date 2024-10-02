import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ValidacionDoctor.css";

function ValidacionDoctor() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "soydoctor123") {
      navigate("/registerdoctor"); // Redirige al registro de doctores si la contraseña es correcta
    } else {
      setErrorMessage("La contraseña es incorrecta, por favor intente de nuevo.");
    }
  };

  return (
    <div className="validacion-doctor-container">
      <h2 className="validacion-doctor-title">Validación de Empresa</h2>
      <form className="validacion-doctor-form" onSubmit={handleSubmit}>
        <label className="validacion-doctor-label" htmlFor="password">Contraseña de la empresa:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="validacion-doctor-input"
          placeholder="Ingrese la contraseña"
        />
        <button type="submit" className="validacion-doctor-button">Validar</button>
        {errorMessage && <p className="validacion-doctor-error">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default ValidacionDoctor;
