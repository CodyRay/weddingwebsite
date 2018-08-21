import React from 'react'
import { Layout } from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <p>You just hit a route that doesn‘t exist... the sadness.</p>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default NotFoundPage
