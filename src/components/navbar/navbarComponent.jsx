import React from "react";
import logo from '../../logo1.png'
import './navbarStyles.css'

const NavbarComponent = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'dodgerblue'}}>
            <img src={logo} alt="" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
                <div class="navbar-nav" style={{ width: '100%', display: 'flex', justifyContent: 'space-around'}}>
                    <a class="nav-item nav-link navbar" href="#" style={{fontSize: '30px',}}>INICIO</a>
                    <a class="nav-item nav-link navbar" href="#" style={{fontSize: '30px',}}>NOSOTROS</a>
                    <a class="nav-item nav-link navbar" href="#" style={{fontSize: '30px',}}>CONTACTO</a>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent