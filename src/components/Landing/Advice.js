import React from 'react'

export default function Advice() {
  return (
    <div className="advice" id="section-asesoramiento">
      <div className="advice__wrapper">
        <h4 className="advice__title">Servicios</h4>
        <div className="advice__content">
          <div className="advice__description">
            <h5 className="advice__item">Atención Psicológica</h5>
            <p className="advice__item-description">
              Modalidad presencial o virtual
              Brindo tratamiento psicológico con orientación psicoanalítica a adolescentes y adultos.
            </p>
          </div>
          <div className="advice__description">
            <h5 className="advice__item">Selección y Reclutamiento</h5>
            <p className="advice__item-description">
              Realizo búsquedas de perfiles IT y generalistas para empresas y consultoras. Headhunting y selección de candidatos. Redacción de informes.
            </p>
          </div>
          <div className="advice__description">
            <h5 className="advice__item">Asesoría Laboral</h5>
            <p className="advice__item-description">
              Armados de CV (desde cero). Consejos y asesoramiento para búsquedas y entrevistas laborales. Simulación de entrevistas para fortalecer la confianza y seguridad.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
