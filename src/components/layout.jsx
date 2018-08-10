import React from 'react'
import PropTypes from 'prop-types'
import './layout.module.scss'
import { Root } from './root'

export const Layout = ({ children }) => (
  <Root>
    <div styleName="container">{children}</div>
  </Root>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
