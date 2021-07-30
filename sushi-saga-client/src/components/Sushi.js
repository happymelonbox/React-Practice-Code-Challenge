import React, { Fragment } from 'react'

const Sushi = ({sushi, eatSushi}) => {

  const handleEatSushi = (event)=>{
    eatSushi(event,sushi.price)
  }
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleEatSushi}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi