import React, { Component, PropTypes } from 'react'
import Single from './Event/Single'
import Continuous from './Event/Continuous'
import { scaleTime } from 'd3-scale'

import { uniform, layers } from './utils/events'

export default class Events extends Component {
  render () {
    const { events, from, to, length } = this.props

    const scale = scaleTime()
      .domain([ new Date(from), new Date(to) ])
      .range([ 0, length ])

    const x = date => scale(new Date(date))

    return (<div>{uniform(events, x).map(event => event.single
      ? <Single {...event} />
      : <Continuous {...event} />
    )}</div>)
  }
}

Events.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  events: PropTypes.array.isRequired
}
