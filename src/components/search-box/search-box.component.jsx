import React from 'react'
import './search-box.styles.css';

export const SearchBox = ({className, placeholder, onSearch}) => {
    return (
      <input 
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onSearch}
      />
    )
}
