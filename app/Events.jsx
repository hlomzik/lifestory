import React, { Component, PropTypes } from 'react'
import Single from './Event/Single'
import { scaleTime } from 'd3-scale'

export default class Events extends Component {
  render () {
    const { events, from, to, length } = this.props

    const scale = scaleTime()
      .domain([ new Date(from), new Date(to) ])
      .range([ 0, length ])

    const x = date => scale(new Date(date))

    return (<div>{events.map(event => event.type === 'single'
      ? <Single {...event} x={x(event.date)} />
      : <div></div>
    )}</div>)
  }
}

Events.PropTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  events: PropTypes.array.isRequired
}
