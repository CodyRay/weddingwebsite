import React from 'react'
import PropTypes from 'prop-types'
import './layout.module.scss'
import { Root } from './root'
import { StaticQuery, graphql } from 'gatsby'
import stamp from '../img/stamp_optimized.svg'

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        portrait: file(relativePath: { eq: "portrait.jpg" }) {
          childImageSharp {
            fixed(width: 300, quality: 95) {
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
        <div styleName="container">{children}</div>
      </Root>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
