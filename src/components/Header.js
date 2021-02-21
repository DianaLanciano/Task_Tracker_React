import React from 'react'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'blue' : 'steelBlue'} text={showAdd ? "close" : "Add"} 
            onClick={onAdd}/>
           
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;
