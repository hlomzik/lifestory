import ReactDOM from 'react-dom'
import React from 'react'

import Events from './Events'

const events = [
  {
    type: 'single',
    date: '2017-02-09T23:00:00Z',
    title: 'Start the Story of My Life'
  },
  {
    type: 'continuous',
    from: '2017-02-06T00:00:00Z',
    to: '2017-02-11T00:00:00Z',
    title: 'Just a work week in February'
  }
]

ReactDOM.render(
  <Events from="2017-02-01" to="2017-02-11" length={300} events={events} />,
  document.querySelector('.events')
)
