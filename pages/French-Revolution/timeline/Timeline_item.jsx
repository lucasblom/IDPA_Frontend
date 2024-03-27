import React from 'react'

const Timeline_item = () => {
  return (
    <div id='timeline-item'>
      <div className='timeline-item-content'>
        <h2>1789</h2>
      </div>
      <div id='timeline-grafic'className='timeline-item-content'>
        <img src='../timeline_piece.svg' alt='timeline'></img>
      </div>
      <div className='timeline-item-content'>
        <p>Start of the French Revolution</p>
      </div>
    </div>
  )
}

export default Timeline_item
