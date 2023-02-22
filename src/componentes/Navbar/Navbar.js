import "./Navbar.scss"
// import logo from "./logo.png"

import CartWidget from "../CartWidget/CartWidget"

export const Navbar = () =>{

    return(
       <header className = "header">
            <div className = "header_container">
                
                {/* <img src={logo} alt="logo" className = "header_logo_img"/> */}
                <h1 className = "header_logo">Perfumeria Beauty</h1>

                <nav className="navbar">
                    <a href="#" className="navbar_link">Perfumes</a>
                    <a href="#" className="navbar_link">Maquillajes</a>
                    <a href="#" className="navbar_link">Uñas</a>
                    <a> <CartWidget/> </a>
                    
                </nav>

                
                
                    
                
                
            </div>
        </header>
    )
}

 