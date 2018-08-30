import React from 'react'
import { Link } from 'gatsby'

import './index.module.scss'
import { Layout } from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <p>
        We are excited to share our special day with you! We hope that this
        website provides you with all the{' '}
        <Link to="/info">important details</Link> you need to attend our
        wedding. Please don‘t hesitate to contact us if you have any remaining
        questions.
      </p>

      <p>
        If you haven‘t already, please <Link to="/rsvp">RSVP</Link> to let us
        know that you are coming and checkout the{' '}
        <Link to="/info">ceremony and reception details</Link>. Check back
        occasionally for updates throughout the fall.
      </p>

      <p>
        Thanks again to all of our family and friends for their love and support
        - we will see you in November!
      </p>
    </div>
  </Layout>
)

export default IndexPage
