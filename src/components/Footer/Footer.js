import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import * as CONTACT from 'constants/Contact'
import * as SOCIAL from 'constants/SocialNetwork'
import { list as CATEGORIES } from 'constants/CategoriesList'
import { APP_URL_JOBS, APP_URL_HOME } from 'constants/Url'
import Logo from 'components/Logo'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__resume">
          <div className="footer__resume-contact">
            <Link
              to={APP_URL_HOME}
              className="footer__logo"
            >
              <Logo />
            </Link>
          </div>
          <div className="footer__resume-jobs">
            <span className="footer__resume-title">Contacto</span>
            <div className="footer__email-link">
              <b>Enviá tu CV:</b>
              <a
                href={`mailto:${CONTACT.RECRUITER_EMAIL}`}
                className="footer__resume-link footer__info"
              >
                &nbsp;
                {CONTACT.RECRUITER_EMAIL}
              </a>
            </div>
            <div className="footer__email-link">
              <b>Consultas:</b>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="footer__resume-link footer__info"
              >
                &nbsp;
                {CONTACT.EMAIL}
              </a>
            </div>
          </div>
          <div className="footer__resume-jobs">
            <span className="footer__resume-title">Búsquedas IT</span>
            {CATEGORIES.map((category) => (
              <Link
                key={`footer-search-job-${category.name}`}
                to={`${APP_URL_JOBS}?categoria=${category.name}`}
                className="footer__resume-link"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="footer__resume-jobs">
            <span className="footer__resume-title">Proyecto personal</span>
            <a
              className="footer__resume-link"
              href={SOCIAL.ETT}
              target="_blank"
              rel="noopener noreferrer"
            >
              Expone Tu Talento
            </a>
          </div>
        </div>
        <a
          className="footer__social-link"
          href={SOCIAL.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </a>
      </div>
    </div>
  )
}
