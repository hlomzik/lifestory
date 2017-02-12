import ReactDOM from 'react-dom'
import React from 'react'

import Events from './Events'

const event = {
  type: 'single',
  date: '2017-02-09T23:00:00Z',
  title: 'Start the Story of My Life'
}

ReactDOM.render(
  <Events from="2017-02-01" to="2017-02-11" length={300} events={[ event ]} />,
  document.querySelector('.events')
)
