import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../global.scss'

export const Root = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description },
      },
    }) => (
      <>
        <Helmet
          title={title}
          meta={[{ name: 'description', content: description }]}
        />
        {children}
      </>
    )}
  />
)

Root.propTypes = {
  data: PropTypes.object,
  children: PropTypes.node.isRequired,
}
