const React = require('react')
const { dom } = require('@fortawesome/fontawesome-svg-core')
const { JssProvider, SheetsRegistry } = require('react-jss')
const {
  createGenerateClassName,
  MuiThemeProvider,
} = require('@material-ui/core/es/styles')
const { muiTheme } = require('./src/utils/mui-theme')
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const sheetsRegistry = new SheetsRegistry()
const sheetsManager = new Map()

// eslint-disable-next-line react/prop-types,react/display-name
exports.wrapRootElement = ({ element }) => (
  <JssProvider
    registry={sheetsRegistry}
    generateClassName={createGenerateClassName(false, 'jss')}
  >
    <MuiThemeProvider theme={muiTheme} sheetsManager={sheetsManager}>
      {element}
    </MuiThemeProvider>
  </JssProvider>
)

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: sheetsRegistry.toString() }}
    />,
  ])

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-fa"
      key="server-side-fa"
      dangerouslySetInnerHTML={{ __html: dom.css() }}
    />,
  ])
}
