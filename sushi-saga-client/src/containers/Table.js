import React, { Fragment } from 'react'

const Table = ({moneyLeft, eatenSushi, addToWallet}) => {

  const renderPlates = (array) => {
    return array.map((index) => {
      return (
      <div className="empty-plate" key={array.indexOf(index)}style={{ top: -7 * array.indexOf(index) }}/>)
    })
  }

  const handleWallet = (event) => {
    event.preventDefault()
    console.log(event.target.money.value)
    addToWallet(Number(event.target.money.value))
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${moneyLeft} remaining!
      </h1>
      <form className="wallet" onSubmit={handleWallet}>
        <h2>Need more cash?</h2>
        <input type='text' placeholder="How much?" name='money'></input>
        <input type='submit' placeholder="Add to wallet"></input>
      </form>
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