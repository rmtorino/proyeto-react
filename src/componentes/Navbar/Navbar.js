import "./Navbar.scss"
import logo from "../CartWidget/shopping-cart.svg"

import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

export const Navbar = () =>{

    return(
       <header className = "header">
            <div className = "header_container">
                
                {/* <img src={logo} alt="logo" className = "header_logo_img"/> */}
                <Link to="/" className = "header_logo">
                    <h1 className = "header_logo">Perfumeria Beauty</h1>
                </Link>

                <nav className="navbar">
                    <Link to="/perfumes" className="navbar_link">Perfumes</Link>
                    <Link to="/maquillajes" className="navbar_link">Maquillajes</Link>
                    <Link to="/unias" className="navbar_link">Uñas</Link>
                    <Link to="/contacto" className="navbar_link">Contacto</Link>
                    <Link to="/carWidget"> <img src={logo}/> </Link>
                    
                </nav>

                
                
                     
                
                
            </div>
        </header>
    )
}

 