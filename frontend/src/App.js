import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    alert(data.message || "Respuesta recibida");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Inicio de Sesión</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default App;

