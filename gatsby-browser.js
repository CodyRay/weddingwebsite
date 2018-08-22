/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { config } from '@fortawesome/fontawesome-svg-core'
import {
  createGenerateClassName,
  MuiThemeProvider,
} from '@material-ui/core/es/styles'
import { muiTheme } from './src/utils/mui-theme'

config.autoAddCss = false

// remove the JSS style tag generated on the server to avoid conflicts with the one added on the client
export const onInitialClientRender = () => {
  const ssStyles = window.document.getElementById(`server-side-jss`)
  ssStyles && ssStyles.parentNode.removeChild(ssStyles)
}

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <JssProvider generateClassName={createGenerateClassName(false, 'jss')}>
      <MuiThemeProvider theme={muiTheme}>{element}</MuiThemeProvider>
    </JssProvider>
  )
}
