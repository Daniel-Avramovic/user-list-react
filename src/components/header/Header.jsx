import React from 'react';
import './header.css'
const Header = ({changeUi, view}) => {
    return(
        <header>
        <h1>React User</h1>
        <button onClick={changeUi} type="button" className="btn btn-primary btn-sm"> <i className="medium material-icons">{view? "grid_on" : "format_list_bulleted"}</i></button>
        </header>
    )
};

export default Header;