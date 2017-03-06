import ReactDOM from 'react-dom'
import React from 'react'

import { AppContainer } from 'react-hot-loader'

import Events from './Events'

const events = [
  {
    type: 'single',
    from: '2017-02-09T23:00:00Z',
    title: 'Start the Story of My Life'
  },
  {
    type: 'continuous',
    from: '2017-02-06T00:00:00Z',
    to: '2017-02-11T00:00:00Z',
    title: 'Just a work week in February'
  }
]

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Events from="2017-02-01" to="2017-02-11" length={300} events={events} />
    </AppContainer>,
    document.querySelector('.events')
  )
}

render()

if (module.hot) {
  module.hot.accept('./Events', () => {
    render()
  })
}
