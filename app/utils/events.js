/**
 * @typedef {Object} DatesEvent
 * @property {?string} from
 * @property {string} title
 * @property {?string} to
 * @property {string} type - single|continuous
 **/

/**
 * @typedef {Object} PresentationalEvent
 * @property {boolean} single
 * @property {number} x
 * @property {number} y
 * @property {number} length
 * @property {string} title
 **/

/**
 * @callback DateScale - convert date to coords according to canvas
 * @param {string} date
 * @return {number}
 **/

export const SINGLE = 'single'
export const CONTINUOUS = 'continuous'

/**
 * Convert different `single` and `continuous` events to uniform
 * data with both dates (`from`, `to`) and coords (`x`, `height`)
 * @param {DatesEvent[]} events
 * @param {DateScale} scale function date => coord based on canvas
 * @return {PresentationalEvent}
 */
export function uniform (events, scale) {
  return events.map(({ type, from, to, title }) => {
    const single = type === SINGLE
    const x = scale(from)
    const length = single ? 0 : scale(to) - x

    return { title, single, from, to, x, length, y: 0 }
  })
}
