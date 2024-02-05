import React from "react";
import { useAuth } from "../context/AuthContext";

// Componente Sidebar
const Sidebar = () => {
  return (
    <div id="sidebar">
      <div id="logo">
        <p> <img src="../../../img/3135768.png" alt="Logo de la Empresa" /> </p>
        <p><span>Administrador</span></p>
        <p>&nbsp;</p>
      </div>
      <div id="menu">
        <ul>
          <li><a href="inicio.html"><span className="icon">🏠</span>Inicio</a></li>
          <li>&nbsp;</li>
          <br />
          <li><a href="productos.html"><span className="icon">💻</span>Productos</a></li>
          <li>&nbsp;</li>
          <br />
          <li><a href="venta.html"><span className="icon">📊</span>Ventas</a></li>
          <li>&nbsp;</li>
          <br />
          <li><a href="clientes.html"><span className="icon">👥</span>Clientes</a></li>
          <li>&nbsp;</li>
          <br />
          <li><a href="inventario.html"><span className="icon">📦</span>Inventario</a></li>
          <br />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

// Componente Topbar
const Topbar = () => {
  return (
    <div id="topbar">
      <input type="text" placeholder="Buscar..." />
      <div class="icon-container">
        <div class="icon" id="settings-icon">
          ⚙️
        </div>
        <div class="icon" id="notifications-icon">
          🔔
        </div>
      </div>
    </div>
  );
};

// Componente Content
const Content = () => {
  return (
    <div id="content">
     <div class="marquee-container">
        <div class="marquee-content">
            <h1 >Bienvenido a Componentes Tecnológicos</h1>
        </div>
    </div>  

      <h2>Estadísticas de Ventas</h2>
      <div class="chart-container">
        <div class="chart">
          <canvas id="myChart" width="400" height="200"></canvas>
        </div>
        <div class="chart">
          <canvas id="myPieChart" width="400" height="200"></canvas>
        </div>
      </div>
      <br />
      <br />
      <div class="card-container">
        <div class="card">
          <div class="card-content">
            <div class="card-image">
              <img
                src="../img/60201871-clientes-icono-de-la-muestra-grupo-de-personas-de-símbolo-elemento-de-diseño-gráfico-símbolo-PhotoRoom.png-PhotoRoom.png"
                alt="Imagen redonda"
              />
            </div>
            <div class="card-text">
              <h2>Clientes</h2>
              <p>150</p>
            </div>
          </div>
        </div>
        {/* ... Otras tarjetas ... */}
      </div>
      <br />
      <h2>TOP Productos más vendidos</h2>
      <div class="table-cont">
        <table class="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Producto A</td>
              <td>$99.99</td>
              <td>5</td>
            </tr>
            {/* ... Otras filas ... */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Componente principal Home
export function Home() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {/* Usar los componentes Sidebar, Topbar y Content */}
      <Sidebar />
      <Topbar />

      {/* Contenido específico de la página principal */}
      <div className="w-full max-w-xs m-auto text-black">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-xl mb-4">Bienvenido, {user.displayName || user.email}</p>
          <button
            className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      <Content />
    </div>
  );
}
