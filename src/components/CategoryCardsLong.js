import React from 'react'
import '../styles/CategoryCardsLong.css';

function CategoryCardsLong({ text, image}) {
  return (
    <div className='categoryCardLong'>
      <div className='imageCCL' style={{ backgroundImage: `url(${image})` }}>
        <div className='verticalAlignCCL'>
            <button className='buttonCCL'>
                {text}
            </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCardsLong
