import React from 'react'
import './card.styles.css';

export const Card = ({name, id, email}) => {
  return (
    <div className="card-container">
          <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
          <h2>{name}</h2>
          <p>{email}</p>
    </div>
  )
}
