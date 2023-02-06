import React from 'react'

export default function Navbar(props){
    return(
        <div className="hero" id="first" style={props.mode}>
        <img src="Web logo.png" alt="Image Here" className="logo"/>
        <nav>
        <ul>
            <li><a href="">{props.tittle}</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">PORTFOLIO</a></li>
            <li><a href="">SERVICES</a></li>
            <li><a href="">{props.about}</a></li>
        </ul>
        </nav>       
        </div>
    )
}
//Learning About PropTypes//

/* Navbar.propTypes = {
    tittle: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}; */

Navbar.defaultProps= {
    tittle: 'set Tittle here',
    about: 'About text here'
};