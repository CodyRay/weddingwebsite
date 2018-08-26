import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import '../global.scss'
import { colors } from '../utils/mui-theme'

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
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: withPrefix('/favicon-32x32.png'),
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: withPrefix('/favicon-16x16.png'),
            },
            {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: withPrefix('/apple-touch-icon.png'),
            },
            { rel: 'manifest', href: withPrefix('/site.webmanifest') },
            {
              rel: 'mask-icon',
              href: withPrefix('/safari-pinned-tab.svg'),
              color: colors.blue,
            },
          ]}
          meta={[
            { name: 'description', content: description },
            { name: 'msapplication-TileColor', content: colors.blue },
            { name: 'theme-color', content: colors.silver },
          ]}
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
