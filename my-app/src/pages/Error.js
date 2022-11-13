import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <section>
            <h1>404</h1>
            <p>This Page Cannot Be Found</p>
            <NavLink to="/">Back home</NavLink>
        </section>
    
    );
};
export default Error;