import React from 'react'
import '../styles/CategoryCards.css';
import { Link } from "react-router-dom";


function CategoryCards({ text, image, to }) {
  return (
    <div className='categoryCard'>
      <div className='imageCC' style={{ backgroundImage: `url(${image})` }}>
        <div className='verticalAlign'>
          <Link to={to}>
            <button className='buttonCC'>
                {text}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryCards
