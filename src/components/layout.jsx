import React from 'react'
import PropTypes from 'prop-types'
import './layout.module.scss'
import { Root } from './root'
import stamp from './stamp_optimized.svg'
import portrait from './portrait.jpg'

export const Layout = ({ children }) => (
  <Root>
    <header styleName="header">
      <div styleName="stamp">
        <img src={stamp} alt="Cody Ray and John, Nov 17, 2018" />
      </div>
      <div styleName="portrait">
        <img src={portrait} alt="Cody Ray and John" />
      </div>
    </header>
    <div styleName="container">{children}</div>
  </Root>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
