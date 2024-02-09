import "./style.scss"
import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Nav from "./Nav"
import { useState } from "react";
function Navigation() {
    const [burgerMenuOpened, setBurgerMenuOpened] = useState(false)
    return (
        <div id="navigation-wrapper">
            <div id="outlet">
                <Outlet />
            </div>
            <header>
                <div className={burgerMenuOpened ? "burger-menu-wrapper opened" : "burger-menu-wrapper"}>
                    <div className='top'></div>    
                    <div className='middle'></div>    
                    <div className='bottom'></div>    
                </div>
                <input  
                    id='burger-menu-toggler' 
                    type="checkbox" 
                    onClick={(e) => {setBurgerMenuOpened(e.target.checked)}}
                />
                {/* ...:checked + .nav-wrapper > .menu */}
                <Nav />
            </header>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Navigation;