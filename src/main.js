import "./css/index.css";
import "./css/nav.css";
import logo from "/logo.png";
import logo2 from "/logo2.png";
import { initializeTippy } from "./js/clippy"; // Importa la función desde clippy.js
import { requests } from "./js/requests.js";

document.querySelector("#app").innerHTML = `
<header>
    <div class="overlay"></div>
    <main>
      <nav>
        <div class='nav-container'>
          <a class='nav-logo'>
            <img alt='Logo' src=${logo} />
          </a>
          <ul>
            <li>
              <a href='#'>Inicio</a>
            </li>
            <li>
              <a href="#openModal">Login</a>
            </li>
            <li>
              <a href="#openRegisterModal">Registrar</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1 id="welcomeHeader">¡Bienvenido!</h1>
      <div class="server-address-clipboard-icon">
        <button class="boton crear-instancia" id="crear-instancia">Crear Instancia</button>
        <button class="boton iniciar-instancia" id="iniciar-instancia">Iniciar Instancia</button>
        <button class="boton detener-instancia" id="detener-instancia">Detener Instancia</button>
        <button class="boton borrar-instancia" id="borrar-instancia">Borrar Instancia</button>
      </div>
      <div class="server-info">
        <p style="margin: 0px;"></p>
        <div class="server-address-clipboard">
          <div class="server-address-dropdown">
            <select id="version-dropdown">
              <option value="1.21">1.21</option>
              <option value="1.20.6">1.20.6</option>
              <option value="1.20.5">1.20.5</option>
              <option value="1.20.4">1.20.4</option>
              <option value="1.20.3">1.20.3</option>
              <option value="1.20.2">1.20.2</option>
              <option value="1.19.4">1.19.4</option>
              <option value="1.19.3">1.19.3</option>
              <option value="1.19.2">1.19.2</option>
              <option value="1.19.1">1.19.1</option>
              <option value="1.18.2">1.18.2</option>
              <option value="1.18.1">1.18.1</option>
              <option value="1.17.1">1.17.1</option>
            </select>
          </div>
          <div class="server-address" id="dns">Aqui va el dns</div>
          <button id="button" class="server-address-clipboard-button">copiar</button>
        </div>
      </div>
    </main>
  </header>

  <div id="openModal" class="modalDialog">
    <div>
      <h2>Login</h2>
      <form class="login-form" id="loginForm">
        <div class="input-container">
          <label for="username">Nombre de Usuario</label>
          <input type="text" id="login-user_id" name="username" placeholder="Ingresa tu nombre de usuario" required>
        </div>
        <div class="input-container">
          <label for="password">Contraseña</label>
          <input type="password" id="login-password" name="password" placeholder="Ingresa tu contraseña" required>
        </div>
        <div class="button-container">
          <button type="submit" class="login-button" id="login">Login</button>
          <a href="#close" title="Cerrar" class="close">Cerrar</a>
        </div>
      </form>
    </div>
  </div>

  <div id="openRegisterModal" class="modalDialog">
    <div>
      <h2>Registrar</h2>
      <form class="register-form" id="registerForm">
        <div class="input-container">
          <label for="register-username">Nombre de Usuario</label>
          <input type="text" id="register-user_id" name="register-username" placeholder="Ingresa tu nombre de usuario" required>
        </div>
        <div class="input-container">
          <label for="register-password">Contraseña</label>
          <input type="password" id="register-password" name="register-password" placeholder="Ingresa tu contraseña" required>
        </div>
        <div class="button-container">
          <button type="submit" class="register-button" id="register">Registrar</button>
          <a href="#close" title="Cerrar" class="close">Cerrar</a>
        </div>
      </form>
    </div>
  </div>

  <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
  <script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>
`;

initializeTippy();
document.addEventListener("DOMContentLoaded", requests);
