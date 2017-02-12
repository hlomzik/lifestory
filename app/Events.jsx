import React, { Component, PropTypes } from 'react'
import Single from './Event/Single'

export default class Events extends Component {
  render () {
    // scaling function (date range) -> (length)
    // @todo use d3.scale
    const x = (props => {
      const { from, to, length } = props
      const start = +new Date(from)
      const end = +new Date(to)
      const k = length / (end - start)
      
      return date => (+new Date(date) - start) * k
    })(this.props)

    const { events } = this.props

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
