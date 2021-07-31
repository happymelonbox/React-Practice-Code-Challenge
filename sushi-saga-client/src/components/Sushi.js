import React, { Fragment } from 'react'

const Sushi = ({sushi, eatSushi, handleEmptyPlate}) => {

  const handleEatSushi = (event)=>{
    eatSushi(event,sushi.price)
  }
  return (
    <div className="sushi" >
      <div className="plate"
           >
        {
          handleEmptyPlate ===
          !false ?
            null
          :
            <img src={sushi.img_url} width="100%" onClick={handleEatSushi} />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi