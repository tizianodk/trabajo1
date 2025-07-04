import React from 'react';
import Contacto from '../componentes/contacto';
import '../estilos/ubicacion.css';

function Ubicacion_Contacto() {
  return (
    <div id='contacto' className="ubicacion-contacto">
      <div className='franjaUbiContacto' data-aos='fade-down'>
          <h1 className='tituloUbiContacto'>Ubicación y Contacto</h1>
          <p className="subtituloUbiContacto">Nos encontramos en San Miguel de Tucumán. 
          Consultá hoy mismo sobre disponibilidad en nuestro hogar para adultos mayores.</p>
      </div>
      {/* Sección de Ubicación */}
      <div className="ubicacion" data-aos="fade-up" data-aos-delay="200">
        <h2 className="ubicacion-titulo"><strong>📍 ¿Dónde Estamos?</strong></h2>
        <div className="ubicacion-mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1750558583240!6m8!1m7!1sWoD4WV6CB2q7U6C9aYxI_Q!2m2!1d-26.80095958172303!2d-65.21232014315393!3f356.1002023253381!4f-14.66798088558491!5f0.7820865974627469"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Sección de Contacto */}
      <div className="contacto" data-aos="fade-up" data-aos-delay="300">
        <Contacto />
      </div>
    </div>
  );
}

export default Ubicacion_Contacto;