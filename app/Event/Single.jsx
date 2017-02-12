import React, { Component, PropTypes } from 'react'

export default class Single extends Component {
  render () {
    let { title, date, x } = this.props

    // @todo styled-components
    const styles = {
      position: 'absolute',
      top: x + 'px'
    }

    // get short date string like '10 Feb'
    date = new Date(date).toLocaleDateString(
      navigator.language,
      { day: 'numeric', month: 'short' }
    )

    return (<div style={styles}>
      <div className="date">{date}</div>
      <div className="text">{title}</div>
    </div>)
  }
}

Single.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired
}
