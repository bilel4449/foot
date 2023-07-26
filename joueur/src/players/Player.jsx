import PlayerList from '../playerList/PlayerList'
import React from 'react'
const Player = (props) => {
  
  return (
    <div>
    {
      props.items.map((el,i)=><PlayerList key={i} element={el} alertFunction={props.hadleFunctionAlert} />)
      
    }
    </div>
  )
}

export default Player