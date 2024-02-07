import "./style.scss"
import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Nav from "./Nav"
function Navigation() {
    return (
        <div id="navigation-wrapper">
            <div id="outlet">
                <Outlet />
            </div>
            <Nav/>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Navigation;