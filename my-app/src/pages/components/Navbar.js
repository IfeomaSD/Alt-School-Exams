import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
        <NavLink to = "/" style={({isActive}) =>{return {color:isActive? "blue":"grey"}; }}>Home</NavLink>
        <NavLink to = "/login" style={({isActive}) =>{return {color:isActive? "blue":"grey"}; }}>Login</NavLink>
        <NavLink to = "/contact" style={({isActive}) =>{return {color:isActive? "blue":"grey"}; }}>Contact</NavLink>
        </nav>
        );
};
export default Navbar;