import React from 'react';
import './header.css'
const Header = ({changeUi, view}) => {
    return(
        <header>
        <h1>React User</h1>
        <a href='!#' onClick={changeUi} className="btn-flat disabled"> <i className="medium material-icons">{view? "grid_on" : "format_list_bulleted"}</i></a>
        </header>
    )
};

export default Header;