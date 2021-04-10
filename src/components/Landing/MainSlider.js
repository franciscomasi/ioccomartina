import React from 'react'

import MainSlide from 'assets/images/main-banner2.jpg'

export default function MainSlider() {
  return (
    <div className="main-slider">
      <div
        className="main-slider__cover"
        style={{ backgroundImage: `url(${MainSlide})` }}
      >
        <div className="main-slider__mask">
          <div className="main-slider__text-container">
            <div className="main-slider__title">
              <span className="main-slider__text main-slider__text--center">Iocco Martina</span>
            </div>
            <div className="main-slider__subtitle">
              <span className="main-slider__text">Licenciada en Psicología</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
