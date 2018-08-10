import React from 'react'
import PropTypes from 'prop-types'

import './index.module.scss'
import { Layout } from '../components/layout'
import { Construction } from '../components/construction'
import { Countdown } from '../components/countdown'
import { format } from 'date-fns'

class CountdownFromNow extends React.Component {
  state = { currentDate: new Date() }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ currentDate: new Date() }),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <Countdown fromDate={this.state.currentDate} toDate={this.props.date} />
    )
  }

  static propTypes = {
    date: PropTypes.instanceOf(Date),
  }
}

const weddingDate = new Date('Sat, 17 Nov 2018 14:00:00 PST')

const IndexPage = () => (
  <Layout>
    <div styleName="construction-wrapper">
      <Construction />
    </div>
    <div styleName="content-wrapper">
      <h1>Website Under Construction!</h1>
      <div styleName="countdown-wrapper">
        <CountdownFromNow date={weddingDate} />
      </div>
      <span>{format(weddingDate, 'MMMM Do, YYYY h:mm a')}</span>
    </div>
  </Layout>
)

export default IndexPage
