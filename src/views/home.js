/** @format */

import { replaceHTML } from '../utils/utils.js';
// eslint-disable-next-line import/no-cycle
import addEvents from '../events/homeEvents.js';

const getHTMLTemplate = () => {
  const template = `<img id='logo' src='imagenes/logo.png'> </img>
  <h1>Conecta con PetsLifes</h1>
  <button id="signIn">Iniciar sesión</button>
  <h2>¿No tienes cuenta?</h2>
  <button id="googleButton">Registrate con Google</button>
  <button id="mailButton">Registrate con tu mail</button>`;
  return template;
};

const Home = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};

export default Home;
