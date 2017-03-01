import React, { Component, PropTypes } from 'react'

export default class Single extends Component {
  render () {
    let { title, from, x, y } = this.props

    // @todo styled-components
    const styles = {
      position: 'absolute',
      top: x + 'px',
      paddingLeft: '15px',
      zIndex: 2
    }

    // small circle on the middle-line
    const marker = {
      position: 'absolute',
      top: '7px',
      left: '3px',
      width: '4px',
      height: '4px',
      background: '#333',
      borderRadius: '2px'
    }

    // get short date string like '10 Feb'
    from = new Date(from).toLocaleDateString(
      navigator.language,
      { day: 'numeric', month: 'short' }
    )

    return (<div className="single" style={styles}>
      <div className="marker" style={marker}></div>
      <div className="date">{from}</div>
      <div className="text">{title}</div>
    </div>)
  }
}

Single.propTypes = {
  from: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}
