import React from 'react'
import '../styles/CategoryCards.css';

function CategoryCards({ text, image }) {
  return (
    <div className='categoryCard'>
      <div className='imageCC' style={{ backgroundImage: `url(${image})` }}>
        <div className='verticalAlign'>
            <button className='buttonCC'>
                {text}
            </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCards
