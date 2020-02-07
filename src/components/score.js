import React from 'react';
import Display from './display'

const Score = ({ engine_speed, distance}) => {
  return(
    <div class="row">
        <div class="col">
          <Display text="Engine" value={engine_speed}></Display>
          </div>
          <div class="col"> 
          <Display text="Distance" value={distance}></Display>
          </div>
          </div>
  )
}

export default Score;


