import React from 'react'

/* ############################ */
/* ##### Single name ##### */
/* ############################ */

export default ({ 
  id, 
  info, 
  handleFavourite 
}) => (
  <li
    className={info.sex}
    onClick={() => handleFavourite(id)}>
    <div className="displaypic"></div>
    {info.name}
  </li>
)