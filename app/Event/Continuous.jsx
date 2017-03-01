import React, { Component, PropTypes } from 'react'

export default class Continuous extends Component {
  render () {
    let { title, from, to, x, y, length } = this.props

    // @todo styled-components
    const styles = {
      position: 'absolute',
      top: x + 'px',
      height: length + 'px',
      paddingLeft: '15px',
      zIndex: 1
    }

    // full-height rounded narrow rect
    const marker = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '6px',
      height: '100%',
      border: '2px solid #333',
      borderRadius: '7px',
    }

    // @todo move to some common utils
    // @todo along with common styles/parameters
    // get short date string like '10 Feb'
    const date = new Date(from).toLocaleDateString(
      navigator.language,
      { day: 'numeric', month: 'short' }
    )

    return (<div className="continuous" style={styles}>
      <div className="marker" style={marker}></div>
      <div className="date">{date}</div>
      <div className="text">{title}</div>
    </div>)
  }
}

Continuous.propTypes = {
  from: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}
