import React from 'react';

const SearchBar = (props) => {
console.log(props, 'value')
    return(
        <div className="container">
        <i class="material-icons prefix">search</i>
        <input type="search" placeholder="Search" value={props.val} onChange={props.search}/>
        </div>
    )
}

export default SearchBar