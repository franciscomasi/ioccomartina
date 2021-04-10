import React from 'react'

export default function AboutMe() {
  return (
    <div className="about-me" id="section-sobre-mi">
      <div className="about-me__wrapper">
        <h4 className="about-me__title">Sobre mi</h4>
        <div className="about-me__content">
          <div className="about-me__description about-me__description--long">
            <h5 className="about-me__item">Resumen</h5>
            <div className="about-me__list">
              Psicóloga y Selectora de Personal. Hago de mi profesión mi pasión.
              Me gusta dar lo mejor de mi y brindar todo mi potencial en cada tarea.
              Optimista, comprometida y dedicada.
            </div>
          </div>
          <div className="about-me__description">
            <h5 className="about-me__item">Habilidades</h5>
            <ul className="about-me__list">
              Buen manejo de relaciones interpersonales |
              Escucha activa |
              Compromiso |
              Responsabilidad |
              Trabajo en equipo
            </ul>
          </div>
          <div className="about-me__description">
            <h5 className="about-me__item">Hobbies</h5>
            <ul className="about-me__list">
              Actividad física |
              Fitness life |
              Películas |
              Videojuegos
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
