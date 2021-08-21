import React from 'react';

const SearchBar = (props) => {
console.log(props, 'value')
    return(
        <input type="search" placeholder="Search" value={props.val} onChange={props.search}/>
    )
}

export default SearchBar