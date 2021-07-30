import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushi, moreSushi, firstSushi, lastSushi, eatSushi, isEaten, handleEmptyPlate}) => {

  const handleMoreSushi=()=>{
    return moreSushi('next')
  }
  return (
    <Fragment>
      <div className="belt">
        {sushi.slice(firstSushi, lastSushi).map(eachSushi=>{return < Sushi key={eachSushi.id} sushi={eachSushi} eatSushi={eatSushi} isEaten={isEaten} handleEmptyPlate={handleEmptyPlate}/>})
        }
        <MoreButton onClick={handleMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer