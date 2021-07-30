import React, { Fragment } from 'react'

const Table = ({moneyLeft, eatenSushi}) => {

  const renderPlates = (array) => {
    return array.map((index) => {
      return (
      <div className="empty-plate" style={{ top: -7 * array.indexOf(index) }}/>)
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${moneyLeft} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table