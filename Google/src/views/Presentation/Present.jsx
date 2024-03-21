import React from 'react';
import './Present.css';
import perfil from './img/foto.cv.jpg';
import githubLogo from './img/logo_github.png'; // Cambiar el nombre de la variable
import linkendinLogo from './img/logo_linkendin.jpg'; // Cambiar el nombre de la variable


const Present = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={perfil} alt="foto de perfil" />
      </div>
      <div className="profile-info">
        <h1>Hola! Soy Joaquin</h1>
        <p>
          Esto es una pagina con el fin de mostrat una fomar de que podes utilizar para usar auth de terceros con google y muchos mas
        </p>
        <div className="social-links">
          <a href="https://github.com/joaco1111" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" /> {/* Usar la variable correcta */}
          </a>
          <a href="https://linkedin.com/in/joaquín-ortega-23a426264" target="_blank" rel="noopener noreferrer">
            <img src={linkendinLogo} alt="LinkedIn" /> {/* Usar la variable correcta */}
          </a>
        </div>
        <a href='/log' className="btn">Log</a>
      </div>
    </div>
  );
}

export default Present;
