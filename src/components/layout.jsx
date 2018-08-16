import React from 'react'
import PropTypes from 'prop-types'
import './layout.module.scss'
import { Root } from './root'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faInfo,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons'
import { StaticQuery, graphql, Link } from 'gatsby'
import stamp from '../img/stamp_optimized.svg'

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        portrait: file(relativePath: { eq: "portrait.jpg" }) {
          childImageSharp {
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
        <header styleName="header">
          <div styleName="stamp">
            <img src={stamp} alt="Cody Ray and John, Nov 17, 2018" />
          </div>
          <div styleName="portrait">
            <img
              src={portrait.src}
              srcSet={portrait.srcSet}
              alt="Cody Ray and John"
            />
          </div>
        </header>
        <nav styleName="navigation" className="header-font">
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
          <Link to="/contact">
            <FontAwesomeIcon styleName="icon" icon={faAddressBook} />
            <span styleName="text">Contact</span>
          </Link>
        </nav>
        <div styleName="container">{children}</div>
      </Root>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
