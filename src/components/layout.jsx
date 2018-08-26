import React from 'react'
import PropTypes from 'prop-types'
import './layout.module.scss'
import { Root } from './root'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfo, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { StaticQuery, graphql, Link } from 'gatsby'
import stamp from '../img/stamp_optimized.svg'

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        portrait: file(relativePath: { eq: "portrait.jpg" }) {
          childImageSharp {
            # Note: there are css components based on the width as well
            fixed(width: 300, quality: 85) {
              src
              srcSet
            }
          }
        }
      }
    `}
    render={({
      portrait: {
        childImageSharp: { fixed: portrait },
      },
    }) => (
      <Root>
        <header styleName="container header padded">
          <div styleName="stamp">
            <div styleName="responsive">
              <img src={stamp} alt="Cody Ray and John, Nov 17, 2018" />
            </div>
          </div>
          <div styleName="portrait">
            <div styleName="responsive">
              <img
                src={portrait.src}
                srcSet={portrait.srcSet}
                alt="Cody Ray and John"
              />
            </div>
          </div>
        </header>
        <nav styleName="container navigation padded" className="header-font">
          <Link to="/">
            <FontAwesomeIcon styleName="icon" icon={faHome} />
            <span styleName="text">Welcome</span>
          </Link>
          <Link to="/info">
            <FontAwesomeIcon styleName="icon" icon={faInfo} />
            <span styleName="text">Info</span>
          </Link>
          <Link to="/rsvp">RSVP</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/story">
            <FontAwesomeIcon styleName="icon" icon={faBookOpen} />
            <span styleName="text">Story</span>
          </Link>
        </nav>
        <div styleName="container content padded">{children}</div>
        <div styleName="container contact padded">
          <p styleName="contact-header" className="header-font">
            Contact Us
          </p>
          <div styleName="info">
            <p>
              Cody Ray Hoeft
              <br />
              <a href="tel:1-541-720-4317">(541) 720-4317</a> or{' '}
              <a
                no-style="true"
                href="https://m.me/codyray.hoeft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  style={{ color: '#0084ff' }}
                  size="lg"
                  icon={faFacebookMessenger}
                />
              </a>
            </p>

            <p>
              John West
              <br />
              <a href="tel:1-541-250-1748">(541) 250-1748</a>
            </p>
          </div>
        </div>
      </Root>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
