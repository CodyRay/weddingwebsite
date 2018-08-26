import React from 'react'
import './info.module.scss'

import { Layout } from '../components/layout'

const Info = () => (
  <Layout>
    <div>
      <p>
        The wedding ceremony will start at 2:00 PM on November 17th. After the
        ceremony, the reception will be held in the adjacent room. We arn‘t
        planning on holding a sitdown dinner, but there should be enough food
        that nobody should be hungry afterwards (don‘t forget to save room for
        cake too). Throughout the reception we plan to have some music, dancing,
        and socializing. We can use the venue all afternoon, but we expect
        things will wrap up around 6:00 PM at the latest.
      </p>
      {/* TODO: Picture of Civic Auditorium */}
      <p>
        We will be holding our wedding at The Dalles Civic Auditorium. We looked
        for venues in the Columbia River Gorge because it‘s a half-way point
        between Salem and Hermiston so that our guests wouldn‘t have a long
        drive to the wedding. We settled on the Civic Auditorium because it was
        indoors, fit well with the cozy ceremony we had in mind, and had
        separate but adjacent spaces for the reception and ceremony. The Civic
        Auditorium is near downtown and only has street side parking, so be
        mindful that it may be a short walk from your car to the auditorium.
      </p>
      <div styleName="location">
        <p styleName="address" className="header-font">
          Civic Auditorium <br />
          323 E 4th St <br />
          The Dalles, OR 97058
        </p>
        <div styleName="map">
          <div styleName="responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.544752133604!2d-121.18440104893926!3d45.59969573231066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54961e743d774bf7%3A0x5f7dacab56e29581!2sCivic+Auditorium!5e0!3m2!1sen!2sus!4v1535236555815"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullscreen
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Info
